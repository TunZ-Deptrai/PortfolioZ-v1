import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';

// Style Loader injection for custom typography, smooth transitions, and premium rendering
const StyleLoader = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&display=swap');
    
    html {
      scroll-behavior: smooth;
    }
    
    html, body {
      font-family: 'Be Vietnam Pro', sans-serif;
      background-color: #0C0C0E !important;
      color: #F2F2F2 !important;
      overflow-x: hidden;
    }
    
    .font-headings {
      font-family: 'Montserrat', sans-serif;
      letter-spacing: -0.04em;
    }

    

    @keyframes tuanzTextureFlow {
      0% {
        background-position: 18% 52%;
      }
      100% {
        background-position: 118% 52%;
      }
    }

    @keyframes tuanzHoverSweep {
      0% {
        opacity: 0;
        transform: translate3d(-150%, 0, 0) skewX(-14deg) scaleX(0.72);
      }
      18% {
        opacity: 0.72;
      }
      58% {
        opacity: 0.54;
      }
      100% {
        opacity: 0;
        transform: translate3d(150%, 0, 0) skewX(-14deg) scaleX(0.72);
      }
    }

    .hero-title-word {
      display: inline-block;
      letter-spacing: 0.012em;
      margin-right: -0.012em;
    }

    .hero-title-main {
      margin-right: 0.13em;
    }

    .hero-title-accent-premium {
      position: relative;
      display: inline-block;
      color: transparent;
      -webkit-text-fill-color: transparent;
      background-image: url('/tuanz-texture-psychedelic.jpg');
      background-size: 215% auto;
      background-position: 18% 52%;
      background-repeat: repeat-x;
      background-clip: text;
      -webkit-background-clip: text;
      filter: saturate(1.03) brightness(1.01) contrast(0.88);
      animation: tuanzTextureFlow 40s linear infinite;
      will-change: background-position;
      transform: translateZ(0);
      -webkit-font-smoothing: antialiased;
      text-rendering: geometricPrecision;
    }

    .hero-title-accent-premium::before {
      content: "";
      position: absolute;
      inset: -0.08em -0.12em -0.04em -0.12em;
      z-index: 1;
      background: linear-gradient(108deg, transparent 0%, transparent 36%, rgba(255, 255, 255, 0.08) 41%, rgba(255, 255, 255, 0.72) 47%, rgba(255, 218, 229, 0.42) 51%, rgba(225, 29, 72, 0.16) 56%, rgba(255, 255, 255, 0.06) 61%, transparent 68%, transparent 100%);
      opacity: 0;
      transform: translate3d(-150%, 0, 0) skewX(-14deg) scaleX(0.72);
      filter: blur(0.4px);
      mix-blend-mode: screen;
      pointer-events: none;
    }

    .hero-title-accent-premium .letter {
      color: transparent;
      -webkit-text-fill-color: transparent;
    }

    .hero-title-accent-premium::after {
      content: "Z";
      position: absolute;
      right: -0.01em;
      top: 0.01em;
      z-index: 2;
      line-height: 0.92;
      color: transparent;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 0.016em rgba(255, 255, 255, 0.84);
      text-shadow: 0 0 18px rgba(255, 255, 255, 0.2), 0 0 28px rgba(225, 29, 72, 0.2);
      opacity: 0;
      transform: translate3d(0, 0, 0) rotate(0deg) scale(0.99);
      transform-origin: 58% 56%;
      filter: drop-shadow(0 10px 24px rgba(225, 29, 72, 0));
      pointer-events: none;
      transition:
        opacity 320ms cubic-bezier(0.16, 1, 0.3, 1),
        transform 420ms cubic-bezier(0.16, 1, 0.3, 1),
        filter 420ms cubic-bezier(0.16, 1, 0.3, 1),
        -webkit-text-stroke-color 420ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    #hero h1:hover .hero-title-accent-premium {
      filter: saturate(1.18) brightness(1.12) contrast(0.96) drop-shadow(0 0 22px rgba(225, 29, 72, 0.16));
      animation-duration: 9s !important;
    }

    #hero h1:hover .hero-title-accent-premium::before {
      animation: tuanzHoverSweep 1080ms cubic-bezier(0.19, 1, 0.22, 1) both;
    }

    #hero h1:hover .hero-title-accent-premium::after {
      opacity: 1;
      transform: translate3d(0.025em, -0.025em, 0) rotate(5deg) scale(1.08);
      filter: drop-shadow(0 12px 26px rgba(225, 29, 72, 0.2));
      -webkit-text-stroke-color: rgba(255, 255, 255, 0.96);
    }

    .hero-title-accent-premium .letter::after {
      display: none;
    }

    ::selection {
      background-color: #E11D48;
      color: #FFFFFF;
    }

    @keyframes horizontalScroll {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    
    .animate-marquee-infinite {
      display: flex;
      width: max-content;
      animation: horizontalScroll 30s linear infinite;
    }
    
    .animate-marquee-infinite:hover {
      animation-play-state: paused;
    }

    .crimson-glow {
      box-shadow: 0 0 50px rgba(225, 29, 72, 0.15);
    }
    
    .crimson-border-hover {
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .crimson-border-hover:hover {
      border-color: #E11D48 !important;
      box-shadow: 0 0 30px rgba(225, 29, 72, 0.12);
    }

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #0C0C0E;
    }
    ::-webkit-scrollbar-thumb {
      background: #141416;
      border: 2px solid #0C0C0E;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #E11D48;
    }

    @keyframes slideUpFade {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .reveal-editorial {
      animation: slideUpFade 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    
    button, [role="button"], a {
      cursor: pointer !important;
    }

    @keyframes spinSlow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-spin-slow {
      animation: spinSlow 12s linear infinite;
    }  `}} />
);

const TRANSLATIONS = {
  vi: {
    navHome: "Trang Chủ",
    navWork: "Dự Án",
    navAbout: "Giới Thiệu",
    navContact: "Liên Hệ",
    navHire: "HỢP TÁC NGAY",
    heroAvailable: "Sẵn sàng nhận dự án · TP. Hồ Chí Minh 🇻🇳",
    heroSubheading: "Thiết kế sản phẩm số đơn giản, trực quan và lấy người dùng làm trung tâm",
    heroViewWork: "XEM DỰ ÁN",
    heroDownloadCV: "XEM RESUME",
    heroOpenToWork: "Nhận dự án tự do",
    aboutEyebrow: "Về Tôi",
    aboutHeading: "CHUYỂN HÓA Ý TƯỞNG THÀNH TRẢI NGHIỆM THÂN THIỆN VỚI NGƯỜI DÙNG",
    aboutBio1: "Tôi là Tuấn, một UI/UX Designer với nền tảng kiến thức về Công nghệ thông tin. Tôi kết hợp sự hiểu biết về kỹ thuật với các nguyên lý thiết kế lấy người dùng làm trung tâm để tạo ra các sản phẩm kỹ thuật số trực quan, thiết thực và hấp dẫn.",
    aboutBio2: "Trong suốt quá trình thực tập và thực hiện các dự án cá nhân, tôi đã tích lũy được nhiều kinh nghiệm thực tiễn về thiết kế giao diện, vẽ wireframe, tạo mẫu thử (prototype) và thiết kế tập trung vào khả năng sử dụng bằng cách sử dụng Figma. Tôi đam mê phân tích nhu cầu người dùng, đơn giản hóa các luồng công việc phức tạp và thiết kế nên những trải nghiệm vừa đẹp mắt vừa dễ dàng sử dụng.",
    aboutSkillsTitle: "Công cụ & Kỹ năng",
    aboutProcessTitle: "Quy trình thiết kế của tôi",
    aboutExperienceTitle: "Quá trình công tác",
    aboutStatsYears: "Năm Kinh Nghiệm",
    aboutStatsProjects: "Dự Án Hoàn Thành",
    aboutStatsClients: "Khách Hàng Lớn",
    aboutStatsAwards: "Giải Thưởng Thiết Kế",
    workEyebrow: "Dự án chọn lọc",
    workHeading: "Các dự án tôi đặt tâm huyết nhất",
    workSubtext: "Sự hòa phối hài hòa giữa các nguyên lý thiết kế, tư duy trải nghiệm khách hàng và giải pháp giao diện đương đại.",
    workFilterAll: "Tất cả",
    workFilterProduct: "Thiết kế sản phẩm",
    workFilterMobile: "Ứng dụng Di động",
    workFilterWeb: "Giao diện Web",
    workFilterBranding: "Nhận diện Thương hiệu",
    workHoverAction: "CHI TIẾT CASE STUDY",
    caseBack: "Trở lại trang chủ",
    caseRole: "VAI TRÒ THỰC HIỆN",
    caseDuration: "THỜI GIAN TRIỂN KHAI",
    caseYear: "NĂM HOÀN THÀNH",
    caseOutcome: "KẾT QUẢ CỐT LÕI",
    caseChallenge: "Thách thức lớn của dự án",
    caseMission: "Nhiệm vụ của tôi",
    caseQuoteTitle: "Triết lý trải nghiệm cốt lõi",
    caseProcessTitle: "Luồng quy trình triển khai chi tiết",
    caseOutcomesTitle: "Kết quả chuyển đổi thực nghiệm",
    caseGalleryTitle: "Bộ thư viện màn hình giao diện",
    caseNext: "DỰ ÁN TIẾP THEO",
    caseReadNext: "Đọc Case Study Tiếp Theo",
    contactHeading: "Hãy cùng kiến tạo sản phẩm tuyệt vời",
    contactSubtext: "Bạn có ý tưởng lớn cần thực thi hoặc cần tư vấn cải thiện trải nghiệm sản phẩm số? Tôi luôn cởi mở đón nhận các cơ hội hợp tác sáng tạo đầy thử thách.",
    contactEmailLabel: "HÒM THƯ TRỰC TIẾP",
    contactLocationLabel: "ĐẠI ĐIỂM TRỰC THUỘC",
    contactResponseLabel: "THỜI GIAN PHẢN HỒI TB",
    contactResponseValue: "Trong vòng 24 giờ làm việc",
    contactSocialsLabel: "MẠNG XÃ HỘI CHUYÊN NGHIỆP",
    contactFormName: "HỌ TÊN CỦA BẠN *",
    contactFormEmail: "EMAIL LIÊN HỆ *",
    contactFormBudget: "NGÂN SÁCH DỰ KIẾN",
    contactFormType: "LOẠI HÌNH DỰ ÁN",
    contactFormMessage: "MESSAGE *",
    contactFormHeaderTitle: "GỬI TIN NHẮN TRỰC TIẾP",
    contactFormHeaderDesc: "Bạn có ý tưởng thú vị hoặc cơ hội hợp tác? Hãy để lại lời nhắn phía dưới.",
    contactFormSubmit: "GỬI THÔNG TIN LIÊN HỆ",
    contactFormSending: "Đang truyền tin...",
    contactSuccessTitle: "Yêu cầu đã được gửi! 🎉",
    contactSuccessDesc: "Cảm ơn bạn đã kết nối. Tôi đã tiếp nhận thành công thông tin dự án và sẽ phản hồi qua hòm thư điện tử cá nhân của bạn trong vòng 24 tiếng tới.",
    contactSuccessBtn: "Gửi thêm tin nhắn mới",
    errName: "Vui lòng nhập họ và tên của bạn",
    errEmail: "Định dạng email không hợp lệ",
    errMessage: "Vui lòng ghi chi tiết thêm (tối thiểu 20 ký tự)",
    footerReserved: "Hoang Tuanz",
    footerSubtext: "Được xây dựng bằng React, Vite & Tailwind CSS.",
    
    process1Title: "1. Research",
    process1Sub: "Thấu hiểu & Khảo sát",
    process1Desc: "Nghiên cứu thị trường sâu rộng, phỏng vấn người dùng thực tế và thực hiện đo lường hành vi để thấu hiểu rào cản nhận thức lỗi.",
    
    process2Title: "2. Define",
    process2Sub: "Định vị & Xác lập",
    process2Desc: "Phân tích, tổng hợp số liệu để dựng chân dung đối tượng (Personas), xác lập tuyên bố vấn đề và lập bản đồ hành trình tối ưu.",
    
    process3Title: "3. Ideate",
    process3Sub: "Phác thảo & Giải pháp",
    process3Desc: "Động não, phác họa sơ bộ các giải pháp đột phá, xây dựng kiến trúc thông tin (IA) và thiết lập các luồng dịch chuyển trực quan.",
    
    process4Title: "4. Prototype",
    process4Sub: "Mô phỏng & Thiết kế",
    process4Desc: "Xây dựng các giao diện mẫu thử nghiệm trung thực cao (Hi-fi Figma) kết hợp chuyển động tương tác mượt mà bằng Protopie.",
    
    process5Title: "5. Test",
    process5Sub: "Đo lường & Tối ưu",
    process5Desc: "Thử nghiệm trực tiếp trên tập người dùng mẫu, khảo sát trải nghiệm thực và bàn giao thư viện tokens lập trình đồng nhất.",
    skillsDesignTitle: "UI Design",
    skillsResearchTitle: "UX Design",
    skillsDevTitle: "Development"
  },
  en: {
    navHome: "Home",
    navWork: "Projects",
    navAbout: "About",
    navContact: "Contact",
    navHire: "HIRE ME NOW",
    heroAvailable: "Available for freelance · Ho Chi Minh City 🇻🇳",
    heroSubheading: "Simple, intuitive, user-centered digital product design.",
    heroViewWork: "VIEW PROJECTS",
    heroDownloadCV: "VIEW RESUME",
    heroOpenToWork: "Open to work",
    aboutEyebrow: "About me",
    aboutHeading: "TURNING IDEAS INTO USER-FRIENDLY EXPERIENCES",
    aboutBio1: "I'm Tuan, a UI/UX Designer with a background in Information Technology. I combine technical understanding with user-centered design principles to create intuitive, functional, and engaging digital products.",
    aboutBio2: "During my internship and personal projects, I gained hands-on experience in interface design, wireframing, prototyping, and usability-focused design using Figma. I enjoy analyzing user needs, simplifying complex workflows, and designing experiences that are both visually appealing and easy to use.",
    aboutSkillsTitle: "Tools & skills",
    aboutProcessTitle: "My design process",
    aboutExperienceTitle: "Experience timeline",
    aboutStatsYears: "Years Experience",
    aboutStatsProjects: "Projects Delivered",
    aboutStatsClients: "Happy Clients",
    aboutStatsAwards: "Design Awards",
    workEyebrow: "Selected work",
    workHeading: "Projects I'm proud of",
    workSubtext: "A mix of product design, mobile apps, and passion projects built with modern guidelines.",
    workFilterAll: "All",
    workFilterProduct: "Product Design",
    workFilterMobile: "Mobile App",
    workFilterWeb: "Web UI",
    workFilterBranding: "Branding",
    workHoverAction: "VIEW CASE STUDY",
    caseBack: "Back to Home",
    caseRole: "ROLE PERFORMED",
    caseDuration: "PROJECT DURATION",
    caseYear: "COMPLETED YEAR",
    caseOutcome: "CORE OUTCOME",
    caseChallenge: "The Big Challenge",
    caseMission: "My Responsibility",
    caseQuoteTitle: "Core Experience Philosophy",
    caseProcessTitle: "Detailed Implementation Process",
    caseOutcomesTitle: "Experimental Outcomes",
    caseGalleryTitle: "Interface Showcase",
    caseNext: "NEXT PROJECT",
    caseReadNext: "Read Next Case Study",
    contactHeading: "Let's work together",
    contactSubtext: "Have a project in mind? I'm currently available for freelance work and full-time roles. I'd love to hear from you.",
    contactEmailLabel: "DIRECT MAILBOX",
    contactLocationLabel: "BASED IN",
    contactResponseLabel: "RESPONSE TIME",
    contactResponseValue: "Within 24 working hours",
    contactSocialsLabel: "PROFESSIONAL NETWORKS",
    contactFormName: "YOUR FULL NAME *",
    contactFormEmail: "CONTACT EMAIL *",
    contactFormBudget: "ESTIMATED BUDGET",
    contactFormType: "PROJECT TYPE",
    contactFormMessage: "MESSAGE *",
    contactFormHeaderTitle: "SEND A DIRECT MESSAGE",
    contactFormHeaderDesc: "Have an interesting project or a job opportunity? Drop me a line below.",
    contactFormSubmit: "SEND ENQUIRY",
    contactFormSending: "Sending details...",
    contactSuccessTitle: "Enquiry submitted! 🎉",
    contactSuccessDesc: "Thank you for connecting. I have received your project details and will reply via your personal email within 24 hours.",
    contactSuccessBtn: "Send a new message",
    errName: "Please enter your full name",
    errEmail: "Invalid email format",
    errMessage: "Please provide more details (minimum 20 characters)",
    footerReserved: "Hoang Tuanz",
    footerSubtext: "Built with React, Vite & Tailwind CSS.",

    process1Title: "1. Research",
    process1Sub: "Empathize & Explore",
    process1Desc: "Understand user challenges deeply through detailed market analytics, user interviews, and competitive evaluation.",
    
    process2Title: "2. Define",
    process2Sub: "Synthesize & Align",
    process2Desc: "Sift through accumulated insights to form robust target personas, solid problem definitions, and clear journeys.",
    
    process3Title: "3. Ideate",
    process3Sub: "Brainstorm & Layout",
    process3Desc: "Structure clean layouts, compile seamless information architectures (IA), and diagram fluid navigation frameworks.",
    
    process4Title: "4. Prototype",
    process4Sub: "Craft & Simulate",
    process4Desc: "Build structured high-fidelity digital interface modules in Figma, integrating organic tactile micro-flows with Protopie.",
    
    process5Title: "5. Test",
    process5Sub: "Measure & Refine",
    process5Desc: "Perform structured usability tasks, collect user validation scores, and hand off robust semantic library tokens.",
    skillsDesignTitle: "UI Design",
    skillsResearchTitle: "UX Design",
    skillsDevTitle: "Development"
  }
};

const PROJECTS_DATA = {
  vi: [
    {
      slug: "task-manager",
      title: "Task Manager System — Hệ thống giải pháp quản lý công việc tối ưu",
      description: "Một hệ thống trên nền tảng web giúp tạo, tổ chức và theo dõi công việc với bảng điều khiển rõ ràng và quy trình quản lý hiệu quả.",
      category: "Web UI",
      categoryKey: "Web UI",
      tags: ["Web App", "Dashboard", "Figma", "Work Management"],
      year: "2024",
      role: "Lead UI/UX Designer",
      duration: "3 tháng",
      outcome: "Tăng 35% hiệu suất quản trị công việc",
      coverImage: "task-manager.png",
      quote: "Quản lý công việc hiệu quả bắt nguồn từ sự mạch lạc trong luồng thông tin và bảng điều khiển trực quan.",
      problem: "Người dùng thường gặp khó khăn trong việc theo dõi tiến độ công việc đa dự án, dẫn đến tình trạng quá tải thông tin và bỏ lỡ các mốc thời gian quan trọng.",
      myRole: "Thiết kế giao diện người dùng, tối ưu luồng trải nghiệm tạo/giao việc và xây dựng bảng thống kê dashboard trực quan.",
      outcomes: [
        { metric: "+35%", label: "Hiệu suất quản trị" },
        { metric: "-25%", label: "Thời gian họp tiến độ" },
        { metric: "98%", label: "Tỷ lệ hoàn thành Task" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      slug: "eduplanz",
      title: "Eduplanz — Tạo kế hoạch học tập thông minh",
      description: "Giao diện quản lý tác vụ học tập được thiết kế riêng cho Eduplanz, giúp người dùng tạo lập, tổ chức và bám sát lộ trình học tập hiệu quả.",
      category: "Product Design",
      categoryKey: "Product Design",
      tags: ["EdTech", "Productivity", "Mobile App", "UI Design"],
      year: "2023",
      role: "Lead Product Designer",
      duration: "4 tháng",
      outcome: "Giúp hơn 80% học sinh duy trì thói quen tốt",
      coverImage: "eduplanz.png",
      quote: "Học thông minh, sống tự tin. Kế hoạch học tập tối giản giúp giảm tải áp lực tâm lý cho học sinh.",
      problem: "Học sinh thường khó tự xây dựng và tuân thủ kế hoạch tự học do các công cụ hiện tại quá phức tạp hoặc thiếu tính gợi nhắc trực quan sinh động.",
      myRole: "Nghiên cứu hành vi học tập của học sinh, phác thảo Wireframes và hoàn thiện bộ UI Kit với màu sắc tươi sáng truyền cảm hứng.",
      outcomes: [
        { metric: "80%", label: "Duy trì thói quen học" },
        { metric: "+40%", label: "Mức độ tập trung học" },
        { metric: "4.9★", label: "Đánh giá từ phụ huynh" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      slug: "blue-hotel",
      title: "Blue Hotel — Giải pháp quản lý toàn diện cho mọi khách sạn",
      description: "Sự kết hợp giữa kiểu chữ rõ ràng, vuông vắn và những nét vẽ mềm mại, thân thiện, cùng với bảng màu lấy cảm hứng từ đại dương.",
      category: "Product Design",
      categoryKey: "Product Design",
      tags: ["Hotel Management", "Ocean Palette", "B2B SaaS", "Design System"],
      year: "2023",
      role: "Lead UI/UX Designer",
      duration: "6 tuần",
      outcome: "Tăng 50% tốc độ check-in/check-out tại quầy",
      coverImage: "blue-hotel.png",
      quote: "Sự cân bằng hoàn hảo giữa tính kỹ thuật của hệ thống quản lý và cảm giác thư thái, dễ chịu lấy cảm hứng từ đại dương.",
      problem: "Hệ thống quản lý khách sạn truyền thống thường cồng kềnh, khó đào tạo nhân viên mới và dễ gây ra sai sót trong mùa du lịch cao điểm.",
      myRole: "Tái định hình ngôn ngữ thiết kế thương hiệu, xây dựng hệ thống lưới và typography tinh gọn, kiểm thử khả năng sử dụng của nhân viên vận hành thực tế.",
      outcomes: [
        { metric: "+50%", label: "Tốc độ check-in/out" },
        { metric: "-30%", label: "Sai sót đặt phòng" },
        { metric: "100%", label: "Nhân viên dễ làm quen" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      slug: "mind-garden",
      title: "Mind Garden — Chữa lành tâm hồn",
      description: "Không gian để dừng lại, suy ngẫm và kết nối lại với chính mình. Nơi mỗi suy nghĩ được chăm sóc và phát triển như một hạt giống.",
      category: "Mobile App",
      categoryKey: "Mobile App",
      tags: ["Mental Health", "Calm UI", "iOS App", "Micro-interactions"],
      year: "2024",
      role: "Lead UI/UX Designer",
      duration: "2 tháng",
      outcome: "Đạt 92% mức độ hài lòng về tính năng ghi cảm xúc",
      coverImage: "mind-garden.png",
      quote: "Mỗi ý nghĩ là một hạt giống; khi được gieo trồng trong một không gian bình an, nó sẽ nở hoa rực rỡ.",
      problem: "Con người hiện đại dễ rơi vào trạng thái căng thẳng nhưng các ứng dụng theo dõi cảm xúc hiện hành lại quá máy móc và tạo thêm áp lực số.",
      myRole: "Sáng tạo định hướng Calm UI tinh tế, kết hợp âm thanh tự nhiên và thiết kế các tương tác vi mô (micro-interactions) mang tính chắt chiu cảm xúc.",
      outcomes: [
        { metric: "92%", label: "Hài lòng ghi cảm xúc" },
        { metric: "+60%", label: "Chỉ số bình yên tự thân" },
        { metric: "4.9★", label: "Đánh giá trên App Store" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522881887147-8149c065099d?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      slug: "design-system",
      title: "Nucleus — Unified Design System",
      description: "Thư viện thành phần đồng nhất cho nhóm sản phẩm số đa nền tảng.",
      category: "Product Design",
      categoryKey: "Product Design",
      tags: ["Design System", "Figma", "Tokens", "Documentation"],
      year: "2023",
      role: "Solo UX Architect",
      duration: "Dài hạn",
      outcome: "Tối ưu hóa hơn 35% thời gian bàn giao giao diện phát triển",
      coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      quote: "Một hệ thống thiết kế hoàn mỹ là gốc rễ kiến tạo nên sự mạch lạc của trải nghiệm sản phẩm số.",
      problem: "Sự phân mảnh trong cách xây dựng UI giữa ba phòng ban phát triển (Web, Mobile, Dashboard) khiến các sản phẩm của doanh nghiệp bị lệch tông nhận diện, tạo chi phí cơ hội lớn khi tái lập trình mã nguồn liên tục.",
      myRole: "Phỏng vấn khảo sát quy trình vận hành của đội ngũ thiết kế & kỹ sư lập trình, phân tách cấu trúc Token (Figma Variables) và hoàn thành tài liệu hướng dẫn (Guideline) toàn diện.",
      outcomes: [
        { metric: "-35%", label: "Thời gian viết code UI" },
        { metric: "4", label: "Hệ thống sản phẩm áp dụng" },
        { metric: "100%", label: "Mức độ tuân thủ thương hiệu" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      slug: "brand-identity",
      title: "Môi Trường — Visual Brand Identity",
      description: "Nhận diện thương hiệu đương đại của tổ chức phi chính phủ bảo vệ tài nguyên xanh.",
      category: "Branding",
      categoryKey: "Branding",
      tags: ["Brand", "Logo", "Illustration", "Guidelines"],
      year: "2022",
      role: "Lead Visual Designer",
      duration: "3 tuần",
      outcome: "Triển khai đồng loạt trên tất cả cổng truyền thông lớn",
      coverImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
      quote: "Nghệ thuật bảo vệ thiên nhiên không đến từ sự răn đe, nó đến từ tình yêu sâu đậm được hữu hình hóa qua thẩm mỹ.",
      problem: "Tổ chức 'Môi Trường' sở hữu ngôn ngữ hình ảnh khá lỗi thời, mang nặng tính hành chính và thiếu sự tương tác xúc cảm với tệp độc giả thế hệ trẻ (Gen Z) - lực lượng nòng cốt hành động vì khí hậu.",
      myRole: "Nghiên cứu bản sắc tổ chức, thiết kế lại logo tích hợp hình tượng vô cực và chồi non cách điệu nghệ thuật, biên soạn bộ cẩm nang quy định quy chuẩn ấn phẩm truyền thông xã hội.",
      outcomes: [
        { metric: "100%", label: "Tỷ lệ hài lòng nội bộ" },
        { metric: "+200%", label: "Tương tác truyền thông mạng" },
        { metric: "Gen Z", label: "Tệp tiếp cận đột phá" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
      ]
    }
  ],
  en: [
    {
      slug: "task-manager",
      title: "Task Manager System — Optimize Work Management System",
      description: "A web-based system for creating, organizing, and tracking tasks with a clear dashboard and efficient workflow management.",
      category: "Web UI",
      categoryKey: "Web UI",
      tags: ["Web App", "Dashboard", "Figma", "Work Management"],
      year: "2024",
      role: "Lead UI/UX Designer",
      duration: "3 months",
      outcome: "35% increase in task completion efficiency",
      coverImage: "task-manager.png",
      quote: "Efficient work management stems from information clarity and intuitive analytics dashboards.",
      problem: "Users often struggle to stay on top of multiple project timelines, leading to information overload and missed deadlines.",
      myRole: "Designed the web interfaces, optimized task assignment flows, and created the responsive dashboard analytics view.",
      outcomes: [
        { metric: "+35%", label: "Work Efficiency" },
        { metric: "-25%", label: "Progress Meeting Time" },
        { metric: "98%", label: "Task Completion Rate" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      slug: "eduplanz",
      title: "Eduplanz — Smart Study Planning Solution",
      description: "A task management interface designed for Eduplanz, helping users create, organize, and track daily tasks efficiently with a clean and intuitive layout.",
      category: "Product Design",
      categoryKey: "Product Design",
      tags: ["EdTech", "Productivity", "Mobile App", "UI Design"],
      year: "2023",
      role: "Lead Product Designer",
      duration: "4 months",
      outcome: "80% of students successfully built better learning habits",
      coverImage: "eduplanz.png",
      quote: "Learn smart, live confident. A minimalist planning layout relieves mental pressure for students.",
      problem: "Students often struggle to establish self-study routines because current tools are either too complex or lack engaging reminders.",
      myRole: "Conducted research on student learning patterns, created high-fidelity layouts in Figma, and designed a bright, inspiring visual theme.",
      outcomes: [
        { metric: "80%", label: "Built Stable Habits" },
        { metric: "+40%", label: "Focus Concentration" },
        { metric: "4.9★", label: "Parent Satisfaction" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      slug: "blue-hotel",
      title: "Blue Hotel — All-in-One Hotel Management Solution",
      description: "The combination of clear, blocky typography and soft, friendly strokes, along with an ocean-inspired color palette, creates an intuitive and user-friendly interface.",
      category: "Product Design",
      categoryKey: "Product Design",
      tags: ["Hotel Management", "Ocean Palette", "B2B SaaS", "Design System"],
      year: "2023",
      role: "Lead UI/UX Designer",
      duration: "6 weeks",
      outcome: "50% faster check-in/check-out time at the front desk",
      coverImage: "blue-hotel.png",
      quote: "The perfect balance between operational utility and an ocean-inspired visual calm.",
      problem: "Legacy hotel software is cluttered, requires extensive staff training, and increases room allocation mistakes during peak travel seasons.",
      myRole: "Restructured the design tokens, unified typography and grid patterns, and ran usability tests with actual hotel receptionist teams.",
      outcomes: [
        { metric: "+50%", label: "Check-in/out Velocity" },
        { metric: "-30%", label: "Booking Overlaps" },
        { metric: "100%", label: "Staff Adoption Rate" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      slug: "mind-garden",
      title: "Mind Garden — Soul Healing Space",
      description: "Mind Garden is more than just an app — it’s a space to pause, reflect, and reconnect with yourself. Every thought is like a seed; when nurtured in a calm and safe environment, it can grow naturally and meaningfully.",
      category: "Mobile App",
      categoryKey: "Mobile App",
      tags: ["Mental Health", "Calm UI", "iOS App", "Micro-interactions"],
      year: "2024",
      role: "Lead UI/UX Designer",
      duration: "2 months",
      outcome: "92% user satisfaction score on mood logging journeys",
      coverImage: "mind-garden.png",
      quote: "Every thought is a seed; when nurtured in a calm and safe environment, it can grow naturally and beautifully.",
      problem: "Modern life is highly stressful, yet most wellness trackers feel cold, mechanical, and trigger digital fatigue.",
      myRole: "Formulated the Calm UI design guidelines, composed accessible palettes, and engineered peaceful micro-interactions.",
      outcomes: [
        { metric: "92%", label: "Mood Log Satisfaction" },
        { metric: "+60%", label: "Inner Serenity Score" },
        { metric: "4.9★", label: "App Store Rating" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522881887147-8149c065099d?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      slug: "design-system",
      title: "Nucleus — Unified Design System",
      description: "A scalable, semantic component library built for developer handoff efficiency.",
      category: "Product Design",
      categoryKey: "Product Design",
      tags: ["Design System", "Figma", "Tokens", "Documentation"],
      year: "2023",
      role: "Solo UX Architect",
      duration: "Ongoing",
      outcome: "Optimized design handoff and dev cycle by 35%",
      coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      quote: "A design system isn't just about components — it's the semantic bridge between creative thinking and running code.",
      problem: "UI inconsistencies across the web, mobile, and SaaS tools created brand fragmentation and redundant engineering work.",
      myRole: "Audited production codebases, aligned creative leads, structured Figma semantic variables, and authored exhaustive implementation guidelines.",
      outcomes: [
        { metric: "-35%", label: "Frontend Handoff Time" },
        { metric: "4", label: "Adopted Platforms" },
        { metric: "100%", label: "Brand Integrity Match" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      slug: "brand-identity",
      title: "Môi Trường — Visual Brand Identity",
      description: "A contemporary visual system for a premium ecological non-governmental organization.",
      category: "Branding",
      categoryKey: "Branding",
      tags: ["Brand", "Logo", "Illustration", "Guidelines"],
      year: "2022",
      role: "Lead Visual Designer",
      duration: "3 weeks",
      outcome: "Successfully adopted across all outreach campaigns",
      coverImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
      quote: "Environmental protection design shouldn't scare people; it should inspire love and stewardship.",
      problem: "The legacy identity was institutional, dated, and lacked appeal with younger demographic targets essential to active mobilization.",
      myRole: "Designed custom geometric emblem blending the infinity loop and sprouting leaves, then engineered templates for rapid social media production.",
      outcomes: [
        { metric: "100%", label: "Internal Unity Match" },
        { metric: "+200%", label: "Social Platform Engagement" },
        { metric: "Gen Z", label: "Breakthrough Audience" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
      ]
    }
  ]
};

const SKILLS_DATA = {
  vi: {
    design: ["Figma", "Wireframing", "Prototyping", "Design Systems", "Responsive Design", "Component Design"],
    research: ["Nghiên cứu người dùng", "User Flow", "Kiến trúc thông tin", "Kiểm thử trải nghiệm", "Bản đồ hành trình"],
    dev: ["HTML/CSS", "Basic React", "Hợp tác Front-end", "Responsive Web Design"]
  },
  en: {
    design: ["Figma", "Wireframing", "Prototyping", "Design Systems", "Responsive Design", "Component Design"],
    research: ["User Research", "User Flow", "Information Architecture", "Usability Testing", "Journey Mapping"],
    dev: ["HTML/CSS", "Basic React", "Front-end Collaboration", "Responsive Web Design"]
  }
};

const TIMELINE_DATA = {
  vi: [
    {
      period: "2026 – Hiện tại",
      role: "Thực tập sinh Thiết kế UI/UX",
      company: "FPT IS",
      description: "Đóng góp vào việc thiết kế lại các nền tảng Internet Banking và Mobile Banking thông qua việc vẽ wireframe, tạo mẫu thử (prototype) và thiết kế giao diện. Hợp tác với Business Analysts để đưa ra các giải pháp hướng tới người dùng, đồng thời tích lũy kinh nghiệm thiết kế sản phẩm doanh nghiệp và làm việc nhóm liên chức năng."
    },
    {
      period: "2025",
      role: "Thực tập sinh Thiết kế UI/UX",
      company: "Erateq",
      description: "Xây dựng các case study UI/UX, thực hành nghiên cứu người dùng và thiết kế giao diện di động & web bằng Figma."
    },
    {
      period: "2022 – 2025",
      role: "Cử nhân Công nghệ thông tin",
      company: "",
      description: "Xây dựng nền tảng vững chắc về phát triển phần mềm, phân tích hệ thống và giải quyết vấn đề, đồng thời phát triển các kỹ năng thiết kế UI/UX thông qua các dự án học tập, tự học và kinh nghiệm thực tế."
    }
  ],
  en: [
    {
      period: "2026 – Present",
      role: "UI/UX Design Intern",
      company: "FPT IS",
      description: "Contributing to the redesign of Internet Banking and Mobile Banking platforms through wireframing, prototyping, and interface design. Collaborating with Business Analysts to deliver user-centered solutions while gaining experience in enterprise product design and cross-functional teamwork."
    },
    {
      period: "2025",
      role: "UI/UX Design Intern",
      company: "Erateq",
      description: "Creating UI/UX case studies, practicing user research, and designing mobile & web interfaces using Figma."
    },
    {
      period: "2022 – 2025",
      role: "B.S. Information Technology",
      company: "",
      description: "Built a strong foundation in software development, system analysis, and problem-solving while developing skills in UI/UX design through academic projects, self-learning, and practical experience."
    }
  ]
};

const EditorialGridBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const gridSpacing = 80;
    
    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height);

      // Delicate dark background gradient spotlight mapping
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 10, mouseX, mouseY, 400);
      gradient.addColorStop(0, 'rgba(225, 29, 72, 0.08)');
      gradient.addColorStop(1, 'rgba(12, 12, 14, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Base matrix mesh wireframe layout lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.012)';
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Drawing delicate cosmic nodes with magnetic shift
      for (let x = gridSpacing; x < width; x += gridSpacing) {
        for (let y = gridSpacing; y < height; y += gridSpacing) {
          const dx = mouseX - x;
          const dy = mouseY - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let px = x;
          let py = y;

          if (dist < 250) {
            const force = (250 - dist) / 250;
            px += (dx / dist) * force * 5;
            py += (dy / dist) * force * 5;
            ctx.fillStyle = 'rgba(225, 29, 72, 0.4)';
          } else {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
          }

          ctx.beginPath();
          ctx.arc(px, py, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const tick = () => {
      drawGrid();
      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 bg-[#0C0C0E]" />;
};

const StarDecorationSVG = ({ className = "w-4 h-4", color = "#E11D48", style }) => (
  <svg style={style} className={`${className} animate-pulse`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" 
      fill={color}
    />
  </svg>
);

// Mathematically Clean Hollow 'Z' vector split into two open paths to completely bypass browser GPU triangulation rendering bugs
const OutlineZ = () => (
  <svg 
    viewBox="-2 -2 104 104" 
    className="h-[0.71em] w-auto inline-block align-baseline select-none"
    style={{ 
      verticalAlign: '0.01em', // Adjusted to align perfectly with Montserrat baseline
      marginLeft: '-0.04em' // Tighter margin using relative em units to align perfectly beside letter N
    }}
  >
    <g fill="none" stroke="#E11D48" strokeWidth="5" strokeLinejoin="miter" style={{ strokeWidth: '5px' }}>
      {/* Path 1: Top, left, and bottom outline */}
      <path d="M 100 0 L 0 0 L 0 22.5 L 65 22.5 L 0 77.5 L 0 100 L 100 100" />
      {/* Path 2: Right side and diagonal spine outline */}
      <path d="M 100 0 L 100 22.5 L 35 77.5 L 100 77.5 L 100 100" />
    </g>
  </svg>
);

const NotificationToast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#141416] border border-[#E11D48]/30 px-5 py-4 rounded-lg flex items-center gap-3 shadow-xl max-w-sm animate-bounce">
      <StarDecorationSVG className="w-5 h-5 text-[#E11D48]" />
      <div>
        <p className="text-xs text-white leading-relaxed font-medium">{message}</p>
      </div>
      <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors ml-2 focus:outline-none">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

const Navbar = ({ lang, setLang, activeRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (route, sectionId) => {
    setMobileMenuOpen(false);
    onNavigate(route, sectionId);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-[#0C0C0E]/90 backdrop-blur-md border-b border-white/[0.06] py-3.5" 
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between relative">
        {/* Brand logo & PORTFOLIO text */}
        <button 
          onClick={() => handleLinkClick("home", "hero")} 
          className="group flex items-center gap-3 focus:outline-none"
        >
          <img 
            src="Logo.png" 
            alt="Hoang Tuanz Logo" 
            className="w-9 h-9 object-contain filter drop-shadow-[0_0_8px_rgba(225,29,72,0.4)]"
          />
          <span className="font-headings font-bold text-xs tracking-[0.25em] text-white uppercase">
            PORTFOLIO
          </span>
        </button>

        {/* Desktop links - Smooth scroll triggers, uppercase to match the screenshot */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-headings">
          <button
            onClick={() => handleLinkClick("home", "hero")}
            className="relative font-bold text-[11px] tracking-widest uppercase py-2 transition-colors duration-300 text-zinc-400 hover:text-white"
          >
            {lang === 'vi' ? 'Trang Chủ' : 'Home'}
          </button>

          <button
            onClick={() => handleLinkClick("home", "about")}
            className="relative font-bold text-[11px] tracking-widest uppercase py-2 transition-colors duration-300 text-zinc-400 hover:text-white"
          >
            {lang === 'vi' ? 'Giới Thiệu' : 'About'}
          </button>

          <button
            onClick={() => handleLinkClick("home", "work")}
            className="relative font-bold text-[11px] tracking-widest uppercase py-2 transition-colors duration-300 text-zinc-400 hover:text-white"
          >
            {lang === 'vi' ? 'Dự Án' : 'Projects'}
          </button>
          
          <button
            onClick={() => handleLinkClick("home", "contact")}
            className="relative font-bold text-[11px] tracking-widest uppercase py-2 transition-colors duration-300 text-zinc-400 hover:text-white"
          >
            {lang === 'vi' ? 'Liên Hệ' : 'Contact'}
          </button>
        </div>

        {/* Global actions row */}
        <div className="hidden md:flex items-center gap-8">
          {/* Custom plain text Lang Switcher: EN / VI */}
          <div className="flex items-center gap-2 font-headings text-xs font-bold tracking-wider">
            <button 
              onClick={() => setLang('en')}
              className={`transition-colors duration-300 ${lang === 'en' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              EN
            </button>
            <span className="text-zinc-600">/</span>
            <button 
              onClick={() => setLang('vi')}
              className={`transition-colors duration-300 ${lang === 'vi' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              VI
            </button>
          </div>

          <button 
            onClick={() => handleLinkClick("home", "contact")}
            className="font-headings font-bold text-[11px] tracking-wider uppercase bg-[#E11D48] text-white px-6 py-2.5 rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] outline-none"
          >
            {lang === 'vi' ? 'Liên Hệ' : "Let's Talk"}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-4 md:hidden">
          <div className="flex items-center gap-1.5 font-headings text-[10px] font-bold">
            <button 
              onClick={() => setLang('en')}
              className={`transition-all ${lang === 'en' ? 'text-white' : 'text-zinc-500'}`}
            >
              EN
            </button>
            <span className="text-zinc-700">/</span>
            <button 
              onClick={() => setLang('vi')}
              className={`transition-all ${lang === 'vi' ? 'text-white' : 'text-zinc-500'}`}
            >
              VI
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white focus:outline-none focus:ring-1 focus:ring-[#E11D48] rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-[#0C0C0E]/98 backdrop-blur-xl z-40 md:hidden flex flex-col p-10 transition-all duration-300 border-t border-white/[0.05]">
          <div className="flex flex-col gap-6 my-auto">
            <button
              onClick={() => handleLinkClick("home", "hero")}
              className="text-left font-extrabold text-3xl tracking-tight py-2 border-b border-white/[0.05] flex items-center justify-between text-white"
            >
              <span>{t.navHome}</span>
              <StarDecorationSVG className="w-5 h-5 opacity-40" />
            </button>

            <button
              onClick={() => handleLinkClick("home", "work")}
              className="text-left font-extrabold text-3xl tracking-tight py-2 border-b border-white/[0.05] flex items-center justify-between text-white"
            >
              <span>{t.navWork}</span>
              <StarDecorationSVG className="w-5 h-5 opacity-40" />
            </button>

            <button
              onClick={() => handleLinkClick("home", "about")}
              className="text-left font-extrabold text-3xl tracking-tight py-2 border-b border-white/[0.05] flex items-center justify-between text-white"
            >
              <span>{t.navAbout}</span>
              <StarDecorationSVG className="w-5 h-5 opacity-40" />
            </button>

            <button
              onClick={() => handleLinkClick("home", "contact")}
              className="text-left font-extrabold text-3xl tracking-tight py-2 border-b border-white/[0.05] flex items-center justify-between text-white"
            >
              <span>{t.navContact}</span>
              <StarDecorationSVG className="w-5 h-5 opacity-40" />
            </button>
          </div>

          <div className="mt-auto space-y-4">
            <button 
              onClick={() => handleLinkClick("home", "contact")}
              className="w-full text-center font-bold text-sm uppercase bg-[#E11D48] text-white py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              {t.navHire}
            </button>
            <p className="text-center text-[10px] text-zinc-500 font-mono">Hoang Tuanz · Vietnam 🇻🇳</p>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ lang, onShowToast }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 pt-28 pb-20 overflow-hidden z-10 text-white">
      {/* Background decorations */}
      <div className="absolute right-[5%] top-[15%] w-80 h-80 pointer-events-none md:block hidden opacity-25">
        <svg viewBox="0 0 100 100" className="w-full h-full text-rose-500 stroke-current fill-none">
          <circle cx="20" cy="20" r="1" fill="#E11D48" />
          <circle cx="80" cy="30" r="1.5" fill="#E11D48" />
          <circle cx="50" cy="70" r="1.2" fill="#E11D48" />
          <circle cx="30" cy="85" r="1" fill="#E11D48" />
          <line x1="20" y1="20" x2="80" y2="30" strokeWidth="0.3" strokeDasharray="2 2" />
          <line x1="80" y1="30" x2="50" y2="70" strokeWidth="0.3" strokeDasharray="2 2" />
          <line x1="50" y1="70" x2="30" y2="85" strokeWidth="0.3" strokeDasharray="2 2" />
          <path d="M 50 10 L 90 50 L 50 90 L 10 50 Z" strokeWidth="0.2" />
        </svg>
        <div className="absolute inset-0 bg-[#E11D48]/5 filter blur-2xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        {/* Availability tag */}
        <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] px-4 py-2.5 rounded-lg mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E11D48] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E11D48]"></span>
          </span>
          <p className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest font-semibold">
            {t.heroAvailable}
          </p>
        </div>

        <div className="relative mb-6">
          <StarDecorationSVG className="w-10 h-10 text-[#E11D48] animate-spin" style={{ animationDuration: '15s' }} />
          <div className="absolute inset-0 bg-[#E11D48]/30 blur-lg rounded-full" />
        </div>

        {/* Brand name with regular text Z */}
        <h1 className="font-headings font-black text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[7.5rem] tracking-tight leading-none uppercase relative select-none mb-4">
          <span className="hero-title-word hero-title-main text-white">HOANG</span>
          <span className="hero-title-word hero-title-accent-premium">TUANZ</span>
        </h1>

        <p className="mb-3 inline-flex items-center justify-center gap-2 font-headings text-2xl font-extrabold uppercase leading-none drop-shadow-[0_0_18px_rgba(255,255,255,0.16)]">
          <span style={{ color: "rgba(225, 29, 72, 0.85)" }}>UI/UX</span>
          <span className="text-white">Designer</span>
        </p>

        <p className="text-base sm:text-lg md:text-xl text-zinc-200 max-w-4xl mb-12 leading-relaxed font-light">
          {t.heroSubheading}
        </p>

        {/* Call to actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-sm mb-20">
          <button 
            onClick={() => {
              const element = document.getElementById("work");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto font-bold text-xs tracking-widest uppercase bg-[#E11D48] text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-[#E11D48]/15"
          >
            {t.heroViewWork}
          </button>
          
          <a 
            href="/CV_VoHoangTuan.pdf"
            download="CV_VoHoangTuan.pdf"
            className="w-full sm:w-auto text-center font-bold text-xs tracking-widest uppercase bg-transparent border border-white/10 text-zinc-300 px-8 py-4 rounded-lg hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-300"
          >
            {t.heroDownloadCV}
          </a>
        </div>
      </div>

      {/* Marquee scroll banner */}
      <div className="absolute bottom-0 left-0 right-0 py-6 bg-white/[0.01] border-y border-white/[0.05] overflow-hidden backdrop-blur-[2px]">
        <div className="animate-marquee-infinite whitespace-nowrap flex items-center gap-14 text-[10px] font-mono tracking-widest uppercase text-zinc-400">
          {Array(4).fill([
            "UI Design Specialist", "UX Design Audits", "Figma Design Tokenization", "Rapid Interactive Prototyping", "Design System Infrastructure", "Usability User Testing", "B2B SaaS Architecture", "Framer Micro-interactions"
          ]).flat().map((skill, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="font-bold text-zinc-200">{skill}</span>
              <StarDecorationSVG className="w-2.5 h-2.5 text-[#E11D48]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const skills = SKILLS_DATA[lang];
  const timeline = TIMELINE_DATA[lang];

  return (
    <section id="about" className="relative min-h-screen py-24 sm:py-32 px-6 sm:px-12 z-10 max-w-7xl mx-auto text-zinc-200 border-t border-white/[0.05]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start mb-24">
        {/* Texts */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E11D48] font-bold">{t.aboutEyebrow}</span>
            <span className="w-12 h-[1px] bg-[#E11D48]"></span>
          </div>
          
          <h2 className="font-headings font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight uppercase">
            {t.aboutHeading}
          </h2>

          <div className="space-y-6 text-zinc-200 text-sm sm:text-base leading-relaxed font-light">
            <p>{t.aboutBio1}</p>
            <p>{t.aboutBio2}</p>
          </div>

          {/* Timeline Experience section */}
          <div className="pt-10 space-y-8 border-t border-white/[0.08]">
            <h3 className="font-headings font-extrabold text-xl sm:text-2xl text-white uppercase">{t.aboutExperienceTitle}</h3>
            
            <div className="relative border-l border-white/[0.08] pl-6 space-y-10">
              {timeline.map((job, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#0C0C0E] border-2 border-white/[0.15] group-hover:border-[#E11D48] transition-colors flex items-center justify-center">
                    <div className="w-1 h-1 bg-[#E11D48] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
                  </div>
                  
                  <span className="text-[9px] font-mono text-[#E11D48] font-bold bg-[#E11D48]/10 border border-[#E11D48]/25 px-2 py-0.5 rounded-lg uppercase tracking-wider">
                    {job.period}
                  </span>
                  
                  <h4 className="font-headings font-extrabold text-lg text-white mt-3 uppercase">{job.role}</h4>
                  {job.company && <p className="text-xs text-zinc-400 font-bold mb-2">{job.company}</p>}
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-xl font-light">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Profile stage & Stats */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="profile-stage relative min-h-[690px] sm:min-h-[740px] lg:min-h-[790px] overflow-visible">
            <div className="absolute inset-x-0 top-8 h-[66%] rounded-xl bg-[#E11D48]/[0.025] blur-2xl" />
            <StarDecorationSVG className="absolute right-3 top-2 w-4 h-4 text-[#E11D48] drop-shadow-[0_0_8px_rgba(225,29,72,0.4)]" />

            <img
              src="/z.svg"
              alt=""
              aria-hidden="true"
              className="profile-stage__z absolute left-[calc(50%+3px)] top-[5.1rem] z-0 w-[94%] max-w-[590px] -translate-x-1/2 opacity-75"
            />

            <div className="absolute -inset-x-5 -top-4 z-10 mx-auto flex h-[79%] max-w-[610px] items-end justify-center overflow-visible">
              <div className="absolute left-1/2 top-[44%] aspect-square w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(225,29,72,0.22)_0%,rgba(225,29,72,0.11)_42%,transparent_70%)] blur-2xl" />
              <img
                src="/Tuanzdeptrai2.svg"
                alt="Hoang Tuanz Portrait"
                className="profile-stage__person relative z-10 h-[94%] w-auto max-w-none -translate-x-[2%] object-contain object-bottom drop-shadow-[0_28px_55px_rgba(0,0,0,0.5)]"
              />
            </div>

            <div className="profile-stage__stats-grid absolute inset-x-0 bottom-[3.7rem] z-20 grid grid-cols-2 gap-4 sm:gap-5">
              {[
                { value: "1+", label: t.aboutStatsYears },
                { value: "5+", label: t.aboutStatsProjects },
                { value: "120+", label: t.aboutStatsClients },
                { value: "2", label: t.aboutStatsAwards }
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`profile-stage__stat min-h-[128px] rounded-xl border border-white/[0.08] bg-[#141416]/85 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl crimson-border-hover sm:p-6 ${i % 2 === 1 ? "translate-y-6" : ""}`}
                >
                  <h4 className="font-headings text-3xl font-extrabold leading-none text-[#E11D48] sm:text-4xl">{stat.value}</h4>
                  <p className="mt-3 font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills list categories */}
      <div className="py-16 border-t border-white/[0.08]">
        <h3 className="font-headings font-extrabold text-2xl text-white mb-8 flex items-center gap-2 uppercase">
          <StarDecorationSVG className="w-5 h-5 text-[#E11D48]" />
          {t.aboutSkillsTitle}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="space-y-4">
            <h4 className="font-headings font-extrabold text-sm text-white flex items-center gap-2 uppercase">
              <span className="w-2 h-2 bg-[#E11D48] rounded-full"></span> {t.skillsDesignTitle}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {skills.design.map((s, i) => (
                <span key={i} className="text-[11px] bg-[#141416] border border-white/[0.05] px-3 py-1.5 rounded-lg text-zinc-300 hover:border-[#E11D48] hover:text-white transition-all font-mono font-medium">{s}</span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-headings font-extrabold text-sm text-white flex items-center gap-2 uppercase">
              <span className="w-2 h-2 bg-[#E11D48] rounded-full"></span> {t.skillsResearchTitle}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {skills.research.map((s, i) => (
                <span key={i} className="text-[11px] bg-[#141416] border border-white/[0.05] px-3 py-1.5 rounded-lg text-zinc-300 hover:border-[#E11D48] hover:text-white transition-all font-mono font-medium">{s}</span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-headings font-extrabold text-sm text-white flex items-center gap-2 uppercase">
              <span className="w-2 h-2 bg-[#E11D48] rounded-full"></span> {t.skillsDevTitle}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {skills.dev.map((s, i) => (
                <span key={i} className="text-[11px] bg-[#141416] border border-white/[0.05] px-3 py-1.5 rounded-lg text-zinc-300 hover:border-[#E11D48] hover:text-white transition-all font-mono font-medium">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* My Design Process Section */}
        <div className="pt-16 border-t border-white/[0.08]">
          <h3 className="font-headings font-extrabold text-2xl text-white mb-2 flex items-center gap-2 uppercase">
            <StarDecorationSVG className="w-5 h-5 text-[#E11D48]" />
            {t.aboutProcessTitle}
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm font-light mb-10 max-w-2xl">
            {lang === 'vi' 
              ? "Quy trình thiết kế sản phẩm khoa học bám sát tiêu chí đặt người dùng làm trung tâm nhằm chuyển hóa ý tưởng thành sản phẩm vận hành mượt mà."
              : "A highly scientific, user-centered product workflow configured to turn early ideas into running digital architectures."
            }
          </p>
          
          <div className="relative">
            {/* Elegant connection line behind stages on desktop */}
            <div className="absolute top-[35px] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-[#E11D48]/0 via-white/[0.08] to-[#E11D48]/0 hidden lg:block pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {[
                { title: t.process1Title, sub: t.process1Sub, desc: t.process1Desc },
                { title: t.process2Title, sub: t.process2Sub, desc: t.process2Desc },
                { title: t.process3Title, sub: t.process3Sub, desc: t.process3Desc },
                { title: t.process4Title, sub: t.process4Sub, desc: t.process4Desc },
                { title: t.process5Title, sub: t.process5Sub, desc: t.process5Desc }
              ].map((step, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#141416] border border-white/[0.04] p-6 rounded-lg transition-all duration-300 hover:bg-[#1b1b1e] hover:border-[#E11D48]/40 hover:scale-[1.01] group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Circle indicators */}
                    <div className="w-10 h-10 rounded-lg bg-[#0C0C0E] border border-white/[0.08] flex items-center justify-center text-xs font-mono font-bold text-zinc-400 group-hover:text-white group-hover:border-[#E11D48] transition-all duration-300">
                      0{idx + 1}
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-headings font-extrabold text-base text-white uppercase tracking-tight group-hover:text-[#E11D48] transition-colors">{step.title}</h4>
                      <p className="text-[10px] font-mono uppercase text-[#E11D48]/80 tracking-widest">{step.sub}</p>
                    </div>

                    <p className="text-xs text-zinc-300 font-light leading-relaxed group-hover:text-zinc-200 transition-colors">
                      {step.desc}
                    </p>
                  </div>

                  <div className="w-full h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-[#E11D48]/80 group-hover:to-transparent mt-6 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Work = ({ lang, onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const t = TRANSLATIONS[lang];
  const projects = PROJECTS_DATA[lang];

  const filters = [
    { key: "All", label: t.workFilterAll },
    { key: "Product Design", label: t.workFilterProduct },
    { key: "Mobile App", label: t.workFilterMobile },
    { key: "Web UI", label: t.workFilterWeb },
    { key: "Branding", label: t.workFilterBranding }
  ];

  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => project.categoryKey === selectedFilter);

  return (
    <section id="work" className="relative min-h-screen py-24 sm:py-32 px-6 sm:px-12 z-10 max-w-7xl mx-auto text-zinc-200 border-t border-white/[0.05]">
      <div className="space-y-6 mb-16">
        <div className="inline-flex items-center gap-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#E11D48] font-bold">{t.workEyebrow}</span>
          <span className="w-12 h-[1px] bg-[#E11D48]"></span>
        </div>
        
        <h2 className="font-headings font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight uppercase">
          {t.workHeading}
        </h2>
        <p className="text-zinc-300 text-sm sm:text-base max-w-2xl font-light">
          {t.workSubtext}
        </p>

        {/* Dynamic project sorting filter tabs */}
        <div className="flex flex-wrap gap-2.5 pt-4">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setSelectedFilter(filter.key)}
              className={`font-bold text-[10px] tracking-widest uppercase px-5 py-3 transition-all duration-300 rounded-lg outline-none ${
                selectedFilter === filter.key 
                  ? "bg-[#E11D48] text-white" 
                  : "bg-[#141416] text-zinc-400 hover:text-white border border-white/[0.05] hover:border-white/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Case studies display grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div 
            key={project.slug}
            onClick={() => onSelectProject(project.slug)}
            className="group cursor-pointer bg-[#141416] border border-white/[0.06] transition-all duration-500 hover:scale-[1.015] rounded-xl overflow-hidden crimson-border-hover"
          >
            {/* Banner media component */}
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950 border-b border-white/[0.05]">
              <img 
                src={project.coverImage} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              
              <div className="absolute top-4 left-4 bg-[#E11D48] text-white font-extrabold text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-lg">
                {project.category}
              </div>

              {/* View Overlay on Hover */}
              <div className="absolute inset-0 bg-[#0C0C0E]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-bold text-[10px] tracking-widest uppercase text-white bg-[#E11D48] px-5 py-3 rounded-lg flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                  {t.workHoverAction}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Inner description logs */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono font-semibold uppercase tracking-wider">
                <span>{project.role}</span>
                <span>{project.year}</span>
              </div>

              <h3 className="font-headings font-extrabold text-lg text-white group-hover:text-[#E11D48] transition-colors leading-snug uppercase">
                {project.title}
              </h3>

              <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[9px] font-mono bg-white/[0.03] border border-white/[0.06] text-zinc-200 px-2.5 py-1 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CaseStudy = ({ slug, lang, onNavigate }) => {
  const t = TRANSLATIONS[lang];
  const projects = PROJECTS_DATA[lang];
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center p-6 text-white bg-[#0C0C0E]">
        <h2 className="text-xl font-headings mb-5 uppercase">Case study not found.</h2>
        <button onClick={() => onNavigate("home")} className="bg-[#E11D48] text-white px-6 py-3 rounded-lg font-bold uppercase tracking-widest">{t.caseBack}</button>
      </div>
    );
  }

  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="relative min-h-screen py-24 sm:py-32 z-10 reveal-editorial text-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Navigation back */}
        <button 
          onClick={() => onNavigate("home", "work")}
          className="group mb-10 inline-flex items-center gap-2.5 font-bold text-[10px] tracking-widest uppercase text-zinc-400 hover:text-[#E11D48] transition-colors focus:outline-none"
        >
          <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t.caseBack}
        </button>

        {/* Header */}
        <header className="space-y-6 mb-12">
          <span className="inline-block bg-[#E11D48] text-white font-extrabold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-lg">
            {project.category}
          </span>
          <h1 className="font-headings font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tighter leading-tight uppercase">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 max-w-4xl font-light leading-relaxed">
            {project.description}
          </p>
        </header>

        {/* Metadata */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/[0.08] mb-12 text-xs">
          <div>
            <p className="text-zinc-500 font-mono text-[9px] uppercase mb-1 tracking-wider font-bold">{t.caseRole}</p>
            <p className="text-white font-extrabold text-sm uppercase">{project.role}</p>
          </div>
          <div>
            <p className="text-zinc-500 font-mono text-[9px] uppercase mb-1 tracking-wider font-bold">{t.caseDuration}</p>
            <p className="text-white font-extrabold text-sm uppercase">{project.duration}</p>
          </div>
          <div>
            <p className="text-zinc-500 font-mono text-[9px] uppercase mb-1 tracking-wider font-bold">{t.caseYear}</p>
            <p className="text-white font-extrabold text-sm uppercase">{project.year}</p>
          </div>
          <div>
            <p className="text-zinc-500 font-mono text-[9px] uppercase mb-1 tracking-wider font-bold">{t.caseOutcome}</p>
            <p className="text-[#E11D48] font-extrabold text-sm tracking-wide uppercase">{project.outcome}</p>
          </div>
        </div>

        {/* Cover */}
        <div className="aspect-[21/9] rounded-xl overflow-hidden mb-16 border border-white/[0.05] bg-zinc-950">
          <img 
            src={project.coverImage} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Double row contexts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-headings font-extrabold text-xl sm:text-2xl text-white uppercase">{t.caseChallenge}</h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              {project.problem}
            </p>
          </div>
          <div className="lg:col-span-5 space-y-4 bg-[#141416] p-6 rounded-xl border border-white/[0.05]">
            <h3 className="font-headings font-extrabold text-lg text-white uppercase">{t.caseMission}</h3>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
              {project.myRole}
            </p>
          </div>
        </div>

        {/* Pull quote */}
        <div className="relative text-center py-16 border-y border-white/[0.08] mb-20 max-w-4xl mx-auto">
          <StarDecorationSVG className="w-10 h-10 text-[#E11D48]/30 mx-auto mb-4" />
          <blockquote className="font-headings italic text-xl sm:text-2xl text-white leading-relaxed font-light px-4">
            "{project.quote}"
          </blockquote>
          <p className="text-[10px] text-[#E11D48] uppercase font-mono mt-4 tracking-widest font-extrabold">— {t.caseQuoteTitle}</p>
        </div>

        {/* Chronological steps */}
        <div className="space-y-10 mb-20">
          <h3 className="font-headings font-extrabold text-2xl sm:text-3xl text-white uppercase">{t.caseProcessTitle}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: lang === 'vi' ? "Research & Discovery" : "Research & Discovery",
                desc: lang === 'vi' 
                  ? "Khảo sát thực tiễn người dùng, tiến hành phân tích thấu đáo hành vi thực tế, lập bản đồ hành trình người dùng và thực hiện đánh giá Heuristic hệ thống cũ để xác định rõ lỗ hổng trải nghiệm."
                  : "Audited existing friction points, performed direct user interviews, established solid target personas, and mapped behavioral maps to reveal structural barriers."
              },
              {
                num: "02",
                title: lang === 'vi' ? "Information Architecture & Flows" : "Information Architecture & Flows",
                desc: lang === 'vi' 
                  ? "Tái cấu trúc lại mô hình sơ đồ phân cấp thông tin, tinh giản hóa các User Flows tương tác cốt lõi nhằm giảm thiểu tối đa số lượng bước thao tác thừa thãi cho người dùng."
                  : "Reconceptualized semantic groupings, simplified critical user tasks, and pruned excessive navigational branches to prevent informational cognitive fatigue."
              },
              {
                num: "03",
                title: lang === 'vi' ? "Visual Design & Prototyping" : "Visual Design & Prototyping",
                desc: lang === 'vi' 
                  ? "Phác họa chi tiết các giải pháp giao diện độ phân giải cao trên Figma. Đồng thời tạo mẫu thử nghiệm tương tác chuyển động mượt mà và trực quan sinh động thông qua Protopie."
                  : "Translated wireframes into pixel-perfect high-fidelity screens. Crafted realistic dynamic tactile transitions using interactive variables in Protopie."
              },
              {
                num: "04",
                title: lang === 'vi' ? "Usability Testing & Developer Handoff" : "Usability Testing & Developer Handoff",
                desc: lang === 'vi' 
                  ? "Triển khai kiểm nghiệm đo lường thực tế trên tệp khách hàng thử nghiệm, tinh lọc thiết kế dựa trên dữ liệu thu thập và thực hiện bàn giao thông số Design Token tỉ mỉ cho kỹ sư phát triển."
                  : "Tested working high-fidelity layouts under real user environments, prioritized feedback into design refinements, and handed off organized semantic variables to developers."
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-[#141416] border border-white/[0.05] p-6 rounded-xl space-y-4 crimson-border-hover">
                <span className="font-headings text-5xl font-extrabold text-[#E11D48]/15 block leading-none">{step.num}</span>
                <h4 className="font-headings font-extrabold text-lg text-white uppercase">{step.title}</h4>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quantitative outcomes */}
        <div className="space-y-8 mb-20">
          <h3 className="font-headings font-extrabold text-2xl text-white text-center uppercase">{t.caseOutcomesTitle}</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.outcomes.map((item, idx) => (
              <div key={idx} className="bg-[#141416] border border-white/[0.05] p-6 rounded-xl text-center space-y-1 relative group overflow-hidden crimson-border-hover">
                <p className="text-4xl sm:text-5xl font-headings font-extrabold text-[#E11D48] tracking-tight">{item.metric}</p>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider font-mono">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="space-y-8 mb-20">
          <h3 className="font-headings font-extrabold text-2xl text-white uppercase">{t.caseGalleryTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((img, i) => (
              <div key={i} className="overflow-hidden aspect-[4/3] rounded-xl border border-white/[0.05] bg-zinc-950 group crimson-border-hover">
                <img 
                  src={img} 
                  alt="Case Study Showcase" 
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation to next */}
        <div className="border-t border-white/[0.08] pt-16 flex flex-col items-center">
          <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest mb-3 font-bold">{t.caseNext}</p>
          <button 
            onClick={() => onNavigate(`work/${nextProject.slug}`)}
            className="group text-center focus:outline-none"
          >
            <h4 className="font-headings font-extrabold text-2xl sm:text-4xl text-white group-hover:text-[#E11D48] transition-colors mb-4 tracking-tight uppercase">
              {nextProject.title}
            </h4>
            <span className="inline-flex items-center gap-2 text-[10px] tracking-widest uppercase text-zinc-400 group-hover:text-white transition-colors font-bold">
              {t.caseReadNext}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

const Contact = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateField = (name, value) => {
    let err = "";
    if (name === "name") {
      if (!value.trim()) err = t.errName;
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) err = t.errEmail;
      else if (!emailRegex.test(value)) err = t.errEmail;
    } else if (name === "message") {
      if (!value) err = t.errMessage;
      else if (value.length < 20) err = t.errMessage;
    }
    return err;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    const fieldError = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: fieldError }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameErr = validateField("name", formState.name);
    const emailErr = validateField("email", formState.email);
    const messageErr = validateField("message", formState.message);

    if (nameErr || emailErr || messageErr) {
      setErrors({
        name: nameErr,
        email: emailErr,
        message: messageErr
      });
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormState({
        name: "",
        email: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 sm:py-32 px-6 sm:px-12 z-10 max-w-7xl mx-auto text-zinc-200 border-t border-white/[0.05]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
        {/* Contacts info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E11D48] font-bold">CONTACT</span>
            <span className="w-12 h-[1px] bg-[#E11D48]"></span>
          </div>

          <h2 className="font-headings font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight uppercase">
            {t.contactHeading}
          </h2>
          
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
            {t.contactSubtext}
          </p>

          <div className="space-y-6 pt-4 text-xs font-mono">
            <div>
              <p className="text-zinc-500 uppercase text-[9px] mb-1 tracking-wider font-bold">{t.contactEmailLabel}</p>
              <a href="mailto:Tunz.ne.295@gmail.com" className="text-[#E11D48] text-base sm:text-lg font-headings font-extrabold hover:underline">
                Tunz.ne.295@gmail.com
              </a>
            </div>
            
            <div>
              <p className="text-zinc-500 uppercase text-[9px] mb-1 tracking-wider font-bold">{t.contactLocationLabel}</p>
              <p className="text-white text-sm font-bold uppercase">Ho Chi Minh City, Vietnam (GMT+7)</p>
            </div>

            <div>
              <p className="text-zinc-500 uppercase text-[9px] mb-1 tracking-wider font-bold">{t.contactResponseLabel}</p>
              <p className="text-white text-sm font-bold uppercase">{t.contactResponseValue}</p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/[0.08] space-y-3">
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold">{t.contactSocialsLabel}</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Behance", link: "https://www.behance.net/tunzhong" },
                { name: "Dribbble", link: "https://dribbble.com/tunz-ne-295" },
                { name: "LinkedIn", link: "https://www.linkedin.com/in/tu%E1%BA%A5nz-undefined-b81a873ba/" },
                { name: "GitHub", link: "https://github.com/TunZ-Deptrai" }
              ].map((s) => (
                <a 
                  key={s.name} 
                  href={s.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-[#E11D48] transition-colors font-semibold"
                >
                  <StarDecorationSVG className="w-2.5 h-2.5 text-[#E11D48]/75" />
                  <span>{s.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form panel */}
        <div className="lg:col-span-7 bg-[#141416] p-6 sm:p-10 border border-white/[0.05] rounded-xl relative crimson-border-hover">
          {success ? (
            <div className="h-full flex flex-col justify-center items-center text-center py-16 space-y-5">
              <div className="w-16 h-16 border border-[#E11D48]/30 rounded-lg flex items-center justify-center animate-bounce">
                <StarDecorationSVG className="w-8 h-8 text-[#E11D48]" />
              </div>
              <h3 className="font-headings font-extrabold text-2xl text-white leading-tight uppercase">{t.contactSuccessTitle}</h3>
              <p className="text-zinc-300 max-w-sm text-xs sm:text-sm font-light leading-relaxed">
                {t.contactSuccessDesc}
              </p>
              <button 
                onClick={() => setSuccess(false)}
                className="font-bold text-[10px] tracking-widest uppercase text-white bg-[#E11D48] px-6 py-3.5 rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                {t.contactSuccessBtn}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-white/[0.05] pb-5 mb-2">
                <h3 className="font-headings font-extrabold text-lg text-white uppercase tracking-tight">
                  {t.contactFormHeaderTitle}
                </h3>
                <p className="text-zinc-400 text-xs mt-1 font-light">
                  {t.contactFormHeaderDesc}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold">{t.contactFormName}</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className={`w-full bg-[#0C0C0E] border rounded-lg px-4 py-3.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#E11D48] placeholder-zinc-600 ${
                      errors.name ? "border-red-500" : "border-white/[0.1]"
                    }`}
                  />
                  {errors.name && <p className="text-[10px] text-red-500 font-mono mt-1">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold">{t.contactFormEmail}</label>
                  <input 
                    type="text" 
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className={`w-full bg-[#0C0C0E] border rounded-lg px-4 py-3.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#E11D48] placeholder-zinc-600 ${
                      errors.email ? "border-red-500" : "border-white/[0.1]"
                    }`}
                  />
                  {errors.email && <p className="text-[10px] text-red-500 font-mono mt-1">{errors.email}</p>}
                </div>
              </div>



              <div className="space-y-1.5">
                <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold">{t.contactFormMessage}</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={6}
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your product requirements..."
                  className={`w-full bg-[#0C0C0E] border rounded-lg px-4 py-3.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#E11D48] placeholder-zinc-600 ${
                    errors.message ? "border-red-500" : "border-white/[0.1]"
                  }`}
                />
                {errors.message && <p className="text-[10px] text-red-500 font-mono mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full font-bold text-[10px] tracking-widest uppercase bg-[#E11D48] text-white py-4 rounded-lg hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t.contactFormSending}
                  </>
                ) : (
                  <>
                    {t.contactFormSubmit}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ lang, onNavigate, onShowToast }) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="relative bg-[#0C0C0E] border-t border-white/[0.05] pt-16 pb-12 px-6 sm:px-12 z-10 text-zinc-400">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Section: Brand & Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.05]">
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-headings font-extrabold text-2xl text-white tracking-tighter uppercase">
                HOANG <span className="text-[#E11D48]">TUANZ</span>
              </span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              {lang === 'vi' 
                ? "UI/UX Designer chuyển hóa ý tưởng thành trải nghiệm kỹ thuật số trực quan, thiết thực và hấp dẫn." 
                : "UI/UX Designer transforming ideas into intuitive, functional, and engaging digital products."}
            </p>
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2.5 bg-white/[0.02] border border-white/[0.05] px-3.5 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E11D48] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E11D48]"></span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-white font-bold">
                {lang === 'vi' ? 'Sẵn sàng nhận dự án' : 'Available for hire'}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
              {lang === 'vi' ? 'Điều hướng' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button 
                  onClick={() => onNavigate("home", "hero")}
                  className="text-zinc-300 hover:text-[#E11D48] transition-colors uppercase tracking-wider text-[10px]"
                >
                  {lang === 'vi' ? 'Trang chủ' : 'Home'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("home", "about")}
                  className="text-zinc-300 hover:text-[#E11D48] transition-colors uppercase tracking-wider text-[10px]"
                >
                  {t.navAbout}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("home", "work")}
                  className="text-zinc-300 hover:text-[#E11D48] transition-colors uppercase tracking-wider text-[10px]"
                >
                  {t.navWork}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("home", "contact")}
                  className="text-zinc-300 hover:text-[#E11D48] transition-colors uppercase tracking-wider text-[10px]"
                >
                  {t.navContact}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Projects */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
              {lang === 'vi' ? 'Dự án tiêu biểu' : 'Featured Projects'}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {[
                { name: "Task Manager System", slug: "task-manager" },
                { name: "Eduplanz", slug: "eduplanz" },
                { name: "Blue Hotel", slug: "blue-hotel" },
                { name: "Mind Garden", slug: "mind-garden" }
              ].map((p) => (
                <li key={p.slug} className="flex items-center gap-1.5">
                  <StarDecorationSVG className="w-2 h-2 text-[#E11D48]" />
                  <button 
                    onClick={() => onNavigate(`work/${p.slug}`)}
                    className="text-zinc-300 hover:text-[#E11D48] transition-colors uppercase tracking-wider text-[10px] text-left"
                  >
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-[11px] pt-8 border-t border-white/[0.05]">
          <div className="text-center md:text-left space-y-1">
            <p className="font-bold text-white tracking-wider">© 2026 {t.footerReserved}</p>
            <p className="text-zinc-500 font-mono text-[9px]">{t.footerSubtext}</p>
          </div>

          {/* Middle Spinning Star Badge */}
          <div className="flex items-center justify-center">
            <div className="relative group cursor-pointer transition-transform duration-500 hover:scale-110">
              <svg 
                className="w-8 h-8 text-[#E11D48] animate-spin-slow group-hover:[animation-duration:3s] drop-shadow-[0_0_12px_rgba(225,29,72,0.4)]" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ transition: 'transform 0.5s ease' }}
              >
                <path 
                  d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" 
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 font-bold uppercase tracking-widest text-white">
            <a 
              href="/CV_VoHoangTuan.pdf"
              download="CV_VoHoangTuan.pdf"
              className="text-[10px] tracking-widest uppercase bg-white/[0.03] border border-white/[0.08] text-zinc-300 px-4 py-2.5 rounded-lg hover:bg-white/[0.08] hover:text-white transition-all duration-300 flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {t.heroDownloadCV}
            </a>

            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-[#E11D48] transition-colors text-[10px] tracking-widest uppercase flex items-center gap-1.5 focus:outline-none bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] px-4 py-2.5 rounded-lg duration-300"
            >
              ↑ {lang === 'vi' ? 'Lên đầu trang' : 'Back to Top'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CaseStudyWrapper = ({ lang, onNavigate }) => {
  const { slug } = useParams();
  return <CaseStudy slug={slug} lang={lang} onNavigate={onNavigate} />;
};

function PortfolioContent() {
  const [lang, setLang] = useState("en");
  const [toastMessage, setToastMessage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavigation = (route, sectionId) => {
    if (route.startsWith("work/")) {
      const slug = route.split("/")[1];
      navigate(`/case-study/${slug}`);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        if (sectionId) {
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }, 200);
        }
      } else if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0C0C0E] text-[#F2F2F2] selection:bg-[#E11D48] selection:text-white">
      <StyleLoader />
      <EditorialGridBackground />
      
      <Navbar lang={lang} setLang={setLang} activeRoute={location.pathname === "/" ? "home" : "project-detail"} onNavigate={handleNavigation} />

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={
            <div className="reveal-editorial">
              <Hero lang={lang} onShowToast={(msg) => setToastMessage(msg)} />
              <About lang={lang} />
              <Work lang={lang} onSelectProject={(slug) => handleNavigation(`work/${slug}`)} />
              <Contact lang={lang} />
            </div>
          } />
          <Route path="/case-study/:slug" element={
            <CaseStudyWrapper lang={lang} onNavigate={handleNavigation} />
          } />
        </Routes>
      </main>

      <Footer lang={lang} onNavigate={handleNavigation} onShowToast={(msg) => setToastMessage(msg)} />

      {toastMessage && (
        <NotificationToast 
          message={toastMessage} 
          onClose={() => setToastMessage(null)} 
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <PortfolioContent />
    </BrowserRouter>
  );
}
