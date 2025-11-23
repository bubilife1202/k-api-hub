"use client"

import { useEffect, useState } from "react"

const FAVORITES_KEY = "k-api-hub-favorites"

export function useFavorites() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load favorites from localStorage
    const stored = localStorage.getItem(FAVORITES_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setFavorites(new Set(parsed))
      } catch (error) {
        console.error("Failed to parse favorites:", error)
      }
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    // Save favorites to localStorage
    if (isLoaded) {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(favorites)))
    }
  }, [favorites, isLoaded])

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(id)) {
        newFavorites.delete(id)
      } else {
        newFavorites.add(id)
      }
      return newFavorites
    })
  }

  return { favorites, toggleFavorite, isLoaded }
}
