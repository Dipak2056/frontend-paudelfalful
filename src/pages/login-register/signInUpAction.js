import { postUser } from "../../helpers/axioshelper";
import { isPending, responseResolved } from "./signInUpSlice";

export const postUserAction = (user) => async (dispatch) => {
  dispatch(isPending());
  //call axios helper to call api
  const data = await postUser(user);
  dispatch(responseResolved(data));
};
