import { useQuery } from "@tanstack/react-query";
import { getAllPlayers, getPlayer } from "./api";

export const useAllPlayers = () => {
  return useQuery({
    queryKey: ["allPlayers"],
    queryFn: getAllPlayers,
  });
};

export const useGetPlayer = (id) => {
  return useQuery({
    queryKey: ["player", id],
    queryFn: () => getPlayer(id),
  });
};
