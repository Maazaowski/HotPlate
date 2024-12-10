# HotPlate 🍽️

A modern restaurant management system built with React, TypeScript, and Firebase.

## Features ✨

- **Authentication & Authorization**
  - Role-based access control
  - Secure admin dashboard
  - Persistent sessions

- **Menu Management**
  - Real-time menu updates
  - Category organization
  - Pricing controls

- **Order System**
  - Order tracking
  - Status management
  - Customer notifications

- **Business Tools**
  - Invoice generation
  - Staff management
  - Analytics dashboard

## Tech Stack 🛠️

- **Frontend:** React 18, TypeScript, TailwindCSS
- **Backend:** Firebase (Auth, Firestore, Storage)
- **State Management:** React Query, Context API
- **Forms:** React Hook Form
- **Build Tool:** Vite
- **UI Components:** Custom components with TailwindCSS

## Getting Started 🚀

### Prerequisites

```bash
node -v >= 16.0.0
npm -v >= 7.0.0
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hotplate.git
   cd hotplate
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

4. Add your Firebase credentials to .env:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure 📁
```plaintext
src/
├── components/       # Reusable components
├── contexts/         # React contexts
├── lib/              # Core functionality
├── pages/            # Route components
└── utils/            # Helper functions
```

## Available Scripts 📝

- `npm run dev`      # Start development server
- `npm run build`    # Build for production
- `npm run preview`  # Preview production build
- `npm run lint`     # Run ESLint

## Default Admin Access 🔑

- **Email:** admin@hotplate.com
- **Password:** Admin@123

## Error Handling 🔧

- Automatic retry for network failures
- Offline support
- User-friendly error messages

## Contributing 🤝

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.

Made with ❤️ by Maazaowski
