import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'K-API HUB'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #3b82f6, #8b5cf6, #a855f7)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            marginBottom: 20,
            fontFamily: 'sans-serif',
          }}
        >
          K-API HUB
        </div>
        <div
          style={{
            fontSize: 32,
            marginBottom: 20,
            color: 'rgba(255,255,255,0.9)',
            fontFamily: 'sans-serif',
          }}
        >
          한국의 모든 API를 한곳에
        </div>
        <div
          style={{
            fontSize: 24,
            color: 'rgba(255,255,255,0.7)',
            fontFamily: 'sans-serif',
          }}
        >
          220+ 오픈 API | 공공데이터 | 개발자 도구
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
