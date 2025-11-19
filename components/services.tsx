import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Wrench, Package, Shield, FileCheck } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "自動車 買取/販売",
    description: "高価買取から厳選された中古車販売まで、お客様のニーズに合わせた最適な車選びをサポートします。",
  },
  {
    icon: Wrench,
      title: "レンタカー",
      description: "多様な車種と柔軟なプランで、快適なレンタカーサービスをご提供します。",
  },
  {
    icon: Package,
    title: "アンティーク雑貨 輸入/販売",
    description: "厳選されたアンティーク雑貨の輸入・販売。個性的な空間づくりをお手伝いします。",
  },
  {
    icon: FileCheck,
      title: "メンテナンス/車検/板金",
      description: "車検、メンテナンス、板金修理まで、安心と信頼の技術でお車をサポートします。",
  },
  {
    icon: Shield,
    title: "生命保険/損害保険",
    description: "損害保険募集人資格を持つスタッフが、お客様に最適な保険プランをご提案します。",
  },
]

export function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-primary">サービス一覧</h2>
          <p className="text-lg leading-relaxed text-primary">
            お客様のカーライフを総合的にサポートする、多彩なサービスをご提供しています。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-2 shadow-lg hover:border-primary hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4 shadow-md">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Qualifications */}
        <div className="mt-16 max-w-7xl mx-auto">
          <Card className="bg-primary text-white border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-white">保有資格</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <FileCheck className="h-10 w-10" />
                  <p className="font-semibold">古物商許可</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Car className="h-10 w-10" />
                  <p className="font-semibold">レンタカー事業者証明書</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Shield className="h-10 w-10" />
                  <p className="font-semibold">損害保険募集人資格</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
