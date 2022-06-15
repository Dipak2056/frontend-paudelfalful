import { loginUser, postUser } from "../../helpers/axioshelper";
import { setUser } from "../admin-profile/AdminProfileSlice";
import { isPending, responseResolved } from "./signInUpSlice";

export const postUserAction = (user) => async (dispatch) => {
  dispatch(isPending());
  //call axios helper to call api
  const data = await postUser(user);
  dispatch(responseResolved(data));
};

export const postLoginAction = (user) => async (dispatch) => {
  dispatch(isPending());
  //call the axios helper to perform login
  const promiseData = loginUser(user);
  const data = await promiseData;

  if (data.status === "success") {
    dispatch(setUser(data.user));
    return;
  }

  dispatch(responseResolved(data));
};
