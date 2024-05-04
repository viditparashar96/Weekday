import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: null,
    totalCount: 0,
  },
  reducers: {
    addJobs: (state, action: any) => {
      // console.log(action.payload.totalCount);
      state.jobs = action.payload?.jdList;
      state.totalCount = action.payload?.totalCount;
      // state.totalCount = action.payload.length;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addJobs } = counterSlice.actions;

export default counterSlice.reducer;
