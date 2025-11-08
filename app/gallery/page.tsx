"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

// ✅ 各画像にキャプションを追加
const galleryImages = [
  { src: "BE8A31D1-7ED7-4040-8FB1-E4F0A9B7E930.jpg", caption: "店舗外観①" },
  { src: "D19F1D92-8212-4DAB-9A49-7ED7D93A1D13.jpg", caption: "店舗外観②" },
  { src: "F7290872-17E8-4896-9F80-C630CDF8DD8B.jpg", caption: "ショールーム①" },
  { src: "B0B2DA52-C8C0-49BF-8974-B711658C3D78.jpg", caption: "ショールーム②" },
  { src: "47F28ABE-AB8F-4C75-A170-61B41756CC90.jpg", caption: "ショールーム③" },
  { src: "S__8364103_0.jpg", caption: "事務所内観" },
  { src: "S__8364106_0.jpg", caption: "お客様の納車準備" },
  { src: "S__8364107_0.jpg", caption: "イベント展示の様子" },
  { src: "F136EF56-3656-4392-A3E2-35210D37FAF8.jpg", caption: "RAKEY FIELD 外観" },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)

  const goToPrevious = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1)
  }

  const goToNext = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0)
  }

  // キーボードナビゲーション
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage === null) return
      switch (event.key) {
        case "Escape": closeLightbox(); break
        case "ArrowLeft": goToPrevious(); break
        case "ArrowRight": goToNext(); break
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">ギャラリー</h1>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
          RAKEY FIELDの作業風景や取り扱い車両をご覧ください。
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((item, index) => (
            <div 
              key={index}
              className="group cursor-pointer border border-gray-300 bg-gray-50 overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={`/${item.src}`}
                alt={item.caption}
                width={500}
                height={400}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-center text-sm text-gray-700 py-2 bg-gray-100">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full text-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Prev / Next */}
            <button onClick={(e) => { e.stopPropagation(); goToPrevious(); }} 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300">
              <ChevronLeft className="h-12 w-12" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); goToNext(); }} 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300">
              <ChevronRight className="h-12 w-12" />
            </button>

            {/* Image */}
            <Image
              src={`/${galleryImages[selectedImage].src}`}
              alt={galleryImages[selectedImage].caption}
              width={800}
              height={600}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
              onClick={(e) => e.stopPropagation()}
            />
            {/* ✅ キャプションをLightboxにも表示 */}
            <p className="text-white text-lg mt-4">{galleryImages[selectedImage].caption}</p>
          </div>
        </div>
      )}
    </div>
  )
}
