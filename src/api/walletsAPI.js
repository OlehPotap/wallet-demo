import axios from "axios";

const getAll = async (date) => {
  try {
    const { data } = await axios.get(`/`);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

const add = async (info) => {
  try {
    const { data } = await axios.post("/", info);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

const walletsAPI = {
  getAll,
  add,
};

export default walletsAPI;
