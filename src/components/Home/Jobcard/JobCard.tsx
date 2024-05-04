import "./JobCard.css";
const JobCard = () => {
  return (
    <div className="jobcard">
      <div className="tag">
        <span>⌛</span>
        <span>Posted 15 days ago</span>
      </div>
      {/* Header */}
      <div className="jobcard__header">
        <div className="jobcard__header__logo__container">
          <img
            src="https://via.placeholder.com/150"
            alt="company logo"
            className="jobcard__header__logo"
          />
        </div>
        <div className="jobcard__header__details">
          <div className="jobcard__header__company">Company</div>
          <div className="jobcard__header__role">Senior Engineer</div>
          <div className="jobcard__header__location">
            Location <span>| Exp 5-5 years</span>
          </div>
        </div>
      </div>
      {/* SALARY */}
      <div className="jobcard__Jobsalary">
        <span className="jobcard__Jobsalary_title">
          {" "}
          Estimated Salary: ₹30 - 60 LPA
        </span>
        <span> ✅</span>
      </div>
      {/* BODY */}
      <div className="jobcard__body">
        <h3 className="jobcard__body__title">About Job:</h3>
        <h5 className="jobcard__body__description">Description</h5>
        <p className="jobcard__body__description_details">
          Flex Wash is an operating system for the car wash industry. Our
          solutions help owners manage their operations and grow revenue. Our
          POS has a built-in CRM, allowing car washes to take advantage of their
          customer transaction history in order to funnel customers into
          subscriptions and higher margin wash packages..
        </p>
        <div className="view_job">
          <a href="/">View Job</a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
