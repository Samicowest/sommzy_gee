import axios from "axios";

const BASE_URL = "https://game.8balleth.com/api";

const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getAllPlayers = async () => {
  return (await axiosInstance.get("all-players")).data;
};

export const getPlayer = async (id) => {
  return (await axiosInstance.get(`player/${id}`)).data.player;
};
