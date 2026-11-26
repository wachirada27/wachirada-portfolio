export const personalInfo = {
  fullName: 'Wachirada Kaewpraiwan',
  nameTh: 'วชิรดา แก้วไพรวัลย์',
  email: 'wachirada27@gmail.com',
  phone: '096-185-8285',
  linkedin: 'https://www.linkedin.com/in/wachirada/',
  linkedinLabel: 'linkedin.com/in/wachirada',
  github: 'https://github.com/wachirada27',
  githubLabel: 'github.com/wachirada27',
  imgPath: '/img/66172110122-5.jpg',
  resumePath: '/resume/Resume_Wachirada.pdf',
  resumeFilename: 'Resume_Wachirada.pdf',
  badgeText: 'Year 4 · RMUTI',
  bio: 'นักศึกษาวิศวกรรมคอมพิวเตอร์ชั้นปีที่ 4 มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน มีความสนใจด้านการพัฒนาซอฟต์แวร์และเว็บแอปพลิเคชัน ทั้ง Frontend และ Backend',
  roles: [
    'Computer Engineering Student',
    'Frontend Developer',
    'Backend Developer',
    'Web Application Developer',
  ],
};

export const aboutStats = [
  { count: 4, isFloat: false, label: 'ชั้นปีปัจจุบัน', delay: 0 },
  { count: 2.75, isFloat: true, label: 'GPA เฉลี่ย', delay: 100 },
  { count: 2, isFloat: false, label: 'โปรเจกต์ที่สำเร็จ', delay: 200 },
];

export const educationInfo = {
  university: 'มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน',
  universityEn: 'Rajamangala University of Technology Isan',
  major: 'คณะวิศวกรรมศาสตร์และเทคโนโลยี · สาขาวิศวกรรมคอมพิวเตอร์',
  period: '2023 – 2026',
  gpa: 'GPA 2.75',
};

export const skillGroups = [
  {
    title: 'Languages & Frameworks',
    icon: '💻',
    aos: 'fade-right',
    items: [
      { name: 'HTML5', iconClass: 'fa-brands fa-html5' },
      { name: 'CSS3', iconClass: 'fa-brands fa-css3-alt' },
      { name: 'JavaScript', iconClass: 'fa-brands fa-js' },
      { name: 'Java', iconClass: 'fa-brands fa-java' },
      { name: 'Node.js', iconClass: 'fa-brands fa-node-js' },
      { name: 'React', iconClass: 'fa-brands fa-react' },
      { name: 'PHP', iconClass: 'fa-brands fa-php' },
    ],
  },
  {
    title: 'Tools & Databases',
    icon: '🛠️',
    aos: 'fade-left',
    items: [
      { name: 'VS Code', iconClass: 'fa-solid fa-code' },
      { name: 'GitHub', iconClass: 'fa-brands fa-github' },
      { name: 'Postman', iconClass: 'fa-solid fa-paper-plane' },
      { name: 'MySQL', iconClass: 'fa-solid fa-database' },
      { name: 'MongoDB', iconClass: 'fa-solid fa-leaf' },
      { name: 'Arduino IDE', iconClass: 'fa-solid fa-microchip' },
    ],
  },
];

export const projects = [
  {
    number: '01',
    icon: '🚚',
    title: 'Truck Driver Duty-Time Tracking System',
    description:
      'ระบบติดตามเวลาทำงานของคนขับรถบรรทุก โดยใช้ GPS ติดตามตำแหน่งและสถานะการทำงาน พร้อมระบบ Face Detection และบัตรประจำตัวเพื่อยืนยันตัวตนคนขับ มีการแจ้งเตือนเมื่อเกินเวลาขับขี่ที่กำหนด',
    tags: ['React.js', 'Node.js', 'GPS Tracking', 'Face Detection', 'Database'],
    period: 'มิถุนายน 2025 – 2026',
    delay: 0,
  },
  {
    number: '02',
    icon: '👟',
    title: 'E-Commerce Website – Shoe Store',
    description:
      'เว็บไซต์ขายรองเท้าออนไลน์ (Mini Project) พัฒนาด้วย HTML, CSS, JavaScript และ PHP เชื่อมต่อกับฐานข้อมูล MySQL เพื่อจัดการสต็อกสินค้า บัญชีผู้ใช้ และประวัติการสั่งซื้อ',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    period: 'มกราคม – มีนาคม 2025',
    delay: 150,
  },
];

