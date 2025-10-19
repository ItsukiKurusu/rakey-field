import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react"

export function About() {
  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">会社情報</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              大阪府堺市を拠点に、お客様に寄り添ったサービスを提供しています。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="pt-6">
                <dl className="space-y-6">
                  <div>
                    <dt className="text-sm font-semibold text-muted-foreground mb-2">社名</dt>
                    <dd className="text-2xl font-bold text-foreground">RAKEY FIELD</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-muted-foreground mb-2">代表</dt>
                    <dd className="text-xl text-foreground">清水 健 (Ken Shimizu)</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      住所
                    </dt>
                    <dd className="text-base text-foreground leading-relaxed">
                      〒599-8242
                      <br />
                      大阪府堺市中区陶器北845-7
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <dl className="space-y-6">
                  <div>
                    <dt className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      お電話でのお問い合わせ
                    </dt>
                    <dd className="space-y-2">
                      <p className="text-lg font-semibold text-foreground">TEL: 072-339-4549</p>
                      <p className="text-base text-muted-foreground">FAX: 072-339-4551</p>
                      <p className="text-base text-muted-foreground">MOBILE: 090-1893-0467</p>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      メールでのお問い合わせ
                    </dt>
                    <dd className="text-base text-foreground">
                      <a href="mailto:haegiwa.com@icloud.com" className="text-primary hover:underline">
                        haegiwa.com@icloud.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      営業時間
                    </dt>
                    <dd className="text-base text-foreground">10:00 〜 18:00</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      定休日
                    </dt>
                    <dd className="text-base text-foreground">不定休</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-2 overflow-hidden">
            <CardContent className="p-0">
              <div className="w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2582.644682747006!2d135.52518125483408!3d34.51461621683312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDMwJzQ4LjQiTiAxMzXCsDMxJzQyLjAiRQ!5e0!3m2!1sja!2sjp!4v1760885544361!5m2!1sja!2sjp"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
