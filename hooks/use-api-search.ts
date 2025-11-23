"use client"

import { useMemo, useState } from "react"
import Fuse from "fuse.js"
import { ApiItem, apis } from "@/data/apis"

export function useApiSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("전체")

  const fuse = useMemo(
    () =>
      new Fuse(apis, {
        keys: ["name", "description", "provider", "category"],
        threshold: 0.3,
        includeScore: true,
      }),
    []
  )

  const filteredApis = useMemo(() => {
    let result: ApiItem[] = apis

    // Search filter
    if (searchQuery.trim()) {
      const searchResults = fuse.search(searchQuery)
      result = searchResults.map((r) => r.item)
    }

    // Category filter
    if (selectedCategory !== "전체") {
      result = result.filter((api) => api.category === selectedCategory)
    }

    return result
  }, [searchQuery, selectedCategory, fuse])

  const apiCounts = useMemo(() => {
    const counts: Record<string, number> = { 전체: apis.length }

    apis.forEach((api) => {
      counts[api.category] = (counts[api.category] || 0) + 1
    })

    return counts
  }, [])

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredApis,
    apiCounts,
  }
}
