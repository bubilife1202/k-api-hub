"use client"

import { SearchBar } from "@/components/search-bar"
import { CategoryFilter } from "@/components/category-filter"
import { ApiGrid } from "@/components/api-grid"
import { useApiSearch } from "@/hooks/use-api-search"
import { useFavorites } from "@/hooks/use-favorites"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
    <div className="space-y-8">
      {/* Hero Section - Premium Design */}
      <section className="relative overflow-hidden rounded-3xl">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-violet-50 to-purple-50 dark:from-blue-950/20 dark:via-violet-950/20 dark:to-purple-950/20" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/20 via-violet-400/20 to-purple-400/20 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative text-center space-y-6 py-16 px-4 md:py-20">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-gray-900/80 border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm shadow-lg shadow-blue-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-medium bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              {apis.length}개 API 운영 중
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                한국의 모든 API
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10">를 한곳에</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-400/30 via-violet-400/30 to-purple-400/30 -rotate-1"></span>
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              개발에 필요한 모든 한국 오픈 API를 검색하고 바로 사용하세요.
              <br className="hidden md:block" />
              인증 방법부터 코드 예제까지 한번에 확인할 수 있습니다.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 border-2 border-white dark:border-gray-900 flex items-center justify-center text-xs font-bold text-white">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">2,000+</span> 개발자가 사용 중
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center text-green-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">매주</span> 업데이트
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 text-violet-500">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{Object.keys(apiCounts).length}개</span> 카테고리
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      {/* Advanced View Controls */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-800/30 rounded-2xl p-4 border border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Left Controls */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Category Filter */}
            <div className="flex items-center gap-2 bg-white dark:bg-gray-900 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                apiCounts={apiCounts}
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 bg-white dark:bg-gray-900 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
              <Select value={sortBy} onValueChange={(v: any) => setSortBy(v)}>
                <SelectTrigger className="w-[110px] border-0 shadow-none focus:ring-0 h-auto p-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">
                    <span className="flex items-center gap-2">
                      <span>이름순</span>
                    </span>
                  </SelectItem>
                  <SelectItem value="provider">
                    <span className="flex items-center gap-2">
                      <span>제공자순</span>
                    </span>
                  </SelectItem>
                  <SelectItem value="auth">
                    <span className="flex items-center gap-2">
                      <span>인증순</span>
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Favorites Filter */}
            <Button
              variant={showFavoritesOnly ? "default" : "outline"}
              size="sm"
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`gap-2 rounded-xl shadow-sm transition-all ${
                showFavoritesOnly
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0 shadow-lg shadow-yellow-500/25"
                  : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:bg-yellow-50 dark:hover:bg-yellow-950/20"
              }`}
            >
              <Star className={`h-4 w-4 ${showFavoritesOnly ? "fill-current" : ""}`} />
              <span className="hidden sm:inline font-medium">즐겨찾기</span>
            </Button>
          </div>

          {/* Right Info */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 animate-pulse"></div>
                <span className="font-semibold text-foreground">{sortedApis.length}</span>
                <span className="text-muted-foreground">개 표시</span>
              </div>
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {(searchQuery || selectedCategory !== "전체" || showFavoritesOnly) && (
          <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <span className="text-xs font-medium text-muted-foreground">활성 필터:</span>
            {searchQuery && (
              <Badge variant="secondary" className="gap-1.5">
                검색: {searchQuery}
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-1 hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            )}
            {selectedCategory !== "전체" && (
              <Badge variant="secondary" className="gap-1.5">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory("전체")}
                  className="ml-1 hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            )}
            {showFavoritesOnly && (
              <Badge variant="secondary" className="gap-1.5 bg-yellow-100 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-300">
                <Star className="h-3 w-3 fill-current" />
                즐겨찾기만
                <button
                  onClick={() => setShowFavoritesOnly(false)}
                  className="ml-1 hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            )}
            <button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("전체")
                setShowFavoritesOnly(false)
              }}
              className="text-xs text-muted-foreground hover:text-foreground underline ml-1"
            >
              모두 지우기
            </button>
          </div>
        )}
      </div>

      {/* Pagination - Top */}
      {isLoaded && totalPages > 1 && displayedApis.length > 0 && (
        <div className="flex items-center justify-center gap-2 p-4 bg-white/50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 backdrop-blur-sm">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="rounded-lg shadow-sm disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-violet-50 dark:from-blue-950/30 dark:to-violet-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
            <span className="text-sm font-semibold text-foreground">{currentPage}</span>
            <span className="text-sm text-muted-foreground">/</span>
            <span className="text-sm text-muted-foreground">{totalPages}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="rounded-lg shadow-sm disabled:opacity-50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* API Grid */}
      {isLoaded && (
        <>
          {displayedApis.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                {showFavoritesOnly ? (
                  <>
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-950/30 dark:to-orange-950/30 flex items-center justify-center">
                      <Star className="h-10 w-10 text-yellow-500/60" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                      즐겨찾기한 API가 없습니다
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      마음에 드는 API를 ⭐️ 버튼으로 즐겨찾기에 추가해보세요.
                      <br />
                      나중에 빠르게 찾아볼 수 있습니다.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-violet-100 dark:from-blue-950/30 dark:to-violet-950/30 flex items-center justify-center">
                      <svg className="h-10 w-10 text-blue-500/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                      검색 결과가 없습니다
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      다른 키워드나 카테고리로 검색해보세요.
                      <br />
                      필터를 초기화하면 모든 API를 볼 수 있습니다.
                    </p>
                  </>
                )}
              </div>
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
                <div className="flex items-center justify-center gap-2 p-4 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 rounded-2xl border-2 border-gray-200 dark:border-gray-800 shadow-lg">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="rounded-xl shadow-sm hover:shadow-md transition-all disabled:opacity-50 hover:scale-105"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter(p => {
                        return p === 1 ||
                               p === totalPages ||
                               Math.abs(p - currentPage) <= 1
                      })
                      .map((page, idx, arr) => (
                        <div key={page} className="flex items-center gap-1.5">
                          {idx > 0 && arr[idx - 1] !== page - 1 && (
                            <span className="px-2 text-muted-foreground">...</span>
                          )}
                          <Button
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                            className={`min-w-[2.5rem] rounded-xl shadow-sm transition-all hover:scale-105 ${
                              currentPage === page
                                ? "bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white border-0 shadow-lg shadow-blue-500/25"
                                : ""
                            }`}
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
                    className="rounded-xl shadow-sm hover:shadow-md transition-all disabled:opacity-50 hover:scale-105"
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
