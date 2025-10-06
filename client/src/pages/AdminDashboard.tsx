import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LogOut, BookOpen, Megaphone, Gift } from "lucide-react";

// TODO: Remove mock data - This is for design prototype only
const mockRentals = [
  { id: 1, name: "김철수", email: "kim@univ.ac.kr", department: "컴퓨터공학과", studentId: "2024001", phone: "010-1234-5678", rentalDate: "2025-03-01", returnDate: "2025-06-30" },
  { id: 2, name: "이영희", email: "lee@univ.ac.kr", department: "경영학과", studentId: "2024002", phone: "010-2345-6789", rentalDate: "2025-03-05", returnDate: "2025-06-30" }
];

const mockAds = [
  { id: 1, companyName: "(주)테크컴퍼니", representative: "박대표", phone: "02-1234-5678", email: "ad@tech.com", date: "2025-01-15" },
  { id: 2, companyName: "스타트업코리아", representative: "최대표", phone: "02-2345-6789", email: "marketing@startup.kr", date: "2025-01-20" }
];

const mockDonations = [
  { id: 1, name: "홍길동", representative: "홍길동", phone: "010-3456-7890", email: "hong@email.com", date: "2025-01-18" },
  { id: 2, name: "(주)출판사", representative: "김편집", phone: "02-3456-7890", email: "donation@publisher.com", date: "2025-01-22" }
];

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (!loggedIn) {
      setLocation('/admin');
    } else {
      setIsLoggedIn(true);
    }
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    setLocation('/admin');
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">관리자 대시보드</h1>
            <Button variant="outline" onClick={handleLogout} data-testid="button-logout">
              <LogOut className="mr-2 h-4 w-4" />
              로그아웃
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">대여 신청</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="text-rental-count">{mockRentals.length}</div>
              <p className="text-xs text-muted-foreground">총 신청 건수</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">광고 신청</CardTitle>
              <Megaphone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="text-ad-count">{mockAds.length}</div>
              <p className="text-xs text-muted-foreground">총 신청 건수</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">기부 신청</CardTitle>
              <Gift className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="text-donation-count">{mockDonations.length}</div>
              <p className="text-xs text-muted-foreground">총 신청 건수</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="rentals" className="space-y-6">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3">
            <TabsTrigger value="rentals" data-testid="tab-rentals">도서 대여</TabsTrigger>
            <TabsTrigger value="ads" data-testid="tab-ads">광고 신청</TabsTrigger>
            <TabsTrigger value="donations" data-testid="tab-donations">기부 신청</TabsTrigger>
          </TabsList>

          <TabsContent value="rentals" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>도서 대여 신청 목록</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>이름</TableHead>
                      <TableHead>학과</TableHead>
                      <TableHead>학번</TableHead>
                      <TableHead>이메일</TableHead>
                      <TableHead>전화번호</TableHead>
                      <TableHead>대여일</TableHead>
                      <TableHead>반납일</TableHead>
                      <TableHead>상태</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockRentals.map((rental) => (
                      <TableRow key={rental.id} data-testid={`row-rental-${rental.id}`}>
                        <TableCell className="font-medium">{rental.name}</TableCell>
                        <TableCell>{rental.department}</TableCell>
                        <TableCell className="font-mono text-sm">{rental.studentId}</TableCell>
                        <TableCell>{rental.email}</TableCell>
                        <TableCell>{rental.phone}</TableCell>
                        <TableCell>{rental.rentalDate}</TableCell>
                        <TableCell>{rental.returnDate}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-chart-1/10 text-chart-1 border-chart-1/20">대여중</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ads" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>광고 신청 목록</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>기업명</TableHead>
                      <TableHead>대표자</TableHead>
                      <TableHead>전화번호</TableHead>
                      <TableHead>이메일</TableHead>
                      <TableHead>신청일</TableHead>
                      <TableHead>상태</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockAds.map((ad) => (
                      <TableRow key={ad.id} data-testid={`row-ad-${ad.id}`}>
                        <TableCell className="font-medium">{ad.companyName}</TableCell>
                        <TableCell>{ad.representative}</TableCell>
                        <TableCell>{ad.phone}</TableCell>
                        <TableCell>{ad.email}</TableCell>
                        <TableCell>{ad.date}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-chart-4/10 text-chart-4 border-chart-4/20">검토중</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="donations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>기부 신청 목록</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>기부자명</TableHead>
                      <TableHead>담당자</TableHead>
                      <TableHead>전화번호</TableHead>
                      <TableHead>이메일</TableHead>
                      <TableHead>신청일</TableHead>
                      <TableHead>상태</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockDonations.map((donation) => (
                      <TableRow key={donation.id} data-testid={`row-donation-${donation.id}`}>
                        <TableCell className="font-medium">{donation.name}</TableCell>
                        <TableCell>{donation.representative}</TableCell>
                        <TableCell>{donation.phone}</TableCell>
                        <TableCell>{donation.email}</TableCell>
                        <TableCell>{donation.date}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-chart-1/10 text-chart-1 border-chart-1/20">승인</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
