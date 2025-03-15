import axios from "axios";
import * as AxiosLogger from "axios-logger";

const myAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  params: {
    t: new Date().getTime(),
  },
});

if (process.env.NODE_ENV === "development") {
  // 요청 인터셉터 추가
  myAxios.interceptors.request.use(
    function (request) {
      return AxiosLogger.requestLogger(request, {
        prefixText: false,
        dateFormat: "HH:MM:ss",
        method: true,
        status: true,
        data: false,
        statusText: true,
        headers: true,
        params: true,
        logger: console.debug.bind(this),
      });
    },
    function (error) {
      return AxiosLogger.errorLogger(error, {
        prefixText: false,
        dateFormat: "HH:MM:ss",
        method: true,
        status: true,
        data: false,
        statusText: true,
        headers: true,
        params: true,
        logger: console.error.bind(this),
      });
    }
  );

  // 응답 인터셉터 추가
  myAxios.interceptors.response.use(
    function (response) {
      return AxiosLogger.responseLogger(response, {
        prefixText: false,
        dateFormat: "HH:MM:ss",
        method: true,
        status: true,
        data: false,
        statusText: true,
        headers: true,
        params: true,
        logger: console.debug.bind(this),
      });
    },
    function (error) {
      return AxiosLogger.errorLogger(error, {
        prefixText: false,
        dateFormat: "HH:MM:ss",
        method: true,
        status: true,
        statusText: true,
        data: false,
        headers: true,
        params: true,
        logger: console.error.bind(this),
      });
    }
  );
}
const axiosHelper = {
  ajax: async function (url, method, formData, headers = {}) {
    let response = null;

    try {
      switch (method.toLowerCase()) {
        case "get":
          let data = null;
          try {
            data = Object.fromEntries(formData);
          } catch (e) {
            data = formData;
          }

          response = await myAxios.get(url, {
            params: data,
            headers: headers,
          });
          break;
        case "post":
          response = await myAxios.post(url, formData, {
            headers: headers,
          });
          break;
        case "put":
          response = await myAxios.put(url, formData, {
            headers: headers,
          });
          break;
        case "delete":
          response = await myAxios.delete(url, {
            data: formData,
            headers: headers,
          });
          break;
      }
    } catch (error) {
      const response = error.response;
      const data = response?.data;

      const e = new Error(
        data?.message ||
          response?.statusText ||
          "An error occurred in the Axios."
      );
      e.status = data?.status || response?.status || 0;
      e.statusText = data?.message || response?.statusText || "Unknown Error";
      e.trace = data?.trace || response?.trace || "No trace information";

      console.group(`axiosHelper::ajax --> ${e.status} Error, ${e.statusText}`);
      console.error(e.trace);
      console.groupEnd();

      throw e;
    }

    return response?.data;
  },
  get: async function (url, formData, headers = {}) {
    return await this.ajax(url, "get", formData, headers);
  },
  post: async function (url, formData, headers = {}) {
    return await this.ajax(url, "post", formData, headers);
  },
  put: async function (url, formData, headers = {}) {
    return await this.ajax(url, "put", formData, headers);
  },
  delete: async function (url, formData, headers = {}) {
    return await this.ajax(url, "delete", formData, headers);
  },
};

export default axiosHelper;
