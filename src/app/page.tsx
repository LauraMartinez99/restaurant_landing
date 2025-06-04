'use client';

import { CategoryFilter } from "@/components/ui/CategoryFilter";
import { MenuCard } from "@/components/ui/MenuCard";
import { getCategories, getMealsByCategory, searchMeals } from "@/lib/api/meals";
import { Category, Meal } from "@/lib/types/meal";
import { useEffect, useState, useCallback } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import debounce from 'lodash/debounce';

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      if (!query.trim()) {
        // If search is empty, fetch meals by selected category
        const data = await getMealsByCategory(selectedCategory || 'Beef');
        setMeals(data);
        return;
      }

      try {
        const data = await searchMeals(query);
        setMeals(data);
      } catch (error) {
        console.error('Failed to search meals:', error);
      }
    }, 500),
    [selectedCategory]
  );

  // Effect for category changes
  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      try {
        if (searchQuery.trim()) {
          // If there's a search query, search instead of filtering by category
          const data = await searchMeals(searchQuery);
          setMeals(data);
        } else {
          const data = await getMealsByCategory(selectedCategory || 'Beef');
          setMeals(data);
        }
      } catch (error) {
        console.error('Failed to fetch meals:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMeals();
  }, [selectedCategory, searchQuery]);

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setIsLoading(true);
    debouncedSearch(query);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Restaurant Menu</h1>
      
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search meals..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10"
          />
        </div>
      </div>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          // Loading skeletons
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="space-y-3">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))
        ) : (
          // Meal cards
          meals.map((meal) => (
            <MenuCard key={meal.idMeal} meal={meal} />
          ))
        )}
      </div>
    </main>
  );
}
