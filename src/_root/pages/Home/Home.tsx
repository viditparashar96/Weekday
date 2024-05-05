import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
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
  const [page, setPage] = useState<number>(2);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const fetch = async () => {
    setLoading(true);
    try {
      // setSearchParams("");
      const data = await fetchJobs(page);
      console.log(data);
      dispatch(addJobs(data));
      setPage(page + 1);

      setLoading(false);
    } catch (error) {
      console.log(error);
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

      <div>
        <InfiniteScroll
          dataLength={jobs?.length || 10}
          next={fetch}
          hasMore={true}
          loader={<p>Loading...</p>}
          endMessage={<p>No more data to load.</p>}
        >
          <div className="job_card_container">
            {jobs?.map((job: JobCardProps) => (
              <JobCard job={job} />
            ))}
          </div>
        </InfiniteScroll>
        {/* {error && <p>Error: {error.message}</p>} */}
      </div>

      {/* <div className="job_card_container">
        {jobs?.map((job: JobCardProps) => (
          <JobCard job={job} />
        ))}
      </div> */}
    </Layout>
  );
};

export default Home;
