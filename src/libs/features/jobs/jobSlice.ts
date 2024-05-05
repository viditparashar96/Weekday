import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "jobs",
  initialState: {
    originalJobs: null,
    jobs: null,
    totalCount: 0,
  },
  reducers: {
    addOriginalJobs: (state, action: any) => {
      state.originalJobs = action.payload?.jdList;
    },
    addJobs: (state, action: any) => {
      state.jobs = action.payload?.jdList;
      state.totalCount = action.payload?.totalCount;
    },
    filterJobs: (state, action: any) => {
      state.jobs = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addJobs, filterJobs, addOriginalJobs } = counterSlice.actions;

export default counterSlice.reducer;
