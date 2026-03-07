import { CustomMenu } from '@/components/ui/custom-menu/CustomMenu';
import { playListStore } from '@/store/playlist.store';
import type { ITrack } from '@/types/track.types';
import { Ellipsis } from 'lucide-react';
import { useState } from 'react';
import cn from 'clsx';

interface Props {
  track: ITrack;
}

export function AddToPlaylist({ track }: Props) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsShow((prev) => !prev)}>
        <Ellipsis
          className="opacity-30 duration-300 hover:opacity-100"
        />
      </button>

      {isShow && (
        <CustomMenu side="right">
          <div className='p-1.5 space-y-1.5'>
            {playListStore.playLists.map((playlist) => {
              const isAdded = playListStore.isTrackInPlaylist(
                playlist.name,
                track.name
              );
              return (
                <button
                  key={playlist.name}
                  className={cn(
                    `w-full text-left transition-opacity,
                    duration-300 hover:opacity-100 text-sm`,
                    isAdded ? 'opacity-100 font-semibold' : 'opacity-60'
                  )}
                  onClick={() => {
                    playListStore.toggleTrackInPlaylist(
                      playlist.name,
                      track.name
                    );
                  }}
                >
                  {playlist.name}
                </button>
              );
            })}
          </div>
        </CustomMenu>
      )}
    </div>
  );
}
