export type SkillCategory = {
  id: string;
  label: string;
  icon: string;
  skills: string[];
};

export const SKILLS: SkillCategory[] = [
  {
    id: "ml",
    label: "Machine Learning",
    icon: "Brain",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Semi-Supervised Learning",
      "Regression & Classification",
      "Clustering (K-Means, K-Medoids)",
      "Decision Trees & Random Forest",
      "SVM & Naive Bayes",
      "Scikit-learn",
      "XGBoost",
      "CatBoost",
      "LightGBM",
      "Feature Engineering",
      "Hyperparameter Tuning",
      "Cross-Validation",
      "Ensemble Learning",
      "Model Evaluation",
    ],
  },
  {
    id: "dl",
    label: "Deep Learning",
    icon: "Layers",
    skills: [
      "Neural Networks",
      "PyTorch",
      "CNN (Convolutional NN)",
      "FFNN (Feed Forward NN)",
      "RNN & LSTM",
      "Transformers",
      "Transfer Learning",
      "Loss Functions",
      "Optimizers (Adam, SGD)",
      "Backpropagation",
      "Data Augmentation",
      "Early Stopping",
    ],
  },
  {
    id: "nlp",
    label: "Natural Language Processing",
    icon: "MessageSquare",
    skills: [
      "NLP Fundamentals",
      "TF-IDF Vectorization",
      "Cosine Similarity",
      "Text Preprocessing & Tokenization",
      "Embeddings & Sentiment Analysis",
      "Language Models & Prompts",
    ],
  },
  {
    id: "data",
    label: "Data Analysis & Mining",
    icon: "BarChart3",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Exploratory Data Analysis (EDA)",
      "PCA (Dimensionality Reduction)",
      "Outlier Clipping & Scaling",
    ],
  },
  {
    id: "cv",
    label: "Computer Vision",
    icon: "Eye",
    skills: ["OpenCV", "MediaPipe", "Image Classification", "Intel Scene Dataset"],
  },
  {
    id: "expert",
    label: "Expert Systems & AI",
    icon: "Cpu",
    skills: [
      "Experta Rule Engine",
      "Mamdani Fuzzy Logic",
      "Genetic Algorithms",
      "A* Search & Game Trees",
      "Backtracking & Constraint Satisfaction",
    ],
  },
  {
    id: "programming",
    label: "Programming Languages",
    icon: "Code2",
    skills: ["Python", "Java", "SQL", "R", "HTML/CSS"],
  },
  {
    id: "deploy",
    label: "Deployment & Tools",
    icon: "Rocket",
    skills: ["Streamlit Cloud", "Git & GitHub", "Jupyter Notebook", "VS Code"],
  },
];
