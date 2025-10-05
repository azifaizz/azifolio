import { useState, useEffect } from "react";
import { X } from "lucide-react";
import certificate1 from "../../images/certificate1.jpg";
import certificate2 from "../../images/certificate2.jpg";
import certificate3 from "../../images/certificate3.jpg";
import certificate4 from "../../images/certificate4.jpg";

const certifications = [
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    date: "March 2023",
    image: certificate1,
    description:
      "Learned advanced deep learning concepts including CNNs, RNNs, and neural network optimization techniques.",
  },
  {
    title: "Machine Learning A-Z",
    issuer: "Udemy",
    date: "June 2023",
    image: certificate2,
    description:
      "Gained practical knowledge of machine learning algorithms like regression, classification, clustering, and feature engineering.",
  },
  {
    title: "Python for Data Science",
    issuer: "edX",
    date: "January 2024",
    image: certificate3,
    description:
      "Enhanced Python skills specifically for data analysis, visualization, and handling datasets efficiently with Pandas and NumPy.",
  },
  {
    title: "AI for Everyone",
    issuer: "Coursera",
    date: "April 2024",
    image: certificate4,
    description:
      "Understood AI concepts, business applications, and ethical considerations of AI in real-world scenarios.",
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
          <div className="relative max-w-xl w-full bg-background rounded-2xl p-4 sm:p-6 glass-card shadow-glow overflow-visible">
            {/* X Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-4 -right-4 md:top-4 md:right-4 text-foreground hover:text-white transition z-[1000]"
            >
              <X size={28} />
            </button>

            <img
              src={certifications[selectedCert].image}
              alt={certifications[selectedCert].title}
              className="w-full h-auto max-h-[320px] sm:max-h-[380px] object-contain rounded-2xl mb-4"
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

            <div className="bg-card p-3 sm:p-4 rounded-lg text-foreground/90 text-sm sm:text-base">
              {certifications[selectedCert].description}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
