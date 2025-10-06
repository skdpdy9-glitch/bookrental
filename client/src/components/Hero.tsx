import { Button } from "@/components/ui/button";
import { BookOpen, Users } from "lucide-react";

export default function Hero() {
  const scrollToRentalForm = () => {
    const form = document.getElementById('rental-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-primary/10 via-background to-chart-1/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              전공책, 이제<br />
              <span className="text-primary">사지 말고 빌리세요</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              한 학기 쓰고 버리는 전공책, 이제 똑똑하게 빌려 쓰세요.<br />
              비용도 절감하고 환경도 지키는 대학생 맞춤 솔루션 💚
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={scrollToRentalForm}
                data-testid="button-rental-cta"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                지금 대여하기
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
                data-testid="button-learn-more"
              >
                자세히 알아보기
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4">
              <Users className="h-4 w-4" />
              <span>전국 50개 대학 3,000명이 이용중</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-chart-1/20 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/30 to-chart-1/30 rounded-2xl transform -rotate-6"></div>
              <div className="relative h-full flex items-center justify-center">
                <BookOpen className="h-48 w-48 text-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
