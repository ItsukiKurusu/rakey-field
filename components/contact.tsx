"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-24 bg-muted" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">お問い合わせ</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ご質問やご相談など、お気軽にお問い合わせください。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">お問い合わせフォーム</CardTitle>
                <CardDescription>以下のフォームにご記入の上、送信してください。</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">お名前 *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">電話番号</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="090-1234-5678"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">お問い合わせ内容 *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="お問い合わせ内容をご記入ください"
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    送信する
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-2 bg-primary text-white">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="h-6 w-6" />
                    <CardTitle className="text-xl text-white">お電話でのお問い合わせ</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-3xl font-bold mb-1">072-339-4549</p>
                    <p className="text-white/80 text-sm">営業時間: 10:00 〜 18:00</p>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-white/80 mb-1">携帯電話</p>
                    <p className="text-xl font-semibold">090-1893-0467</p>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-white/80 mb-1">FAX</p>
                    <p className="text-xl font-semibold">072-339-4551</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-primary text-white">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="h-6 w-6" />
                    <CardTitle className="text-xl text-white">メールでのお問い合わせ</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href="mailto:haegiwa.com@icloud.com" className="text-xl font-semibold hover:underline break-all">
                    haegiwa.com@icloud.com
                  </a>
                  <p className="text-white/80 text-sm mt-3">24時間受付中。営業時間内に返信いたします。</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    ※ お問い合わせいただいた内容は、営業時間内に順次対応させていただきます。
                    <br />※ 定休日は不定休となっておりますので、お急ぎの場合は携帯電話までご連絡ください。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
