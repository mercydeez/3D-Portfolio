import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Jr. Data Analyst</h4>
                <h5>Manasvi Tech Solutions Pvt. Ltd.</h5>
              </div>
              <h3>Dec 2024 - Jul 2025</h3>
            </div>
            <p>
              Collected, cleaned, and analyzed large datasets to identify trends
              and patterns. Created dashboards and reports providing actionable
              business insights.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder &amp; CEO</h4>
                <h5>CodeTriumph Technologies</h5>
              </div>
              <h3>Feb 2025 - Jun 2025</h3>
            </div>
            <p>
              Led company vision and strategy, overseeing all operations and
              delivery of high-quality tech solutions to clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
