export const personalInfo = {
  fullName: 'Wachirada Kaewpraiwan',
  nameTh: 'วชิรดา แก้วไพรวัลย์',
  email: 'wachirada27@gmail.com',
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
  { count: 2.81, isFloat: true, label: 'GPA เฉลี่ย', delay: 100 },
  { count: 4, isFloat: false, label: 'โปรเจกต์ที่สำเร็จ', delay: 200 },
];

export const educationInfo = {
  university: 'มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน',
  universityEn: 'Rajamangala University of Technology Isan',
  major: 'คณะวิศวกรรมศาสตร์และเทคโนโลยี · สาขาวิศวกรรมคอมพิวเตอร์',
  period: '2023 – 2026',
  gpa: 'GPA 2.81',
};

export const skillGroups = [
  {
    title: 'Languages & Frameworks',
    icon: 'Code2',
    aos: 'fade-right',
    items: [
      { name: 'HTML5', iconClass: 'fa-brands fa-html5' },
      { name: 'CSS3', iconClass: 'fa-brands fa-css3-alt' },
      { name: 'Tailwind CSS', iconClass: 'fa-solid fa-wind' },
      { name: 'JavaScript', iconClass: 'fa-brands fa-js' },
      { name: 'Java', iconClass: 'fa-brands fa-java' },
      { name: 'Node.js', iconClass: 'fa-brands fa-node-js' },
      { name: 'React', iconClass: 'fa-brands fa-react' },
      { name: 'PHP', iconClass: 'fa-brands fa-php' },
      { name: 'Dart', iconClass: 'fas fa-code' },
      { name: 'Flutter', iconClass: 'fas fa-mobile-alt' },
      { name: 'C#', iconClass: 'fas fa-hashtag' },
      { name: 'Python', iconClass: 'fa-brands fa-python' },
    ],
  },
  {
    title: 'Tools & Databases',
    icon: 'Wrench',
    aos: 'fade-left',
    items: [
  { name: 'VS Code', iconClass: 'fa-solid fa-code' },
  { name: 'Visual Studio', iconClass: 'fa-solid fa-laptop-code' },
  { name: 'GitHub', iconClass: 'fa-brands fa-github' },
  { name: 'Postman', iconClass: 'fa-solid fa-paper-plane' },
  { name: 'MySQL', iconClass: 'fa-solid fa-database' },
  { name: 'MongoDB', iconClass: 'fa-solid fa-leaf' },
  { name: 'DBeaver', iconClass: 'fa-solid fa-database' },
  { name: 'Laragon', iconClass: 'fa-solid fa-server' },
  { name: 'Arduino IDE', iconClass: 'fa-solid fa-microchip' },
  { name: 'Raspberry Pi', iconClass: 'fa-brands fa-raspberry-pi' },
    ],
  },
];


export const projects = [
  {
    number: '01',
    icon: 'Truck',
    title: 'Truck Driver Monitoring System',
    description:
      'ระบบติดตามเวลาทำงานของคนขับรถบรรทุก โดยใช้ GPS ติดตามตำแหน่งและสถานะการทำงาน พร้อมระบบ Face Detection และบัตรประจำตัวเพื่อยืนยันตัวตนคนขับ มีการแจ้งเตือนเมื่อเกินเวลาขับขี่ที่กำหนด',
    tags: ['React.js', 'Node.js', 'GPS Tracking', 'Face Detection', 'Database'],
    period: 'กรกฎาคม 2026 – ตุลาคม 2026',
    delay: 0,
  },
  {
    number: '02',
    icon: 'MapPin',
    title: 'Mobile Location Tracking System (Cooperative Education Project)',
    description:
      'โครงงานพัฒนาระบบติดตามตำแหน่งผ่านโทรศัพท์มือถือ โดยใช้เทคโนโลยี GPS ในการระบุตำแหน่งและติดตามการเคลื่อนที่แบบเรียลไทม์ พร้อมพัฒนาแอปพลิเคชันเพื่อบันทึกและแสดงข้อมูลตำแหน่ง โดยประยุกต์ใช้ความรู้ด้านการพัฒนาซอฟต์แวร์ระหว่างการปฏิบัติงานสหกิจศึกษา',
    tags: ['Flutter', 'Dart', 'GPS Tracking', 'Geolocation', 'Mobile Application', 'Real-Time Tracking'],
    period: 'พฤศจิกายน 2026 – กุมภาพันธ์ 2027',
    delay: 150,
  },
  {
    number: '03',
    icon: 'ShoppingBag',
    title: 'Shoe Store Website',
    description:
      'เว็บไซต์ขายรองเท้าออนไลน์ (Mini Project) พัฒนาด้วย HTML, CSS, JavaScript และ PHP เชื่อมต่อกับฐานข้อมูล MySQL เพื่อจัดการสต็อกสินค้า บัญชีผู้ใช้ และประวัติการสั่งซื้อ',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    period: 'มกราคม 2025 – มีนาคม 2025',
    delay: 300,
  },
{
  number: '04',
  icon: 'IceCreamCone',
  title: 'Ice Cream Self-Service Ordering System ',
  description:
  'พัฒนาระบบสั่งซื้อไอศกรีมผ่านหน้าจอภายในร้าน (Mini Project) เพื่ออำนวยความสะดวกให้ลูกค้าสามารถเลือกสินค้าและยืนยันคำสั่งซื้อได้ด้วยตนเอง พร้อมระบบจัดการข้อมูลสินค้าและรายการสั่งซื้อ รวมถึง Dashboard สำหรับแสดงข้อมูลและภาพรวมการขาย ช่วยเพิ่มความสะดวกและลดขั้นตอนการสั่งซื้อภายในร้าน',
  tags: ['HTML', 'CSS', 'Tailwind CSS', 'MongoDB', 'Postman', 'REST API', 'Dashboard'],
  period: 'มิถุนายน 2025– ตุลาคม 2025',
  delay: 450,
},

];


