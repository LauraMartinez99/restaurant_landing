# Restaurant Landing Page Development Plan

## Instructions

- Record fixes for mistakes or corrections to avoid repetition in the Lessons section.
- Organize thoughts and plan steps before starting a task in the Scratchpad section.
- Use todo markers for progress tracking:
  - [ ] Pending tasks
  - [X] Completed tasks
- Update Scratchpad after completing subtasks.
- Reflect and plan after milestones for better task management.
- Always refer to Scratchpad before planning the next step.

## Lessons

1. In Next.js 15, both page components AND API route handlers with dynamic segments must handle params as a Promise. Example:
   ```typescript
   // For routes like /api/items/[id]/route.ts
   export async function GET(
     request: NextRequest,
     { params }: { params: Promise<{ id: string }> }
   ): Promise<NextResponse> {
     const { id } = await params;
     // Rest of your handler code
     return NextResponse.json({ /* your response */ });
   }
   ```
2. When importing `useRouter` from 'next/navigation', the component must be marked as a client component using the `'use client'` directive at the top of the file.
3. Ensure Tailwind CSS is correctly configured in `globals.css` and not `tailwind.config.ts` for Next.js 15.
4. Leverage TypeScript for all components and utility functions to ensure type safety and improve maintainability.
5. Prioritize responsive design from the start, testing on various screen sizes.
6. Use semantic HTML elements for better accessibility and SEO.
7. To install shadcn/ui, use the new package name:
   ```bash
   npx shadcn@latest init
   ```
   This replaces the deprecated `shadcn-ui` package. After initialization, install components using:
   ```bash
   npx shadcn@latest add [component-name]
   ```

## Scratchpad

### 1. Project Setup and Configuration [ ]

- [X] Create empty GitHub repo and clone it locally
- [X] Initialize new Next.js 15 project with TypeScript inside the repo
- [X] Set up project structure:
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
- [X] Configure ESLint and Prettier
- [X] Install and configure dependencies:
  - [X] Tailwind CSS for styling
  - [X] shadcn/ui for enhanced UI components
    - [X] Card component (for menu items)
    - [X] Button component (for category filters)
    - [X] Input component (for search)
    - [X] Skeleton component (for loading states)
  - [X] React Icons for UI icons
    - [X] Search icon (from react-icons/ai)
    - [X] Category icons (from react-icons/md)
    - [X] Loading spinner (from react-icons/ri)

### 2. Core Features Development [ ]

- [X] Implement Menu Listing Page:
  - [X] Create MenuCard component:
    - [X] Display meal image (using /preview endpoint for thumbnails)
    - [X] Show meal name
    - [X] Show category
    - [X] Add hover effects using shadcn/ui
  - [X] Create MenuGrid component:
    - [X] Responsive grid layout
    - [X] Loading state
    - [X] Error handling
  - [X] Implement CategoryFilter component:
    - [X] Fetch categories from `/categories.php` endpoint
    - [X] Filter buttons for categories
    - [X] Active state styling
    - [X] Smooth transitions
  - [X] Implement search functionality:
    - [X] Search by name using `/search.php?s=` endpoint
    - [X] Search by first letter using `/search.php?f=` endpoint
    - [X] Debounced search input
    - [X] Loading states

### 3. UI/UX Development [ ]

- [X] Design and implement responsive layout:
  - [X] Create Header component with restaurant branding
  - [X] Implement mobile-first design
  - [X] Add smooth animations and transitions
- [X] Style components with Tailwind CSS:
  - [X] Menu cards with hover effects
  - [X] Category filter buttons
  - [X] Responsive grid layout
- [X] Add loading states and animations:
  - [X] Skeleton loaders for menu items
  - [X] Smooth transitions between categories
  - [X] Hover effects on cards

### 4. Data Management [ ]

- [X] Set up API integration:
  ```typescript
  // lib/types/meal.ts
  interface Meal {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strMealThumb: string;
    strInstructions: string;
    strIngredient1: string;
    strIngredient2: string;
    // ... up to strIngredient20
    strMeasure1: string;
    strMeasure2: string;
    // ... up to strMeasure20
  }

  interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
  }
  ```
- [X] Implement API client:
  ```typescript
  // lib/api/meals.ts
  const API_BASE = 'https://www.themealdb.com/api/json/v1/1';
  const API_KEY = '1'; // Test API key

  async function getMealsByCategory(category: string): Promise<Meal[]> {
    const res = await fetch(`${API_BASE}/filter.php?c=${category}`);
    if (!res.ok) throw new Error('Failed to fetch meals');
    return res.json();
  }

  async function getMealById(id: string): Promise<Meal> {
    const res = await fetch(`${API_BASE}/lookup.php?i=${id}`);
    if (!res.ok) throw new Error('Failed to fetch meal');
    return res.json();
  }

  async function getCategories(): Promise<Category[]> {
    const res = await fetch(`${API_BASE}/categories.php`);
    if (!res.ok) throw new Error('Failed to fetch categories');
    return res.json();
  }
  ```
- [X] Implement data fetching and caching:
  - [X] Use Next.js built-in caching
  - [X] Implement error handling
  - [X] Add loading states

### 5. Performance and SEO Optimization [ ]

- [ ] Optimize images:
  - [ ] Use Next.js Image component with TheMealDB image URLs
  - [ ] Implement lazy loading
  - [ ] Add proper alt texts
- [ ] Implement SEO:
  - [ ] Add metadata
  - [ ] Create sitemap
  - [ ] Add robots.txt
- [ ] Performance improvements:
  - [ ] Code splitting
  - [ ] Bundle optimization
  - [ ] Caching strategies

### 6. Testing and Quality Assurance [ ]

- [ ] Add unit tests:
  - [ ] Test components
  - [ ] Test API integration
  - [ ] Test filtering functionality
- [ ] Manual testing:
  - [ ] Cross-browser testing
  - [ ] Mobile responsiveness
  - [ ] User flows

### 7. Deployment [ ]

- [ ] Choose hosting platform (Vercel recommended)
- [ ] Set up CI/CD pipeline
- [ ] Configure environment variables
- [ ] Deploy application
- [ ] Monitor performance

### 8. Documentation [ ]

- [ ] Create README:
  - [ ] Project setup instructions
  - [ ] Development guidelines
  - [ ] API integration details
- [ ] Add code comments
- [ ] Document component usage


