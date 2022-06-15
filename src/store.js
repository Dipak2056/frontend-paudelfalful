import { configureStore } from "@reduxjs/toolkit";
import signInUpReducer from "./pages/login-register/signInUpSlice";
const store = configureStore({
  reducer: {
    signInUp: signInUpReducer,
  },
});
export default store;
