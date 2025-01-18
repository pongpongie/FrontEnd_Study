const axiosHelper = {
  ajax: async function (url, formData, headers = {}) {
    let response = null;

    try {
      let data = null;
      try {
        data = Object.fromEntries(formData);
      } catch (e) {
        data = formData;
      }

      response = await axios.get(url, {
        params: data,
        headers: headers,
      });
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
};
