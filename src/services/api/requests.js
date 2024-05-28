import { instance } from ".";

const getData = async (path) => 
  (await instance.get(path)).data;

const postData = async (path, data) => 
  (await instance.post(path, data)).data;

export { getData, postData };

