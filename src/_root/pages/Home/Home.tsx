import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HomeFilters } from "../../../components";
import JobCard from "../../../components/Home/Jobcard/JobCard";
import { fetchJobs } from "../../../libs/actions/job.action";
import { addJobs } from "../../../libs/features/jobs/jobSlice";
import Layout from "../../Layout";

const Home = () => {
  const dispatch = useDispatch();

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

      <div style={{ marginTop: 10 }}>
        <JobCard />
      </div>
    </Layout>
  );
};

export default Home;
