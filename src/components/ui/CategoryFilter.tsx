'use client';

import { Button } from "@/components/ui/button";
import { Category } from "@/lib/types/meal";
import { MdRestaurant } from "react-icons/md";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        onClick={() => onSelectCategory(null)}
        className="flex items-center gap-2"
      >
        <MdRestaurant className="h-4 w-4" />
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category.idCategory}
          variant={selectedCategory === category.strCategory ? "default" : "outline"}
          onClick={() => onSelectCategory(category.strCategory)}
          className="flex items-center gap-2"
        >
          <MdRestaurant className="h-4 w-4" />
          {category.strCategory}
        </Button>
      ))}
    </div>
  );
} 