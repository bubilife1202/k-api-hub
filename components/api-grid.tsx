"use client"

import { ApiItem } from "@/data/apis"
import { ApiCard } from "./api-card"

interface ApiGridProps {
  apis: ApiItem[]
  favorites: Set<string>
  onToggleFavorite: (id: string) => void
}

export function ApiGrid({ apis, favorites, onToggleFavorite }: ApiGridProps) {
  if (apis.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">검색 결과가 없습니다.</p>
        <p className="text-sm text-muted-foreground mt-2">
          다른 키워드로 검색해보세요.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {apis.map((api) => (
        <ApiCard
          key={api.id}
          api={api}
          isFavorite={favorites.has(api.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  )
}
