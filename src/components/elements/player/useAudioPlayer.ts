import { musicPlayerStore } from "@/store/music.player.store";
import { useEffect, useRef } from "react"

export const useAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (musicPlayerStore.isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [musicPlayerStore.isPlaying]);

  const togglePlayPause = () => {
    if(!audioRef.current) return;

    musicPlayerStore.togglePlayPause();

    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const onSeek = (time: number) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = time;
    musicPlayerStore.seek(time);
  }

  const changeTrack = (type: 'prev' | 'next') => {
    musicPlayerStore.changeTrack(type);

    if (audioRef.current && musicPlayerStore.isPlaying) {
      audioRef.current.play();
    }
  }

  const setVolume = (volume: number) => {
    if (!audioRef.current) return;

    audioRef.current.volume = volume / 100;
    musicPlayerStore.setVolume(volume);
  };

  return {
    audioRef,
    togglePlayPause,
    onSeek,
    changeTrack,
    setVolume,
  }
}