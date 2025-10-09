import { useState, useEffect } from "react";
import { X } from "lucide-react";

const certifications = [

  {
    title:
      "Remaining Useful Life (RUL) Prediction for Batteries of Electric Vehicle",
    issuer: "St. Joseph's College (Arts & Science),Chennai",
    date: "26 March 2025",
    image: "/images/stjosephcert.jpeg",
    description:
      "I was awarded a Certificate of Appreciation by St Josephs College Arts and Science for successfully presenting my paper Remaining Useful Life RUL Prediction for Batteries of Electric Vehicle at the International Conference on Global Perspectives on Sustainability ICGPS 2025 on March 26th 2025. As a student from BSA Crescent Institute of Science and Technology this recognition highlights my research commitment to a vital global sustainability topic electric vehicle technology.",
  },
  {
    title: "	ChatGPT for Project Management - Leveraging AI for Success",
    issuer: "Vanderbilt University - Coursera",
    date: "March 8 2025",
    image: "/images/chatgpt.jpg",
    description:
      "I successfully completed the ChatGPT for Project Management Specialization from Vanderbilt University on Coursera where I learned how to effectively leverage ChatGPT for planning executing and tracking projects apply prompt engineering techniques for better AI responses and gain insights to ensure project success across all stages of management.",
  },

  {
    title: "Machine Learning using Python",
    issuer: "simplilearn",
    date: "6 March 2025",
    image: "/images/machinelearningcert.jpeg",
    description:
      "Successfully completed the Machine Learning Using Python certification course from Simplilearn, gaining hands-on experience in data preprocessing, model building, and evaluating machine learning algorithms using Python.",
  },
  {
    title: "Cyber Security Basics",
    issuer: "Skill Vertxt",
    date: "December 2022",
    image: "/images/certificate3.jpg",
    description:
      "I just finished a Cyber Security training course I got this Certificate of Training Completion from Skill Vertex. The course was about Cyber Security and ran from November 5th to December 5th 2022. The certificate is in my name R Mohamed Aseel and it even mentions that I showed diligence consistency determination active participation and innovation throughout the whole training. It was signed by the Academic Head Mayank Gathole.",
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  useEffect(() => {
    const handleScrollReveal = () => {
      const reveals = document.querySelectorAll(".scroll-reveal");
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          el.classList.add("revealed");
        }
      });
    };

    window.addEventListener("scroll", handleScrollReveal);
    handleScrollReveal();

    return () => window.removeEventListener("scroll", handleScrollReveal);
  }, []);

  return (
    <section
      id="certifications"
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-180 h-full w-full -z-10"></div>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center scroll-reveal revealed">
          <span className="text-white">My</span>{" "}
          <span className="gradient-text">Certifications</span>
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="scroll-reveal glass-card p-4 rounded-2xl shadow-glow overflow-visible animate-fade-in-up
                         cursor-pointer transform transition-all duration-300 hover:scale-105 hover:glow-primary opacity-0"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
              onClick={() => setSelectedCert(index)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 sm:h-52 object-contain rounded-xl mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h2 className="text-lg font-semibold text-foreground mb-1">
                {cert.title}
              </h2>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {selectedCert !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-[95%] sm:w-[600px] md:w-[720px] bg-background rounded-2xl p-6 sm:p-8 glass-card shadow-glow overflow-visible max-h-[90vh] overflow-y-auto">
            {/* X Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 text-foreground hover:text-white transition z-[1000] bg-black/40 rounded-full p-1 backdrop-blur-sm"
            >
              <X size={24} />
            </button>

            <img
              src={certifications[selectedCert].image}
              alt={certifications[selectedCert].title}
              className="w-full h-auto max-h-[380px] sm:max-h-[420px] object-contain rounded-2xl mb-4"
            />

            <h2 className="text-2xl font-bold text-foreground mb-2">
              {certifications[selectedCert].title}
            </h2>
            <p className="text-sm text-muted-foreground mb-1">
              {certifications[selectedCert].issuer}
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              {certifications[selectedCert].date}
            </p>

            <div className="bg-card p-4 sm:p-5 rounded-lg text-foreground/90 text-sm sm:text-base leading-relaxed">
              {certifications[selectedCert].description}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
