# Restaurant Landing Page

A learning project built with Next.js 15 to practice modern web development concepts and create a beautiful restaurant menu interface.

🔗 **Live Demo:** [Restaurant Landing Page](https://restaurant-landing-ten.vercel.app)

## 🚀 Features

- **Modern Tech Stack**
  - Next.js 15 with App Router
  - TypeScript for type safety
  - Tailwind CSS for styling
  - shadcn/ui for beautiful components

- **Core Functionality**
  - Responsive menu display with cards
  - Category filtering
  - Real-time search functionality
  - Loading states and animations
  - Mobile-first design

- **API Integration**
  - Integration with TheMealDB API
  - Efficient data fetching and caching
  - Error handling
  - Loading states

## 🛠️ Technologies Used

- **Frontend Framework**
  - Next.js 15
  - React 19
  - TypeScript

- **Styling & UI**
  - Tailwind CSS
  - shadcn/ui components
  - React Icons

- **State Management**
  - React Hooks (useState, useEffect, useCallback)

- **API & Data**
  - TheMealDB API
  - Next.js built-in fetch
  - Debounced search

## 📦 Project Structure

```
src/
├── app/
│   ├── page.tsx (Menu listing)
│   └── layout.tsx
├── components/
│   ├── ui/
│   │   ├── MenuCard.tsx
│   │   ├── MenuGrid.tsx
│   │   ├── CategoryFilter.tsx
│   │   └── Navbar.tsx
│   └── layout/
│       └── Header.tsx
├── lib/
│   ├── api/
│   │   └── meals.ts (TheMealDB API client)
│   └── types/
│       └── meal.ts (API types)
└── types/
    └── index.ts (TypeScript interfaces)
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd restaurant-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 🎯 Learning Objectives

This project was created to practice and demonstrate:

1. **Next.js 15 Features**
   - App Router implementation
   - Server and Client Components
   - Image optimization
   - API route handling

2. **Modern React Patterns**
   - Custom hooks
   - Component composition
   - State management
   - Performance optimization

3. **UI/UX Best Practices**
   - Responsive design
   - Loading states
   - Error handling
   - Smooth animations

4. **TypeScript Integration**
   - Type safety
   - Interface definitions
   - API type definitions

## 📝 Notes

- This is a learning project and uses the free tier of TheMealDB API
- The project demonstrates best practices for building modern web applications
- All components are built with accessibility in mind
- The UI is optimized for both desktop and mobile devices

## 🤝 Contributing

Feel free to fork this project and experiment with it. Pull requests are welcome!

---

Built with ❤️ for learning purposes
