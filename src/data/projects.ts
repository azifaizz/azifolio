export type ProjectTechnology = {
  name: string;
  description: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  date: string;
  team: string;
  role: string;
  features: string[];
  technologies: ProjectTechnology[];
  screenshots: string[];
};

export const projects: ProjectItem[] = [
  {
    id: "1",
    title: "Brain Tumor Cancer Prediction Using Machine Learning",
    description:
      "This project uses machine learning to detect brain tumors from MRI scans. It classifies tumor types accurately, aiding doctors in early diagnosis and reducing manual analysis errors.",
    fullDescription:
      "This project showcases an automated brain tumor classification system built with deep learning. The goal was to create a reliable solution that can analyze an MRI image and classify it as tumor or non-tumor with strong accuracy. A convolutional neural network was trained on more than 3,000 brain scans, supported by image augmentation and training callbacks such as ModelCheckpoint and ReduceLROnPlateau for stability. The final model was saved as an .h5 file and deployed through a Streamlit application so users can upload an image and receive a real-time prediction.",
    image: "/images/braintumor.jpg",
    tags: [
      "Jupyter Notebook",
      "Python",
      "TensorFlow",
      "CNN",
      "Medical Imaging",
    ],
    github:
      "https://github.com/azifaizz/CNN-Based-Brain-Tumor-Cancer-Prediction-Using-Machine-Learning.git",
    demo: "https://braintumorapplive.streamlit.app/",
    date: "March 2023",
    team: "3 members",
    role: "Model Trainer",
    features: [
      "High-performance CNN architecture",
      "Live Streamlit deployment",
      "Advanced training callbacks and regularization",
      "Robust data augmentation and preprocessing",
      "Real-time classification with confidence score",
      "End-to-end ML pipeline from training to deployment",
    ],
    technologies: [
      {
        name: "TensorFlow",
        description:
          "The foundational deep learning library used to train and run the model.",
      },
      {
        name: "Keras",
        description:
          "The high-level API used to define the CNN structure and training workflow.",
      },
      {
        name: "CNN",
        description:
          "The neural network architecture used for image feature extraction and classification.",
      },
      {
        name: "NumPy",
        description:
          "Used for array processing, image preparation, and prediction handling.",
      },
      {
        name: "Matplotlib",
        description:
          "Used to visualize training accuracy and loss after model training.",
      },
      {
        name: "Streamlit",
        description:
          "Used to build and deploy the interactive web interface for live predictions.",
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
  {
    id: "2",
    title: "SecureFileX: A Comprehensive File Security Application",
    description:
      "SecureFileX is a file security application that lets users encrypt and decrypt files effortlessly while protecting sensitive data from unauthorized access.",
    fullDescription:
      "SecureFileX is a security-focused web application built using Flask. It includes features such as file encryption, decryption, QR code generation, and malware hash scanning with user authentication. The project was designed to make file protection simpler without sacrificing core security concepts. Its modular structure makes it easier to maintain, extend, and adapt into future versions with stronger UI or deployment improvements.",
    image: "/images/securefile.jpeg",
    tags: ["Flask", "Python", "Encryption", "Cybersecurity", "SQLite"],
    github:
      "https://github.com/azifaizz/SecureFileX-A-Comprehensive-File-Security-Application.git",
    demo: "https://rul-live.netlify.app/",
    date: "Nov 2024",
    team: "1 member",
    role: "Developer",
    features: [
      "User authentication with secure access control",
      "File encryption and decryption with AES",
      "Text message encryption and decryption",
      "QR code generation for encrypted sharing",
      "Malware hash scanning and detection",
      "Database-backed file and user management",
    ],
    technologies: [
      {
        name: "Python",
        description:
          "The primary language used for backend logic and security workflows.",
      },
      {
        name: "Flask",
        description:
          "A lightweight web framework used for routing, authentication, and backend structure.",
      },
      {
        name: "SQLite",
        description:
          "Used as the application's relational database for user and file records.",
      },
      {
        name: "SQLAlchemy",
        description:
          "Used to simplify database access and keep the codebase maintainable.",
      },
      {
        name: "Flask-Login",
        description:
          "Used to manage user sessions and authentication flows securely.",
      },
      {
        name: "PyCryptodome",
        description:
          "Provides the AES cryptography implementation for secure encryption and decryption.",
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
  {
    id: "3",
    title: "Remaining Useful Life Prediction for EV Batteries",
    description:
      "A machine learning framework that predicts the remaining useful life of electric vehicle batteries using advanced feature engineering, PCA, and ensemble and deep learning models.",
    fullDescription:
      "This project builds a complete machine learning pipeline for forecasting the remaining useful life of electric vehicle batteries from operational data. The workflow includes data preprocessing, feature engineering, scaling, and dimensionality reduction with PCA to preserve model efficiency. Multiple regression models such as Random Forest, XGBoost, LightGBM, and LSTM were evaluated using RMSE, MAE, and R-squared metrics. The goal was to support proactive maintenance planning and improve operational safety and cost efficiency for EV systems.",
    image: "/images/evbattery.jpg",
    tags: ["Python", "Machine Learning", "LightGBM", "LSTM", "PCA"],
    github:
      "https://github.com/azifaizz/Remaining-Useful-Life-prediction-for-batteries-of-Electric-Vehicle.git",
    demo: "https://rul-live.netlify.app/",
    date: "May 2025",
    team: "1 member",
    role: "Developer",
    features: [
      "End-to-end ML pipeline",
      "Domain-specific feature engineering",
      "Dimensionality reduction with PCA",
      "Comparative model evaluation",
      "High-performing LightGBM baseline",
      "LSTM experimentation for sequential patterns",
    ],
    technologies: [
      {
        name: "Python",
        description: "The core language used for the full data science workflow.",
      },
      {
        name: "Pandas",
        description:
          "Used for data loading, cleaning, transformation, and feature engineering.",
      },
      {
        name: "NumPy",
        description:
          "Used for numerical operations, arrays, and evaluation calculations.",
      },
      {
        name: "Scikit-learn",
        description:
          "Used for preprocessing, data splitting, PCA, and classical ML model support.",
      },
      {
        name: "LightGBM",
        description:
          "Delivered the strongest performance in the project's regression comparisons.",
      },
      {
        name: "TensorFlow / Keras",
        description:
          "Used to build and evaluate the LSTM model for sequence-aware learning.",
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
];

export const getProjectById = (id?: string) =>
  projects.find((project) => project.id === id);
