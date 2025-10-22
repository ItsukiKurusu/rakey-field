"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-bold text-white tracking-wider mb-4">RAKEY FIELD</h1>
            <div className="flex items-center justify-center gap-4 flex-wrap text-white text-sm md:text-base font-semibold">
              <span className="bg-accent px-4 py-2 rounded">SALES</span>
              <span className="bg-accent px-4 py-2 rounded">SERVICE</span>
              <span className="text-2xl">GENUINE QUALITY</span>
              <span className="bg-accent px-4 py-2 rounded">REBUILD</span>
              <span className="bg-accent px-4 py-2 rounded">REPAIR</span>
            </div>
          </div>

          <p className="text-2xl md:text-3xl text-white font-serif mb-12 text-balance">PROFESSIONAL SERVICE SUPPLY</p>

          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            自動車買取・販売からレンタカー、アンティーク雑貨まで。
            <br />
            お客様のカーライフを総合的にサポートする、信頼のプロフェッショナル集団です。
          </p>

          <div className="flex justify-center">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white/10 bg-transparent"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth' 
                })
              }}
            >
              お問い合わせ
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  )
}
