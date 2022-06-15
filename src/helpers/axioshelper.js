import axios from "axios";
const rootUrlAPI = "http://localhost:8000/api/v1";
const adminEP = rootUrlAPI + "/admin";

const apiProcessor = async ({ method, url, dataObj }) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: dataObj,
    });
    return data;
  } catch (error) {
    let message = error.message;
    if (error.response && error.response.data) {
      message = error.response.data.message;
    }
    return {
      status: error,
      message,
    };
  }
};

// ============admin section=============
export const postUser = async (dataObj) => {
  const url = adminEP;
  return apiProcessor({ method: "post", url, dataObj });
};
