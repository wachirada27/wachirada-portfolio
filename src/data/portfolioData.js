export const personalInfo = {
  name: "Wachirada",
  fullName: "Wachirada (วชิรดา)",
  title: "Frontend Developer & Web Creator",
  tagline: "มุ่งมั่นพัฒนาเว็บไซต์ที่สวยงาม รวดเร็ว และตอบโจทย์ผู้ใช้งานด้วยเทคโนโลยีเว็บสมัยใหม่",
  bio: "ยินดีต้อนรับสู่ Portfolio ของฉัน! ฉันเป็นนักพัฒนาเว็บไซต์ที่ชื่นชอบการสร้างสรรค์เว็บแอปพลิเคชันที่ทันสมัย มีประสิทธิภาพสูง และตอบสนองได้ทุกขนาดหน้าจอ (Responsive) เชี่ยวชาญในการพัฒนาด้วย React, JavaScript, Tailwind CSS และการจัดการระบบ CI/CD ผ่าน GitHub และ Vercel",
  email: "wachirada.contact@gmail.com",
  github: "https://github.com",
  location: "Bangkok, Thailand",
  status: "พร้อมรับงาน (Available for Work)",
  domain: "wachirada-portfolio.vercel.app"
};

export const techStackList = [
  {
    name: "React",
    role: "ใช้พัฒนาเว็บไซต์ด้วย Component",
    description: "สร้าง UI ที่ยืดหยุ่น แยกส่วนประกอบของเว็บเป็น Component ที่นำกลับมาใช้ใหม่ได้ง่าย มี State Management ที่ทรงพลัง",
    category: "Frontend",
    icon: "Atom",
    level: "Advanced",
    color: "from-cyan-500 to-blue-500",
    badge: "Component Architecture"
  },
  {
    name: "Vite",
    role: "ใช้สร้างและจัดการโปรเจกต์",
    description: "เครื่องมือพัฒนาเว็บเจเนอเรชันใหม่ที่มี Hot Module Replacement (HMR) รวดเร็วระดับเสี้ยววินาที และ Build ระบบได้ทรงประสิทธิภาพ",
    category: "Build Tools",
    icon: "Zap",
    level: "Proficient",
    color: "from-purple-500 to-amber-500",
    badge: "Blazing Fast Bundler"
  },
  {
    name: "Tailwind CSS",
    role: "ใช้ตกแต่งและกำหนดรูปแบบเว็บไซต์",
    description: "Utility-first CSS Framework ที่ช่วยให้การจัด Layout, สี, ฟอนต์, แอนิเมชัน และ Responsive Design ทำได้อย่างรวดเร็วและสวยงาม",
    category: "Styling",
    icon: "Palette",
    level: "Advanced",
    color: "from-sky-400 to-teal-500",
    badge: "Modern Utility Styling"
  },
  {
    name: "JavaScript (ES6+)",
    role: "ใช้เพิ่มลูกเล่นและควบคุมการทำงานของเว็บไซต์",
    description: "ภาษาหลักในการควบคุม Logic, Event handling, ดึงข้อมูลจาก API, คำนวณข้อมูล และสร้าง Interactive UI ที่ลื่นไหล",
    category: "Core Language",
    icon: "Code2",
    level: "Advanced",
    color: "from-yellow-400 to-amber-500",
    badge: "Core Dynamic Logic"
  },
  {
    name: "GitHub",
    role: "ใช้จัดเก็บและจัดการ Source Code",
    description: "ระบบควบคุมเวอร์ชัน (Git Version Control) สำหรับเก็บโค้ด, ตรวจสอบการเปลี่ยนแปลง, ทำงานร่วมกับทีม และเชื่อมต่อ CI/CD",
    category: "DevOps & Tools",
    icon: "GitBranch",
    level: "Proficient",
    color: "from-slate-400 to-slate-200",
    badge: "Version Control"
  },
  {
    name: "Vercel",
    role: "ใช้เผยแพร่เว็บไซต์ขึ้นออนไลน์ (Deployment)",
    description: "แพลตฟอร์มคลาวด์สำหรับ Deploy เว็บไซต์ Frontend ระดับโลก รองรับ HTTPS อัตโนมัติ, Fast Edge CDN และ CI/CD เชื่อมโยงกับ GitHub",
    category: "DevOps & Tools",
    icon: "Globe",
    level: "Proficient",
    color: "from-indigo-400 to-violet-600",
    badge: "Global Edge Hosting"
  }
];

