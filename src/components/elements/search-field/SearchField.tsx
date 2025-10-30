import { Search } from "lucide-react";

export function SearchField() {
  return (
    <div className='flex items-center gap-3 group'>
      <Search className="opacity-40 group-focus-within:opacity-100 duration-300"/>
      <input
        type="search"
        placeholder="Search for songs, artist, etc..."
        className="bg-transparent w-full outline-none"

      />
    </div>
  );
};
