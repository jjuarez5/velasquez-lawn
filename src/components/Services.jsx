const SERVICES = [
  {
    icon: '🌿',
    title: 'Mowing',
    description: 'Weekly or bi-weekly cuts, clean edges, and blown-off walkways — every single visit.',
  },
  {
    icon: '🌳',
    title: 'Landscaping',
    description: "Beds, mulch, and plantings designed around your home's style and your budget.",
  },
  {
    icon: '🍂',
    title: 'Clean Up',
    description: 'Seasonal and storm cleanup so your property is ready for what comes next.',
  },
  {
    icon: '✂️',
    title: 'Trimming',
    description: 'Hedge and tree trimming that keeps growth healthy and your yard looking sharp.',
  },
]

export default function Services() {
  return (
    <section id="services" className="px-6 sm:px-[6%] py-[70px] md:py-[110px]">
      <div className="max-w-[640px] mb-10 md:mb-14">
        <div className="text-green font-bold text-[0.85rem] tracking-[0.08em] uppercase">What We Do</div>
        <h2 className="font-display text-forest tracking-tight mt-3 text-[clamp(2rem,3.6vw,3rem)]">
          Full-service lawn &amp; landscape care
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-[24px] p-7 sm:p-9 border border-forest/[0.06] transition-all hover:-translate-y-1.5 hover:shadow-hover"
          >
            <div className="w-[52px] h-[52px] rounded-[14px] bg-[#eaf7ec] flex items-center justify-center text-2xl mb-5">
              {service.icon}
            </div>
            <h3 className="text-[1.2rem] mb-2.5 text-forest font-display font-semibold">{service.title}</h3>
            <p className="text-[0.92rem] text-[#5a6b5e] leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-[0.9rem] text-[#5a6b5e]">
        Available as <b className="text-forest">recurring service</b> or a{' '}
        <b className="text-forest">one-time job</b> — whatever your property needs.
      </p>
    </section>
  )
}
