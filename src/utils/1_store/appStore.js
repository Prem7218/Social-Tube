import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../2_slice/appSlice";
import searchSlice from "../2_slice/searchSlice";
import suggestSlice from "../2_slice/suggestSlice";

const appStore = configureStore({
  name: "appStore",
  reducer: {
    app: appSlice,
    sSlice: searchSlice,
    suggestS: suggestSlice,
  },
});

export default appStore;
