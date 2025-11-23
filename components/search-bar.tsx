"use client"

import { Search } from "lucide-react"
import { Input } from "./ui/input"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="API 이름, 설명, 제공자로 검색..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 md:pl-12 h-12 md:h-14 text-sm md:text-base shadow-lg"
      />
    </div>
  )
}
