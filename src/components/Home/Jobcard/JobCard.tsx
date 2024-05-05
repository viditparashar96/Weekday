import { useState } from "react";
import "./JobCard.css";
export interface JobCardProps {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number | null;
  minJdSalary: number | null;
  salaryCurrencyCode: string;
  location: string;
  minExp: number | null;
  maxExp: number | null;
  jobRole: string;
  companyName: string;
  logoUrl: string;
}
const JobCard = ({ job }: any) => {
  const postDate = Math.floor(Math.random() * 15) + 1;
  const [showmore, setShowmore] = useState(false);
  const description = job?.jobDetailsFromCompany;
  return (
    <div className="jobcard">
      <div className="tag">
        <span>⌛</span>
        <span>Posted {postDate} days ago</span>
      </div>
      {/* Header */}
      <div className="jobcard__header">
        <div className="jobcard__header__logo__container">
          <img
            src={job?.logoUrl}
            alt="company logo"
            className="jobcard__header__logo"
          />
        </div>
        <div className="jobcard__header__details">
          <div className="jobcard__header__company">{job?.companyName}</div>
          <div className="jobcard__header__role">{job?.jobRole}</div>
          <div className="jobcard__header__location">
            {job?.location.charAt(0).toUpperCase() + job?.location.slice(1)}
          </div>
        </div>
      </div>
      {/* SALARY */}
      <div className="jobcard__Jobsalary">
        <span className="jobcard__Jobsalary_title">
          {" "}
          Estimated Salary:{" "}
          {`$${job?.minJdSalary ? job?.minJdSalary : "Not Mentioned"}${
            !job?.minJdSalary ? "" : "k"
          } - $${job?.maxJdSalary ? job?.maxJdSalary : "Not Mentioned"}${
            !job?.maxJdSalary ? "" : "k"
          } `}
        </span>
        <span className="jobcard__Jobsalary_title_CheckMark"> ✅</span>
      </div>
      {/* BODY */}
      <div className="jobcard__body">
        <h3 className="jobcard__body__title">About Job:</h3>
        <h5 className="jobcard__body__description">Description</h5>
        <p className="jobcard__body__description_details">
          <div
            className="jobcard_shadow"
            style={
              showmore ? { filter: "none", backgroundColor: "transparent" } : {}
            }
          ></div>
          {showmore ? description + "..." : description.slice(0, 400) + "..."}
          <span>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setShowmore(!showmore);
              }}
            >
              {showmore ? "Show Less" : "Show More"}
            </a>
          </span>
        </p>
        <div className="view_job">
          <a href="/">View Job</a>
        </div>
      </div>
      {/* FOOTER */}
      <div className="jobcard__footer">
        <div className="jobcard__footer__Exp">
          <span style={{ opacity: "60%", fontWeight: 500, fontSize: "0.9rem" }}>
            Minimum Experience
          </span>
          <br />
          <span
            style={{
              marginTop: 4,
              display: "block",
              fontWeight: 200,
              fontSize: "0.9rem",
            }}
          >
            {!job?.minExp ? "Not Mentioned" : job?.minExp + ""}
            <span
              style={{
                opacity: "80%",
              }}
            >
              {job?.minExp ? " Years" : ""}
            </span>
          </span>
        </div>
        <div className="jobcard__footer__apply">
          <button className="jobcard__footer__apply_button">
            ⚡Easy Apply
          </button>
          <button className="jobcard__footer__referral_button">
            ⚡Unlock referral asks
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
