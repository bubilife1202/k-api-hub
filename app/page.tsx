"use client"

import { SearchBar } from "@/components/search-bar"
import { CategoryFilter } from "@/components/category-filter"
import { ApiGrid } from "@/components/api-grid"
import { useApiSearch } from "@/hooks/use-api-search"
import { useFavorites } from "@/hooks/use-favorites"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, ArrowUpDown } from "lucide-react"
import { useState, useMemo } from "react"
import { apis } from "@/data/apis"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
  const [sortBy, setSortBy] = useState<'name' | 'provider' | 'auth'>('name')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  const baseApis = showFavoritesOnly
    ? apis.filter((api) => favorites.has(api.id))
    : filteredApis

  // Sort APIs
  const sortedApis = useMemo(() => {
    const sorted = [...baseApis]
    switch (sortBy) {
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name, 'ko'))
      case 'provider':
        return sorted.sort((a, b) => a.provider.localeCompare(b.provider, 'ko'))
      case 'auth':
        return sorted.sort((a, b) => a.auth.localeCompare(b.auth))
      default:
        return sorted
    }
  }, [baseApis, sortBy])

  // Pagination
  const totalPages = Math.ceil(sortedApis.length / itemsPerPage)
  const displayedApis = sortedApis.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedCategory, showFavoritesOnly])

  return (
    <div className="space-y-4">
      {/* Hero Section */}
      <section className="text-center space-y-2 py-3">
        <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
          한국의 모든 API를 한곳에
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
          {apis.length}개의 한국 오픈 API를 검색하고 바로 사용하세요
        </p>
      </section>

      {/* Search Bar */}
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      {/* Filters & Controls - Compact Single Line */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            apiCounts={apiCounts}
          />
          <Select value={sortBy} onValueChange={(v: any) => setSortBy(v)}>
            <SelectTrigger className="w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">이름순</SelectItem>
              <SelectItem value="provider">제공자순</SelectItem>
              <SelectItem value="auth">인증순</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant={showFavoritesOnly ? "default" : "outline"}
            size="sm"
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className="gap-1.5"
          >
            <Star className={`h-3.5 w-3.5 ${showFavoritesOnly ? "fill-current" : ""}`} />
            <span className="hidden sm:inline">즐겨찾기</span>
          </Button>
        </div>
        <div className="text-xs text-muted-foreground text-right">
          {sortedApis.length}개 표시
        </div>
      </div>

      {/* Pagination - Top */}
      {isLoaded && totalPages > 1 && displayedApis.length > 0 && (
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground">
            {currentPage} / {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* API Grid */}
      {isLoaded && (
        <>
          {displayedApis.length === 0 ? (
            <div className="text-center py-16">
              {showFavoritesOnly ? (
                <>
                  <Star className="h-16 w-16 mx-auto mb-4 text-muted-foreground/40" />
                  <p className="text-xl font-semibold mb-2">즐겨찾기한 API가 없습니다</p>
                  <p className="text-muted-foreground">
                    마음에 드는 API를 ⭐️ 버튼으로 즐겨찾기에 추가해보세요
                  </p>
                </>
              ) : (
                <>
                  <p className="text-xl font-semibold mb-2">검색 결과가 없습니다</p>
                  <p className="text-muted-foreground">
                    다른 키워드나 카테고리로 검색해보세요
                  </p>
                </>
              )}
            </div>
          ) : (
            <>
              <ApiGrid
                apis={displayedApis}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />

              {/* Pagination - Bottom */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter(p => {
                        return p === 1 ||
                               p === totalPages ||
                               Math.abs(p - currentPage) <= 1
                      })
                      .map((page, idx, arr) => (
                        <div key={page} className="flex items-center gap-1">
                          {idx > 0 && arr[idx - 1] !== page - 1 && (
                            <span className="px-2 text-muted-foreground">...</span>
                          )}
                          <Button
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                            className="min-w-[2.5rem]"
                          >
                            {page}
                          </Button>
                        </div>
                      ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  )
}
