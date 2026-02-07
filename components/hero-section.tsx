import Image from "next/image";
import Rapin from "@/public/WhatsApp Image 2025-01-21 at 20.03.03_9f94bff4.jpg"

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] md:h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-linear-to-t from-[#141414] via-[#141414]/40 to-transparent">
        <div className="absolute inset-0 bg-linear-to-r from-[#141414]/90 via-[#141414]/50 to-transparent" />
        <Image
          src={Rapin}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="w-full h-full bg-linear-to-br from-gray-800 to-gray-900" />
      </div>

      <div className="relative z-10 px-4 md:px-10 lg:px-16 max-w-3xl mt-16 md:mt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Raihan Rengking #1
        </h1>

        <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 drop-shadow-md">
          When a young boy vanishes, a small town uncovers a mystery involving
          secret experiments, terrifying supernatural forces and one strange little girl.
        </p>

        <div className="flex items-center gap-4 text-sm md:text-base text-white/80 mb-8">
          <span className="text-green-500 font-semibold">67% Match</span>
          <span>2026</span>
          <span className="border border-white/40 px-2 py-0.5 text-xs">67+</span>
          <span>3 Seasons</span>
        </div>

        <div className="flex flex-wrap gap-3 md:gap-4">
          <button className="flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-white text-black rounded font-semibold hover:bg-white/80 transition-all shadow-lg">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </button>

          <button className="flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-gray-500/70 text-white rounded font-semibold hover:bg-gray-500/50 transition-all backdrop-blur-sm">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            More Info
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#141414] to-transparent" />
    </section>
  );
}