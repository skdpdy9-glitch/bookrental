import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";

const rentalFormSchema = z.object({
  rentalDate: z.string().min(1, "대여 날짜를 선택해주세요"),
  returnDate: z.string().min(1, "반납 날짜를 선택해주세요"),
  name: z.string().min(2, "이름을 입력해주세요"),
  email: z.string().email("올바른 이메일을 입력해주세요"),
  department: z.string().min(2, "학과를 입력해주세요"),
  studentId: z.string().min(1, "학번을 입력해주세요"),
  phone: z.string().min(10, "올바른 전화번호를 입력해주세요")
});

type RentalFormData = z.infer<typeof rentalFormSchema>;

export default function RentalForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<RentalFormData>({
    resolver: zodResolver(rentalFormSchema),
    defaultValues: {
      rentalDate: "",
      returnDate: "",
      name: "",
      email: "",
      department: "",
      studentId: "",
      phone: ""
    }
  });

  const onSubmit = async (data: RentalFormData) => {
    setIsSubmitting(true);
    console.log('Rental form submitted:', data);
    
    // TODO: Remove mock functionality - Replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "신청 완료!",
      description: "전공책 대여 신청이 접수되었습니다. 곧 연락드리겠습니다."
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="rental-form" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">전공책 대여 신청</h2>
            <p className="text-lg text-muted-foreground">필요한 정보를 입력하고 빠르게 신청하세요</p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="rentalDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>대여 날짜</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type="date" 
                            {...field} 
                            data-testid="input-rental-date"
                          />
                          <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="returnDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>반납 날짜</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            type="date" 
                            {...field}
                            data-testid="input-return-date"
                          />
                          <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이름</FormLabel>
                    <FormControl>
                      <Input placeholder="홍길동" {...field} data-testid="input-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이메일</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="student@university.ac.kr" {...field} data-testid="input-email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>학과</FormLabel>
                      <FormControl>
                        <Input placeholder="컴퓨터공학과" {...field} data-testid="input-department" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="studentId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>학번</FormLabel>
                      <FormControl>
                        <Input placeholder="2024123456" {...field} data-testid="input-student-id" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>전화번호</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="010-1234-5678" {...field} data-testid="input-phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full md:w-auto md:px-12" 
                size="lg"
                disabled={isSubmitting}
                data-testid="button-submit-rental"
              >
                {isSubmitting ? "신청 중..." : "대여 신청하기"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
