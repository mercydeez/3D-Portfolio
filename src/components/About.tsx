import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I&apos;m an AI Engineer specializing in building production-ready AI
          systems, LLM applications, and scalable AI infrastructure. Proficient
          in Python, FastAPI, and Docker, I design and deploy backend AI
          services, multi-agent workflows using LangChain/LangGraph, and vector
          retrieval pipelines with Pinecone and modern LLM APIs.
        </p>
      </div>
    </div>
  );
};

export default About;
