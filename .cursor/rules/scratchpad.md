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


## Scratchpad

### 1. Project Setup and Configuration [ ]

- [ ] Create empty GitHub repo and clone it locally
- [ ] Initialize new Next.js 15 project with TypeScript inside the repo
- [ ] Set up project structure:
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
  │   └── data/
  │       └── menu.ts (Menu data)
  └── types/
      └── index.ts (TypeScript interfaces)
  ```
- [ ] Configure ESLint and Prettier
- [ ] Install and configure dependencies:
  - [X] Tailwind CSS for styling
  - [ ] shadcn/ui for enhanced UI components
  - [ ] React Icons for UI icons

### 2. Core Features Development [ ]

- [ ] Implement Menu Listing Page:
  - [ ] Create MenuCard component:
    - [ ] Display dish image
    - [ ] Show dish name
    - [ ] Show price with proper formatting
    - [ ] Add hover effects using shadcn/ui
  - [ ] Create MenuGrid component:
    - [ ] Responsive grid layout
    - [ ] Loading state
    - [ ] Error handling
  - [ ] Implement CategoryFilter component:
    - [ ] Filter buttons for: Entradas, Platos fuertes, Postres
    - [ ] Active state styling
    - [ ] Smooth transitions

### 3. UI/UX Development [ ]

- [ ] Design and implement responsive layout:
  - [ ] Create Header component with restaurant branding
  - [ ] Implement mobile-first design
  - [ ] Add smooth animations and transitions
- [ ] Style components with Tailwind CSS:
  - [ ] Menu cards with hover effects
  - [ ] Category filter buttons
  - [ ] Responsive grid layout
- [ ] Add loading states and animations:
  - [ ] Skeleton loaders for menu items
  - [ ] Smooth transitions between categories
  - [ ] Hover effects on cards

### 4. Data Management [ ]

- [ ] Set up menu data structure:
  ```typescript
  interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: 'Entradas' | 'Platos fuertes' | 'Postres';
  }
  ```
- [ ] Create sample menu data
- [ ] Implement category filtering logic

### 5. Performance and SEO Optimization [ ]

- [ ] Optimize images:
  - [ ] Use Next.js Image component
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
- [ ] Add code comments
- [ ] Document component usage


