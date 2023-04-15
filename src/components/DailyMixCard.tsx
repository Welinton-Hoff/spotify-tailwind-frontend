import Image from "next/image";
import { Play } from "lucide-react";

export interface IDailyMixCardProps {
  image: string;
  label: string;
  description: string;
  alternativeLabel: string;
}

export function DailyMixCard(props: IDailyMixCardProps) {
  const { alternativeLabel, description, image, label } = props;

  return (
    <a
      href="#"
      className="bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10"
    >
      <Image
        width={120}
        src={image}
        height={120}
        className="w-full "
        alt={alternativeLabel}
      />
      <button className="w-12 h-12 flex position: absolute ml-32 mt-28 items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto invisible group-hover:visible">
        <Play />
      </button>

      <strong className="font-semibold mt-1">{label}</strong>
      <span className="text-sm text-zinc-400">{description}</span>
    </a>
  );
}
