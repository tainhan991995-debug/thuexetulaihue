"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CarFront,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clock3,
  CreditCard,
  Facebook,
  Fuel,
  Gauge,
  HeartHandshake,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import cars from "../data/cars.json";
import faqs from "../data/faq.json";
import gallery from "../data/gallery.json";
import reviews from "../data/review.json";
import videos from "../data/video.json";

type Car = (typeof cars)[number];

const hotline = "0359 359 927";
const hotlineHref = "tel:+84359359927";

const navigation = [
  ["Trang chủ", "#trang-chu"],
  ["Danh sách xe", "#danh-sach-xe"],
  ["Bảng giá", "#bang-gia"],
  ["Giới thiệu", "#gioi-thieu"],
  ["FAQ", "#faq"],
  ["Liên hệ", "#lien-he"],
] as const;

const reasons = [
  { icon: MapPin, title: "Giao nhận tận nơi", description: "Giao xe tại nhà, sân bay, ga tàu, bến xe theo giới thiệu." },
  { icon: Sparkles, title: "Xe full option", description: "Trang bị hiện đại theo thông tin giới thiệu của Trạm Nhà Mình." },
  { icon: Zap, title: "Miễn phí sạc pin", description: "Ưu đãi sạc pin trong suốt thời gian thuê theo thông tin hiện có." },
  { icon: ShieldCheck, title: "Bảo hiểm đầy đủ", description: "An tâm trên hành trình với bảo hiểm thân vỏ theo giới thiệu." },
  { icon: Clock3, title: "Thủ tục nhanh", description: "Liên hệ để được tư vấn về quy trình, giấy tờ và thời gian nhận xe." },
  { icon: HeartHandshake, title: "Hỗ trợ tận tâm", description: "Đội ngũ Trạm Nhà Mình sẵn sàng tiếp nhận yêu cầu đặt xe của bạn." },
];

const process = ["Liên hệ", "Tư vấn", "Chọn xe", "Ký hợp đồng", "Nhận xe", "Hoàn xe"];