export const techStackCategories = [
  'ทั้งหมด',
  'Frontend',
  'Build Tools',
  'Styling',
  'Core Language',
  'DevOps & Tools',
];

export const techStackList = [
  {
    name: 'React',
    role: 'ใช้พัฒนาเว็บไซต์ด้วย Component',
    description:
      'สร้าง UI ที่ยืดหยุ่น แยกส่วนประกอบของเว็บเป็น Component ที่นำกลับมาใช้ใหม่ได้ง่าย มี State Management ที่ทรงพลัง',
    category: 'Frontend',
    icon: 'Atom',
    badge: 'Component Architecture',
    iconBg: 'linear-gradient(135deg, #f43f5e, #ec4899)',
    accentColor: '#e11d48',
    cardTint: '#fff8fb',
    glowColor: 'rgba(244, 114, 182, 0.16)',
  },
  {
    name: 'Vite',
    role: 'ใช้สร้างและจัดการโปรเจกต์',
    description:
      'เครื่องมือพัฒนาเว็บเจเนอเรชันใหม่ที่มี Hot Module Replacement (HMR) รวดเร็วระดับเสี้ยววินาที และ Build ระบบได้ทรงประสิทธิภาพ',
    category: 'Build Tools',
    icon: 'Zap',
    badge: 'Blazing Fast Bundler',
    iconBg: 'linear-gradient(135deg, #fb923c, #f43f5e)',
    accentColor: '#ea580c',
    cardTint: '#fffaf5',
    glowColor: 'rgba(251, 146, 60, 0.16)',
  },
  {
    name: 'Tailwind CSS',
    role: 'ใช้ตกแต่งและกำหนดรูปแบบเว็บไซต์',
    description:
      'Utility-first CSS Framework ที่ช่วยให้การจัด Layout, สี, ฟอนต์, แอนิเมชัน และ Responsive Design ทำได้อย่างรวดเร็วและสวยงาม',
    category: 'Styling',
    icon: 'Palette',
    badge: 'Modern Utility Styling',
    iconBg: 'linear-gradient(135deg, #ec4899, #d946ef)',
    accentColor: '#db2777',
    cardTint: '#fff8fc',
    glowColor: 'rgba(217, 70, 239, 0.14)',
  },
  {
    name: 'JavaScript (ES6+)',
    role: 'ใช้เพิ่มลูกเล่นและควบคุมการทำงานของเว็บไซต์',
    description:
      'ภาษาหลักในการควบคุม Logic, Event handling, ดึงข้อมูลจาก API, คำนวณข้อมูล และสร้าง Interactive UI ที่ลื่นไหล',
    category: 'Core Language',
    icon: 'Code2',
    badge: 'Core Dynamic Logic',
    iconBg: 'linear-gradient(135deg, #f472b6, #e11d48)',
    accentColor: '#e11d48',
    cardTint: '#fff8fb',
    glowColor: 'rgba(244, 114, 182, 0.16)',
  },
  {
    name: 'GitHub',
    role: 'ใช้จัดเก็บและจัดการ Source Code',
    description:
      'ระบบควบคุมเวอร์ชัน (Git Version Control) สำหรับเก็บโค้ด, ตรวจสอบการเปลี่ยนแปลง, ทำงานร่วมกับทีม และเชื่อมต่อ CI/CD',
    category: 'DevOps & Tools',
    icon: 'GitBranch',
    badge: 'Version Control',
    iconBg: 'linear-gradient(135deg, #475569, #334155)',
    accentColor: '#475569',
    cardTint: '#fcfaff',
    glowColor: 'rgba(148, 163, 184, 0.16)',
  },
  {
    name: 'Vercel',
    role: 'ใช้เผยแพร่เว็บไซต์ขึ้นออนไลน์ (Deployment)',
    description:
      'แพลตฟอร์มคลาวด์สำหรับ Deploy เว็บไซต์ Frontend ระดับโลก รองรับ HTTPS อัตโนมัติ, Fast Edge CDN และ CI/CD เชื่อมโยงกับ GitHub',
    category: 'DevOps & Tools',
    icon: 'Globe',
    badge: 'Global Edge Hosting',
    iconBg: 'linear-gradient(135deg, #d946ef, #a855f7)',
    accentColor: '#c026d3',
    cardTint: '#fdf8ff',
    glowColor: 'rgba(192, 38, 211, 0.14)',
  },
];
