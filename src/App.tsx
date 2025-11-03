import { Play } from 'lucide-react';
import { SearchField } from './components/elements/search-field/SearchField';
import { TRACKS } from './data/tracks.data';
import { Track } from './components/elements/track-item/Track';
import { useQueryState } from 'nuqs';
import { useDebounce } from './hooks/useDebounce';
import { useMemo } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useQueryState('q');
  const debounceValue = useDebounce(searchTerm, 200);

  const filteredTracks = useMemo(() => {
    if (!debounceValue) {
      return TRACKS;
    }

    return TRACKS.filter((track) =>
      track.name.toLowerCase().includes(debounceValue?.toLowerCase())
    );
  }, [debounceValue]);

  return (
    <div>
      <SearchField
        value={searchTerm || ''}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="relative">
        <img src="/banner.jpg" alt="" className="rounded-xl" />

        <div
          className="flex items-center justify-between absolute
            bottom-layout left-0 w-full px-layout"
        >
          <div>
            <h1
              className="text-2xl font-semibold mb-[0.18rem]
                text-white"
            >
              Daft Punk
            </h1>
            <h2 className="text-primary font-medium">
              6.8m listeners
            </h2>
          </div>
          <button
            className="rounded-full bg-linear-to-r from-[#2f3034]
              to-[#1f2026] p-5 border border-player-bg border-solid
              duration-300 hover:-translate-y-0.5 hover:shadow"
          >
            <Play
              className="text-primary"
              fill="var(--color-primary)"
            />
          </button>
        </div>
      </div>

      <div>
        {filteredTracks.map((track) => (
          <Track track={track} key={track.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
