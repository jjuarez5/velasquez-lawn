const STATS = [
  { value: "15+", label: "Years of Experience" },
  { value: "Insured", label: "Fully Licensed Crew" },
  { value: "8–5", label: "Mon–Sat, Open Daily" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 sm:px-[6%] bg-gradient-to-b from-paper to-[#eef6ec] overflow-hidden">
      <div className="hero-stripes absolute inset-0 z-0 animate-drift" />

      <div className="relative z-10 w-full max-w-[880px] mx-auto text-center pt-[130px] pb-[70px] sm:pt-[150px] sm:pb-[90px]">
        <div className="inline-flex items-center gap-2 bg-green/10 text-forest px-4 py-2 rounded-full text-[0.78rem] sm:text-[0.82rem] font-semibold mb-6">
          🌱 Serving North Houston &amp; Montgomery County
        </div>

        <h1 className="font-display font-bold text-forest leading-[1.05] tracking-tight text-[clamp(2rem,7.5vw,4.6rem)]">
          Lawns that make
          <br className="hidden sm:block" /> the block{" "}
          <span className="text-green">look twice.</span>
        </h1>

        <p className="mt-[22px] text-[1rem] sm:text-[1.1rem] leading-relaxed text-[#3a4a3f] max-w-[560px] mx-auto">
          Mowing, landscaping, cleanup, and trimming — handled by a local crew
          with 15+ years of experience and full insurance. Recurring service or
          one-time jobs, your call.
        </p>

        <div className="flex gap-3.5 mt-[34px] flex-wrap justify-center">
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

        <div className="flex gap-x-[34px] gap-y-8 mt-12 sm:mt-14 flex-wrap justify-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <b className="block font-display text-[1.6rem] sm:text-[1.8rem] text-forest">
                {stat.value}
              </b>
              <span className="text-[0.82rem] text-[#5a6b5e]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
