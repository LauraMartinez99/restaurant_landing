import { Meal, Category, MealsResponse, CategoriesResponse } from '../types/meal';

const API_BASE = 'https://www.themealdb.com/api/json/v1/1';

export async function getMealsByCategory(category: string): Promise<Meal[]> {
  const res = await fetch(`${API_BASE}/filter.php?c=${category}`);
  if (!res.ok) throw new Error('Failed to fetch meals');
  const data: MealsResponse = await res.json();
  return data.meals || [];
}

export async function getMealById(id: string): Promise<Meal | null> {
  const res = await fetch(`${API_BASE}/lookup.php?i=${id}`);
  if (!res.ok) throw new Error('Failed to fetch meal');
  const data: MealsResponse = await res.json();
  return data.meals?.[0] || null;
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${API_BASE}/categories.php`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  const data: CategoriesResponse = await res.json();
  return data.categories;
}

export async function searchMeals(query: string): Promise<Meal[]> {
  const res = await fetch(`${API_BASE}/search.php?s=${query}`);
  if (!res.ok) throw new Error('Failed to search meals');
  const data: MealsResponse = await res.json();
  return data.meals || [];
}

export async function searchMealsByFirstLetter(letter: string): Promise<Meal[]> {
  const res = await fetch(`${API_BASE}/search.php?f=${letter}`);
  if (!res.ok) throw new Error('Failed to search meals');
  const data: MealsResponse = await res.json();
  return data.meals || [];
} 