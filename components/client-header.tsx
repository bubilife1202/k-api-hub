"use client"

import { Github, Plus, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"

export function ClientHeader() {
  const { theme, toggleTheme, mounted } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              K-API HUB
            </span>
          </a>
        </div>
        <nav className="flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          )}
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://github.com/bubilife1202/k-api-hub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="default" size="sm" asChild>
            <a
              href="https://github.com/bubilife1202/k-api-hub/issues/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Plus className="h-4 w-4 mr-1" />
              API 제보하기
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
