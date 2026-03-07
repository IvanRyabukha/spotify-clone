import { Menu } from './Menu';
import { CustomMenu } from '@/components/ui/custom-menu/CustomMenu';
import { playListStore } from '@/store/playlist.store';
import { PagesConfig } from '@/config/pages.config';
import { Plus } from 'lucide-react';
import { useState } from 'react';

export function SidebarPlaylists() {
  const [value, setValue] = useState('');
  const [isShow, setIsShow] = useState(false);

  return (
    <Menu
      items={playListStore.playLists.map((playlist) => ({
        name: playlist.name,
        link: PagesConfig.PLAYLIST(playlist.name),
      }))}
      title="Play Lists"
    >
      <div className="relative">
        <button
          className="flex items-center gap-1.5 mt-5 bg-zinc-700/30
            py-2 px-3.5 rounded-md duration-300 transition-colors
            hover:bg-zinc-700/50"
          onClick={() => setIsShow((prev) => !prev)}
        >
          <Plus /> <span>New playlist</span>
        </button>

        {isShow && (
          <CustomMenu side='left'>
            <input
              type="text"
              placeholder="Playlist name"
              autoFocus
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && value.trim()) {
                  playListStore.createPlayList(value.trim());
                  setValue('');
                }
              }}
              className="duration-300 rounded-md px-3 py-2 w-full"
            />
          </CustomMenu>
        )}
      </div>
    </Menu>
  );
}
