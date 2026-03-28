import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

interface Project {
  title: string;
  category: string;
  tools: string;
  status: string;
  link?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Lulu Sales Intelligence Dashboard",
    category: "Enterprise analytics platform with real-time AI chat",
    tools: "Next.js, FastAPI, PostgreSQL, Redis, Docker, OpenAI",
    status: "Completed",
    link: "https://github.com/mercydeez/lulu-sales-intelligence-dashboard",
    image: "/images/lulu-dashboard.png",
  },
  {
    title: "Bombay Tribe Sales Dashboard",
    category: "Multi-page Power BI tracking ₹1.57M revenue pipeline",
    tools: "Power BI, DAX, Data Modeling",
    status: "Private",
    image: "/images/bombay-tribe.png",
  },
  {
    title: "Forest Fire Risk Prediction",
    category: "Real-time ML pipeline from environmental sensor data",
    tools: "Python, Scikit-learn, Streamlit, Flask",
    status: "Completed",
    link: "https://github.com/mercydeez/forest-fire-risk-prediction",
    image: "/images/forest-fire-danger.png",
  },
  {
    title: "Lung Cancer Risk Prediction",
    category: "Random Forest classifier for clinical symptom screening",
    tools: "Python, Random Forest, Scikit-learn, Streamlit",
    status: "Completed",
    link: "https://github.com/mercydeez/lung_cancer_predictor",
    image: "/images/lung-cancer.png",
  },
  {
    title: "Insurance Analysis Dashboard",
    category: "Multi-page BI dashboard covering policy and claims analytics",
    tools: "Power BI, DAX, Data Modeling",
    status: "Completed",
    link: "https://github.com/mercydeez/Murphy_Insurance",
    image: "/images/insurance.png",
  },
  {
    title: "TrustMetrix Design Ethics Study",
    category: "Two contrasting mobile prototypes exploring dark UX patterns",
    tools: "HTML, CSS, JavaScript, UX Design",
    status: "Private",
    image: "/images/trustmetrix.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tech Stack</span>
                          <p>{project.tools}</p>
                          <p>Status: {project.status}</p>
                          <p>
                            GitHub: {project.link ? (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                data-cursor="disable"
                              >
                                Repository
                              </a>
                            ) : (
                              "Private"
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    {project.image && (
                      <div className="carousel-image-wrapper">
                        <WorkImage
                          image={project.image}
                          alt={project.title}
                          link={project.link}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