function scrollToId(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionTitle({ eyebrow, title, text, centered = false }: { eyebrow: string; title: string; text?: string; centered?: boolean }) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-teal">
        <span className="h-px w-8 bg-sand" /> {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-[15px] leading-7 text-slate-500">{text}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/85 shadow-[0_2px_20px_rgba(13,59,102,.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <button onClick={() => scrollToId("#trang-chu")} className="group flex items-center gap-3 text-left" aria-label="Về trang chủ">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-white shadow-float transition-transform group-hover:-rotate-3">
            <CarFront size={22} strokeWidth={2.3} />
          </span>
          <span>
            <span className="block font-heading text-base font-extrabold leading-none tracking-tight text-ink">TRẠM NHÀ MÌNH</span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[.17em] text-teal">Tự lái · Huế</span>
          </span>
        </button>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Điều hướng chính">
          {navigation.map(([label, href]) => (
            <button key={href} onClick={() => scrollToId(href)} className="text-sm font-semibold text-slate-600 transition hover:text-ink">
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={hotlineHref} className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-ink transition hover:bg-ink/5">
            <Phone size={16} className="text-sand" /> {hotline}
          </a>
          <a href={hotlineHref} className="grid h-10 w-10 place-items-center rounded-xl bg-[#2A9D8F] text-white transition hover:-translate-y-0.5 hover:shadow-float" aria-label="Liên hệ qua Zalo">
            <MessageCircle size={18} />
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-white xl:hidden" aria-label="Mở menu">
          {open ? <X size={20} /> : <Menu size={21} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="border-t border-slate-100 bg-white px-5 py-5 shadow-soft xl:hidden">
            <nav className="mx-auto grid max-w-7xl gap-1">
              {navigation.map(([label, href]) => (
                <button key={href} onClick={() => { setOpen(false); scrollToId(href); }} className="rounded-xl px-4 py-3 text-left text-sm font-bold text-slate-700 hover:bg-mist">
                  {label}
                </button>
              ))}
              <a href={hotlineHref} className="mt-2 flex items-center gap-2 rounded-xl bg-ink px-4 py-3 text-sm font-bold text-white"><Phone size={16} /> Gọi {hotline}</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero({ onSearch }: { onSearch: () => void }) {
  const [pickup, setPickup] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [selected, setSelected] = useState("");

  return (
    <section id="trang-chu" className="relative isolate overflow-hidden bg-ink pb-16 pt-32 sm:pb-24 sm:pt-40">
      <div className="absolute inset-0 opacity-[.20]" style={{ backgroundImage: "radial-gradient(circle at 15% 15%, #F4A261 0 1px, transparent 1px), radial-gradient(circle at 85% 80%, #2A9D8F 0 1px, transparent 1px)", backgroundSize: "32px 32px, 46px 46px" }} />
      <div className="absolute -left-36 top-10 h-[420px] w-[420px] rounded-full bg-teal/25 blur-3xl" />
      <div className="absolute right-[-12rem] top-[-10rem] h-[520px] w-[520px] rounded-full bg-sand/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1.02fr_.98fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-white/90 backdrop-blur-sm">
            <BadgeCheck size={15} className="text-sand" /> Cho thuê xe ô tô tự lái ở Huế
          </div>
          <h1 className="font-heading text-4xl font-extrabold leading-[1.13] tracking-tight text-white sm:text-5xl xl:text-6xl">
            Vi vu Huế,<br />
            <span className="text-sand">theo cách của bạn.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
            Trạm Nhà Mình cung cấp các lựa chọn xe tự lái, hỗ trợ giao nhận tận nơi và miễn phí sạc pin theo thông tin giới thiệu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Xe full option", "Bảo hiểm đầy đủ", "Miễn phí sạc pin"].map((item) => <span key={item} className="flex items-center gap-2 text-sm font-medium text-white/90"><Check size={15} className="text-sand" /> {item}</span>)}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.08 }} className="relative mx-auto w-full max-w-[500px] lg:mr-0">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-sand/50 via-transparent to-teal/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/30 bg-white/10 p-2 shadow-[0_35px_80px_rgba(0,0,0,.3)] backdrop-blur-sm">
            <img src="/images/tram-nha-minh-fleet.png" alt="Đội xe Trạm Nhà Mình tại Huế" className="aspect-[.73] w-full rounded-[1.6rem] object-cover object-top" />
            <span className="absolute bottom-6 left-6 rounded-full bg-white/90 px-3 py-1.5 text-xs font-extrabold text-ink shadow-lg">Đội xe Trạm Nhà Mình</span>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-10 max-w-7xl px-5 lg:px-8">
        <form onSubmit={(event) => { event.preventDefault(); onSearch(); }} className="grid gap-3 rounded-[1.65rem] border border-white/60 bg-white p-3 shadow-[0_20px_55px_rgba(0,0,0,.18)] md:grid-cols-[1fr_1fr_1.25fr_auto] md:items-center md:gap-2 md:p-3">
          <Field icon={CalendarDays} label="Ngày nhận" value={pickup} onChange={setPickup} type="date" />
          <Field icon={CalendarDays} label="Ngày trả" value={returnDate} onChange={setReturnDate} type="date" />
          <label className="flex min-w-0 items-center gap-3 rounded-2xl px-3 py-2.5 hover:bg-mist">
            <CarFront size={19} className="shrink-0 text-teal" />
            <span className="min-w-0 flex-1">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Loại xe</span>
              <select value={selected} onChange={(e) => setSelected(e.target.value)} className="mt-0.5 w-full appearance-none bg-transparent text-sm font-bold text-ink outline-none">
                <option value="">Tất cả dòng xe</option>
                {cars.map((car) => <option key={car.id} value={car.id}>{car.name}</option>)}
              </select>
            </span>
            <ChevronDown size={16} className="text-slate-400" />
          </label>
          <button type="submit" className="flex items-center justify-center gap-2 rounded-2xl bg-ink px-7 py-4 text-sm font-bold text-white transition hover:bg-[#124c80] hover:shadow-float">Tìm xe <ArrowRight size={17} /></button>
        </form>
      </div>
    </section>
  );
}

function Field({ icon: Icon, label, value, onChange, type }: { icon: typeof CalendarDays; label: string; value: string; onChange: (value: string) => void; type: string }) {
  return <label className="flex items-center gap-3 rounded-2xl px-3 py-2.5 hover:bg-mist"><Icon size={19} className="shrink-0 text-teal" /><span className="min-w-0 flex-1"><span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</span><input value={value} onChange={(e) => onChange(e.target.value)} type={type} className="mt-0.5 block w-full bg-transparent text-sm font-bold text-ink outline-none" /></span></label>;
}

function WhyUs() {
  return <section id="gioi-thieu" className="scroll-mt-24 bg-mist py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="Lý do chọn Trạm Nhà Mình" title="Mỗi hành trình, thêm an tâm." text="Các cam kết dưới đây được tổng hợp từ nội dung bạn đã cung cấp." centered /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{reasons.map(({ icon: Icon, title, description }, index) => <motion.article key={title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.04 }} className="group rounded-[1.35rem] border border-slate-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-teal/20"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal/10 text-teal transition group-hover:bg-ink group-hover:text-white"><Icon size={22} /></span><h3 className="mt-5 font-heading text-lg font-bold text-ink">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p></motion.article>)}</div></div></section>;
}

function CarImage({ car, className = "" }: { car: Car; className?: string }) {
  return <img src={car.image} alt={car.name} className={`h-full w-full object-cover ${className}`} style={{ objectPosition: car.position }} />;
}

function CarsSection() {
  const [brand, setBrand] = useState("Tất cả");
  const [booked, setBooked] = useState<Car | null>(null);
  const [compare, setCompare] = useState<string[]>([]);
  const filteredCars = useMemo(() => brand === "Tất cả" ? cars : cars.filter((car) => car.brand === brand), [brand]);
  const toggleCompare = (id: string) => setCompare((current) => current.includes(id) ? current.filter((item) => item !== id) : current.length < 2 ? [...current, id] : [current[1], id]);
  const comparedCars = cars.filter((car) => compare.includes(car.id));

  return <section id="danh-sach-xe" className="scroll-mt-24 bg-white py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><SectionTitle eyebrow="Danh sách xe" title="Chọn mẫu xe phù hợp chuyến đi." text="Danh sách 8 mẫu xe được nhận diện từ hình ảnh bạn cung cấp. Giá và thông số chi tiết chưa có sẽ hiển thị rõ trạng thái cập nhật." /><div className="flex rounded-2xl bg-mist p-1.5"><FilterButton active={brand === "Tất cả"} onClick={() => setBrand("Tất cả")}>Tất cả</FilterButton><FilterButton active={brand === "VinFast"} onClick={() => setBrand("VinFast")}>VinFast</FilterButton><FilterButton active={brand === "Honda"} onClick={() => setBrand("Honda")}>Honda</FilterButton></div></div>
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{filteredCars.map((car, index) => <motion.article layout key={car.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-soft"><div className="relative h-52 overflow-hidden bg-slate-100"><CarImage car={car} className="transition duration-700 hover:scale-110" /><span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-extrabold text-teal shadow-sm"><span className="h-1.5 w-1.5 rounded-full bg-teal" /> Có thể đặt</span></div><div className="p-5"><p className="text-xs font-bold uppercase tracking-[.13em] text-teal">{car.brand}</p><h3 className="mt-1 font-heading text-xl font-bold text-ink">{car.name}</h3><div className="mt-4 grid grid-cols-3 gap-2 border-y border-slate-100 py-3 text-center text-[10px] font-semibold text-slate-400"><span><CarFront size={15} className="mx-auto mb-1 text-ink" />{car.seats}</span><span><Gauge size={15} className="mx-auto mb-1 text-ink" />{car.gearbox}</span><span><Fuel size={15} className="mx-auto mb-1 text-ink" />{car.fuel}</span></div><div className="mt-4 flex items-center justify-between"><span><span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Giá từ</span><strong className="font-heading text-sm text-ink">Đang cập nhật</strong></span><button onClick={() => setBooked(car)} className="rounded-xl bg-ink px-3.5 py-2.5 text-xs font-bold text-white transition hover:bg-teal">Đặt xe</button></div><button onClick={() => toggleCompare(car.id)} className={`mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition ${compare.includes(car.id) ? "bg-teal/10 text-teal" : "bg-mist text-slate-500 hover:bg-slate-100"}`}><Check size={14} /> {compare.includes(car.id) ? "Đã chọn so sánh" : "So sánh xe"}</button></div></motion.article>)}</div>
    <Comparison comparedCars={comparedCars} onClear={() => setCompare([])} />
  </div><BookingModal car={booked} onClose={() => setBooked(null)} /></section>;
}

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) { return <button onClick={onClick} className={`rounded-xl px-3 py-2 text-xs font-bold transition ${active ? "bg-white text-ink shadow-sm" : "text-slate-500 hover:text-ink"}`}>{children}</button>; }

function Comparison({ comparedCars, onClear }: { comparedCars: Car[]; onClear: () => void }) {
  if (!comparedCars.length) return null;
  return <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 overflow-hidden rounded-[1.5rem] border border-teal/15 bg-[#f4fbfa]"><div className="flex flex-wrap items-center justify-between gap-3 px-6 py-5"><div><p className="text-xs font-bold uppercase tracking-[.14em] text-teal">So sánh xe</p><h3 className="font-heading text-xl font-bold text-ink">{comparedCars.length === 1 ? "Chọn thêm một xe để so sánh" : "Đặt cạnh nhau để dễ lựa chọn"}</h3></div><button onClick={onClear} className="text-xs font-bold text-slate-500 underline underline-offset-4">Xoá lựa chọn</button></div><div className="overflow-auto"><table className="min-w-[580px] w-full border-collapse text-left text-sm"><thead><tr className="border-y border-teal/10 bg-white/60"><th className="px-6 py-4 font-bold text-slate-500">Tiêu chí</th>{comparedCars.map((car) => <th key={car.id} className="px-6 py-4 font-heading text-base text-ink">{car.name}</th>)}</tr></thead><tbody>{[["Giá thuê", "Đang cập nhật"], ["Số chỗ", "Đang cập nhật"], ["Hộp số", "Đang cập nhật"], ["Nhiên liệu", "Đang cập nhật"], ["Tiện nghi", "Đang cập nhật"]].map(([label, value]) => <tr key={label} className="border-b border-teal/10 last:border-0"><td className="px-6 py-3 font-semibold text-slate-500">{label}</td>{comparedCars.map((car) => <td key={car.id} className="px-6 py-3 font-medium text-ink">{value}</td>)}</tr>)}</tbody></table></div></motion.div>;
}

function BookingModal({ car, onClose }: { car: Car | null; onClose: () => void }) {
  const [pickup, setPickup] = useState(""); const [returnDate, setReturnDate] = useState("");
  const days = pickup && returnDate ? Math.max(0, Math.ceil((new Date(returnDate).getTime() - new Date(pickup).getTime()) / 86_400_000)) : 0;
  return <AnimatePresence>{car && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] grid place-items-center bg-ink/60 p-4 backdrop-blur-sm" onMouseDown={onClose}><motion.div initial={{ scale: .96, y: 15 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .96, y: 15 }} onMouseDown={(e) => e.stopPropagation()} className="w-full max-w-md overflow-hidden rounded-[1.75rem] bg-white shadow-2xl"><div className="flex items-start justify-between bg-ink p-6 text-white"><div><p className="text-xs font-bold uppercase tracking-[.15em] text-sand">Yêu cầu đặt xe</p><h3 className="mt-1 font-heading text-2xl font-bold">{car.name}</h3></div><button onClick={onClose} className="rounded-xl bg-white/10 p-2"><X size={19} /></button></div><div className="space-y-4 p-6"><p className="text-sm leading-6 text-slate-500">Chọn thời gian dự kiến. Giá thuê chưa được cung cấp nên tổng tiền sẽ được xác nhận khi liên hệ.</p><div className="grid grid-cols-2 gap-3"><label className="rounded-xl border border-slate-200 p-3"><span className="block text-[10px] font-bold uppercase text-slate-400">Ngày nhận</span><input value={pickup} onChange={(e) => setPickup(e.target.value)} type="date" className="mt-1 w-full text-sm font-bold text-ink outline-none" /></label><label className="rounded-xl border border-slate-200 p-3"><span className="block text-[10px] font-bold uppercase text-slate-400">Ngày trả</span><input value={returnDate} onChange={(e) => setReturnDate(e.target.value)} type="date" className="mt-1 w-full text-sm font-bold text-ink outline-none" /></label></div><div className="rounded-2xl bg-mist p-4 text-sm"><div className="flex justify-between"><span className="text-slate-500">Thời gian thuê</span><strong className="text-ink">{days ? `${days} ngày` : "Chọn ngày"}</strong></div><div className="mt-2 flex justify-between"><span className="text-slate-500">Tổng dự kiến</span><strong className="text-ink">Đang cập nhật</strong></div></div><a href={hotlineHref} className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal px-4 py-3.5 text-sm font-bold text-white transition hover:bg-[#207a70]"><Phone size={17} /> Liên hệ xác nhận {hotline}</a></div></motion.div></motion.div>}</AnimatePresence>;
}

function Pricing() { return <section id="bang-gia" className="scroll-mt-24 bg-ink py-20 text-white sm:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8"><div><p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.18em] text-sand"><span className="h-px w-8 bg-sand" /> Ước tính chi phí</p><h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">Minh bạch từ bước đầu tiên.</h2><p className="mt-5 max-w-md leading-7 text-slate-300">Bảng giá theo từng xe hiện chưa có trong thông tin được cung cấp. Gửi lịch nhận xe để Trạm Nhà Mình tư vấn giá và tình trạng xe.</p><a href={hotlineHref} className="mt-7 inline-flex items-center gap-2 rounded-xl bg-sand px-5 py-3 text-sm font-bold text-ink transition hover:bg-[#f8b576]"><Phone size={17} /> Nhận báo giá</a></div><div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 backdrop-blur-sm sm:p-7"><div className="grid gap-3 sm:grid-cols-3">{["Ngày nhận", "Ngày trả", "Chọn xe"].map((label, index) => <div key={label} className="rounded-xl bg-white/10 p-4"><span className="block text-[10px] font-bold uppercase tracking-wider text-slate-300">{label}</span><strong className="mt-2 block text-sm text-white">{index === 2 ? "Tất cả dòng xe" : "Chưa chọn ngày"}</strong></div>)}</div><div className="mt-4 rounded-2xl bg-white p-5 text-ink"><div className="flex items-center justify-between border-b border-slate-100 pb-4"><span className="text-sm text-slate-500">Số ngày thuê</span><strong>Đang cập nhật</strong></div><div className="flex items-center justify-between border-b border-slate-100 py-4"><span className="text-sm text-slate-500">Đơn giá</span><strong>Đang cập nhật</strong></div><div className="flex items-center justify-between pt-4"><span className="font-heading text-lg font-bold">Tổng dự kiến</span><strong className="font-heading text-xl text-teal">Đang cập nhật</strong></div></div></div></div></section>; }

function Gallery() { return <section id="gallery" className="bg-white py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end"><SectionTitle eyebrow="Hình ảnh đội xe" title="Những lựa chọn cho hành trình tại Huế." text="Ảnh tổng hợp được dùng từ nội dung bạn vừa cung cấp. Thư viện ảnh giao xe và khách hàng sẽ được bổ sung khi có nguồn." /><div className="rounded-[1.5rem] border border-sand/20 bg-[#fff8ef] p-5 text-sm leading-6 text-slate-600"><Sparkles size={20} className="mb-2 text-sand" /><strong className="block font-heading text-lg text-ink">Nguồn ảnh minh bạch</strong>Poster đội xe do bạn cung cấp; ảnh từng mẫu xe trong danh sách dùng nguồn công khai trên web theo chỉ đạo mới.</div></div><div className="mt-10 grid gap-4 lg:grid-cols-[1.35fr_.65fr]"><div className="overflow-hidden rounded-[1.75rem] bg-slate-100"><img src="/images/tram-nha-minh-fleet.png" alt="Các dòng xe của Trạm Nhà Mình" className="h-full min-h-[430px] w-full object-cover object-top" /></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"><GalleryCard title="Giao xe" text={gallery.length ? "Đang tải thư viện" : "Đang cập nhật"} icon={MapPin} /><GalleryCard title="Khách hàng" text={reviews.length ? "Đang tải review" : "Đang cập nhật"} icon={HeartHandshake} /><GalleryCard title="Video / Reels" text={videos.length ? "Đang tải video" : "Đang cập nhật"} icon={Star} /></div></div></div></section>; }

function GalleryCard({ title, text, icon: Icon }: { title: string; text: string; icon: typeof MapPin }) { return <div className="rounded-[1.25rem] border border-slate-100 bg-mist p-5"><Icon size={22} className="text-teal" /><h3 className="mt-3 font-heading text-lg font-bold text-ink">{title}</h3><p className="mt-1 text-sm text-slate-500">{text}</p></div>; }

function ProcessFaq() { const [active, setActive] = useState<number | null>(null); return <section id="faq" className="scroll-mt-24 bg-mist py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8"><div><SectionTitle eyebrow="Quy trình thuê xe" title="Sẵn sàng trước khi lăn bánh." text="Quy trình hiển thị theo yêu cầu ban đầu; chi tiết giấy tờ và điều khoản sẽ được tư vấn trực tiếp." /><div className="mt-9 space-y-0">{process.map((step, index) => <div key={step} className="relative flex gap-4 pb-6 last:pb-0"><div className="flex flex-col items-center"><span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-xs font-extrabold text-white">0{index + 1}</span>{index < process.length - 1 && <span className="mt-2 h-full w-px bg-ink/15" />}</div><div className="pt-1"><h3 className="font-heading font-bold text-ink">{step}</h3><p className="mt-1 text-sm text-slate-500">{index === 0 ? `Gọi ${hotline} để bắt đầu.` : "Đang cập nhật chi tiết."}</p></div></div>)}</div></div><div><SectionTitle eyebrow="Câu hỏi thường gặp" title="Thông tin cần biết trước khi thuê." /><div className="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-soft">{faqs.length ? (faqs as { question: string; answer: string }[]).map((faq, index) => <div key={faq.question} className="border-b border-slate-100 last:border-0"><button onClick={() => setActive(active === index ? null : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-heading font-bold text-ink"><span>{faq.question}</span><ChevronDown className={`shrink-0 transition ${active === index ? "rotate-180" : ""}`} size={18} /></button><AnimatePresence>{active === index && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-5 pb-5 text-sm leading-6 text-slate-500">{faq.answer}</motion.p>}</AnimatePresence></div>) : <div className="p-7"><CircleHelp size={26} className="text-teal" /><h3 className="mt-4 font-heading text-lg font-bold text-ink">Đang cập nhật câu hỏi</h3><p className="mt-2 text-sm leading-6 text-slate-500">Liên hệ trực tiếp để được giải đáp về điều kiện thuê xe, lịch trống và báo giá.</p><a href={hotlineHref} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal">Gọi {hotline} <ChevronRight size={16} /></a></div>}</div></div></div></section>; }

function Contact() { return <section id="lien-he" className="scroll-mt-24 bg-white py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-10 sm:px-10 lg:px-14 lg:py-14"><div className="absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-sand/20 blur-3xl" /><div className="relative grid gap-9 lg:grid-cols-[1fr_.8fr] lg:items-center"><div><p className="text-xs font-extrabold uppercase tracking-[.18em] text-sand">Đặt xe nhanh</p><h2 className="mt-3 max-w-xl font-heading text-3xl font-bold text-white sm:text-4xl">Lên lịch cho chuyến đi Huế của bạn.</h2><p className="mt-4 max-w-xl leading-7 text-slate-300">Trạm Nhà Mình sẽ xác nhận xe và giá theo lịch cụ thể của bạn.</p><div className="mt-7 flex flex-wrap gap-3"><a href={hotlineHref} className="inline-flex items-center gap-2 rounded-xl bg-sand px-5 py-3.5 text-sm font-bold text-ink transition hover:bg-[#f8b576]"><Phone size={17} /> {hotline}</a><a href="https://www.google.com/maps?q=Hu%E1%BA%BF,+Vi%E1%BB%87t+Nam" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"><MapPin size={17} /> Khu vực Huế</a></div></div><div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-6 backdrop-blur-sm"><MapPin size={25} className="text-sand" /><h3 className="mt-4 font-heading text-xl font-bold text-white">Giao nhận linh hoạt</h3><p className="mt-2 text-sm leading-6 text-slate-300">Tại nhà, sân bay, ga tàu, bến xe... theo nội dung giới thiệu của Trạm Nhà Mình.</p><div className="mt-5 border-t border-white/10 pt-5 text-xs font-bold uppercase tracking-wider text-slate-300">Địa chỉ chi tiết: Đang cập nhật</div></div></div></div></div></section>; }

function Footer() { return <footer className="border-t border-slate-100 bg-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8"><div><div className="flex items-center gap-2 font-heading font-extrabold text-ink"><span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-white"><CarFront size={16} /></span> TRẠM NHÀ MÌNH</div><p className="mt-4 text-sm leading-6 text-slate-500">Cho thuê xe ô tô tự lái ở Huế.</p></div><div><h3 className="font-heading font-bold text-ink">Điều hướng</h3><div className="mt-4 grid gap-2">{navigation.slice(0, 4).map(([label, href]) => <button key={href} onClick={() => scrollToId(href)} className="text-left text-sm text-slate-500 hover:text-teal">{label}</button>)}</div></div><div><h3 className="font-heading font-bold text-ink">Liên hệ</h3><a href={hotlineHref} className="mt-4 flex items-center gap-2 text-sm font-bold text-teal"><Phone size={16} /> {hotline}</a><p className="mt-3 text-sm text-slate-500">Facebook, Messenger, Zalo: Đang cập nhật.</p></div><div><h3 className="font-heading font-bold text-ink">Thông tin website</h3><p className="mt-4 text-sm leading-6 text-slate-500">Thông tin xe, giá và điều khoản được cập nhật theo nguồn cung cấp.</p></div></div><div className="border-t border-slate-100 px-5 py-5 text-center text-xs text-slate-400">© {new Date().getFullYear()} Trạm Nhà Mình. Thiết kế cho thuê xe tự lái Huế.</div></footer>; }

function FloatingActions() { const [visible, setVisible] = useState(false); useEffect(() => { const onScroll = () => setVisible(window.scrollY > 500); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []); return <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2"><a href={hotlineHref} aria-label="Gọi điện" className="grid h-11 w-11 place-items-center rounded-full bg-ink text-white shadow-float transition hover:scale-105"><Phone size={19} /></a><a href={hotlineHref} aria-label="Liên hệ" className="grid h-11 w-11 place-items-center rounded-full bg-teal text-white shadow-float transition hover:scale-105"><MessageCircle size={19} /></a><AnimatePresence>{visible && <motion.button initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .8 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Lên đầu trang" className="grid h-11 w-11 place-items-center rounded-full bg-sand text-ink shadow-float transition hover:scale-105"><RotateCcw size={19} /></motion.button>}</AnimatePresence></div>; }

export default function Home() {
  const goToCars = () => scrollToId("#danh-sach-xe");
  const schema = { "@context": "https://schema.org", "@type": "AutoRental", name: "Trạm Nhà Mình", description: "Cho thuê xe ô tô tự lái ở Huế", telephone: "+84359359927", areaServed: "Huế, Việt Nam", url: "https://thuexetulaihue.vn" };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><Header /><main><Hero onSearch={goToCars} /><WhyUs /><CarsSection /><Pricing /><Gallery /><ProcessFaq /><Contact /></main><Footer /><FloatingActions /></>;
}
