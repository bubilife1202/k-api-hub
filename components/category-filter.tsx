"use client"

import { categories } from "@/data/apis"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Filter } from "lucide-react"

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
    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-muted-foreground" />
      <Select value={selectedCategory} onValueChange={onSelectCategory}>
        <SelectTrigger className="w-[200px] md:w-[280px]">
          <SelectValue placeholder="카테고리 선택" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category} ({apiCounts[category] || 0})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
