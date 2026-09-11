export const personalInfo = {
  name: "YossTakke",
  role: "IoT Engineer & Backend Dev",
  bio: "Fokus mengembangkan sistem cerdas berbasis hardware (ESP32/Arduino) yang terintegrasi dengan web dan mobile modern. Memiliki ketertarikan tinggi pada otomasi, IoT, dan cloud backend.",
  github: "https://github.com/yossgarr",
  linkedin: "https://www.linkedin.com/in/yosi-anggara-60b042348/",
  email: "yosianggara.42@gmail.com",
};

export const skills = [
  {
    category: "Hardware & IoT",
    items: ["ESP32 / ESP8266", "Arduino", "MQTT Protocol", "PZEM-004T", "DHT22 / Sensors", "OpenPLC"],
  },
  {
    category: "Web & Mobile",
    items: ["React.js", "Tailwind CSS", "Flutter", "REST API", "Laravel"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git & GitHub", "Docker", "Minikube / K8s", "VS Code", "Postman"],
  },
];

export const projects = [
  {
    title: "IoT Smart Power Monitoring System",
    description: "Sistem monitoring daya listrik real-time pada hunian menggunakan ESP32 & modul PZEM-004T. Dilengkapi fitur Local Fallback agar kontrol relai tetap berjalan otomatis saat koneksi internet terputus.",
    tech: ["ESP32", "MQTT", "React", "Tailwind CSS"],
    github: "https://github.com/yossgarr",
    demo: "#", // ganti link live demo jika ada
  },
  {
    title: "Sistem Monitoring Suhu & Lingkungan Web",
    description: "Dashboard pemantauan suhu, kualitas udara, dan kelembapan secara terpusat dengan visualisasi grafik data sensor dinamis.",
    tech: ["Laravel", "REST API", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/yossgarr",
    demo: "#",
  },
  {
    title: "Aplikasi Mobile Smart Controller",
    description: "Aplikasi mobile cross-platform untuk memonitor metrik sensor dan kontrol perangkat IoT jarak jauh dengan autentikasi aman.",
    tech: ["Flutter", "Firebase", "MQTT"],
    github: "https://github.com/yossgarr",
    demo: "#",
  },
];