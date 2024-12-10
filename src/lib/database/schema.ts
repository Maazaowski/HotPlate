export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  image: string;
  tags: string[];
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  image?: string;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'staff';
  firstName?: string;
  lastName?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  customerId: string;
  items: OrderItem[];
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  totalAmount: number;
  paymentStatus: 'pending' | 'paid' | 'failed';
  paymentMethod?: string;
  deliveryAddress?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  menuItemId: string;
  quantity: number;
  price: number;
  notes?: string;
}

export interface Transaction {
  id: string;
  orderId: string;
  amount: number;
  status: 'pending' | 'success' | 'failed';
  paymentMethod: string;
  createdAt: string;
}