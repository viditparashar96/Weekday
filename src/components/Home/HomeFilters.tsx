import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Location, MinExperience, Role } from "../../constants/filter";
import { filterJobs } from "../../libs/features/jobs/jobSlice";
import Filter from "../shared/Filter";
import FilterInput from "../shared/FilterInput";
const HomeFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const jobs = useSelector((state: any) => state.job.jobs);
  const originalJobs = useSelector((state: any) => state.job.originalJobs);
  console.log("ORIGIANL jobs===>", jobs);

  const dispatch = useDispatch();
  console.log("jobs===>", jobs);
  console.log("searchParams===>", searchParams);

  useEffect(() => {
    const location = searchParams.get("Location") || "";
    const role =
      searchParams
        .get("Role")
        ?.split(",")
        .filter((item) => item !== "") || [];
    const minExp = searchParams.get("Min Exp") || "";
    console.log("location===>", location);
    console.log("role===>", role);
    console.log("minExp===>", minExp);
    if (originalJobs?.length > 0) {
      let filteredJobs = originalJobs;
      if (location) {
        filteredJobs = filteredJobs.filter(
          (job: any) => job.location === location
        );
      }
      if (role.length > 0) {
        filteredJobs = filteredJobs.filter((job: any) =>
          role.includes(job.jobRole)
        );
      }
      if (minExp) {
        filteredJobs = filteredJobs.filter(
          (job: any) => job.minExp === parseInt(minExp)
        );
      }

      console.log("filteredJobs===>", filteredJobs);
      if (filteredJobs.length > 0) {
        dispatch(filterJobs(filteredJobs));
      }
    }
  }, [searchParams, dispatch]);
  return (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
      <Filter items={Role} name="Role" isMultiSelect={true} />

      <Filter items={Location} name="Location" isMultiSelect={false} />
      <Filter items={MinExperience} name="Min Exp" isMultiSelect={false} />
      <FilterInput name="Min base pay" />
      <FilterInput name="Company Name" />
    </div>
  );
};

export default HomeFilters;
