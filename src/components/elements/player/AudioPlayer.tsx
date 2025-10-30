import TrackInfo from "@/components/ui/track-info/TrackInfo";
import { musicPlayerStore } from "@/store/store";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";

export default function AudioPlayer() {
  if (!musicPlayerStore.currentTrack) {
    return null;
  }

  return (
    <div>
      <TrackInfo
        title={musicPlayerStore.currentTrack.name}
        subTitle={musicPlayerStore.currentTrack.artist.name}
        image={undefined}
      />

      <div>
        <div>
          <button>
            <SkipBack />
          </button>

          <button
            className="rounded-full bg-linear-to-r from-[#2f3034] to-[#1f2026] p-5 border border-player-bg
            border-solid duration-300 hover:-translate-y-0.5 hover:shadow"
          >
            {musicPlayerStore.isPlaying ? <Pause /> : <Play />}
          </button>

          <button>
            <SkipForward />
          </button>
        </div>
      </div>
    </div>
  );
}
