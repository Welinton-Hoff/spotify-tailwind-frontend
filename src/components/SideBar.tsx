import { Search, Library, Home, PlusSquare, FolderHeart } from "lucide-react";
import Image from "next/image";

export function SideBar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <Image
          width={140}
          height={56}
          alt="Spotify Logo"
          src="/spotify-logo.png"
        />
      </div>

      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Home />
          Home
        </a>

        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>

        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Library
        </a>
      </nav>

      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center text-sm text-zinc-400 hover:text-zinc-100"
        >
          <PlusSquare className="mr-2" />
          Create Playlist
        </a>
        <a
          href=""
          className="flex items-center text-sm text-zinc-400 hover:text-zinc-100"
        >
          <FolderHeart className="mr-2" />
          Linked Songs
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Eletrônicas 2023
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          JEND COLLECTION
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          My vibes
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          The best of Old School
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This Is $uicideboy$
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Walker song’s 🫠
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This is Mc Poze do Rodo
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          This is Matuê
        </a>
      </nav>
    </aside>
  );
}
