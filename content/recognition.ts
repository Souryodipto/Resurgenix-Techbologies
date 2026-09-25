export interface RecognitionItem {
  id: string;
  title: string;
  issuer: string;
  programme: string;
  certificateNumber: string;
  description: string;
  image: string;
  alt: string;
}

export const recognitionData: RecognitionItem[] = [
  {
    id: "dpiit",
    title: "DPIIT-Recognized Startup",
    issuer: "Department for Promotion of Industry and Internal Trade (DPIIT), Government of India",
    programme: "Startup India",
    certificateNumber: "DIPP253964",
    description: "Resurgenix Technologies Private Limited is recognized as a startup by DPIIT under Startup India.",
    image: "/images/certifications/dpiit-startup-india-recognition.jpg",
    alt: "DPIIT Startup India Certificate of Recognition for Resurgenix Technologies Private Limited",
  },
  {
    id: "bvm2026",
    title: "Exhibitor, Bharatiya Vyapar Mahotsav 2026",
    issuer: "Bharatiya Vyapar Mission",
    programme: "Bharatiya Vyapar Mahotsav 2026, New Delhi",
    certificateNumber: "BVM000SP02",
    description:
      "Resurgenix exhibited at Bharatiya Vyapar Mahotsav 2026, a nationwide multi-sectoral trade expo held as a joint initiative involving CAIT and ITPO.",
    image: "/images/certifications/bharatiya-vyapar-mahotsav-2026-participation.jpg",
    alt: "Certificate of Participation for Resurgenix Technologies Private Limited at Bharatiya Vyapar Mahotsav 2026",
  },
];
