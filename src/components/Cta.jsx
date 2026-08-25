import ContactForm from './ContactForm'

export default function Cta() {
  return (
    <section id="contact" className="px-[6%] py-[100px]">
      <div className="bg-gradient-to-br from-green to-forest rounded-[36px] px-[6%] py-[70px] text-white">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.9fr] gap-[50px] items-center">
          <div>
            <div className="text-green-light font-bold text-[0.85rem] tracking-[0.08em] uppercase">Get Started</div>
            <h2 className="font-display mt-3 text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight">
              Ready for a yard you're proud of?
            </h2>
            <p className="mt-4 opacity-85 max-w-[440px] leading-relaxed">
              Free estimates, 8am&ndash;5pm. Recurring service or a one-time job — send us the details or give us a
              call and we'll take it from there.
            </p>
            <a
              href="tel:+12813549580"
              className="bg-white text-forest px-8 py-4 rounded-full no-underline font-bold inline-block mt-8 hover:-translate-y-0.5 transition-transform"
            >
              Call (281) 354-9580
            </a>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
