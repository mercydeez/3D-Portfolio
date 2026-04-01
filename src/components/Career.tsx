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
              <h3>2025</h3>
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
                <h4>MAIB Candidate</h4>
                <h5>S P Jain School of Global Management</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Building global business and technology expertise through
              management-focused coursework and practical projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
