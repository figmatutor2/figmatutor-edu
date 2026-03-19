import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://figmatutor-edu.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "피그마튜터 하이서 | Figma 실전 교육 전문",
    template: "%s | 피그마튜터",
  },
  description:
    "10년차 프로덕트 디자이너가 직접 가르치는 Figma 실전 교육. 50개+ 기업 출강, 디자인 시스템, UI/UX, AI 디자인 교육까지. 기업 맞춤형 커리큘럼을 제공합니다.",
  keywords: [
    "Figma 교육",
    "피그마 강의",
    "Figma 기업 출강",
    "UI/UX 디자인 교육",
    "디자인 시스템",
    "피그마튜터",
    "Figma tutor",
    "피그마 실무",
    "AI 디자인",
    "Figma 튜토리얼",
    "프로덕트 디자인 교육",
    "기업 디자인 교육",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "피그마튜터 하이서",
    title: "피그마튜터 하이서 | Figma 실전 교육 전문",
    description:
      "10년차 프로덕트 디자이너가 직접 가르치는 Figma 실전 교육. 50개+ 기업 출강 경험으로 검증된 커리큘럼.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "피그마튜터 - 기업, 기관 강의 전문 Figma Tutor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "피그마튜터 하이서 | Figma 실전 교육 전문",
    description:
      "10년차 프로덕트 디자이너가 직접 가르치는 Figma 실전 교육. 50개+ 기업 출강 경험으로 검증된 커리큘럼.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "피그마튜터 하이서",
  alternateName: "Figma Tutor",
  url: siteUrl,
  logo: `${siteUrl}/favicon.png`,
  image: `${siteUrl}/og-image.png`,
  description:
    "10년차 프로덕트 디자이너가 직접 가르치는 Figma 실전 교육. 50개+ 기업 출강, 디자인 시스템, UI/UX, AI 디자인 교육.",
  founder: {
    "@type": "Person",
    name: "하이서",
    alternateName: "피그마튜터",
    jobTitle: "UI/UX Product Designer / Figma Educator",
    knowsAbout: [
      "Figma",
      "UI Design",
      "UX Design",
      "Design System",
      "AI Design",
    ],
  },
  sameAs: [
    "https://www.instagram.com/figma_tutor/",
    "https://www.youtube.com/channel/UCd7KZCoLd9JK_wNuLHQBPOA/",
    "https://www.figmapedia.com/",
  ],
  areaServed: {
    "@type": "Country",
    name: "South Korea",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Figma 교육 프로그램",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "Figma 실무 튜토리얼",
          description:
            "Auto Layout, Components, Variables 등 실무 핵심 기능 실습 중심 교육",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "디자인 시스템 구축",
          description: "토큰, 컴포넌트, 문서화까지 실무 적용 가능한 디자인 시스템 교육",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "UI/UX 디자인 실습",
          description: "실제 서비스 케이스 스터디 기반 사용자 중심 인터페이스 디자인 교육",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "AI 디자인 교육",
          description: "AI 도구와 Figma를 결합한 디자인 생산성 극대화 교육",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <head>
        <meta name="google-site-verification" content="y-RbUPkkYcNnM3n_jWURHjJbrX1XKSjThqk6cAtvFjA" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
