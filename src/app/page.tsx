import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

import { Footer } from "@/components/Footer";
import { SideBar } from "@/components/SideBar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>

            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden transition-colors hover:bg-white/10"
            >
              <Image
                width={100}
                height={100}
                alt="Eletrônicas 2023"
                src="/electronic-album.jpeg"
              />
              <strong>Eletrônicas 2023</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden transition-colors hover:bg-white/10"
            >
              <Image
                width={100}
                height={100}
                src="/suicide-album.jpeg"
                alt="This Is $uicideboy$"
              />
              <strong>This Is $uicideboy$</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden transition-colors hover:bg-white/10"
            >
              <Image
                width={100}
                height={100}
                alt="JEND COLLECTION"
                src="/jend-collection.jpeg"
              />
              <strong>JEND COLLECTION</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden transition-colors hover:bg-white/10"
            >
              <Image
                width={100}
                height={100}
                alt="Walker song’s 🫠"
                src="/walker-songs.jpeg"
              />
              <strong>Walker song’s 🫠</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden transition-colors hover:bg-white/10"
            >
              <Image
                width={100}
                height={100}
                alt="This is Matuê"
                src="/matue-album.jpeg"
              />
              <strong>This is Matuê</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden transition-colors hover:bg-white/10 "
            >
              <Image
                width={100}
                height={100}
                src="/poze-do-rodo.jpeg"
                alt="This is Mc Poze do Rodo"
              />
              <strong>This is Mc Poze do Rodo</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Welinton Hoff
          </h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                width={120}
                height={120}
                alt="Daily Mix 1"
                src="/mix-one.jpeg"
                className="w-full "
              />
              <button className="w-12 h-12 flex position: absolute ml-32 mt-28 items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto invisible group-hover:visible">
                <Play />
              </button>

              <strong className="font-semibold mt-1">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                ConeCrewDiretoria, Matuê, Filipe Ret and more
              </span>
            </a>

            <a
              href="#"
              className="bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                width={120}
                height={120}
                alt="Daily Mix 2"
                className="w-full "
                src="/mix-two.jpeg"
              />
              <button className="w-12 h-12 flex position: absolute ml-32 mt-28 items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto invisible group-hover:visible">
                <Play />
              </button>

              <strong className="font-semibold mt-1">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                DJ Philipe Sestrem, Dj André Zanella, AKINN and more
              </span>
            </a>

            <a
              href="#"
              className="bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                width={120}
                height={120}
                alt="Daily Mix 3"
                src="/mix-tre.jpeg"
                className="w-full "
              />
              <button className="w-12 h-12 flex position: absolute ml-32 mt-28 items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto invisible group-hover:visible">
                <Play />
              </button>

              <strong className="font-semibold mt-1">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Jend, Darren Dreyer, Pauli Gabrieli and more
              </span>
            </a>

            <a
              href="#"
              className="bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                width={120}
                height={120}
                alt="Daily Mix 4"
                className="w-full "
                src="/mix-four.jpeg"
              />
              <button className="w-12 h-12 flex position: absolute ml-32 mt-28 items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto invisible group-hover:visible">
                <Play />
              </button>

              <strong className="font-semibold mt-1">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Mc Poze do Rodo, DJ SAVIO, Meno Tody and more
              </span>
            </a>

            <a
              href="#"
              className="bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                width={120}
                height={120}
                alt="Daily Mix 5"
                className="w-full "
                src="/mix-five.jpeg"
              />
              <button className="w-12 h-12 flex position: absolute ml-32 mt-28 items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto invisible group-hover:visible">
                <Play />
              </button>

              <strong className="font-semibold mt-1">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Alok, Sebastian Ingrosso, Kygo and more
              </span>
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
