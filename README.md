# Wachirada Developer Portfolio 🚀
**Live URL:** [https://wachirada-portfolio.vercel.app](https://wachirada-portfolio.vercel.app)

เว็บไซต์พอร์ตโฟลิโอส่วนตัว (Personal Developer Portfolio) ของ **Wachirada (วชิรดา)** ออกแบบด้วยสไตล์ Modern Dark Theme รองรับ Responsive 100% ทุกขนาดหน้าจอ มีระบบกรองผลงาน Interactive Contact Form และตารางอธิบายโครงสร้างเทคโนโลยีที่ใช้พัฒนาอย่างครบถ้วน

---

## 🛠️ เทคโนโลยีและหน้าที่การทำงาน (Tech Stack & Roles)

ตามข้อกำหนดของโปรเจกต์ มีการเลือกใช้และจัดวางหน้าที่ของเทคโนโลยี ดังนี้:

| เทคโนโลยี (Technology) | หน้าที่ (Role & Purpose) | รายละเอียดในการนำมาใช้งานจริง |
| :--- | :--- | :--- |
| **React** | ใช้พัฒนาเว็บไซต์ด้วย Component | แบ่งหน้าเว็บออกเป็นส่วนย่อยๆ เช่น `Navbar`, `Hero`, `About`, `TechStack`, `Projects`, `Experience`, `Contact`, `Footer` ช่วยให้จัดการ State และนำโค้ดกลับมาใช้ซ้ำได้อย่างเป็นระบบ |
| **Vite** | ใช้สร้างและจัดการโปรเจกต์ | เป็น Next-Generation Frontend Tooling ช่วยสร้างโครงสร้างโปรเจกต์ รัน Local Dev Server ด้วย Fast HMR (เสี้ยววินาที) และบิลด์ Production Bundle ที่มีขนาดกะทัดรัดและโหลดเร็ว |
| **Tailwind CSS** | ใช้ตกแต่งและกำหนดรูปแบบเว็บไซต์ | กำหนดคลาสตกแต่ง UI สไตล์ Utility-First ทำ Responsive Design (มือถือ, แท็บเล็ต, หน้าจอคอม), โทนสี Dark Theme, Glassmorphism Backdrop Blur และ Glow Effects |
| **JavaScript (ES6+)** | ใช้เพิ่มลูกเล่นและควบคุมการทำงานของเว็บไซต์ | จัดการ Dynamic Logic เช่น การสลับแท็บหมวดหมู่ผลงาน (Filter Tabs), เปิด/ปิด Mobile Menu Drawer, แสดง Modal รายละเอียดโปรเจกต์, คัดลอกอีเมล (Clipboard API) และจัดการฟอร์มติดต่อ |
| **GitHub** | ใช้จัดเก็บและจัดการ Source Code | เป็น Version Control Repository สำหรับบันทึกประวัติการพัฒนา (Git Commits), แตก Branch, สำรองโค้ด และเชื่อมโยง Webhook ไปยัง Vercel เพื่อทำ CI/CD อัตโนมัติ |
| **Vercel** | ใช้เผยแพร่เว็บไซต์ขึ้นออนไลน์ (Deployment) | ให้บริการ Edge Network Hosting เผยแพร่เว็บขึ้นสู่อินเทอร์เน็ตที่โดเมน `wachirada-portfolio.vercel.app` พร้อม SSL (HTTPS), Continuous Deployment ทุกครั้งที่มีการ Push โค้ด |

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
Vercel-wachirada/
├── public/                 # Static Assets & Favicons
├── src/
│   ├── components/         # Reusable React Components
│   │   ├── Navbar.jsx      # Navigation Bar with responsive menu
│   │   ├── Hero.jsx        # Hero banner, status pill & code card
│   │   ├── About.jsx       # Biography & 4 Core Pillars
│   │   ├── TechStack.jsx   # Interactive tech cards & matrix table
│   │   ├── Projects.jsx    # Projects showcase, filter & modal
│   │   ├── Experience.jsx  # Workflow steps & career milestones
│   │   ├── Contact.jsx     # Interactive contact form & socials
│   │   ├── Footer.jsx      # Footer, quick links & back-to-top
│   │   └── Icons.jsx       # SVG Icons (GitHub, etc.)
│   ├── data/
│   │   └── portfolioData.js # Structured data for easy editing
│   ├── App.jsx             # Main Application Entry Component
│   ├── index.css           # Tailwind CSS imports & global styles
│   └── main.jsx            # React 19 DOM Root Rendering
├── index.html              # HTML5 Template with Google Fonts
├── package.json            # Project dependencies and scripts
├── vercel.json             # Vercel SPA routing configuration
└── vite.config.js          # Vite configuration with Tailwind plugin
```

---

## 💻 วิธีการรันบนเครื่องของคุณ (Local Development)

### 1. ติดตั้ง Dependencies
```bash
npm install
```

### 2. รันโหมด Development
```bash
npm run dev
```
เปิดบราวเซอร์ไปที่ `http://localhost:5173`

### 3. ทดสอบ Build เพื่อเตรียมขึ้น Production
```bash
npm run build
```

---

## 🚀 ขั้นตอนการนำขึ้น GitHub และเผยแพร่บน Vercel (Deployment Guide)

### ขั้นตอนที่ 1: เตรียม Git และบันทึกโค้ด
เปิด Terminal ในโฟลเดอร์โปรเจกต์ แล้วรันคำสั่ง:
```bash
git init
git add .
git commit -m "feat: complete Wachirada portfolio with React, Vite, Tailwind CSS"
```

### ขั้นตอนที่ 2: อัปโหลดขึ้น GitHub
1. เข้าไปที่ [GitHub.com](https://github.com) แล้วกด **New repository**
2. ตั้งชื่อ Repository เช่น `wachirada-portfolio` (เลือก Public หรือ Private ตามต้องการ)
3. นำคำสั่งจาก GitHub มาเชื่อมโยงและ Push โค้ด เช่น:
```bash
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/wachirada-portfolio.git
git push -u origin main
```

### ขั้นตอนที่ 3: เผยแพร่ผ่าน Vercel (เลือกได้ 2 วิธี)

#### วิธีที่ 3.1: ผ่าน Vercel Dashboard (แนะนำ - สะดวกที่สุด)
1. เข้าไปที่ [Vercel Dashboard](https://vercel.com/dashboard) แล้วล็อกอินด้วย GitHub
2. กดปุ่ม **"Add New..."** -> **"Project"**
3. เลือก Repository `wachirada-portfolio` จากรายการใน GitHub แล้วกด **"Import"**
4. ในส่วน **Project Name**:
   - ตั้งชื่อโปรเจกต์เป็น `wachirada-portfolio` (เพื่อให้ได้โดเมน `wachirada-portfolio.vercel.app`)
5. ในส่วน **Framework Preset**:
   - ระบบจะตรวจจับเป็น **Vite** อัตโนมัติ (Build Command: `npm run build`, Output Directory: `dist`)
6. กดปุ่ม **"Deploy"**
7. รอประมาณ 20-30 วินาที เว็บไซต์จะออนไลน์และพร้อมเข้าใช้งานที่:
   👉 **`https://wachirada-portfolio.vercel.app`**

#### วิธีที่ 3.2: ผ่าน Vercel CLI
```bash
npx vercel
```
- ทำตามขั้นตอนบนหน้าจอ ล็อกอินและยืนยันการ Deploy
- เมื่อต้องการ Deploy เข้า Production Domain:
```bash
npx vercel --prod
```

---

## 🎨 การปรับแต่งข้อมูลส่วนตัว (Customization)
คุณสามารถเข้าไปแก้ไขข้อมูลส่วนตัว ชื่อ อีเมล ลิงก์โปรเจกต์ และรูปภาพได้ง่ายๆ ที่ไฟล์:
👉 `src/data/portfolioData.js`
