import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'K-API HUB - 한국 오픈 API 모음',
    short_name: 'K-API HUB',
    description: '한국의 유용한 Open API, 공공데이터, 개발자 도구를 한곳에 모았습니다.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