export const projects = [
  {
    id: 1,
    title: "Wachirada Portfolio",
    subtitle: "เว็บไซต์พอร์ตโฟลิโอส่วนตัว",
    description: "เว็บไซต์แสดงผลงานส่วนตัว ออกแบบสไตล์ Modern Dark Theme รองรับ Responsive Design ทุกอุปกรณ์ พร้อมระบบนำทางและการกรองผลงาน",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Vercel"],
    github: "https://github.com",
    demo: "https://wachirada-portfolio.vercel.app",
    featured: true,
    category: "React",
    imageGradient: "from-indigo-600 via-purple-600 to-pink-500"
  },
  {
    id: 2,
    title: "Modern E-Commerce Store",
    subtitle: "ร้านค้าออนไลน์และระบบตะกร้าสินค้า",
    description: "เว็บแอปพลิเคชันช้อปปิ้งออนไลน์พร้อมระบบค้นหา กรองหมวดหมู่สินค้า จัดการตะกร้าสินค้าแบบเรียลไทม์ และคำนวณราคายอดรวม",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    github: "https://github.com",
    demo: "https://wachirada-portfolio.vercel.app",
    featured: true,
    category: "React",
    imageGradient: "from-blue-600 via-cyan-500 to-emerald-400"
  },
  {
    id: 3,
    title: "Interactive Task & Notes Flow",
    subtitle: "แอปพลิเคชันจัดการงานและบันทึกอัจฉริยะ",
    description: "ระบบจดบันทึกและจัดการงานตามลำดับความสำคัญ พร้อมระบบค้นหา จัดเก็บข้อมูลลง LocalStorage และตั้งค่าสถานะความคืบหน้าของงาน",
    tech: ["JavaScript", "React", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://wachirada-portfolio.vercel.app",
    featured: false,
    category: "Web App",
    imageGradient: "from-emerald-500 via-teal-600 to-cyan-700"
  },
  {
    id: 4,
    title: "Weather & Environment Pulse",
    subtitle: "แดชบอร์ดสภาพอากาศและมลภาวะแบบเรียลไทม์",
    description: "ดึงข้อมูลจาก OpenWeather API มาแสดงผลการพยากรณ์อากาศล่วงหน้า 7 วัน แผนที่อุณหภูมิ และคุณภาพอากาศ (AQI) อย่างสวยงาม",
    tech: ["React", "Vite", "REST API", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://wachirada-portfolio.vercel.app",
    featured: false,
    category: "Web App",
    imageGradient: "from-amber-500 via-orange-600 to-rose-600"
  }
];

export const experiences = [
  {
    period: "2024 - ปัจจุบัน",
    role: "Frontend Developer (React & Web Technologies)",
    organization: "Independent & Open Source Projects",
    description: "พัฒนาเว็บแอปพลิเคชันด้วย React, Vite และ Tailwind CSS สร้าง Component ที่มีประสิทธิภาพและนำขึ้นสู่ Vercel และ GitHub"
  },
  {
    period: "2023 - 2024",
    role: "Web Design & Development Study",
    organization: "Computer Science & Self-Driven Exploration",
    description: "ศึกษาและฝึกฝนเทคโนโลยีเว็บระดับลึก ทั้ง JavaScript ES6+, DOM Manipulation, Responsive Web Design และ UI/UX Principles"
  }
];
