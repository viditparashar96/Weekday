import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "../features/jobs/jobSlice";

export default configureStore({
  reducer: {
    job: jobSlice,
  },
});
