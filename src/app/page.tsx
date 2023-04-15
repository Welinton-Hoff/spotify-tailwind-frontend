import { ChevronLeft, ChevronRight } from "lucide-react";

import { Footer } from "@/components/Footer";
import { SideBar } from "@/components/SideBar";
import { dailyMix, playlistSuggestion } from "@/mock";
import { DailyMixCard } from "@/components/DailyMixCard";
import { SuggestionCard } from "@/components/SuggestionCard";

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

          <h1 className="font-semibold text-3xl mt-10">Good Morning</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {playlistSuggestion &&
              playlistSuggestion?.map((item) => (
                <SuggestionCard
                  image={item.image}
                  label={item.label}
                  alternativeLabel={item.alternativeLabel}
                />
              ))}
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Welinton Hoff
          </h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            {dailyMix &&
              dailyMix?.map((item) => (
                <DailyMixCard
                  image={item.image}
                  label={item.label}
                  description={item.description}
                  alternativeLabel={item.alternativeLabel}
                />
              ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
