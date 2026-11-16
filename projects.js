/*
  Project cards shown on the home page.
  To add a project: put its files in a new folder (e.g. my-project/index.html)
  and add one entry below. Cards appear in this order.

  url      — link to the project (folder with index.html, or a full https:// URL)
  preview  — "a4"  : live preview of an A4 portrait page
             "web" : live preview of a normal web page (16:10)
             "none": no preview, just text
  theme    — "light" or "dark" tile
  wide     — true = full-width tile
*/
window.PROJECTS = [
  {
    url: "resume/",
    preview: "a4",
    theme: "light",
    wide: true,
    th: {
      eyebrow: "เรซูเม่",
      title: "วิศวกรโลหการ",
      desc: "ประสบการณ์ทำงาน ทักษะ ใบรับรอง CQI-9 และผลงานระบบดิจิทัลในโรงงานชุบแข็ง",
      open: "ดูเรซูเม่"
    },
    en: {
      eyebrow: "Résumé",
      title: "Metallurgical Engineer.",
      desc: "Experience, skills, CQI-9 training and digital systems built for a heat-treatment plant.",
      open: "View résumé"
    }
  },
  {
    url: "tt-company-profile/",
    preview: "a4",
    theme: "dark",
    th: {
      eyebrow: "Company Profile",
      title: "T.T. Tools and Parts",
      desc: "โปรไฟล์บริษัท 6 หน้า A4 ออกแบบเป็นหน้าเว็บ พร้อมพิมพ์",
      open: "เปิดดู"
    },
    en: {
      eyebrow: "Company Profile",
      title: "T.T. Tools and Parts",
      desc: "A six-page A4 company profile built as a print-ready web page.",
      open: "Open"
    }
  }
];
