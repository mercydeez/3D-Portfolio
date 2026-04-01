import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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
    title: "RetentionFlow-AI",
    category: "End-to-end AI pipeline",
    tools: "Python, Scikit-learn, OpenAI / Groq API, Pandas, Logistic Regression",
    status: "Completed",
    link: "https://github.com/mercydeez/RetentionFlow-AI",
    image: "/images/retentionflow-ai.png",
  },
  {
    title: "Lulu Sales Intelligence",
    category: "Enterprise analytics platform",
    tools: "Next.js, FastAPI, PostgreSQL, Redis, Docker, OpenAI",
    status: "Completed",
    link: "https://github.com/mercydeez/lulu-sales-intelligence-dashboard",
    image: "/images/lulu-dashboard.png",
  },
  {
    title: "Bombay Tribe Dashboard",
    category: "Power BI sales pipeline",
    tools: "Power BI, DAX, Data Modeling",
    status: "Private",
    image: "/images/bombay-tribe.png",
  },
  {
    title: "Forest Fire Prediction",
    category: "Real-time ML pipeline",
    tools: "Python, Scikit-learn, Streamlit, Flask",
    status: "Completed",
    link: "https://github.com/mercydeez/forest-fire-risk-prediction",
    image: "/images/forest-fire-danger.png",
  },
  {
    title: "Lung Cancer Predictor",
    category: "Clinical symptom screening",
    tools: "Python, Random Forest, Scikit-learn, Streamlit",
    status: "Completed",
    link: "https://github.com/mercydeez/lung_cancer_predictor",
    image: "/images/lung-cancer.png",
  },
  {
    title: "Insurance Dashboard",
    category: "Policy & claims analytics",
    tools: "Power BI, DAX, Data Modeling",
    status: "Completed",
    link: "https://github.com/mercydeez/Murphy_Insurance",
    image: "/images/insurance.png",
  },
  {
    title: "TrustMetrix Study",
    category: "Dark UX patterns research",
    tools: "HTML, CSS, JavaScript, UX Design",
    status: "Private",
    image: "/images/trustmetrix.png",
  },
];

const Work = () => {
  useGSAP(() => {
    function getTranslateX() {
      const flexTrack = document.querySelector(".work-flex");
      const outerBox = document.querySelector(".work-track-outer");
      
      if (!flexTrack || !outerBox) return 0;

      const trackWidth = flexTrack.getBoundingClientRect().width;
      const visibleWidth = outerBox.getBoundingClientRect().width;

      let distance = trackWidth - visibleWidth;
      return distance < 0 ? 0 : distance;
    }

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        id: "work",
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      {/* section-container constrains the heading to match other sections */}
      <div className="work-heading-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
      </div>

      {/* The flex track lives outside section-container so it can scroll edge-to-edge */}
      <div className="work-track-outer">
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              {/* Top row: number left, title+category right */}
              <div className="work-header">
                <h3 className="work-number">0{index + 1}</h3>
                <div className="work-title-group">
                  <h4 className="work-title">{project.title}</h4>
                  <p className="work-category">{project.category}</p>
                </div>
              </div>

              {/* Tools */}
              <div className="work-tools">
                <p className="tools-label">Tools and features</p>
                <p className="tools-list">{project.tools}</p>
              </div>

              {/* Image */}
              {project.image && (
                <div className="work-image-area">
                  <WorkImage
                    image={project.image}
                    alt={project.title}
                    link={project.link}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
