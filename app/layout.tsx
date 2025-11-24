import type { Metadata } from "next";
import "./globals.css";
import { ClientHeader } from "@/components/client-header";

export const metadata: Metadata = {
  title: {
    default: "K-API HUB | 한국 오픈 API 모음",
    template: "%s | K-API HUB",
  },
  description:
    "한국의 유용한 Open API, 공공데이터, 개발자 도구를 한곳에 모았습니다. 무료 API 키, 문서 링크, 사용 예제를 제공합니다.",
  keywords: [
    "API",
    "오픈API",
    "공공데이터",
    "무료 API",
    "Rest API",
    "한국 API",
    "카카오 API",
    "네이버 API",
    "공공데이터포털",
    "개발자 도구",
  ],
  authors: [{ name: "K-API HUB Team" }],
  creator: "K-API HUB",
  publisher: "K-API HUB",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://k-api-hub.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://k-api-hub.vercel.app",
    title: "K-API HUB | 한국 오픈 API 모음",
    description:
      "한국의 유용한 Open API, 공공데이터, 개발자 도구를 한곳에 모았습니다.",
    siteName: "K-API HUB",
  },
  twitter: {
    card: "summary_large_image",
    title: "K-API HUB | 한국 오픈 API 모음",
    description:
      "한국의 유용한 Open API, 공공데이터, 개발자 도구를 한곳에 모았습니다.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "K-API HUB",
              description:
                "한국의 유용한 Open API, 공공데이터, 개발자 도구를 한곳에 모았습니다.",
              url: "https://k-api-hub.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://k-api-hub.vercel.app?search={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DataCatalog",
              name: "K-API HUB - 한국 오픈 API 카탈로그",
              description:
                "한국의 공공 및 민간 오픈 API를 수집하고 분류한 데이터 카탈로그",
              publisher: {
                "@type": "Organization",
                name: "K-API HUB",
              },
              url: "https://k-api-hub.vercel.app",
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased flex flex-col">
        <ClientHeader />
        <main className="container flex-1 py-8 md:py-12">{children}</main>
        <footer className="border-t">
          <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-20 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with ❤️ for Korean developers.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
