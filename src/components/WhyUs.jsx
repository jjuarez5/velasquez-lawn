const POINTS = [
  "15+ years of hands-on lawn and landscape experience",
  "Fully insured crew — no surprises, no liability on you",
  "Free estimates on every job, big or small",
  "Recurring maintenance plans or one-time service — your choice",
  "Available 8am–5pm, ready when you need us",
];

export default function WhyUs() {
  return (
    <section className="px-[6%] py-[110px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
        <div className="relative aspect-square rounded-[28px] overflow-hidden bg-gradient-to-br from-[#dff2e0] to-[#b9e6bc]">
          <div className="split-visual-texture" />
        </div>

        <div>
          <div className="text-green font-bold text-[0.85rem] tracking-[0.08em] uppercase">
            Why Velazquez Lawn Service
          </div>
          <h2 className="text-forest text-[2.2rem] mt-2.5 font-display font-semibold">
            A crew that actually shows up
          </h2>

          <ul className="mt-6 flex flex-col gap-4">
            {POINTS.map((point) => (
              <li
                key={point}
                className="flex gap-3 items-start text-[0.98rem] text-[#3a4a3f]"
              >
                <span className="w-6 h-6 rounded-full bg-green text-white flex-shrink-0 flex items-center justify-center text-[0.75rem] mt-0.5">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-block mt-8 bg-forest text-white px-[30px] py-4 rounded-full font-semibold text-[0.95rem] no-underline hover:-translate-y-0.5 transition-transform"
          >
            Get a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
