// TODO: Replace with real Google/Yelp reviews before launch.
const REVIEWS = [
  {
    quote: "They took over after our last company kept skipping weeks. Never had a missed visit since.",
    name: 'Placeholder Review',
    location: 'Porter, TX',
  },
  {
    quote: "Redid our front beds in a weekend and it completely changed how the house looks from the street.",
    name: 'Placeholder Review',
    location: 'Kingwood, TX',
  },
  {
    quote: "Called for a free estimate and they were out same week. Fair pricing, great work.",
    name: 'Placeholder Review',
    location: 'New Caney, TX',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="px-[6%] py-[110px]">
      <div className="max-w-[640px] mb-14">
        <div className="text-green font-bold text-[0.85rem] tracking-[0.08em] uppercase">Reviews</div>
        <h2 className="font-display text-forest tracking-tight mt-3 text-[clamp(2rem,3.6vw,3rem)]">
          What the neighborhood's saying
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((review) => (
          <div key={review.quote} className="bg-white rounded-[24px] p-[30px] border border-forest/[0.06]">
            <div className="text-[#e8b94a] tracking-[2px] mb-3.5">★★★★★</div>
            <p className="text-[0.94rem] leading-relaxed text-[#3a4a3f] mb-4.5">"{review.quote}"</p>
            <div className="font-semibold text-[0.9rem]">{review.name}</div>
            <div className="text-[0.8rem] text-[#8a9a8d]">{review.location}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
