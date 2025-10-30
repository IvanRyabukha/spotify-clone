interface Props {
  image?: string;
  title: string;
  subTitle: string;
}

export default function TrackInfo({ title, subTitle }: Props) {
  return (
    <div className="flex items-center gap-3">
      {/*TODO: Circle progress-bar */}
      {/*TODO: Play/pause button when hover title or cover*/}
      <div className="w-12 h-12 bg-white/5 border border-primary rounded-full" />
      <div>
        <div className="text-white text-lg font-medium">{title}</div>
        <div className="opacity-65">{subTitle}</div>
      </div>
    </div>
  );
}
