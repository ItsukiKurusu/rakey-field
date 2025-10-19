import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RAKEY FIELD - Professional Service Supply",
  description:
    "自動車買取・販売、レンタカー、アンティーク雑貨、車検、保険まで。大阪府堺市のRAKEY FIELDがお客様のカーライフを総合的にサポートします。",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
