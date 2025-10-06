import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Megaphone, Gift } from "lucide-react";

const partnerFormSchema = z.object({
  companyName: z.string().min(2, "기업명을 입력해주세요"),
  representative: z.string().min(2, "대표자명을 입력해주세요"),
  phone: z.string().min(10, "전화번호를 입력해주세요"),
  email: z.string().email("올바른 이메일을 입력해주세요")
});

type PartnerFormData = z.infer<typeof partnerFormSchema>;

export default function Footer() {
  const { toast } = useToast();
  const [isSubmittingAd, setIsSubmittingAd] = useState(false);
  const [isSubmittingDonation, setIsSubmittingDonation] = useState(false);

  const adForm = useForm<PartnerFormData>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: { companyName: "", representative: "", phone: "", email: "" }
  });

  const donationForm = useForm<PartnerFormData>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: { companyName: "", representative: "", phone: "", email: "" }
  });

  const onAdSubmit = async (data: PartnerFormData) => {
    setIsSubmittingAd(true);
    console.log('Ad form submitted:', data);
    
    // TODO: Remove mock functionality - Replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "광고 신청 완료!",
      description: "광고 신청이 접수되었습니다. 담당자가 곧 연락드리겠습니다."
    });
    
    adForm.reset();
    setIsSubmittingAd(false);
  };

  const onDonationSubmit = async (data: PartnerFormData) => {
    setIsSubmittingDonation(true);
    console.log('Donation form submitted:', data);
    
    // TODO: Remove mock functionality - Replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "기부 신청 완료!",
      description: "도서 기부 신청이 접수되었습니다. 감사합니다!"
    });
    
    donationForm.reset();
    setIsSubmittingDonation(false);
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Megaphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">광고주 모집</h3>
            </div>
            <p className="text-muted-foreground">
              대학생 타겟 마케팅을 원하시나요? 전국 대학생들에게 귀사의 서비스를 알려보세요.
            </p>
            <Form {...adForm}>
              <form onSubmit={adForm.handleSubmit(onAdSubmit)} className="space-y-4">
                <FormField
                  control={adForm.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>기업명</FormLabel>
                      <FormControl>
                        <Input placeholder="(주)회사명" {...field} data-testid="input-ad-company" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={adForm.control}
                    name="representative"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>대표자명</FormLabel>
                        <FormControl>
                          <Input placeholder="홍길동" {...field} data-testid="input-ad-representative" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={adForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>전화번호</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="02-1234-5678" {...field} data-testid="input-ad-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={adForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="contact@company.com" {...field} data-testid="input-ad-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  disabled={isSubmittingAd}
                  data-testid="button-submit-ad"
                >
                  {isSubmittingAd ? "신청 중..." : "광고 신청하기"}
                </Button>
              </form>
            </Form>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-chart-1/10 rounded-full flex items-center justify-center">
                <Gift className="h-6 w-6 text-chart-1" />
              </div>
              <h3 className="text-2xl font-bold">도서 기부</h3>
            </div>
            <p className="text-muted-foreground">
              사용하지 않는 전공책이 있으신가요? 후배들에게 나눔을 실천해주세요.
            </p>
            <Form {...donationForm}>
              <form onSubmit={donationForm.handleSubmit(onDonationSubmit)} className="space-y-4">
                <FormField
                  control={donationForm.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>기업명 / 개인명</FormLabel>
                      <FormControl>
                        <Input placeholder="홍길동" {...field} data-testid="input-donation-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={donationForm.control}
                    name="representative"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>담당자명</FormLabel>
                        <FormControl>
                          <Input placeholder="김담당" {...field} data-testid="input-donation-representative" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={donationForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>전화번호</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="010-1234-5678" {...field} data-testid="input-donation-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={donationForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="donor@email.com" {...field} data-testid="input-donation-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  variant="outline"
                  disabled={isSubmittingDonation}
                  data-testid="button-submit-donation"
                >
                  {isSubmittingDonation ? "신청 중..." : "기부 신청하기"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-lg font-bold">전공책 대여 서비스</p>
              <p className="text-sm text-muted-foreground">대학생을 위한 스마트한 교재 솔루션</p>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 전공책 대여. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
