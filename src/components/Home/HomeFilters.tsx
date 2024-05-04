import { MinExperience } from "../../constants/filter";
import Filter from "../Filter";
const HomeFilters = () => {
  return (
    <div>
      <Filter items={MinExperience} name="Min Exp." isMultiSelect={false} />
    </div>
  );
};

export default HomeFilters;
