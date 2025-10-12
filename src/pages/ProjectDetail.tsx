import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Users,
  Code,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const projects = {
    "1": {
      title: "Brain tumor cancer prediction using machine learning",
      description:
        "This project uses machine learning to detect brain tumors from MRI scans.It classifies tumor types accurately, aiding doctors in early diagnosis.The system improves detection speed and reduces manual analysis errors.",
      fullDescription:
        "This is the project description converted into a single, easy-to-read paragraph, perfect for a portfolio.This project showcases an Automated Brain Tumor Classification system built using Deep Learning. The main objective was to create a reliable solution that can quickly and accurately analyze an MRI image and classify it as having a Tumor or No Tumor. We used a Convolutional Neural Network (CNN), the ideal architecture for image analysis, and trained it on a dataset of over 3,000 brain scans. The process involved crucial steps like image augmentation and using smart training callbacks such as ModelCheckpoint and ReduceLROnPlateau to ensure the model achieved high performance and stability. The final, optimized model was saved as an .h5 file and is deployed through a Streamlit web application, allowing users (including recruiters) to upload an image and receive a real-time prediction, demonstrating the full end-to-end pipeline from development to deployment.",
      image: "/images/braintumor.jpg",
      tags: [
        "Jupyter Notebook",
        "Python",
        "Numpy",
        "Pandas",
        "keras",
        "Deep Learning",
        "TensorFlow",
        "CNN (Convolutional Neural Network)",
        "Image Classification",
        "Medical Imaging",
        "Streamlit",
        "Model Deployment",
        "Data Augmentation",
      ],
      github:
        "https://github.com/azifaizz/CNN-Based-Brain-Tumor-Cancer-Prediction-Using-Machine-Learning.git",
      demo: "https://braintumorapplive.streamlit.app/",
      date: "March 2023",
      team: "3 members",
      role: "Model Trainer",
      features: [
        "High-Performance CNN Architecture",
        "Web Deployment (Streamlit/Live Demo)",
        "Advanced Model Optimization (Callbacks & Regularization)",
        "Robust Data Augmentation & Preprocessing",
        "Real-Time Classification with Confidence Score",
        "Full ML Pipeline Showcase (Development to Production)",
        "Binary Classification for Clarity",
        "Leverages TensorFlow/Keras Framework",
      ],
      technologies: [
        {
          name: "TensorFlow",
          description:
            "The foundational deep learning library for building and executing the model's computational graph.",
        },
        {
          name: "Keras",
          description:
            "The high-level API (integrated into TensorFlow) used for quickly defining the Sequential CNN model structure and layers.",
        },
        {
          name: "Convolutional Neural Networks (CNN)",
          description:
            "The specific type of neural network architecture used for feature extraction and image classification.",
        },
        {
          name: "HDF5 (.h5 format)",
          description:
            "The standard file format used for saving and loading the trained Keras model, including its architecture and learned weights.",
        },
        {
          name: "NumPy",
          description:
            "Essential library for high-performance array and matrix operations, fundamental for handling image data and predictions.",
        },
        {
          name: "Matplotlib",
          description:
            "Used for data visualization, specifically plotting the training loss and accuracy history after the model has trained.",
        },
        {
          name: "ImageDataGenerator",
          description:
            "A Keras utility used for real-time data augmentation and efficient loading of image data during training.",
        },
        {
          name: "Streamlit",
          description:
            "The Python framework used to quickly build and host the interactive web application (the front-end interface) for the live demo.",
        },
        {
          name: "Python",
          description:
            "The primary programming language used to write the entire project, including the training notebook and the deployment script.",
        },
      ],
      screenshots: [
        "/Screenshots/bt1.jpg",
        "/Screenshots/bt2.jpg",
        "/Screenshots/bt3.jpg",
        "/Screenshots/bt4.jpg",
        "/Screenshots/bt5.jpg",
        "/Screenshots/bt6.jpg",
      ],
    },
    "2": {
      title: "SecureFileX:A Comprehensive file security Application",
      description:
        "This project is a security-focused web application built using Flask. It provides features like file encryption, decryption, QR code generation, and malware hash scanning with user authentication.",
      fullDescription:
        "This is the project description converted into a single, easy-to-read paragraph, perfect for a portfolio.This project showcases an Automated Brain Tumor Classification system built using Deep Learning. The main objective was to create a reliable solution that can quickly and accurately analyze an MRI image and classify it as having a Tumor or No Tumor. We used a Convolutional Neural Network (CNN), the ideal architecture for image analysis, and trained it on a dataset of over 3,000 brain scans. The process involved crucial steps like image augmentation and using smart training callbacks such as ModelCheckpoint and ReduceLROnPlateau to ensure the model achieved high performance and stability. The final, optimized model was saved as an .h5 file and is deployed through a Streamlit web application, allowing users (including recruiters) to upload an image and receive a real-time prediction, demonstrating the full end-to-end pipeline from development to deployment.",
      image: "/images/securefile.jpeg",
      tags: [
        "Flask",
        "Python",
        "Web Application",
        "Cybersecurity",
        "Encryption",
        "QR Code Generator",
        "Malware Detection",
      ],
      github:
        "https://github.com/azifaizz/SecureFileX-A-Comprehensive-File-Security-Application.git",
      demo: "https://rul-live.netlify.app/",
      date: "Nov 2024",
      team: "1 members",
      role: "Developer",
      features: [
        "User Authentication and Secure Access (Flask-Login)",
        "File Encryption & Decryption with AES Algorithm",
        "Text Message Encryption and Decryption",
        "QR Code Generation for Encrypted Data Sharing",
        "Malware Hash Scanning and Detection",
        "Database Integration for User and File Management",
        "Modular Architecture for Easy Maintenance and Expansion",
        "Simple UI with Option to Migrate to Streamlit Frontend",
        "Supports Multiple File Types and Real-Time Processing",
        "Ready for Deployment and Scalability",
      ],
      technologies: [
        {
          name: "Python",
          description:
            "The primary programming language used to build the entire backend, handle security operations, and integrate all modules.",
        },
        {
          name: "Flask",
          description:
            "A lightweight Python web framework used to handle routing, authentication, and backend logic.",
        },
        {
          name: "SQLite",
          description:
            "A simple and reliable relational database used to securely store user credentials and file information.",
        },
        {
          name: "SQLAlchemy",
          description:
            "An ORM (Object Relational Mapper) that simplifies database operations and ensures clean, maintainable code.",
        },
        {
          name: "Flask-Login",
          description:
            "A Flask extension used to manage user authentication, sessions, and access control securely.",
        },
        {
          name: "PyCryptodome",
          description:
            "A Python cryptographic library used to implement AES encryption and decryption for files and text data.",
        },
        {
          name: "qrcode",
          description:
            "A Python library used to generate QR codes for sharing encrypted data in a secure and compact form.",
        },
        {
          name: "Streamlit",
          description:
            "A Python framework used to build a simple, clean, and interactive frontend interface for the application.",
        },
      ],
      screenshots: [
        "/Screenshots/bt1.jpg",
        "/Screenshots/bt2.jpg",
        "/Screenshots/bt3.jpg",
        "/Screenshots/bt4.jpg",
        "/Screenshots/bt5.jpg",
        "/Screenshots/bt6.jpg",
      ],
    },
    "3": {
      title:
        "Remaining Useful Life prediction for batteries of Electric Vehicle",
      description:
        "This project establishes a robust machine learning framework for the Remaining Useful Life (RUL) prediction of Electric Vehicle (EV) batteries. It utilizes ensemble and deep learning models, such as LightGBM, to achieve high-accuracy forecasts of battery degradation. This system is critical for enabling proactive maintenance, enhancing operational safety, and promoting the sustainable, cost-effective management of EV fleets.",
      fullDescription:
        "This project establishes a robust, automated machine learning pipeline dedicated to forecasting the Remaining Useful Life (RUL) of Electric Vehicle (EV) batteries based on complex operational data. It begins with rigorous data preprocessing, including scaling features and engineering new domain-specific variables like Charge_Discharge_Ratio and Voltage_Gap. Dimensionality reduction via Principal Component Analysis (PCA) is applied to maintain 95% of the variance while optimizing model training efficiency. The core of the project involves evaluating multiple state-of-the-art regression models—XGBoost, Random Forest, LightGBM, and an LSTM deep learning model—to determine the most effective predictor of battery degradation. Performance is systematically measured using RMSE, MAE, and R² scores, demonstrating the high accuracy achievable in predicting battery longevity. The overall goal is to provide a predictive tool for proactive maintenance and better fleet management in the EV industry.",
      image: "/images/evbattery.jpg",
      tags: [
        "Jupyter Notebook",
        "Python",
        "Machine Learning",
        "Data Science",
        "Regression",
        "XGBoost",
        "LightGBM",
        "LSTM",
        "PCA",
        "Battery RUL",
      ],
      github:
        "https://github.com/azifaizz/Remaining-Useful-Life-prediction-for-batteries-of-Electric-Vehicle.git",
      demo: "https://rul-live.netlify.app/",
      date: "May 2025",
      team: "1 member",
      role: "Developer",
      features: [
        "End-to-End ML Pipeline",
        "Domain-Specific Feature Engineering",
        "Dimensionality Reduction",
        "Comparative Model Evaluation",
        "High Accuracy with LightGBM",
        "LSTM Hyperparameter Tuning",
        "Performance Metrics",
        "External Data Prediction",
      ],
      technologies: [
        {
          name: "Python",
          description: "The core programming language for the entire project.",
        },
        {
          name: "Pandas",
          description:
            "Used for efficient data loading, cleaning, manipulation, and feature engineering.",
        },
        {
          name: "NumPy",
          description:
            "Essential for numerical operations, array manipulation, and metric calculations.",
        },
        {
          name: "Scikit-learn",
          description:
            "Provides tools for data preprocessing (e.g., StandardScaler), model selection (train_test_split, RandomizedSearchCV), dimensionality reduction (PCA), and ensemble models (RandomForestRegressor)",
        },
        {
          name: "XGBoost (XGBRegressor)",
          description:
            "A gradient boosting framework used for highly accurate regression modeling.",
        },
        {
          name: "LightGBM (lgb)",
          description:
            "A high-performance gradient boosting framework that proved to be the best-performing model in this analysis.",
        },
        {
          name: "Keras/TensorFlow (LSTM, Sequential)",
          description:
            "Used to build, train, and evaluate a Long Short-Term Memory (LSTM) deep learning model, ideal for sequential data patterns.",
        },
        {
          name: "Matplotlib & Seaborn",
          description:
            "Used for data visualization, including plotting the cumulative explained variance for PCA and comparing actual vs. predicted RUL values.",
        },
        {
          name: "Jupyter Notebook",
          description:
            " The interactive environment used to develop, document, and run the entire data science workflow.",
        },
      ],
      screenshots: [
        "/Screenshots/bt1.jpg",
        "/Screenshots/bt2.jpg",
        "/Screenshots/bt3.jpg",
        "/Screenshots/bt4.jpg",
        "/Screenshots/bt5.jpg",
        "/Screenshots/rul6.jpg",
      ],
    },
    // other projects unchanged...
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")} className="bg-gradient-primary">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="mb-8 glass-card border-primary/30 hover:glow-primary"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </Button>

        {/* Hero Image */}
        <div className="glass-card rounded-2xl overflow-hidden mb-8 animate-fade-in-up">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Project Header */}
        <div
          className="glass-card p-8 rounded-2xl mb-8 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6 text-justify">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="glass-card px-4 py-2 text-sm rounded-full text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-primary" />
                  <span className="text-sm">{project.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-secondary" />
                  <span className="text-sm">{project.team}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code size={20} className="text-accent" />
                  <span className="text-sm">{project.role}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-gradient-primary hover:glow-primary"
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="glass-card border-primary/30 hover:glow-primary"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github size={18} className="mr-2" />
                  View Code
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Full Description */}
        <div
          className="glass-card p-8 rounded-2xl mb-8 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="text-2xl font-bold mb-4 gradient-text text-justify">
            About the Project
          </h2>
          <p className="text-foreground/80 leading-relaxed text-justify">
            {project.fullDescription}
          </p>
        </div>

        {/* Features */}
        <div
          className="glass-card p-8 rounded-2xl mb-8 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="text-2xl font-bold mb-6 gradient-text">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">▹</span>
                <span className="text-foreground/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div
          className="glass-card p-8 rounded-2xl mb-8 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <h2 className="text-2xl font-bold mb-6 gradient-text">
            Technologies Used
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className="glass-card p-4 rounded-xl hover:glow-primary transition-all"
              >
                <h3 className="font-bold text-primary mb-1">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        <div className="animate-fade-in-up" style={{ animationDelay: "500ms" }}>
          <h2 className="text-2xl font-bold mb-6 gradient-text">
            Project Screenshots
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden hover:glow-primary transition-all hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(screenshot)}
              >
                <img
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition"
            >
              <X size={24} className="text-white" />
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
