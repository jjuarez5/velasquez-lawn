const STEPS = [
  { num: '01', title: 'Request a Quote', description: "Call or text your address and we'll get you a free estimate." },
  { num: '02', title: 'Walkthrough', description: 'We visit, confirm scope, and set up recurring or one-time service.' },
  { num: '03', title: 'First Service', description: 'Our crew arrives on time and gets straight to work.' },
  { num: '04', title: 'Ongoing Care', description: "Consistent visits between 8am–5pm, however often you need us." },
]

export default function Process() {
  return (
    <div className="bg-forest rounded-[28px] sm:rounded-[36px] px-7 sm:px-[6%] py-[50px] sm:py-[70px] text-white mx-6 sm:mx-[6%]">
      <div>
        <div className="text-green-light font-bold text-[0.85rem] tracking-[0.08em] uppercase">How It Works</div>
        <h2 className="font-display text-white tracking-tight mt-3 text-[clamp(1.75rem,3.6vw,3rem)]">
          From quote to first cut, fast
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-[30px] gap-y-9 mt-10 sm:mt-[50px]">
        {STEPS.map((step) => (
          <div key={step.num}>
            <div className="font-display text-green-light text-[2rem] font-bold">{step.num}</div>
            <h4 className="mt-3.5 mb-2 text-[1.05rem] font-semibold">{step.title}</h4>
            <p className="text-[0.87rem] text-white/70 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
