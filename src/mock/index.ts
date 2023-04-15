import { IDailyMixCardProps } from "@/components/DailyMixCard";
import { ISuggestionCardProps } from "@/components/SuggestionCard";

const playlistSuggestion: ISuggestionCardProps[] = [
  {
    label: "Eletrônicas 2023",
    image: "/electronic-album.jpeg",
    alternativeLabel: "Eletrônicas 2023",
  },
  {
    label: "This Is $uicideboy$",
    image: "/suicide-album.jpeg",
    alternativeLabel: "This Is $uicideboy$",
  },
  {
    label: "JEND COLLECTION",
    image: "/jend-collection.jpeg",
    alternativeLabel: "JEND COLLECTION",
  },
  {
    label: `Walker song’s 🫠`,
    image: "/walker-songs.jpeg",
    alternativeLabel: `Walker song’s 🫠`,
  },
  {
    label: "This is Matuê",
    image: "/matue-album.jpeg",
    alternativeLabel: "This is Matuê",
  },
  {
    image: "/poze-do-rodo.jpeg",
    label: "This is Mc Poze do Rodo",
    alternativeLabel: "This is Mc Poze do Rodo",
  },
];

const dailyMix: IDailyMixCardProps[] = [
  {
    label: "Daily Mix 1",
    image: "/mix-one.jpeg",
    alternativeLabel: "Daily Mix 1",
    description: "ConeCrewDiretoria, Matuê, Filipe Ret and more",
  },
  {
    label: "Daily Mix 2",
    image: "/mix-two.jpeg",
    alternativeLabel: "Daily Mix 2",
    description: "DJ Philipe Sestrem, Dj André Zanella, AKINN and more",
  },
  {
    label: "Daily Mix 3",
    image: "/mix-tre.jpeg",
    alternativeLabel: "Daily Mix 3",
    description: "Jend, Darren Dreyer, Pauli Gabrieli and more",
  },
  {
    label: "Daily Mix 4",
    image: "/mix-four.jpeg",
    alternativeLabel: "Daily Mix 4",
    description: "Mc Poze do Rodo, DJ SAVIO, Meno Tody and more",
  },
  {
    label: "Daily Mix 5",
    image: "/mix-five.jpeg",
    alternativeLabel: "Daily Mix 5",
    description: "Alok, Sebastian Ingrosso, Kygo and more",
  },
];

export { dailyMix, playlistSuggestion };
