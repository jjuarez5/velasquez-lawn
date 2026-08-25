export default function Footer() {
  return (
    <footer className="px-6 sm:px-[6%] py-10 sm:py-[50px] flex flex-col sm:flex-row sm:justify-between flex-wrap gap-3 sm:gap-5 text-center sm:text-left text-[#5a6b5e] text-[0.85rem] border-t border-forest/[0.08]">
      <div>© {new Date().getFullYear()} Velazquez Lawn Service — Maintenance &amp; Landscape</div>
      <div>Porter, TX · Serving Greater North Houston · (281) 354-9580</div>
    </footer>
  )
}
