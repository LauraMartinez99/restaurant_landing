'use client';

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Meal } from "@/lib/types/meal";
import Image from "next/image";

interface MenuCardProps {
  meal: Meal;
}

export function MenuCard({ meal }: MenuCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{meal.strMeal}</h3>
        <p className="text-sm text-muted-foreground">{meal.strCategory}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <p className="text-sm text-muted-foreground">{meal.strArea}</p>
      </CardFooter>
    </Card>
  );
} 