export const techStackCategories = [
  'ทั้งหมด',
  'Frontend',
  'Backend',
  'Database',
  'Tools & DevOps',
];

export const techStackList = [
  {
    name: 'HTML5',
    role: 'โครงสร้างพื้นฐานของหน้าเว็บไซต์',
    description:
      'วางโครงสร้างเว็บไซต์ตามมาตรฐาน Semantic HTML เพื่อความเป็นระเบียบ เข้าถึงง่าย และรองรับ SEO',
    category: 'Frontend',
    icon: 'Layout',
    badge: 'Markup Structure',
    iconBg: 'linear-gradient(135deg, #fb923c, #f43f5e)',
    accentColor: '#ea580c',
    cardTint: '#fffaf5',
    glowColor: 'rgba(251, 146, 60, 0.16)',
  },
  {
    name: 'CSS3',
    role: 'จัดรูปแบบและตกแต่งหน้าเว็บไซต์',
    description:
      'ออกแบบ Layout ด้วย Flexbox และ Grid รวมถึงกำหนดสี ฟอนต์ แอนิเมชัน และ Responsive Design',
    category: 'Frontend',
    icon: 'Layers',
    badge: 'Styling & Layout',
    iconBg: 'linear-gradient(135deg, #f472b6, #ec4899)',
    accentColor: '#db2777',
    cardTint: '#fff8fc',
    glowColor: 'rgba(244, 114, 182, 0.16)',
  },
  {
    name: 'Tailwind CSS',
    role: 'ใช้ตกแต่งและกำหนดรูปแบบเว็บไซต์',
    description:
      'Utility-first CSS Framework ที่ช่วยให้การจัด Layout, สี, ฟอนต์ และ Responsive Design ทำได้อย่างรวดเร็วและสวยงาม',
    category: 'Frontend',
    icon: 'Palette',
    badge: 'Modern Utility Styling',
    iconBg: 'linear-gradient(135deg, #ec4899, #d946ef)',
    accentColor: '#db2777',
    cardTint: '#fff8fc',
    glowColor: 'rgba(217, 70, 239, 0.14)',
  },
  {
    name: 'JavaScript',
    role: 'ใช้เพิ่มลูกเล่นและควบคุมการทำงานของเว็บไซต์',
    description:
      'ภาษาหลักในการควบคุม Logic, Event handling, ดึงข้อมูลจาก API และสร้าง Interactive UI ที่ลื่นไหล',
    category: 'Frontend',
    icon: 'Code2',
    badge: 'Core Dynamic Logic',
    iconBg: 'linear-gradient(135deg, #f472b6, #e11d48)',
    accentColor: '#e11d48',
    cardTint: '#fff8fb',
    glowColor: 'rgba(244, 114, 182, 0.16)',
  },
  {
    name: 'React',
    role: 'ใช้พัฒนาเว็บไซต์ด้วย Component',
    description:
      'สร้าง UI ที่ยืดหยุ่น แยกส่วนประกอบของเว็บเป็น Component ที่นำกลับมาใช้ใหม่ได้ง่าย พร้อมจัดการ State ได้อย่างเป็นระบบ',
    category: 'Frontend',
    icon: 'Atom',
    badge: 'Component Architecture',
    iconBg: 'linear-gradient(135deg, #f43f5e, #ec4899)',
    accentColor: '#e11d48',
    cardTint: '#fff8fb',
    glowColor: 'rgba(244, 114, 182, 0.16)',
  },
  {
    name: 'Dart',
    role: 'ภาษาหลักสำหรับพัฒนาแอปมือถือ',
    description:
      'ใช้เขียน Logic, จัดการข้อมูลแบบ Asynchronous และโครงสร้างโปรแกรมร่วมกับ Flutter Framework',
    category: 'Frontend',
    icon: 'FileCode',
    badge: 'Mobile Language',
    iconBg: 'linear-gradient(135deg, #ec4899, #a855f7)',
    accentColor: '#c026d3',
    cardTint: '#fdf8ff',
    glowColor: 'rgba(192, 38, 211, 0.14)',
  },
  {
    name: 'Flutter',
    role: 'ใช้พัฒนาแอปพลิเคชันมือถือ',
    description:
      'พัฒนา Mobile Application แบบ Cross-platform ด้วยระบบ Widget รองรับการทำงานร่วมกับ GPS และ Real-Time Tracking',
    category: 'Frontend',
    icon: 'Smartphone',
    badge: 'Cross-Platform Mobile',
    iconBg: 'linear-gradient(135deg, #d946ef, #a855f7)',
    accentColor: '#c026d3',
    cardTint: '#fdf8ff',
    glowColor: 'rgba(192, 38, 211, 0.14)',
  },
  {
    name: 'Node.js',
    role: 'ใช้พัฒนา Backend ด้วย JavaScript',
    description:
      'สร้าง REST API จัดการฝั่ง Server, ระบบยืนยันตัวตน และเชื่อมต่อข้อมูลระหว่างหน้าเว็บกับฐานข้อมูล',
    category: 'Backend',
    icon: 'Server',
    badge: 'Server & REST API',
    iconBg: 'linear-gradient(135deg, #f43f5e, #fb7185)',
    accentColor: '#e11d48',
    cardTint: '#fff8fb',
    glowColor: 'rgba(244, 114, 182, 0.16)',
  },
  {
    name: 'PHP',
    role: 'ใช้พัฒนาเว็บฝั่ง Server',
    description:
      'เขียนระบบหลังบ้าน ประมวลผลฟอร์ม จัดการบัญชีผู้ใช้ และเชื่อมต่อกับฐานข้อมูล MySQL สำหรับเว็บแอปพลิเคชัน',
    category: 'Backend',
    icon: 'Braces',
    badge: 'Server-Side Web',
    iconBg: 'linear-gradient(135deg, #a855f7, #6366f1)',
    accentColor: '#7c3aed',
    cardTint: '#faf8ff',
    glowColor: 'rgba(139, 92, 246, 0.14)',
  },
  {
    name: 'Java',
    role: 'ภาษาโปรแกรมเชิงวัตถุ (OOP)',
    description:
      'พัฒนาโปรแกรมด้วยแนวคิด Object-Oriented Programming การจัดการโครงสร้างข้อมูล และอัลกอริทึม',
    category: 'Backend',
    icon: 'Box',
    badge: 'Object-Oriented',
    iconBg: 'linear-gradient(135deg, #fb923c, #e11d48)',
    accentColor: '#ea580c',
    cardTint: '#fffaf5',
    glowColor: 'rgba(251, 146, 60, 0.16)',
  },
  {
    name: 'C#',
    role: 'พัฒนาซอฟต์แวร์และแอปพลิเคชัน',
    description:
      'ใช้เขียนโปรแกรมบน .NET ร่วมกับ Visual Studio เพื่อสร้างแอปพลิเคชันและจัดการ Logic ระบบ',
    category: 'Backend',
    icon: 'Hash',
    badge: '.NET Programming',
    iconBg: 'linear-gradient(135deg, #c026d3, #7c3aed)',
    accentColor: '#7c3aed',
    cardTint: '#faf8ff',
    glowColor: 'rgba(139, 92, 246, 0.14)',
  },
  {
    name: 'Python',
    role: 'ภาษาโปรแกรมสำหรับโครงงานและประมวลผล',
    description:
      'ประยุกต์ใช้ในการพัฒนาสคริปต์อัตโนมัติ งานประมวลผลข้อมูล และระบบตรวจจับใบหน้า (Face Detection)',
    category: 'Backend',
    icon: 'Terminal',
    badge: 'Scripting & AI/CV',
    iconBg: 'linear-gradient(135deg, #ec4899, #f43f5e)',
    accentColor: '#e11d48',
    cardTint: '#fff8fb',
    glowColor: 'rgba(244, 114, 182, 0.16)',
  },
  {
    name: 'MySQL',
    role: 'ระบบจัดการฐานข้อมูลเชิงสัมพันธ์',
    description:
      'ออกแบบตาราง ความสัมพันธ์ข้อมูล (Relational Database) และเขียนคำสั่ง SQL สำหรับจัดเก็บและสืบค้นข้อมูล',
    category: 'Database',
    icon: 'Database',
    badge: 'Relational Database',
    iconBg: 'linear-gradient(135deg, #fb923c, #ec4899)',
    accentColor: '#db2777',
    cardTint: '#fff9f8',
    glowColor: 'rgba(244, 114, 182, 0.16)',
  },
  {
    name: 'MongoDB',
    role: 'ระบบฐานข้อมูลแบบ NoSQL',
    description:
      'จัดเก็บข้อมูลในรูปแบบ Document (JSON) ที่ยืดหยุ่น เหมาะกับระบบเว็บแอปพลิเคชันยุคใหม่และ REST API',
    category: 'Database',
    icon: 'HardDrive',
    badge: 'NoSQL Document DB',
    iconBg: 'linear-gradient(135deg, #ec4899, #a855f7)',
    accentColor: '#c026d3',
    cardTint: '#fdf8ff',
    glowColor: 'rgba(192, 38, 211, 0.14)',
  },
  {
    name: 'GitHub',
    role: 'ใช้จัดเก็บและจัดการ Source Code',
    description:
      'ระบบควบคุมเวอร์ชัน (Git Version Control) สำหรับเก็บโค้ด ตรวจสอบการเปลี่ยนแปลง และทำงานร่วมกับทีม',
    category: 'Tools & DevOps',
    icon: 'GitBranch',
    badge: 'Version Control',
    iconBg: 'linear-gradient(135deg, #475569, #334155)',
    accentColor: '#475569',
    cardTint: '#fcfaff',
    glowColor: 'rgba(148, 163, 184, 0.16)',
  },
  {
    name: 'Postman',
    role: 'ใช้ทดสอบและตรวจสอบ API',
    description:
      'ส่ง Request ทดสอบ REST API ตรวจสอบ Response, Status Code และจัดการ Environment ในการพัฒนา Backend',
    category: 'Tools & DevOps',
    icon: 'Send',
    badge: 'API Testing',
    iconBg: 'linear-gradient(135deg, #fb923c, #f43f5e)',
    accentColor: '#ea580c',
    cardTint: '#fffaf5',
    glowColor: 'rgba(251, 146, 60, 0.16)',
  },
  {
    name: 'VS Code & Visual Studio',
    role: 'เครื่องมือหลักในการเขียนโค้ด (IDE)',
    description:
      'ใช้พัฒนาเว็บไซต์ แอปพลิเคชัน และ Debug โค้ดพร้อมส่วนเสริมต่าง ๆ รวมถึงใช้งานร่วมกับ DBeaver และ Laragon',
    category: 'Tools & DevOps',
    icon: 'Laptop',
    badge: 'Code Editor & IDE',
    iconBg: 'linear-gradient(135deg, #a855f7, #6366f1)',
    accentColor: '#7c3aed',
    cardTint: '#faf8ff',
    glowColor: 'rgba(139, 92, 246, 0.14)',
  },
  {
    name: 'Arduino IDE & Raspberry Pi',
    role: 'พัฒนาโปรเจกต์ฮาร์ดแวร์และ IoT',
    description:
      'เขียนโปรแกรมควบคุมบอร์ดไมโครคอนโทรลเลอร์ เซนเซอร์ และเชื่อมต่อระบบ IoT เข้ากับซอฟต์แวร์',
    category: 'Tools & DevOps',
    icon: 'Cpu',
    badge: 'Embedded & IoT',
    iconBg: 'linear-gradient(135deg, #f43f5e, #d946ef)',
    accentColor: '#db2777',
    cardTint: '#fff8fc',
    glowColor: 'rgba(217, 70, 239, 0.14)',
  },
];
