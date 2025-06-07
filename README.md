![image](https://github.com/MatanShemesh10/truth_keeper/assets/122441156/8ae4c66a-3eb3-4eb3-9226-ac96a2eea616)


# Truth Keeper

**Truth Keeper** is an advanced AI-powered system designed to detect and classify fake news within digital content. Developed as a final-year project at Ruppin Academic Center, it combines Natural Language Processing (NLP) techniques with modern web development practices to provide users with real-time evaluations of information credibility.

---

## 🌟 Project Motivation & Background

With the exponential growth of social media platforms and digital content consumption, misinformation (disinformation and misinformation) has become a significant societal challenge. Truth Keeper addresses this challenge by leveraging state-of-the-art AI models fine-tuned on real-world datasets of true and fake news articles.

Key objectives:
- **Detect** fake news and provide classification scores.
- **Empower** users to critically evaluate the credibility of online content.
- **Integrate** seamlessly into user workflows via web and browser tools.

---

## ⚙️ System Architecture & Components

The project is structured as a modular system with several key components:

```
.
├── api/                 # Backend API built with Python and FastAPI to interface with the AI model
├── chrome_extension/    # Chrome Extension for in-browser fake news detection
├── react_web/           # React-based web application for user interaction
├── datasets/            # Datasets for model fine-tuning and evaluation
├── models/              # Pre-trained and fine-tuned language models
├── scripts/             # Scripts for data preparation, model training, and evaluation
├── docs/                # Project documentation, research papers, and architecture diagrams
├── requirements.txt     # Python dependencies
├── README.md            # Project documentation (this file)
└── LICENSE              # Project license
```

---

## 🧠 Technical Workflow

1. **Data Collection & Preprocessing:**
   - Aggregation of datasets from sources like Kaggle and Hugging Face, focusing on real and fake news classification.
   - Preprocessing techniques include tokenization, summarization (to reduce input size), and label normalization.

2. **Model Fine-Tuning:**
   - Utilizing **transfer learning** with large language models (e.g., GPT-3.5, GPT-4).
   - Fine-tuning the models using domain-specific data to achieve high accuracy in the fake news detection task.
   - Incorporating data balancing and cost-aware training to handle the computational and financial challenges.

3. **Backend API:**
   - Built with **FastAPI**, exposing RESTful endpoints for:
     - Submitting text for analysis.
     - Returning true/false predictions with confidence scores.
   - Designed for scalability and easy integration with front-end applications.

4. **Web Application (React):**
   - A modern **React.js** web interface.
   - Users can input text and instantly receive classification results.
   - Fully responsive and user-friendly design.

5. **Chrome Extension:**
   - Developed using **JavaScript** and **HTML/CSS**.
   - Allows users to highlight any text in the browser and receive real-time analysis directly within their browsing experience.

6. **Deployment & CI/CD:**
   - Deployed using **Vercel** for the frontend.
   - GitHub for version control and continuous development.
   - Chrome Extension distributed via the Chrome Web Store.

---

## 📈 Performance & Results

- **Achieved accuracy:** ~94.13% on a test dataset of ~45,500 samples.
- Balanced performance to ensure reliable results while minimizing computational costs.
- Fast response times via streamlined APIs.

---

## 🛠️ Technologies Used

- **Python** – Core programming language for backend and data processing.
- **FastAPI** – High-performance API framework.
- **OpenAI API** – Leveraging GPT-based models for NLP tasks.
- **React.js** – Frontend framework for the web application.
- **Chrome Extension APIs** – For in-browser fake news detection.
- **Vercel** – For frontend deployment and hosting.
- **GitHub & CI/CD** – Version control, issue tracking, and streamlined deployments.
- **Kaggle & Hugging Face** – Sources for training datasets and pre-trained models.

---

## 🚀 Getting Started

### Prerequisites
- Python 3.10+
- Node.js 18+
- OpenAI API key (or use local models for experimentation).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MatanShemesh10/Truth_Keeper.git
   cd Truth_Keeper
   ```

2. **Set up the backend:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up the frontend (React web app):**
   ```bash
   cd react_web
   npm install
   ```

4. **Start the development servers:**
   - Backend (FastAPI):
     ```bash
     uvicorn api.main:app --reload
     ```
   - Frontend (React):
     ```bash
     npm start
     ```

---

## ✏️ Usage

- **Web Application:** Navigate to the deployed site to input any text for analysis and receive credibility scores.
- **Chrome Extension:** Load the extension into Chrome, highlight text on any webpage, and view classification results instantly.
- **API Integration:** Use the exposed RESTful API endpoints for programmatic access to the fake news detection service.

---

## 🤝 Acknowledgements

- Project supervised by **Dr. Nadav Wolach** at Ruppin Academic Center.
- Developed collaboratively by **Matan Shemesh** and **Ariel Cohen**.
- Supported by insights from IMT School for Advanced Studies (Lucca, Italy).

---

## 📜 License

This project is licensed under the Ruppin Academic Center and MIT License.

---

## 🚀 Future Work

Potential future enhancements include:
- Expanding to support multimedia content (images, video) for fake news detection.
- Real-time dashboard for tracking misinformation trends.
- Additional language support and multilingual classification.

---

**Let’s combat misinformation together, one fact-check at a time!**
