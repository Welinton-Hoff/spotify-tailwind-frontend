import Image from "next/image";
import { Fragment } from "react";
import { Play } from "lucide-react";

export interface ISuggestionCardProps {
  image: string;
  label: string;
  alternativeLabel: string;
}

export function SuggestionCard(props: ISuggestionCardProps) {
  const { image, label, alternativeLabel } = props;

  return (
    <Fragment>
      <a
        href="#"
        className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden transition-colors hover:bg-white/10"
      >
        <Image src={image} width={100} height={100} alt={alternativeLabel} />
        <strong>{label}</strong>

        <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play />
        </button>
      </a>
    </Fragment>
  );
}
