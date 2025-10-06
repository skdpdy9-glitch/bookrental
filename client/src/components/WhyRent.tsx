import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, Users2, Recycle } from "lucide-react";

export default function WhyRent() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              솔직히 전공책,<br />
              한 학기만 쓰잖아요
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              학기 시작할 때 10만원씩 전공책 사고, 학기 끝나면 책장에 쌓아두고...<br />
              이제 그만 하고 싶지 않나요? 🤔
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              우리 서비스를 이용하면 같은 책을 <span className="text-primary font-semibold">30%의 가격</span>으로 빌려 쓸 수 있어요.
              남는 돈으로 치킨도 먹고, 카페도 가고! 💸
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <TrendingDown className="h-8 w-8 text-chart-1 mx-auto mb-2" />
                  <p className="text-2xl font-bold">70%</p>
                  <p className="text-sm text-muted-foreground">비용 절감</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Users2 className="h-8 w-8 text-chart-1 mx-auto mb-2" />
                  <p className="text-2xl font-bold">3,000+</p>
                  <p className="text-sm text-muted-foreground">이용 학생</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Recycle className="h-8 w-8 text-chart-1 mx-auto mb-2" />
                  <p className="text-2xl font-bold">5,000+</p>
                  <p className="text-sm text-muted-foreground">재사용 도서</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-chart-1/20 rounded-2xl flex items-center justify-center p-8">
              <div className="text-center space-y-4">
                <div className="text-6xl">📚</div>
                <p className="text-xl font-semibold">지속 가능한 교육</p>
                <p className="text-muted-foreground">한 권의 책이 여러 학생에게 지식을 전달합니다</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
