import { Location, MinExperience, Role } from "../../constants/filter";
import Filter from "../shared/Filter";
import FilterInput from "../shared/FilterInput";
const HomeFilters = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
      <Filter items={Role} name="Role." isMultiSelect={true} />

      <Filter items={Location} name="Location." isMultiSelect={false} />
      <Filter items={MinExperience} name="Min Exp." isMultiSelect={false} />
      {/* <div style={{ display: "flex", alignItems: "center", gap: 20 }}> */}
      <FilterInput name="Min base pay" />
      <FilterInput name="Company Name" />
      {/* </div> */}
    </div>
  );
};

export default HomeFilters;
