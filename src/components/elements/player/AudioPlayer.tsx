import { ProgressBar } from '@/components/ui/progress-bar/ProgressBar';
import TrackInfo from '@/components/ui/track-info/TrackInfo';
import { musicPlayerStore } from '@/store/music.player.store';
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume,
  Volume1,
  Volume2,
} from 'lucide-react';
import { useAudioPlayer } from './useAudioPlayer';

export default function AudioPlayer() {
  const {
    audioRef,
    onSeek,
    changeTrack,
    setVolume,
    togglePlayPause,
  } = useAudioPlayer();

  if (!musicPlayerStore.currentTrack) {
    return null;
  }

  return (
    <div
      className="w-full py-5 px-10 bg-player-bg border border-t
        border-white/10 grid grid-cols-[1fr_5.7fr] fixed bottom-0
        left-0"
    >
      <TrackInfo
        title={musicPlayerStore.currentTrack.name}
        subTitle={musicPlayerStore.currentTrack.artist.name}
        image={musicPlayerStore.currentTrack.cover}
      />

      <audio
        ref={audioRef}
        src={musicPlayerStore.currentTrack.file}
        onTimeUpdate={(e) => {
          const currentTime = Math.floor(e.currentTarget.currentTime);
          musicPlayerStore.seek(currentTime);
        }}
        onEnded={() => (musicPlayerStore.isPlaying = false)}
      />

      <div className="grid grid-cols-[1fr_8fr_2fr] gap-8 items-center">
        <div className="flex items-center gap-2.5">
          <button
            className="opacity-80 hover:opacity-100 duration-300"
            onClick={() => changeTrack('prev')}
          >
            <SkipBack size={20} />
          </button>

          <button
            className="rounded-full bg-linear-to-r from-[#3C3D41]
              to-[#444549] p-3.5 border border-white/5 border-solid
              text-primary hover:shadow-lg hover:shadow-black/20
              transition-shadow duration-300"
            onClick={togglePlayPause}
          >
            {musicPlayerStore.isPlaying ? (
              <Pause size={20} />
            ) : (
              <Play size={20} />
            )}
          </button>

          <button
            className="opacity-80 hover:opacity-100 duration-300"
            onClick={() => changeTrack('next')}
          >
            <SkipForward size={20} />
          </button>
        </div>

        <ProgressBar
          currentValue={musicPlayerStore.currentTime}
          value={musicPlayerStore.currentTrack.duration}
          progress={musicPlayerStore.progress}
          onSeek={(time: number) => onSeek(time)}
          isTextDisplayed
        />

        <div
          className="pl-6 max-w-36 grid grid-cols-[1fr_8fr] gap-1
            items-center"
        >
          {musicPlayerStore.volume === 0 ? (
            <Volume />
          ) : musicPlayerStore.volume < 60 ? (
            <Volume1 />
          ) : (
            <Volume2 />
          )}

          <ProgressBar
            currentValue={musicPlayerStore.volume}
            value={100}
            progress={musicPlayerStore.volume}
            onSeek={(value: number) => setVolume(value)}
            isThumbDisplayed={false}
          />
        </div>
      </div>
    </div>
  );
}
