import Image from "next/image";

export default function StatsSection() {
  return (
    <section className="relative min-h-[600px] flex items-stretch overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden hidden md:block">
        <Image
          src="/assets/images/overlay.webp"
          alt="Overlay Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 flex flex-col md:flex-row w-full">
        {/* Left Side: Dark Overlay with Stat */}
        <div className="flex-1 bg-black/85 md:bg-black/70 flex flex-col items-center justify-center py-16 px-6 md:p-12 text-center border-b md:border-b-0 md:border-r border-white/10">
          <div className="max-w-md space-y-6">
            <span className="text-[#b89156] text-7xl md:text-9xl font-serif leading-none">
              22
            </span>
            <div className="space-y-4">
              <h3 className="text-white text-base md:text-xl font-bold uppercase tracking-[0.2em] leading-tight">
                Years Since Our
                <br />
                Establishment In 2002
              </h3>
              <p className="text-gray-300 text-xs md:text-base font-light max-w-xs mx-auto">
                We have made a boom in the real estate market in many Egyptian
                cities
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Light Overlay with Stat */}
        <div className="flex-1 bg-white/85 md:bg-white/60 flex flex-col items-center justify-center py-16 px-6 md:p-12 text-center">
          <div className="max-w-md space-y-6">
            <span className="text-[#b89156] text-7xl md:text-9xl font-serif leading-none">
              20
            </span>
            <div className="space-y-4">
              <h3 className="text-black text-base md:text-xl font-bold uppercase tracking-[0.2em] leading-tight">
                Million Expected Annual Visit
                <br />
                To Our Projects
              </h3>
              <p className="text-gray-700 text-xs md:text-base font-light max-w-xs mx-auto">
                We build our projects in distinctive locations, ensuring the
                density of visits to your business at record rates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
