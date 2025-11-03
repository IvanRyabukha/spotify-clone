import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchField({ value, onChange }: Props) {
  return (
    <div className='flex items-center gap-3 group'>
      <Search className="opacity-40 group-focus-within:opacity-100 duration-300"/>
      <input
        type="search"
        placeholder="Search for songs, artist, etc..."
        className="bg-transparent w-full outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
