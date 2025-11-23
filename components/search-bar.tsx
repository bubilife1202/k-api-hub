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
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="API 이름, 설명, 제공자로 검색..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 h-14 text-base shadow-lg"
      />
    </div>
  )
}
