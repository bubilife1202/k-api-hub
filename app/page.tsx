"use client"

import { SearchBar } from "@/components/search-bar"
import { CategoryFilter } from "@/components/category-filter"
import { ApiGrid } from "@/components/api-grid"
import { useApiSearch } from "@/hooks/use-api-search"
import { useFavorites } from "@/hooks/use-favorites"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { useState } from "react"
import { apis } from "@/data/apis"

export default function Home() {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredApis,
    apiCounts,
  } = useApiSearch()

  const { favorites, toggleFavorite, isLoaded } = useFavorites()
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)

  const displayedApis = showFavoritesOnly
    ? apis.filter((api) => favorites.has(api.id))
    : filteredApis

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-8">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
          한국의 모든 API를 한곳에
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          공공데이터부터 빅테크 API까지, 58개 이상의 한국 오픈 API를 검색하고
          바로 사용하세요
        </p>
      </section>

      {/* Search Bar */}
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      {/* Stats */}
      <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span>총 {apis.length}개 API</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
          <span>{favorites.size}개 즐겨찾기</span>
        </div>
      </div>

      {/* Category Filter & Favorites Toggle */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          apiCounts={apiCounts}
        />
        <Button
          variant={showFavoritesOnly ? "default" : "outline"}
          size="sm"
          onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
          className="gap-2"
        >
          <Star
            className={`h-4 w-4 ${
              showFavoritesOnly ? "fill-current" : ""
            }`}
          />
          즐겨찾기만 보기
        </Button>
      </div>

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        {showFavoritesOnly ? (
          <p>즐겨찾기: {displayedApis.length}개</p>
        ) : (
          <p>
            {searchQuery || selectedCategory !== "전체"
              ? `검색 결과: ${displayedApis.length}개`
              : `전체: ${displayedApis.length}개`}
          </p>
        )}
      </div>

      {/* API Grid */}
      {isLoaded && (
        <ApiGrid
          apis={displayedApis}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  )
}
