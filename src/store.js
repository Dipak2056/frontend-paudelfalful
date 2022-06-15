import { configureStore } from "@reduxjs/toolkit";
import signInUpReducer from "./pages/login-register/signInUpSlice";
import adminReducer from "./pages/admin-profile/AdminProfileSlice";
const store = configureStore({
  reducer: {
    signInUp: signInUpReducer,
    admin: adminReducer,
  },
});
export default store;
