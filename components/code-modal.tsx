"use client"

import { useState } from "react"
import { ApiItem } from "@/data/apis"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Button } from "./ui/button"
import { Copy, Check } from "lucide-react"

interface CodeModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  api: ApiItem
}

export function CodeModal({ open, onOpenChange, api }: CodeModalProps) {
  const [copiedTab, setCopiedTab] = useState<string | null>(null)

  const generateCurlCode = () => {
    if (api.auth === 'ApiKey') {
      return `curl -X GET "${api.url}" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
    } else if (api.auth === 'OAuth') {
      return `curl -X GET "${api.url}" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json"`
    } else {
      return `curl -X GET "${api.url}" \\
  -H "Content-Type: application/json"`
    }
  }

  const generateJavaScriptCode = () => {
    if (api.auth === 'ApiKey') {
      return `// Fetch API를 사용한 호출 예제
const apiKey = 'YOUR_API_KEY';

fetch('${api.url}', {
  method: 'GET',
  headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`
    } else if (api.auth === 'OAuth') {
      return `// OAuth 토큰을 사용한 호출 예제
const accessToken = 'YOUR_ACCESS_TOKEN';

fetch('${api.url}', {
  method: 'GET',
  headers: {
    'Authorization': \`Bearer \${accessToken}\`,
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`
    } else {
      return `// 인증이 필요 없는 공개 API 호출
fetch('${api.url}')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`
    }
  }

  const generatePythonCode = () => {
    if (api.auth === 'ApiKey') {
      return `import requests

# API Key를 사용한 호출 예제
api_key = 'YOUR_API_KEY'
headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
}

response = requests.get('${api.url}', headers=headers)
data = response.json()
print(data)`
    } else if (api.auth === 'OAuth') {
      return `import requests

# OAuth 토큰을 사용한 호출 예제
access_token = 'YOUR_ACCESS_TOKEN'
headers = {
    'Authorization': f'Bearer {access_token}',
    'Content-Type': 'application/json'
}

response = requests.get('${api.url}', headers=headers)
data = response.json()
print(data)`
    } else {
      return `import requests

# 인증이 필요 없는 공개 API 호출
response = requests.get('${api.url}')
data = response.json()
print(data)`
    }
  }

  const copyCode = async (code: string, tab: string) => {
    await navigator.clipboard.writeText(code)
    setCopiedTab(tab)
    setTimeout(() => setCopiedTab(null), 2000)
  }

  const codeExamples = {
    curl: generateCurlCode(),
    javascript: generateJavaScriptCode(),
    python: generatePythonCode(),
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{api.name} 사용 예제</DialogTitle>
          <DialogDescription>
            {api.description}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="curl" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="curl">cURL</TabsTrigger>
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
          </TabsList>

          <TabsContent value="curl" className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">터미널에서 사용할 수 있는 명령어입니다.</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyCode(codeExamples.curl, 'curl')}
              >
                {copiedTab === 'curl' ? (
                  <Check className="h-4 w-4 mr-1" />
                ) : (
                  <Copy className="h-4 w-4 mr-1" />
                )}
                {copiedTab === 'curl' ? '복사됨' : '복사'}
              </Button>
            </div>
            <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeExamples.curl}</code>
            </pre>
          </TabsContent>

          <TabsContent value="javascript" className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">브라우저 또는 Node.js에서 사용</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyCode(codeExamples.javascript, 'javascript')}
              >
                {copiedTab === 'javascript' ? (
                  <Check className="h-4 w-4 mr-1" />
                ) : (
                  <Copy className="h-4 w-4 mr-1" />
                )}
                {copiedTab === 'javascript' ? '복사됨' : '복사'}
              </Button>
            </div>
            <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeExamples.javascript}</code>
            </pre>
          </TabsContent>

          <TabsContent value="python" className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Python requests 라이브러리 사용</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyCode(codeExamples.python, 'python')}
              >
                {copiedTab === 'python' ? (
                  <Check className="h-4 w-4 mr-1" />
                ) : (
                  <Copy className="h-4 w-4 mr-1" />
                )}
                {copiedTab === 'python' ? '복사됨' : '복사'}
              </Button>
            </div>
            <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{codeExamples.python}</code>
            </pre>
          </TabsContent>
        </Tabs>

        <div className="mt-4 p-4 bg-muted rounded-lg">
          <h4 className="font-semibold mb-2">인증 정보</h4>
          <ul className="text-sm space-y-1">
            <li>
              <span className="font-medium">인증 방식:</span> {api.auth}
            </li>
            <li>
              <span className="font-medium">CORS 지원:</span> {api.cors}
            </li>
            <li>
              <span className="font-medium">제공자:</span> {api.provider}
            </li>
          </ul>
          <a
            href={api.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline mt-2 inline-block"
          >
            공식 문서 보기 →
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
