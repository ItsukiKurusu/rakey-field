import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">RAKEY FIELD</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">PROFESSIONAL SERVICE SUPPLY</p>
              <div className="flex gap-2 flex-wrap text-xs">
                 <span className="bg-accent px-3 py-1 rounded">SALES</span>
                 <span className="bg-accent px-3 py-1 rounded">SERVICE</span>
                 <span className="bg-accent px-3 py-1 rounded">REBUILD</span>
                 <span className="bg-accent px-3 py-1 rounded">REPAIR</span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">お問い合わせ</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>TEL: 072-339-4549</p>
                    <p className="text-white/70">MOBILE: 090-1893-0467</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <a href="mailto:haegiwa.com@icloud.com" className="hover:underline break-all">
                    haegiwa.com@icloud.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>10:00 〜 18:00</p>
                    <p className="text-white/70">定休日: 不定休</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">ページ</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:underline text-white/80 hover:text-white transition-colors">
                    ホーム
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="hover:underline text-white/80 hover:text-white transition-colors">
                    ギャラリー
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:underline text-white/80 hover:text-white transition-colors">
                    サービス一覧
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="hover:underline text-white/80 hover:text-white transition-colors">
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">所在地</h4>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <address className="not-italic leading-relaxed">
                  〒599-8242
                  <br />
                  大阪府堺市中区陶器北845-7
                </address>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
              <p>&copy; {new Date().getFullYear()} RAKEY FIELD. All rights reserved.</p>
              <div className="flex gap-4">
                <span>古物商許可</span>
                <span>レンタカー事業者証明書</span>
                <span>損害保険募集人資格</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
