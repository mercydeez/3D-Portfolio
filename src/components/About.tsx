import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I&apos;m an AI Engineer building production-ready AI and LLM
          applications. I use Python, FastAPI, and Docker to deliver scalable
          backend services, multi-agent workflows with LangChain/LangGraph, and
          vector retrieval pipelines with Pinecone.
        </p>
      </div>
    </div>
  );
};

export default About;
