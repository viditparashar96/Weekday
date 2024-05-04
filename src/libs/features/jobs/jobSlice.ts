import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
  },
  reducers: {
    addJobs: (state, action: any) => {
      state.jobs.push(action?.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addJobs } = counterSlice.actions;

export default counterSlice.reducer;
