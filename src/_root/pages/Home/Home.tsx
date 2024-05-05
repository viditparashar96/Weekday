import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { HomeFilters, Loader } from "../../../components";
import JobCard, {
  JobCardProps,
} from "../../../components/Home/Jobcard/JobCard";
import { fetchJobs } from "../../../libs/actions/job.action";
import { addJobs, addOriginalJobs } from "../../../libs/features/jobs/jobSlice";
import Layout from "../../Layout";
import "./Home.css";
const Home = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state: any) => state.job.jobs);
  const [page, setPage] = useState<number>(3);
  const [loading, setLoading] = useState(false);
  const fetch = async () => {
    setLoading(true);
    try {
      const data = await fetchJobs(page);
      dispatch(addOriginalJobs(data));
      dispatch(addJobs(data));
      setPage(page + 1);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  // const Throttle = (cb: any, d: number) => {
  //   let last = 0;
  //   return (...args) => {
  //     const now = new Date().getTime();
  //     if (now - last < d) {
  //       return;
  //     }
  //     last = now;
  //     cb(...args);
  //   };
  // };

  // const handleScroll = Throttle(() => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop >=
  //       document.documentElement.offsetHeight - 100 &&
  //     !loading
  //   ) {
  //     fetch();
  //   }
  // }, 500);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [loading]);

  return (
    <Layout>
      <HomeFilters />

      {jobs?.length === 0 && <p>No jobs found</p>}

      {loading && (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Loader />
        </div>
      )}

      <div style={{ minHeight: "90vh" }}>
        <InfiniteScroll
          dataLength={jobs?.length || 10}
          next={fetch}
          loader={
            jobs?.length > 0 && (
              <h4 style={{ textAlign: "center" }}>Loading...</h4>
            )
          }
          hasMore={true}
          endMessage={<p>No more data to load.</p>}
          scrollThreshold={0.8}
        >
          <div className="job_card_container">
            {jobs?.map((job: JobCardProps) => (
              <JobCard job={job} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </Layout>
  );
};

export default Home;
