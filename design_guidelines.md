# Design Guidelines: 전공책 대여 (University Textbook Rental Service)

## Design Approach

**Selected Approach:** Hybrid - Material Design foundation with Korean student platform sensibility

**Rationale:** This textbook rental service requires trustworthy, efficient functionality (Material Design) while appealing to Korean university students' aesthetic preferences. Drawing inspiration from popular Korean student services like Everytime, Toss, and Naver platforms that emphasize clarity, friendliness, and mobile-first design.

**Key Principles:**
- Clean, approachable aesthetics that feel student-friendly, not corporate
- Trust through transparency and clear information hierarchy
- Mobile-first responsive design (students primarily use mobile)
- Soft, welcoming colors that reduce transaction anxiety
- Korean typography standards with proper hangul rendering

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Main Brand: 99 65% 55% (Soft violet-blue - friendly, trustworthy)
- Dark Mode Primary: 99 50% 65%

**Accent Colors:**
- Success/CTA: 142 70% 45% (Fresh green - positive action)
- Dark Mode Accent: 142 60% 50%

**Neutral Colors:**
- Background Light: 0 0% 98%
- Background Dark: 222 47% 11%
- Text Light: 222 47% 11%
- Text Dark: 0 0% 98%
- Borders Light: 0 0% 90%
- Borders Dark: 217 33% 17%

**Semantic Colors:**
- Warning: 38 92% 50% (for due dates)
- Error: 0 84% 60%
- Info: 199 89% 48%

### B. Typography

**Font Families:**
- Primary: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif (Korean-optimized)
- Monospace: 'JetBrains Mono', Consolas, monospace (for student IDs, codes)

**Type Scale:**
- Hero: text-5xl md:text-6xl font-bold (48px-60px)
- Section Headers: text-3xl md:text-4xl font-bold (30px-36px)
- Subsection: text-xl md:text-2xl font-semibold (20px-24px)
- Body Large: text-lg (18px)
- Body: text-base (16px)
- Small: text-sm (14px)
- Caption: text-xs (12px)

**Font Weights:**
- Regular: 400 (body text)
- Medium: 500 (labels, subtle emphasis)
- Semibold: 600 (subsections)
- Bold: 700 (headers, CTAs)

### C. Layout System

**Spacing Units:** Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24 (focused set for consistency)

**Container Strategy:**
- Max width: max-w-6xl for content sections
- Hero: Full width with inner max-w-7xl
- Forms: max-w-2xl centered for optimal readability

**Grid System:**
- Mobile (base): Single column, p-4
- Tablet (md:): 2 columns for feature cards, p-6
- Desktop (lg:): Up to 3 columns, p-8

### D. Component Library

**Navigation:**
- Sticky header with subtle backdrop blur
- Logo left, navigation center, CTA right
- Mobile: Hamburger menu with slide-in drawer
- Height: h-16 md:h-20

**Buttons:**
- Primary: Solid background, rounded-lg, px-6 py-3, font-semibold
- Secondary: Outline with border-2, same padding
- Ghost: Text only with hover background
- All buttons: transition-all duration-200

**Form Elements:**
- Inputs: Rounded-lg border-2, p-3, focus:ring-2 focus:ring-primary
- Labels: text-sm font-medium mb-2
- Error states: Red border with error message below
- Success states: Green border with checkmark icon

**Cards:**
- Rounded-xl shadow-md hover:shadow-lg
- Padding: p-6
- Border: border border-gray-200 (light) / border-gray-700 (dark)
- Transition: transition-shadow duration-300

**Data Display:**
- Tables: Striped rows, sticky headers for admin dashboard
- Status badges: Rounded-full px-3 py-1 text-xs font-medium
- Stats counters: Large numbers (text-4xl) with labels below

**Overlays:**
- Modals: Centered, max-w-2xl, rounded-2xl, backdrop-blur
- Toasts: Top-right, slide-in animation, auto-dismiss after 5s
- Loading: Spinner with backdrop-blur-sm

### E. Animation Guidelines

**Minimal Animations:**
- Page transitions: Subtle fade-in (200ms)
- Button hovers: Scale-105 with shadow increase (150ms)
- Form submissions: Success checkmark animation (400ms)
- NO parallax, NO complex scroll triggers
- Admin dashboard: Real-time data updates with gentle fade-in

## Landing Page Specific Guidelines

### Hero Section (h-[80vh])
- Split layout: Left - Headline + CTA, Right - Hero image (students using textbooks)
- Headline: "전공책, 이제 사지 말고 빌리세요" (대학생 감성)
- Subheadline: Cost savings emphasis + environmental benefit
- Primary CTA: "지금 대여하기" (bright, prominent)
- Trust indicators: "OO개 대학 OOO명이 이용중" with small user avatars

### Sections (5-7 sections total):

1. **Benefits Section** (py-20)
   - 3-column grid (mobile stacks)
   - Icons + Short headline + Description
   - Benefits: 비용 절감, 환경 보호, 편리한 대여/반납

2. **How It Works** (py-20, bg-gray-50 dark mode)
   - 4-step visual timeline
   - Icons with connecting line
   - Steps: 신청 → 확인 → 수령 → 반납

3. **Rental Form Section** (py-24)
   - Centered form, max-w-2xl
   - Clear section header: "전공책 대여 신청"
   - All fields with proper labels
   - Date pickers for rental/return dates
   - Submit button: Full-width on mobile, auto-width desktop

4. **Why Rent Textbooks** (py-20)
   - 2-column layout with image
   - Student-friendly copy explaining benefits
   - Stats: Average savings, number of books available
   - Conversational tone (20대 초반 감성)

5. **Social Proof** (py-16)
   - Student testimonials in cards
   - Campus names + Student year
   - 2-3 columns on desktop

6. **Footer Multi-Section** (py-20, bg-gray-100 dark mode)
   - **Advertiser Recruitment**: Headline + short description + form (inline)
   - **Book Donation**: Headline + description + form (inline)
   - Forms side-by-side on desktop, stacked mobile
   - Company name, representative, phone, email fields
   - Trust badges: University partnerships logos

7. **Site Footer** (py-8, border-top)
   - Service info, contact, social links
   - Copyright notice

## Admin Dashboard Guidelines

**Layout:**
- Sidebar navigation (학생 대여, 광고 신청, 기부 신청)
- Main content area with data tables
- Top bar: Admin name, logout button

**Data Tables:**
- Sortable columns
- Search/filter functionality
- Status badges for rental status (대여중, 반납완료)
- Action buttons: View details, approve, etc.
- Pagination for large datasets

**Dashboard Cards:**
- Summary stats at top: Total rentals today, pending requests, active advertisements
- Color-coded by status

## Images

**Hero Section:**
- Large hero image showing diverse Korean university students happily studying with textbooks in modern campus setting
- Style: Bright, natural lighting, authentic campus environment
- Placement: Right side of hero (40% width on desktop, full-width background on mobile)

**Benefits Section:**
- Icon illustrations (not photos): Savings icon, eco-friendly icon, convenience icon
- Style: Line icons with brand color accent

**How It Works:**
- Simple illustrated icons for each step
- Consistent line-art style

**Social Proof:**
- Student headshot photos (circular avatars)
- Authentic, friendly expressions

**Footer Partnership:**
- University logo badges (grayscale, small)
- Company donation logos if applicable