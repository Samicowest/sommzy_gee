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

  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleUserInteraction = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.muted = true;
          await audioRef.current.play();
          setIsPlaying(true);
          setIsMuted(true);
        }
      } catch (error) {
        console.log("Autoplay failed, waiting for user interaction.");
      }

      window.removeEventListener("click", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);

    return () => window.removeEventListener("click", handleUserInteraction);
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false;
        setIsMuted(false);
        setIsPlaying(true);
      } else {
        audioRef.current.muted = true;
        setIsMuted(true);
        setIsPlaying(false);
      }
    }
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
