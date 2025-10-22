"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

const galleryImages = [
  "BE8A31D1-7ED7-4040-8FB1-E4F0A9B7E930.jpg",
  "D19F1D92-8212-4DAB-9A49-7ED7D93A1D13.jpg",
  "F7290872-17E8-4896-9F80-C630CDF8DD8B.jpg",
  "B0B2DA52-C8C0-49BF-8974-B711658C3D78.jpg",
  "47F28ABE-AB8F-4C75-A170-61B41756CC90.jpg",
  "S__8364103_0.jpg",
  "S__8364106_0.jpg",
  "S__8364107_0.jpg",
  "F136EF56-3656-4392-A3E2-35210D37FAF8.jpg",
]

// ランダムな高さを生成する関数
const getRandomHeight = () => {
  const heights = [200, 250, 300, 350, 400, 450]
  return heights[Math.floor(Math.random() * heights.length)]
}

// 画像をランダムにシャッフルする関数
const shuffleArray = (array: string[]) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function GalleryPage() {
  const shuffledImages = shuffleArray(galleryImages)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">ギャラリー</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              RAKEY FIELDの作業風景や取り扱い車両、サービスの様子をご覧ください。
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-1 space-y-1">
            {shuffledImages.map((image, index) => {
              const randomHeight = getRandomHeight()
              return (
                <Card 
                  key={`${image}-${index}`} 
                  className="break-inside-avoid mb-1 overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative">
                    <Image
                      src={`/${image}`}
                      alt={`ギャラリー画像 ${index + 1}`}
                      width={400}
                      height={randomHeight}
                      className="w-full object-cover"
                      style={{ height: `${randomHeight}px` }}
                    />
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Back to Home */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <a 
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-semibold"
          >
            ← ホームに戻る
          </a>
        </div>
      </div>
    </div>
  )
}