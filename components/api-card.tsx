"use client"

import { useState } from "react"
import { ApiItem } from "@/data/apis"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ExternalLink, Copy, Star, Code2, Sparkles, TrendingUp, CheckCircle2 } from "lucide-react"
import { CodeModal } from "./code-modal"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

interface ApiCardProps {
  api: ApiItem
  isFavorite: boolean
  onToggleFavorite: (id: string) => void
}

export function ApiCard({ api, isFavorite, onToggleFavorite }: ApiCardProps) {
  const [showCodeModal, setShowCodeModal] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const copyUrl = async () => {
    await navigator.clipboard.writeText(api.url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getAuthStyles = (auth: string) => {
    const styles: Record<string, string> = {
      'OAuth': 'bg-[hsl(var(--auth-oauth-bg))] text-[hsl(var(--auth-oauth))] border-[hsl(var(--auth-oauth))]/20',
      'ApiKey': 'bg-[hsl(var(--auth-apikey-bg))] text-[hsl(var(--auth-apikey))] border-[hsl(var(--auth-apikey))]/20',
      'Open': 'bg-[hsl(var(--auth-open-bg))] text-[hsl(var(--auth-open))] border-[hsl(var(--auth-open))]/20',
      'JWT': 'bg-[hsl(var(--auth-jwt-bg))] text-[hsl(var(--auth-jwt))] border-[hsl(var(--auth-jwt))]/20',
      'Partnership': 'bg-[hsl(var(--auth-partnership-bg))] text-[hsl(var(--auth-partnership))] border-[hsl(var(--auth-partnership))]/20',
      'Bearer Token': 'bg-[hsl(var(--auth-bearer-bg))] text-[hsl(var(--auth-bearer))] border-[hsl(var(--auth-bearer))]/20',
      'webhook': 'bg-[hsl(var(--auth-webhook-bg))] text-[hsl(var(--auth-webhook))] border-[hsl(var(--auth-webhook))]/20',
      'None': 'bg-[hsl(var(--auth-none-bg))] text-[hsl(var(--auth-none))] border-[hsl(var(--auth-none))]/20',
    }
    return styles[auth] || 'bg-gray-500/10 text-gray-500 border-gray-500/20'
  }

  const getCorsStyles = (cors: string) => {
    const styles: Record<string, string> = {
      'Yes': 'bg-[hsl(var(--cors-yes-bg))] text-[hsl(var(--cors-yes))] border-[hsl(var(--cors-yes))]/20',
      'No': 'bg-[hsl(var(--cors-no-bg))] text-[hsl(var(--cors-no))] border-[hsl(var(--cors-no))]/20',
      'Unknown': 'bg-[hsl(var(--cors-unknown-bg))] text-[hsl(var(--cors-unknown))] border-[hsl(var(--cors-unknown))]/20',
    }
    return styles[cors] || 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
  }

  // Determine if API is "popular" (mock logic - you can implement real logic)
  const isPopular = api.id.length % 5 === 0
  const isNew = api.id.length % 7 === 0

  return (
    <TooltipProvider>
      <article>
        <Card
          className="group h-full flex flex-col hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden relative border-2 hover:border-blue-200 dark:hover:border-blue-800"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient Overlay on Hover */}
          <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

          {/* Shine Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none`} />

          {/* Top Corner Badges */}
          <div className="absolute top-3 right-3 z-10 flex gap-1.5">
            {isPopular && (
              <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0 text-xs px-2 py-0.5 shadow-lg">
                <TrendingUp className="h-3 w-3 mr-1" />
                인기
              </Badge>
            )}
            {isNew && (
              <Badge className="bg-gradient-to-r from-blue-500 to-violet-500 text-white border-0 text-xs px-2 py-0.5 shadow-lg">
                <Sparkles className="h-3 w-3 mr-1" />
                NEW
              </Badge>
            )}
          </div>

          <CardHeader className="pb-4 pt-6 relative">
            {/* Provider Section */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2 flex-1">
                {/* Provider Logo Placeholder */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
                  {api.provider.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-medium text-muted-foreground truncate">{api.provider}</span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 flex-shrink-0" />
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Badge variant="outline" className="text-xs px-1.5 py-0 h-5 bg-[hsl(var(--status-active-bg))] text-[hsl(var(--status-active))] border-[hsl(var(--status-active))]/20">
                      Active
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Favorite Button */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => onToggleFavorite(api.id)}
                    className="text-muted-foreground hover:text-yellow-500 transition-all hover:scale-110 p-1 rounded-full hover:bg-yellow-50 dark:hover:bg-yellow-950/20"
                    aria-label={isFavorite ? "즐겨찾기 해제" : "즐겨찾기 추가"}
                  >
                    <Star
                      className={`h-5 w-5 ${
                        isFavorite ? "fill-yellow-500 text-yellow-500" : ""
                      }`}
                    />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isFavorite ? "즐겨찾기 해제" : "즐겨찾기 추가"}</p>
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Title & Description */}
            <div>
              <CardTitle className="text-xl mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {api.name}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed line-clamp-2">
                {api.description}
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="flex-1 pb-4">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className={`${getAuthStyles(api.auth)} font-medium`}>
                🔐 {api.auth}
              </Badge>
              <Badge variant="outline" className={getCorsStyles(api.cors)}>
                CORS: {api.cors}
              </Badge>
            </div>

            {/* Mock Stats */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.{Math.floor(Math.random() * 10)}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-medium">{Math.floor(Math.random() * 900 + 100)}+</span>
                <span>사용</span>
              </div>
            </div>
          </CardContent>

          <CardFooter className="pt-0 pb-4 gap-2 relative">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="default"
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white border-0 shadow-lg shadow-blue-500/25"
                  onClick={() => setShowCodeModal(true)}
                >
                  <Code2 className="h-4 w-4 mr-2" />
                  사용법
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>코드 예제 보기</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyUrl}
                  className="hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:border-blue-300 dark:hover:border-blue-700"
                >
                  {copied ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{copied ? "복사됨!" : "URL 복사"}</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:border-blue-300 dark:hover:border-blue-700"
                >
                  <a href={api.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>문서 열기</p>
              </TooltipContent>
            </Tooltip>
          </CardFooter>
        </Card>
      </article>

      <CodeModal
        open={showCodeModal}
        onOpenChange={setShowCodeModal}
        api={api}
      />
    </TooltipProvider>
  )
}
