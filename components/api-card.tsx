"use client"

import { useState } from "react"
import { ApiItem } from "@/data/apis"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ExternalLink, Copy, Star, Code2 } from "lucide-react"
import { CodeModal } from "./code-modal"

interface ApiCardProps {
  api: ApiItem
  isFavorite: boolean
  onToggleFavorite: (id: string) => void
}

export function ApiCard({ api, isFavorite, onToggleFavorite }: ApiCardProps) {
  const [showCodeModal, setShowCodeModal] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyUrl = async () => {
    await navigator.clipboard.writeText(api.url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getAuthColor = (auth: string) => {
    switch (auth) {
      case 'OAuth':
        return 'bg-purple-500/10 text-purple-500 border-purple-500/20'
      case 'ApiKey':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20'
      case 'Open':
        return 'bg-green-500/10 text-green-500 border-green-500/20'
      case 'JWT':
        return 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20'
      case 'Partnership':
        return 'bg-orange-500/10 text-orange-500 border-orange-500/20'
      case 'Bearer Token':
        return 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20'
      case 'webhook':
        return 'bg-pink-500/10 text-pink-500 border-pink-500/20'
      case 'None':
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
    }
  }

  const getCorsColor = (cors: string) => {
    switch (cors) {
      case 'Yes':
        return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
      case 'No':
        return 'bg-red-500/10 text-red-500 border-red-500/20'
      default:
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
    }
  }

  return (
    <>
      <article>
        <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <CardTitle className="text-lg mb-1">{api.name}</CardTitle>
                <CardDescription className="text-sm">{api.description}</CardDescription>
              </div>
              <button
                onClick={() => onToggleFavorite(api.id)}
                className="text-muted-foreground hover:text-yellow-500 transition-colors"
                aria-label={isFavorite ? "즐겨찾기 해제" : "즐겨찾기 추가"}
              >
                <Star
                  className={`h-5 w-5 ${
                    isFavorite ? "fill-yellow-500 text-yellow-500" : ""
                  }`}
                />
              </button>
            </div>
          </CardHeader>
          <CardContent className="flex-1 pb-3">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className={getAuthColor(api.auth)}>
                {api.auth}
              </Badge>
              <Badge variant="outline" className={getCorsColor(api.cors)}>
                CORS: {api.cors}
              </Badge>
              <Badge variant="secondary">{api.provider}</Badge>
            </div>
          </CardContent>
          <CardFooter className="pt-0 gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => setShowCodeModal(true)}
            >
              <Code2 className="h-4 w-4 mr-2" />
              사용법
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={copyUrl}
              title="URL 복사"
            >
              {copied ? "✓" : <Copy className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              title="문서 열기"
            >
              <a href={api.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </article>

      <CodeModal
        open={showCodeModal}
        onOpenChange={setShowCodeModal}
        api={api}
      />
    </>
  )
}
