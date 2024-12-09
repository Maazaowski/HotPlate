import { FirebaseError } from 'firebase/app';

export const RETRY_DELAY = 1000;
export const MAX_RETRIES = 3;

export type RetryableOperation<T> = () => Promise<T>;

export class NetworkError extends Error {
  constructor(message: string, public originalError?: Error) {
    super(message);
    this.name = 'NetworkError';
  }
}

export async function retryOperation<T>(
  operation: RetryableOperation<T>,
  retries = MAX_RETRIES,
  delay = RETRY_DELAY
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    if (!(error instanceof FirebaseError)) {
      throw error;
    }

    const isRetryableError = [
      'unavailable',
      'network-request-failed',
      'resource-exhausted',
      'deadline-exceeded'
    ].includes(error.code);

    if (retries > 0 && isRetryableError) {
      await new Promise(resolve => setTimeout(resolve, delay));
      return retryOperation(operation, retries - 1, delay * 1.5);
    }

    throw new NetworkError(
      'Operation failed after multiple retries',
      error as Error
    );
  }
}

export function isOfflineError(error: unknown): boolean {
  if (error instanceof FirebaseError) {
    return [
      'unavailable',
      'network-request-failed',
      'deadline-exceeded'
    ].includes(error.code);
  }
  return false;
}