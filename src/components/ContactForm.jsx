const FIELD_CLASS =
  "w-full px-[18px] py-3.5 rounded-[14px] bg-paper border border-forest/10 text-ink text-[0.95rem] placeholder-[#8a998d] focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-colors";

export default function ContactForm() {
  return (
    <div className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-10 shadow-card">
      <h3 className="font-display text-green text-[1.35rem] font-semibold">
        Request a Free Estimate
      </h3>
      <p className="mt-2 mb-7 text-[0.9rem] text-[#5a6b5e] leading-relaxed">
        Send your address and what you need — we'll get back to you the same
        day.
      </p>

      <form
        className="flex flex-col gap-4"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        {/* Hidden inputs for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don&rsquo;t fill this out if you&rsquo;re human:{" "}
            <input name="bot-field" />
          </label>
        </p>

        <input
          type="text"
          name="contactName"
          placeholder="Your name"
          className={FIELD_CLASS}
          required
        />
        <input
          type="email"
          name="contactEmail"
          placeholder="Your email"
          className={FIELD_CLASS}
          required
        />
        <input
          type="tel"
          name="contactPhone"
          placeholder="(281) 555-0123"
          className={FIELD_CLASS}
        />
        <textarea
          name="message"
          placeholder="Property address and what you need — mowing, landscaping, cleanup, or trimming."
          className={`${FIELD_CLASS} h-32 resize-none`}
        />

        <button
          type="submit"
          className="mt-2 bg-forest text-white px-[30px] py-4 rounded-full font-semibold text-[0.95rem] hover:-translate-y-0.5 transition-transform"
        >
          Get My Free Estimate
        </button>
      </form>

      <p className="mt-4 text-center text-[0.8rem] text-[#5a6b5e]">
        Free estimates, no obligation. We reply 8am&ndash;5pm, Mon&ndash;Sat.
      </p>
    </div>
  );
}
