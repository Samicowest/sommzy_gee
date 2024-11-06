import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
} from "react";
import { data } from "./data";

const BallsContext = createContext();

export const BallContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(9);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const activeImage = data.find((item) => item.key === isActive)?.image;

  return (
    <BallsContext.Provider
      value={{
        isActive,
        setIsActive,
        activeImage,
        audioRef,
        toggleAudio,
        isPlaying,
      }}
    >
      {children}
    </BallsContext.Provider>
  );
};

export const useBallContext = () => useContext(BallsContext);
