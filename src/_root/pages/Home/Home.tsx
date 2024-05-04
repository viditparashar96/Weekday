import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HomeFilters } from "../../../components";
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

      <h1>Home</h1>
      <p>Welcome to the Home page.</p>
    </Layout>
  );
};

export default Home;
