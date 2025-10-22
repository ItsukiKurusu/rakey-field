"use client"

import Image from "next/image"

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
        <div className="max-w-5xl mx-auto">
          {/* 写真のオリジナル比率を保持したレイアウト */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
            {shuffledImages.map((image, index) => (
              <div 
                key={`${image}-${index}`} 
                className="overflow-hidden border border-gray-300 bg-gray-50"
              >
                <Image
                  src={`/${image}`}
                  alt={`ギャラリー画像 ${index + 1}`}
                  width={500}
                  height={400}
                  className="w-full h-auto hover:scale-105 transition-transform duration-300"
                  style={{ aspectRatio: 'auto' }}
                />
              </div>
            ))}
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