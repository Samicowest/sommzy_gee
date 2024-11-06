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

  const [isMuted, setIsMuted] = useState(true); // Start as muted

  useEffect(() => {
    // Attempt to play the audio once it loads, muted
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log("Autoplay failed, waiting for user interaction.");
      }
    };
    playAudio();
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
