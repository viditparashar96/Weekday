import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeFilters } from "../../../components";
import JobCard, {
  JobCardProps,
} from "../../../components/Home/Jobcard/JobCard";
import { fetchJobs } from "../../../libs/actions/job.action";
import { addJobs } from "../../../libs/features/jobs/jobSlice";
import Layout from "../../Layout";
import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state: any) => state.job.jobs);
  console.log("Jobs===>", jobs);
  useEffect(() => {
    (async () => {
      const data = await fetchJobs();
      console.log(data);
      dispatch(addJobs(data));
    })();
  }, [dispatch]);
  return (
    <Layout>
      <HomeFilters />

      <div className="job_card_container">
        {jobs?.map((job: JobCardProps) => (
          <JobCard job={job} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
