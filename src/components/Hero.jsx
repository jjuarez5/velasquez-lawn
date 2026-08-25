const STATS = [
  { value: "15+", label: "Years of Experience" },
  { value: "Insured", label: "Fully Licensed Crew" },
  { value: "8–5", label: "Mon–Sat, Open Daily" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-[6%] bg-gradient-to-b from-paper to-[#eef6ec] overflow-hidden">
      <div className="hero-stripes absolute inset-0 z-0 animate-drift" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[60px] w-full pt-[110px] pb-[60px] items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-green/10 text-forest px-4 py-2 rounded-full text-[0.82rem] font-semibold mb-6">
            🌱 Serving North Houston &amp; Montgomery County
          </div>

          <h1 className="font-display font-bold text-forest leading-[1.02] tracking-tight text-[clamp(2.6rem,5.5vw,4.6rem)]">
            Lawns that make
            <br />
            the block <span className="text-green">look twice.</span>
          </h1>

          <p className="mt-[22px] text-[1.1rem] leading-relaxed text-[#3a4a3f] max-w-[480px]">
            Mowing, landscaping, cleanup, and trimming — handled by a local crew
            with 15+ years of experience and full insurance. Recurring service
            or one-time jobs, your call.
          </p>

          <div className="flex gap-3.5 mt-[34px] flex-wrap">
            <a
              href="#contact"
              className="bg-forest text-white px-[30px] py-4 rounded-full font-semibold text-[0.95rem] no-underline hover:-translate-y-0.5 transition-transform"
            >
              Get a Free Estimate
            </a>
            <a
              href="#services"
              className="border-[1.5px] border-ink/20 text-ink px-7 py-[15px] rounded-full no-underline font-semibold text-[0.95rem] hover:border-ink/40 transition-colors"
            >
              See Services
            </a>
          </div>

          <div className="flex gap-[34px] mt-12 flex-wrap">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <b className="block font-display text-[1.8rem] text-forest">
                  {stat.value}
                </b>
                <span className="text-[0.82rem] text-[#5a6b5e]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="hero-visual-texture relative aspect-[4/5] rounded-[32px] overflow-hidden bg-gradient-to-br from-green to-forest">
          <div className="absolute top-6 right-6 bg-green-light text-forest px-4 py-2.5 rounded-full text-[0.78rem] font-bold">
            Free Estimates
          </div>
          <div className="absolute bottom-[22px] left-[22px] right-[22px] bg-white rounded-[20px] p-5 shadow-card flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-green-light flex items-center justify-center text-xl flex-shrink-0">
              ✂️
            </div>
            <div>
              <b className="block text-[0.95rem]">This Week's Route</b>
              <span className="text-[0.8rem] text-[#667]">Porter · Kingwood · New Caney</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
