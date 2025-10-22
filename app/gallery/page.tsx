"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : shuffledImages.length - 1
    setCurrentIndex(newIndex)
    setSelectedImage(shuffledImages[newIndex])
  }

  const goToNext = () => {
    const newIndex = currentIndex < shuffledImages.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    setSelectedImage(shuffledImages[newIndex])
  }

  // キーボードナビゲーション
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage) return

      switch (event.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowLeft':
          goToPrevious()
          break
        case 'ArrowRight':
          goToNext()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, currentIndex])

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
                className="overflow-hidden border border-gray-300 bg-gray-50 cursor-pointer group"
                onClick={() => openLightbox(image, index)}
              >
                <Image
                  src={`/${image}`}
                  alt={`ギャラリー画像 ${index + 1}`}
                  width={500}
                  height={400}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  style={{ aspectRatio: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            {/* Image */}
            <div className="relative">
              <Image
                src={`/${selectedImage}`}
                alt={`ギャラリー画像 ${currentIndex + 1}`}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
              {currentIndex + 1} / {shuffledImages.length}
            </div>
          </div>
        </div>
      )}

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