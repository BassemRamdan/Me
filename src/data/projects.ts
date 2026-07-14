export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  github?: string;
  liveDemo?: string;
  videoSrc?: string;
  featured: boolean;
  accentColor?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "ai-student-impact",
    title: "AI Student Impact Analytics",
    subtitle: "NTI Capstone Project",
    description:
      "A complete data science platform analyzing the impact of Generative AI on students' academic performance, skill retention, and burnout risk.",
    longDescription:
      "Developed as part of the NTI – ITIDA program. A complete data science platform analyzing the impact of Generative AI on students' academic performance, skill retention, and burnout risk. Features interactive dashboards, ML prediction models, and rich data visualisations.",
    tech: ["Python", "Streamlit", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    features: [
      "Interactive dashboards",
      "Machine Learning prediction",
      "Rich data visualisation",
      "Streamlit cloud deployment",
    ],
    github: "https://github.com/BassemRamdan/AI-Student-Impact",
    liveDemo: "https://ai-student-impacts.streamlit.app/",
    videoSrc: "https://res.cloudinary.com/buqstraz/video/upload/v1784044769/ai-student-impact_gow2sl.mp4",
    featured: true,
    accentColor: "#D4AF37",
  },
  {
    id: "movie-recommendation",
    title: "Hybrid Movie Recommendation",
    subtitle: "Content + Collaborative Filtering",
    description:
      "A hybrid recommendation engine combining Content-Based Filtering (TF-IDF + Cosine Similarity) and Collaborative Filtering (SVD Matrix Factorization).",
    longDescription:
      "Built a hybrid recommendation engine combining Content-Based Filtering (TF-IDF + Cosine Similarity) and Collaborative Filtering (SVD Matrix Factorization) for highly personalised movie recommendations.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "SVD", "TF-IDF"],
    features: [
      "Personalized recommendations",
      "RMSE, MAE, Precision, Recall & F1-Score",
      "Interactive Streamlit interface",
      "Hybrid filtering approach",
    ],
    github: "https://github.com/BassemRamdan/CineMatch",
    liveDemo: "https://cine-matchs.streamlit.app/",
    videoSrc: "https://res.cloudinary.com/buqstraz/video/upload/v1784044769/movie-recommender_kht8ld.mp4",
    featured: true,
    accentColor: "#7C6A9E",
  },
  {
    id: "heart-disease",
    title: "Heart Disease Detection System",
    subtitle: "Expert System + Machine Learning",
    description:
      "Combined an Experta rule engine with Decision Tree machine learning for early clinical heart disease risk assessment and diagnostic prediction.",
    longDescription:
      "Combined a 12-rule Experta expert system with a Decision Tree machine learning classifier for early heart disease detection. Features a comprehensive data preprocessing pipeline, diagnostic rule evaluation, and an interactive Streamlit clinical application.",
    tech: ["Python", "Experta", "Scikit-learn", "Streamlit", "Decision Tree", "Pandas"],
    features: [
      "12-rule expert system",
      "Decision Tree classifier",
      "Data preprocessing pipeline",
      "Interactive Streamlit application",
    ],
    github: "https://github.com/BassemRamdan/Heart-Disease-Detection-System",
    videoSrc: "https://res.cloudinary.com/buqstraz/video/upload/v1784044765/healthcare_lu2yjh.mp4",
    featured: true,
    accentColor: "#C0504D",
  },
  {
    id: "cnn-ffnn",
    title: "CNN vs FFNN Architecture Comparison",
    subtitle: "Intel Scene Image Classification",
    description:
      "Deep Learning benchmark comparing Convolutional and Feed-Forward Neural Networks on Intel Scene Classification using PyTorch with custom training loops.",
    longDescription:
      "Compared CNN and Feed-Forward Neural Network architectures on the Intel Image Classification dataset. Built with PyTorch, featuring custom data augmentation, early stopping, custom training loop, and loss/accuracy visualization.",
    tech: ["Python", "PyTorch", "CNN", "FFNN", "NumPy", "Matplotlib"],
    features: [
      "PyTorch implementation",
      "Custom training loop",
      "Data augmentation & early stopping",
      "Loss & accuracy benchmarking",
    ],
    github: "https://github.com/BassemRamdan/Intel-Scene-Classification-AI",
    videoSrc: "https://res.cloudinary.com/buqstraz/video/upload/v1784044761/deep-learning_c6j6y5.mp4",
    featured: true,
    accentColor: "#4A7FA5",
  },
];
