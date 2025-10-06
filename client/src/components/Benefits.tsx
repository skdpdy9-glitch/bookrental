import { DollarSign, Leaf, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: DollarSign,
    title: "비용 절감",
    description: "새 책 가격의 30%만으로 한 학기 동안 사용 가능"
  },
  {
    icon: Leaf,
    title: "환경 보호",
    description: "한 권의 책을 여러 학생이 돌려 쓰며 지구를 지켜요"
  },
  {
    icon: Clock,
    title: "편리한 대여/반납",
    description: "캠퍼스 내 픽업 포인트에서 빠르고 간편하게"
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">왜 전공책을 대여해야 할까요?</h2>
          <p className="text-lg text-muted-foreground">똑똑한 대학생이라면 이미 선택했어요</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover-elevate transition-all" data-testid={`card-benefit-${index}`}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
