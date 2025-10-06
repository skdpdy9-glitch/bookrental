import { FileText, CheckCircle, Package, RotateCcw } from "lucide-react";

const steps = [
  { icon: FileText, title: "신청", description: "원하는 전공책 대여 신청" },
  { icon: CheckCircle, title: "확인", description: "신청 확인 및 승인" },
  { icon: Package, title: "수령", description: "캠퍼스 내 픽업 포인트 수령" },
  { icon: RotateCcw, title: "반납", description: "학기말 간편 반납" }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">이용 방법</h2>
          <p className="text-lg text-muted-foreground">4단계로 끝나는 간편한 프로세스</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative" data-testid={`step-${index}`}>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center relative">
                  <step.icon className="h-10 w-10 text-primary" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
