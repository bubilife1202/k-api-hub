"use client"

import { categories } from "@/data/apis"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

interface CategoryFilterProps {
  selectedCategory: string
  onSelectCategory: (category: string) => void
  apiCounts: Record<string, number>
}

export function CategoryFilter({
  selectedCategory,
  onSelectCategory,
  apiCounts,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onSelectCategory(category)}
          className="gap-2"
        >
          {category}
          <Badge
            variant="secondary"
            className={`${
              selectedCategory === category
                ? "bg-primary-foreground/20 text-primary-foreground"
                : ""
            }`}
          >
            {apiCounts[category] || 0}
          </Badge>
        </Button>
      ))}
    </div>
  )
}
