"use client";

import Link from "next/link";
import Image from "next/image";
import { preload } from "react-dom";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CarFront,
  Check,
  ChevronDown,
  ChevronLeft,
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
import * as React from "react";
import { useMemo, useRef, useState } from "react";
import cars from "../data/cars.json";
import { BookingCta } from "../components/booking-cta";
import { blogPosts } from "../data/blog-posts";
import faqs from "../data/faq.json";
import gallery from "../data/gallery.json";
import { seoPages } from "../data/seo-pages";
import { createFaqPageSchema } from "../data/structured-data";
import videos from "../data/video.json";

type Car = (typeof cars)[number];

const brandName = "TRẠM NHÀ MINT";
const hotline = "0986 789 715";
const hotlineHref = "tel:0986789715";
const facebookHref = "https://www.facebook.com/thuexetulaihue.vn/";
const zaloHref = "https://zalo.me/0986789715";
const mapsSearchHref =
"https://www.google.com/maps?q=Tr%E1%BA%A1m+nh%C3%A0+Mint+-+Cho+thu%C3%AA+xe+%C3%B4+t%C3%B4+t%E1%BB%B1+l%C3%A1i+t%E1%BA%A1i+Hu%E1%BA%BF,+6/5+T%C3%B4n+Quang+Phi%E1%BB%87t,+An+C%E1%BB%B1u,+Hu%E1%BA%BF&ftid=0x3141a169ae726069:0x1262216cc774ec0b";
const mapsEmbedSrc =
"https://www.google.com/maps?q=Tr%E1%BA%A1m+nh%C3%A0+Mint+-+Cho+thu%C3%AA+xe+%C3%B4+t%C3%B4+t%E1%BB%B1+l%C3%A1i+t%E1%BA%A1i+Hu%E1%BA%BF,+6/5+T%C3%B4n+Quang+Phi%E1%BB%87t,+An+C%E1%BB%B1u,+Hu%E1%BA%BF&output=embed";
const heroSizes = "(max-width: 1023px) 240px, (min-width: 1280px) 640px, 50vw";
const heroAvifSrcSet = "/images/tram-nha-minh-fleet-480.avif 480w, /images/tram-nha-minh-fleet-768.avif 768w, /images/tram-nha-minh-fleet.avif 1299w";
const heroWebpSrcSet = "/images/tram-nha-minh-fleet-480.webp 480w, /images/tram-nha-minh-fleet-640.webp 640w, /images/tram-nha-minh-fleet-768.webp 768w, /images/tram-nha-minh-fleet.webp 1299w";


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
  { icon: Sparkles, title: "Xe full option", description: "Trang bị hiện đại theo thông tin giới thiệu của Cho Thuê Tự Lái." },
  { icon: Zap, title: "Miễn phí sạc pin", description: "Ưu đãi sạc pin trong suốt thời gian thuê theo thông tin hiện có." },
  { icon: ShieldCheck, title: "Bảo hiểm đầy đủ", description: "An tâm trên hành trình với bảo hiểm thân vỏ theo giới thiệu." },
  { icon: Clock3, title: "Thủ tục nhanh", description: "Liên hệ để được tư vấn về quy trình, giấy tờ và thời gian nhận xe." },
  { icon: HeartHandshake, title: "Hỗ trợ tận tâm", description: "Đội ngũ Cho Thuê Tự Lái sẵn sàng tiếp nhận yêu cầu đặt xe của bạn." },
];

const process = ["Liên hệ", "Tư vấn", "Chọn xe", "Ký hợp đồng", "Nhận xe", "Hoàn xe"];

function formatPrice(price?: number) {
  return typeof price === "number" ? `${new Intl.NumberFormat("vi-VN").format(price)}đ/ngày` : "Liên hệ báo giá";
}

function scrollToId(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionTitle({ eyebrow, title, text, centered = false }: { eyebrow: string; title: string; text?: string; centered?: boolean }) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#16796f]">
        <span className="h-px w-8 bg-sand" /> {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-[15px] leading-7 text-slate-500">{text}</p>}
    </div>
  );
}

function ZaloLogo({ size = 20 }: { size?: number }) {
  return <Image src="/images/zalo.svg" width={size} height={size} alt="" aria-hidden="true" unoptimized className="rounded" />;
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/85 shadow-[0_2px_20px_rgba(13,59,102,.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 md:h-[94px] lg:px-8">
        <button onClick={() => scrollToId("#trang-chu")} className="group flex items-center gap-3.5 text-left" aria-label="TRẠM NHÀ MINT – Về trang chủ">
          <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-white shadow-float transition-transform group-hover:-rotate-3 md:h-[60px] md:w-[60px]">
            <Image src="/images/logo.webp" width={48} height={48} alt="Logo TRẠM NHÀ MINT" className="h-full w-full object-contain" />
          </span>
          <span>
            <span className="block font-heading text-lg font-extrabold leading-none tracking-[.015em] text-ink md:text-[30px]">{brandName}</span>
            <span className="mt-1.5 hidden text-[16px] font-medium leading-none text-[#0F9D8C] md:block">Cho thuê xe tự lái - Huế</span>
          </span>
        </button>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Điều hướng chính">
          {navigation.map(([label, href]) => (
            <button key={href} onClick={() => scrollToId(href)} className="text-sm font-semibold text-slate-600 transition hover:text-ink">
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <a href={hotlineHref} className="flex items-center gap-2 rounded-full bg-[#0D4C92] px-5 py-3 text-[15px] font-bold text-white shadow-sm transition duration-200 hover:scale-[1.03] hover:shadow-lg">
            <Phone size={19} className="text-sand" /> {hotline}
          </a>
          <a href={zaloHref} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-xl bg-[#0068FF] p-2 text-white shadow-sm transition duration-200 hover:scale-[1.06] hover:shadow-lg" aria-label="Liên hệ qua Zalo">
            <ZaloLogo size={20} />
          </a>
          <a href={facebookHref} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-xl bg-[#1877F2] text-white shadow-sm transition duration-200 hover:scale-[1.06] hover:shadow-lg" aria-label="Theo dõi Facebook">
            <Facebook size={19} />
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-white xl:hidden" aria-label="Mở menu">
          {open ? <X size={20} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
          <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-soft xl:hidden">
            <nav className="mx-auto grid max-w-7xl gap-1">
              {navigation.map(([label, href]) => (
                <button key={href} onClick={() => { setOpen(false); scrollToId(href); }} className="rounded-xl px-4 py-3 text-left text-sm font-bold text-slate-700 hover:bg-mist">
                  {label}
                </button>
              ))}
              <a href={hotlineHref} className="mt-2 flex items-center gap-2 rounded-xl bg-ink px-4 py-3 text-sm font-bold text-white"><Phone size={18} /> {hotline}</a>
              <a href={zaloHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl bg-[#0068FF] px-4 py-3 text-sm font-bold text-white"><ZaloLogo size={18} /> Zalo</a>
              <a href={facebookHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl bg-[#1877F2] px-4 py-3 text-sm font-bold text-white"><Facebook size={16} /> Facebook {brandName}</a>
            </nav>
          </div>
        )}
    </header>
  );
}

function Hero({ onSearch }: { onSearch: () => void }) {
  const [pickup, setPickup] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [selected, setSelected] = useState("");

  return (
    <section id="trang-chu" className="relative isolate overflow-hidden bg-ink pb-16 pt-36 sm:pb-24 sm:pt-44">
      <div className="absolute inset-0 opacity-[.20]" style={{ backgroundImage: "radial-gradient(circle at 15% 15%, #F4A261 0 1px, transparent 1px), radial-gradient(circle at 85% 80%, #2A9D8F 0 1px, transparent 1px)", backgroundSize: "32px 32px, 46px 46px" }} />
      <div className="absolute -left-36 top-10 h-[420px] w-[420px] rounded-full bg-teal/25 blur-3xl" />
      <div className="absolute right-[-12rem] top-[-10rem] h-[520px] w-[520px] rounded-full bg-sand/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-white/90 backdrop-blur-sm">
            <BadgeCheck size={15} className="text-sand" /> Cho thuê xe ô tô tự lái ở Huế
          </div>
          <h1 className="max-w-[700px] font-heading text-[2rem] font-black leading-[1.08] tracking-[-.035em] text-white sm:text-[3rem] lg:text-[clamp(3.5rem,5vw,4.5rem)]">
            Thuê xe tự lái,<br />
            <span className="text-sand">đặt xe nhanh tại Huế.</span>
          </h1>
          <p className="mt-7 max-w-[640px] text-lg leading-[1.8] text-slate-200 sm:text-xl">
            Lựa chọn xe điện và xe xăng chất lượng cho chuyến thuê xe du lịch tự lái, giao xe tận nơi Huế theo lịch xác nhận. Đặt xe nhanh qua Hotline hoặc Zalo.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={hotlineHref} className="inline-flex min-h-[60px] items-center gap-2.5 rounded-2xl bg-sand px-6 py-4 text-xl font-bold text-ink transition hover:bg-[#f8b576] hover:shadow-float"><Phone size={23} /> {hotline}</a>
            <a href={zaloHref} target="_blank" rel="noreferrer" className="inline-flex min-h-[60px] items-center gap-2.5 rounded-2xl bg-[#0068FF] px-6 py-4 text-xl font-bold text-white transition hover:bg-[#0056d6] hover:shadow-float"><ZaloLogo size={22} /> Zalo</a>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {["Xe full option", "Bảo hiểm đầy đủ", "Miễn phí sạc pin"].map((item) => <span key={item} className="flex items-center gap-2 text-sm font-medium text-white/90"><Check size={15} className="text-sand" /> {item}</span>)}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[720px] lg:ml-auto lg:mr-0">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-sand/50 via-transparent to-teal/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/30 bg-white/10 p-2 shadow-[0_35px_80px_rgba(0,0,0,.3)] backdrop-blur-sm">
            <picture>
              <source srcSet={heroWebpSrcSet} sizes={heroSizes} type="image/webp" />
              <source srcSet={heroAvifSrcSet} sizes={heroSizes} type="image/avif" />
              <img src="/images/tram-nha-minh-fleet.webp" srcSet={heroWebpSrcSet} sizes={heroSizes} width={1299} height={878} fetchPriority="high" decoding="async" alt={`Đội xe thuê xe tự lái Huế của ${brandName}: VinFast, xe điện và xe xăng`} className="block h-auto w-full rounded-[1.6rem]" />
            </picture>
            <span className="absolute bottom-6 left-6 rounded-full bg-white/90 px-3 py-1.5 text-xs font-extrabold text-ink shadow-lg">Đội xe {brandName}</span>
          </div>
        </div>
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
  return (
    <section id="gioi-thieu" className="scroll-mt-24 bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <SectionTitle eyebrow="Dịch vụ thuê xe Huế" title="Mỗi hành trình, thêm an tâm." text="Lựa chọn phù hợp để thuê xe điện Huế, thuê xe theo ngày, đi gia đình và du lịch tự lái." centered />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, description }, index) => (
            <article key={title} className="group rounded-[1.35rem] border border-slate-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-teal/20">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal/10 text-teal transition group-hover:bg-ink group-hover:text-white"><Icon size={22} /></span>
              <h3 className="mt-5 font-heading text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CarImage({ car, className = "" }: { car: Car; className?: string }) {
  return <Image src={car.image} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" alt={`${car.name} cho thuê tại Huế - ${car.seats}, ${car.fuel.toLowerCase()}`} className={`object-contain ${className}`} style={{ objectPosition: car.position }} />;
}

function CarsSection() {
  const [brand, setBrand] = useState("Tất cả");
  const [booked, setBooked] = useState<Car | null>(null);
  const [compare, setCompare] = useState<string[]>([]);
  const filteredCars = useMemo(() => brand === "Tất cả" ? cars : cars.filter((car) => car.brand === brand), [brand]);
  const toggleCompare = (id: string) => setCompare((current) => current.includes(id) ? current.filter((item) => item !== id) : current.length < 2 ? [...current, id] : [current[1], id]);
  const comparedCars = cars.filter((car) => compare.includes(car.id));

  return <section id="danh-sach-xe" className="scroll-mt-24 bg-white py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><SectionTitle eyebrow="Danh sách thuê xe Huế" title="Thuê xe VinFast Huế, xe 4 chỗ và 7 chỗ." text="Giá, thông số và tình trạng xe được hiển thị theo dữ liệu hiện có để bạn chọn xe tự lái phù hợp chuyến đi." /><div className="flex rounded-2xl bg-mist p-1.5"><FilterButton active={brand === "Tất cả"} onClick={() => setBrand("Tất cả")}>Tất cả</FilterButton><FilterButton active={brand === "VinFast"} onClick={() => setBrand("VinFast")}>VinFast</FilterButton><FilterButton active={brand === "Honda"} onClick={() => setBrand("Honda")}>Honda</FilterButton></div></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{filteredCars.map((car, index) => <article key={car.id} className="overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-soft"><div className="relative h-52 overflow-hidden bg-slate-100"><CarImage car={car} className="transition duration-700 hover:scale-105" /><span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-extrabold text-teal shadow-sm"><span className="h-1.5 w-1.5 rounded-full bg-teal" /> {car.status}</span></div><div className="p-5"><p className="text-xs font-bold uppercase tracking-[.13em] text-teal">{car.brand}</p><h3 className="mt-1 font-heading text-xl font-bold text-ink">{car.name}</h3><div className="mt-4 grid grid-cols-3 gap-2 border-y border-slate-100 py-3 text-center text-[10px] font-semibold text-slate-400"><span><CarFront size={15} className="mx-auto mb-1 text-ink" />{car.seats}</span><span><Gauge size={15} className="mx-auto mb-1 text-ink" />{car.gearbox}</span><span><Fuel size={15} className="mx-auto mb-1 text-ink" />{car.fuel}</span></div><div className="mt-4 flex items-center justify-between"><span><span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">GIÁ XE CHỈ TỪ</span><strong className="font-heading text-sm text-ink">{formatPrice(car.price)}</strong></span><button onClick={() => setBooked(car)} className="rounded-xl bg-ink px-3.5 py-2.5 text-xs font-bold text-white transition hover:bg-teal">Đặt xe</button></div><button onClick={() => toggleCompare(car.id)} className={`mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition ${compare.includes(car.id) ? "bg-teal/10 text-teal" : "bg-mist text-slate-500 hover:bg-slate-100"}`}><Check size={14} /> {compare.includes(car.id) ? "Đã chọn so sánh" : "So sánh xe"}</button></div></article>)}</div><Comparison comparedCars={comparedCars} onClear={() => setCompare([])} /></div><BookingModal car={booked} onClose={() => setBooked(null)} /></section>;
}

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) { return <button onClick={onClick} className={`rounded-xl px-3 py-2 text-xs font-bold transition ${active ? "bg-white text-ink shadow-sm" : "text-slate-500 hover:text-ink"}`}>{children}</button>; }

function Comparison({ comparedCars, onClear }: { comparedCars: Car[]; onClear: () => void }) {
  if (!comparedCars.length) return null;
  const rows = [["Giá thuê", (car: Car) => formatPrice(car.price)], ["Tình trạng", (car: Car) => car.status], ["Số chỗ", (car: Car) => car.seats], ["Hộp số", (car: Car) => car.gearbox], ["Nhiên liệu", (car: Car) => car.fuel], ["Quãng đường", (car: Car) => car.range], ["Tiện nghi", (car: Car) => car.feature]] as const;
  return <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-teal/15 bg-[#f4fbfa]"><div className="flex flex-wrap items-center justify-between gap-3 px-6 py-5"><div><p className="text-xs font-bold uppercase tracking-[.14em] text-teal">So sánh xe</p><h3 className="font-heading text-xl font-bold text-ink">{comparedCars.length === 1 ? "Chọn thêm một xe để so sánh" : "Đặt cạnh nhau để dễ lựa chọn"}</h3></div><button onClick={onClear} className="text-xs font-bold text-slate-500 underline underline-offset-4">Xoá lựa chọn</button></div><div className="overflow-auto"><table className="min-w-[580px] w-full border-collapse text-left text-sm"><thead><tr className="border-y border-teal/10 bg-white/60"><th className="px-6 py-4 font-bold text-slate-500">Tiêu chí</th>{comparedCars.map((car) => <th key={car.id} className="px-6 py-4 font-heading text-base text-ink">{car.name}</th>)}</tr></thead><tbody>{rows.map(([label, getValue]) => <tr key={label} className="border-b border-teal/10 last:border-0"><td className="px-6 py-3 font-semibold text-slate-500">{label}</td>{comparedCars.map((car) => <td key={car.id} className="px-6 py-3 font-medium text-ink">{getValue(car)}</td>)}</tr>)}</tbody></table></div></div>;
}

function BookingModal({ car, onClose }: { car: Car | null; onClose: () => void }) {
  const [pickup, setPickup] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const days = pickup && returnDate ? Math.max(0, Math.ceil((new Date(returnDate).getTime() - new Date(pickup).getTime()) / 86_400_000)) : 0;

  return (
    <>{car && <div className="fixed inset-0 z-[80] grid place-items-center bg-ink/60 p-4 backdrop-blur-sm" onMouseDown={onClose}>
        <div onMouseDown={(event) => event.stopPropagation()} className="w-full max-w-md overflow-hidden rounded-[1.75rem] bg-white shadow-2xl">
          <div className="flex items-start justify-between bg-ink p-6 text-white"><div><p className="text-xs font-bold uppercase tracking-[.15em] text-sand">Yêu cầu đặt xe</p><h3 className="mt-1 font-heading text-2xl font-bold">{car.name}</h3></div><button onClick={onClose} className="rounded-xl bg-white/10 p-2"><X size={19} /></button></div>
          <div className="space-y-4 p-6">
            <p className="text-sm leading-6 text-slate-500">Chọn thời gian dự kiến để xem tổng tiền theo giá thuê đã niêm yết.</p>
            <div className="grid grid-cols-2 gap-3"><label className="rounded-xl border border-slate-200 p-3"><span className="block text-[10px] font-bold uppercase text-slate-400">Ngày nhận</span><input value={pickup} onChange={(event) => setPickup(event.target.value)} type="date" className="mt-1 w-full text-sm font-bold text-ink outline-none" /></label><label className="rounded-xl border border-slate-200 p-3"><span className="block text-[10px] font-bold uppercase text-slate-400">Ngày trả</span><input value={returnDate} onChange={(event) => setReturnDate(event.target.value)} type="date" className="mt-1 w-full text-sm font-bold text-ink outline-none" /></label></div>
            <div className="rounded-2xl bg-mist p-4 text-sm"><div className="flex justify-between"><span className="text-slate-500">Đơn giá</span><strong className="text-ink">{formatPrice(car.price)}</strong></div><div className="mt-2 flex justify-between"><span className="text-slate-500">Thời gian thuê</span><strong className="text-ink">{days ? `${days} ngày` : "Chọn ngày"}</strong></div><div className="mt-2 flex justify-between"><span className="text-slate-500">Tổng dự kiến</span><strong className="text-ink">{days ? formatPrice(car.price * days).replace("/ngày", "") : "Chọn ngày"}</strong></div></div>
            <a href={zaloHref} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal px-4 py-3.5 text-sm font-bold text-white transition hover:bg-[#207a70]"><MessageCircle size={17} /> Nhắn Zalo xác nhận thuê xe Huế</a>
          </div>
        </div>
      </div>}</>
  );
}

function Pricing() {
  const prices = cars.map((car) => car.price).filter((price): price is number => typeof price === "number");
  const lowestPrice = prices.length ? Math.min(...prices) : undefined;
  const highestPrice = prices.length ? Math.max(...prices) : undefined;
  return <section id="bang-gia" className="scroll-mt-24 bg-ink py-20 text-white sm:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8"><div><p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.18em] text-sand"><span className="h-px w-8 bg-sand" /> Bảng giá tham khảo</p><h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">Thuê xe theo ngày Huế, rõ giá trước khi lên đường.</h2><p className="mt-5 max-w-md leading-7 text-slate-200">Giá thuê theo ngày được lấy trực tiếp từ danh sách xe của {brandName}, gồm xe VinFast và xe điện. Giá chính xác sẽ được xác nhận theo lịch nhận xe của bạn.</p><a href={zaloHref} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-sand px-5 py-3 text-sm font-bold text-ink transition hover:bg-[#f8b576]"><MessageCircle size={17} /> Nhắn Zalo thuê xe Huế</a></div><div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 backdrop-blur-sm sm:p-7"><div className="grid gap-3 sm:grid-cols-3"><div className="rounded-xl bg-white/10 p-4"><span className="block text-[10px] font-bold uppercase tracking-wider text-slate-200">GIÁ XE CHỈ TỪ</span><strong className="mt-2 block text-sm text-white">{formatPrice(lowestPrice)}</strong></div><div className="rounded-xl bg-white/10 p-4"><span className="block text-[10px] font-bold uppercase tracking-wider text-slate-200">Giá cao nhất</span><strong className="mt-2 block text-sm text-white">{formatPrice(highestPrice)}</strong></div><div className="rounded-xl bg-white/10 p-4"><span className="block text-[10px] font-bold uppercase tracking-wider text-slate-200">Dòng xe</span><strong className="mt-2 block text-sm text-white">{cars.length} mẫu xe</strong></div></div><div className="mt-4 rounded-2xl bg-white p-5 text-ink"><div className="flex items-center justify-between border-b border-slate-100 pb-4"><span className="text-sm text-slate-500">Mức giá áp dụng</span><strong>Theo ngày thuê</strong></div><div className="flex items-center justify-between border-b border-slate-100 py-4"><span className="text-sm text-slate-500">Tình trạng xe</span><strong>Liên hệ xác nhận</strong></div><div className="flex items-center justify-between pt-4"><span className="font-heading text-lg font-bold">Đặt xe nhanh</span><strong className="font-heading text-xl text-teal">Zalo {hotline}</strong></div></div></div></div></section>;
}

function RentalNotice() {
  return <section className="bg-white py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:px-8"><div><SectionTitle eyebrow="Thông tin cần biết" title="Lưu ý khi thuê xe." text="Vui lòng xem kỹ các lưu ý dưới đây trước khi nhận xe để chuyến đi diễn ra thuận lợi." /><a href="/images/luuy.jpg" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#16796f] hover:text-ink">Mở ảnh lưu ý cỡ lớn <ArrowRight size={17} /></a></div><div className="overflow-hidden rounded-[1.75rem] border border-slate-100 bg-mist p-2 shadow-soft"><Image src="/images/luuy.webp" width={854} height={1175} sizes="(min-width: 1024px) 55vw, 100vw" alt="Lưu ý khi thuê xe tự lái tại Huế của TRẠM NHÀ MINT" loading="lazy" className="h-auto w-full rounded-[1.35rem] object-contain" /></div></div></section>;
}

function GalleryCarousel({ images, label, emptyMessage }: { images: string[]; label: string; emptyMessage: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayKey, setAutoplayKey] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const hasSlides = images.length > 1;
  React.useEffect(() => {
    if (activeIndex >= images.length) setActiveIndex(0);
  }, [activeIndex, images.length]);
  React.useEffect(() => {
    if (!hasSlides) return;
    const timer = window.setTimeout(() => setActiveIndex((current) => (current + 1) % images.length), 5000);
    return () => window.clearTimeout(timer);
  }, [activeIndex, autoplayKey, hasSlides, images.length]);
  const showSlide = (nextIndex: number) => {
    setActiveIndex((nextIndex + images.length) % images.length);
    setAutoplayKey((current) => current + 1);
  };
  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!hasSlides || touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) >= 40) showSlide(activeIndex + (distance < 0 ? 1 : -1));
  };
  if (!images.length) return <div className="grid min-h-[430px] place-items-center rounded-[1.75rem] bg-mist p-8 text-center"><div><Sparkles size={28} className="mx-auto text-teal" /><h3 className="mt-4 font-heading text-xl font-bold text-ink">Chưa có {label.toLowerCase()}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{emptyMessage}</p></div></div>;
  return <div className="group relative min-h-[430px] overflow-hidden rounded-[1.75rem] bg-slate-100" aria-label={label} onTouchStart={(event) => { touchStartX.current = event.touches[0].clientX; }} onTouchEnd={handleTouchEnd}>
    <div className="absolute inset-0"><Image src={images[activeIndex]} fill sizes="(min-width: 1024px) 60vw, 100vw" alt={`${label} ${activeIndex + 1}`} loading="lazy" className="bg-slate-100 object-contain object-center" /></div>
    {hasSlides && <><button type="button" onClick={() => showSlide(activeIndex - 1)} aria-label="Ảnh trước" className="absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/75 text-ink shadow-md backdrop-blur-md transition hover:bg-teal hover:text-white lg:opacity-0 lg:group-hover:opacity-100"><ChevronLeft size={21} strokeWidth={2.5} /></button><button type="button" onClick={() => showSlide(activeIndex + 1)} aria-label="Ảnh tiếp theo" className="absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/75 text-ink shadow-md backdrop-blur-md transition hover:bg-teal hover:text-white lg:opacity-0 lg:group-hover:opacity-100"><ChevronRight size={21} strokeWidth={2.5} /></button><div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full bg-white/65 px-2 py-1 shadow-sm backdrop-blur-md" aria-label="Chọn ảnh">{images.map((image, index) => <button key={image} type="button" onClick={() => showSlide(index)} aria-label={`Xem ảnh ${index + 1}`} aria-current={activeIndex === index ? "true" : undefined} className={`grid h-6 w-6 place-items-center rounded-full transition-all duration-300 after:rounded-full after:bg-ink ${activeIndex === index ? "after:h-2.5 after:w-2.5 after:bg-teal" : "after:h-2 after:w-2 opacity-60 hover:opacity-100"}`} />)}</div></>}
  </div>;
}

function ReelsPlayer({ reels }: { reels: string[] }) {
  const [activeReel, setActiveReel] = useState(0);
  if (!reels.length) return <div className="grid min-h-[430px] place-items-center rounded-[1.75rem] bg-mist p-8 text-center"><div><Star size={28} className="mx-auto text-teal" /><h3 className="mt-4 font-heading text-xl font-bold text-ink">Chưa có video / Reels</h3><p className="mt-2 text-sm leading-6 text-slate-500">Thêm file .mp4 vào thư mục public/videos/reels.</p></div></div>;
  return <div className="overflow-hidden rounded-[1.75rem] bg-slate-950"><video key={reels[activeReel]} controls playsInline preload="metadata" className="h-[430px] w-full bg-black object-contain"><source src={reels[activeReel]} type="video/mp4" />Trình duyệt của bạn không hỗ trợ video.</video>{reels.length > 1 && <div className="flex gap-2 overflow-x-auto bg-ink p-3">{reels.map((video, index) => <button key={video} onClick={() => setActiveReel(index)} className={`shrink-0 rounded-lg px-3 py-2 text-xs font-bold transition ${activeReel === index ? "bg-sand text-ink" : "bg-white/10 text-white hover:bg-white/20"}`}>Video {index + 1}</button>)}</div>}</div>;
}

function Gallery() {
  const [activePanel, setActivePanel] = useState<"gallery" | "reels">("gallery");
  const galleryImages = gallery as string[];
  const reelVideos = videos as string[];
  const activeContent = activePanel === "gallery" ? <GalleryCarousel images={galleryImages} label={`Ảnh đội xe thuê xe tự lái Huế của ${brandName}`} emptyMessage="Thêm ảnh vào thư mục public/images/gallery." /> : <ReelsPlayer reels={reelVideos} />;

  return <section id="gallery" className="bg-white py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="Hình ảnh đội xe" title="Xe điện và xe xăng cho hành trình tự lái tại Huế." /><div className="mt-10 grid gap-4 lg:grid-cols-[1.35fr_.65fr]"><div>{activeContent}</div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"><GalleryCard title="Thư viện ảnh" icon={MapPin} active={activePanel === "gallery"} onClick={() => setActivePanel("gallery")} /><GalleryCard title="Video / Reels" icon={Star} active={activePanel === "reels"} onClick={() => setActivePanel("reels")} /></div></div></div></section>;
}

function GalleryCard({ title, icon: Icon, active, onClick }: { title: string; icon: typeof MapPin; active: boolean; onClick: () => void }) { return <button type="button" onClick={onClick} className={`rounded-[1.25rem] border p-5 text-left transition ${active ? "border-teal bg-teal/5 shadow-soft" : "border-slate-100 bg-mist hover:border-teal/40"}`}><Icon size={22} className="text-teal" /><h3 className="mt-3 font-heading text-lg font-bold text-ink">{title}</h3></button>; }

function ProcessFaq() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="faq" className="scroll-mt-24 bg-mist py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionTitle eyebrow="Quy trình thuê xe" title="Thuê xe du lịch tự lái, sẵn sàng trước khi lăn bánh." text="Nhắn Zalo để được tư vấn lịch xe, giá theo ngày và phương án giao xe tận nơi Huế." />
          <div className="mt-9 space-y-0">{process.map((step, index) => <div key={step} className="relative flex gap-4 pb-6 last:pb-0"><div className="flex flex-col items-center"><span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-xs font-extrabold text-white">0{index + 1}</span>{index < process.length - 1 && <span className="mt-2 h-full w-px bg-ink/15" />}</div><div className="pt-1"><h3 className="font-heading font-bold text-ink">{step}</h3><p className="mt-1 text-sm text-slate-500">{index === 0 ? `Nhắn Zalo ${hotline} để bắt đầu.` : "Được tư vấn theo lịch xe của bạn."}</p></div></div>)}</div>
        </div>
        <div>
          <SectionTitle eyebrow="Câu hỏi về thuê xe Huế" title="Thông tin cần biết trước khi thuê." />
          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-soft">{faqs.length ? (faqs as { question: string; answer: string }[]).map((faq, index) => <div key={faq.question} className="border-b border-slate-100 last:border-0"><button onClick={() => setActive(active === index ? null : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-heading font-bold text-ink"><span>{faq.question}</span><ChevronDown className={`shrink-0 transition ${active === index ? "rotate-180" : ""}`} size={18} /></button>{active === index && <p className="overflow-hidden px-5 pb-5 text-sm leading-6 text-slate-500">{faq.answer}</p>}</div>) : <div className="p-7"><CircleHelp size={26} className="text-teal" /><h3 className="mt-4 font-heading text-lg font-bold text-ink">Đang cập nhật câu hỏi</h3><p className="mt-2 text-sm leading-6 text-slate-500">Liên hệ trực tiếp để được giải đáp về điều kiện thuê xe, lịch trống và báo giá.</p><a href={zaloHref} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal">Nhắn Zalo {hotline} <ChevronRight size={16} /></a></div>}</div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return <section id="lien-he" className="scroll-mt-24 bg-white py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-10 sm:px-10 lg:px-14 lg:py-14"><div className="absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-sand/20 blur-3xl" /><div className="relative grid gap-9 lg:grid-cols-[1fr_.8fr] lg:items-center"><div><p className="text-xs font-extrabold uppercase tracking-[.18em] text-sand">Đặt xe nhanh</p><h2 className="mt-3 max-w-xl font-heading text-3xl font-bold text-white sm:text-4xl">Thuê xe sân bay Phú Bài, giao xe tại Huế.</h2><p className="mt-4 max-w-xl leading-7 text-slate-300">{brandName} xác nhận xe, giá theo ngày và lịch thuê xe tại sân bay Phú Bài hoặc giao xe tận nơi Huế qua Zalo.</p><div className="mt-7 flex flex-wrap gap-3"><a href={hotlineHref} className="inline-flex items-center gap-2 rounded-xl bg-sand px-5 py-3.5 text-sm font-bold text-ink transition hover:bg-[#f8b576]"><Phone size={19} /> {hotline}</a><a href={zaloHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#0068FF] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0056d6]"><ZaloLogo size={20} /> Zalo</a><a href={facebookHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"><Facebook size={19} /> Facebook</a></div></div><div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-6 backdrop-blur-sm"><MapPin size={25} className="text-sand" /><h3 className="mt-4 font-heading text-xl font-bold text-white">Giao xe tận nơi Huế</h3><p className="mt-2 text-sm leading-6 text-slate-300">Tại nhà, sân bay Phú Bài, ga tàu hoặc bến xe theo lịch đã xác nhận.</p><div className="mt-5 border-t border-white/10 pt-5 text-xs font-bold uppercase tracking-wider text-slate-300">Khu vực phục vụ: Huế</div></div></div></div></div></section>;
}

function LocationMap() {
  const [showMap, setShowMap] = useState(false);
  return <section id="ban-do" className="bg-mist py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:px-8"><div><SectionTitle eyebrow="Vị trí Trạm Nhà Mint" title="Dễ dàng tìm đường đến điểm hẹn tại Huế." text="Xem vị trí doanh nghiệp trên Google Maps để mở chỉ đường thuận tiện trước khi nhận xe." /><a href={mapsSearchHref} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-teal"><MapPin size={18} /> Mở chỉ đường trên Google Maps <ArrowRight size={17} /></a></div><div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-2 shadow-soft">{showMap ? <iframe src={mapsEmbedSrc} title="Bản đồ Google Maps Trạm Nhà Mint tại Huế" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[360px] w-full rounded-[1.35rem] border-0" /> : <div className="flex h-[360px] flex-col items-center justify-center rounded-[1.35rem] bg-gradient-to-br from-[#e8f6f4] via-white to-[#fff2e4] p-8 text-center"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-teal/10 text-teal"><MapPin size={28} /></span><h3 className="mt-5 font-heading text-xl font-bold text-ink">Bản đồ Trạm Nhà Mint</h3><p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">Tải bản đồ khi cần xem vị trí để trang mở nhanh hơn và hạn chế dữ liệu bên thứ ba.</p><button type="button" onClick={() => setShowMap(true)} className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-teal"><MapPin size={18} /> Hiển thị bản đồ</button></div>}</div></div></section>;
}

function InternalLinks() {
  const serviceLinks = seoPages.slice(0, 5);
  const blogLinks = blogPosts.slice(0, 5);
  return <section className="bg-white py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="Khám phá thêm" title="Chọn dịch vụ và đọc kinh nghiệm trước khi đặt xe." text="Các liên kết dưới đây giúp bạn đi thẳng tới nhóm xe, giá tham khảo và những bài hướng dẫn liên quan." /><div className="mt-10 grid gap-8 lg:grid-cols-2"><div><h3 className="font-heading text-xl font-bold text-ink">Dịch vụ thuê xe tại Huế</h3><div className="mt-4 grid gap-3 sm:grid-cols-2">{serviceLinks.map((service) => <Link key={service.slug} href={`/${service.slug}`} className="group rounded-2xl border border-slate-100 bg-mist p-5 text-sm font-bold text-ink transition hover:border-teal hover:bg-teal hover:text-white">{service.label}<ArrowRight size={17} className="mt-4 transition group-hover:translate-x-1" /></Link>)}</div></div><div><h3 className="font-heading text-xl font-bold text-ink">Kinh nghiệm thuê xe</h3><div className="mt-4 grid gap-3">{blogLinks.map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-mist px-5 py-4 text-sm font-bold leading-5 text-ink transition hover:border-teal hover:text-teal"><span>{post.title}</span><ArrowRight size={17} className="shrink-0 transition group-hover:translate-x-1" /></Link>)}</div></div></div></div></section>;
}

function Footer() {
  return <footer className="border-t border-slate-100 bg-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8"><div><div className="flex items-center gap-3 font-heading font-extrabold text-ink"><span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-white shadow-soft"><Image src="/images/logo.webp" width={44} height={44} alt="Logo TRẠM NHÀ MINT" className="h-full w-full object-contain" /></span> {brandName}</div><p className="mt-4 text-sm leading-6 text-slate-500">Thuê xe tự lái Huế với xe điện và xe xăng cho nhu cầu thuê xe ngắn hạn hoặc theo ngày.</p></div><div><h3 className="font-heading font-bold text-ink">Điều hướng</h3><div className="mt-4 grid gap-2">{navigation.slice(0, 4).map(([label, href]) => <button key={href} onClick={() => scrollToId(href)} className="text-left text-sm text-slate-500 hover:text-teal">{label}</button>)}</div></div><div><h3 className="font-heading font-bold text-ink">Liên hệ</h3><a href={hotlineHref} className="mt-4 flex items-center gap-2 text-sm font-bold text-[#16796f]"><Phone size={18} /> {hotline}</a><a href={zaloHref} target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-2 text-sm font-bold text-[#0068FF]"><ZaloLogo size={18} /> Zalo</a><a href={facebookHref} target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-2 text-sm font-bold text-[#1767c9]"><Facebook size={18} /> Facebook {brandName}</a></div><div><h3 className="font-heading font-bold text-ink">Thông tin website</h3><p className="mt-4 text-sm leading-6 text-slate-500">Thông tin xe, giá và điều khoản được cập nhật theo nguồn cung cấp.</p></div></div><div className="border-t border-slate-100 px-5 py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} {brandName}. Thiết kế cho thuê xe tự lái Huế.</div></footer>;
}

function FloatingActions() { return <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2"><a href={zaloHref} target="_blank" rel="noreferrer" aria-label="Nhắn Zalo thuê xe tự lái Huế" className="grid h-11 w-11 place-items-center rounded-full bg-teal text-white shadow-float transition hover:scale-105"><MessageCircle size={19} /></a><a href="#trang-chu" aria-label="Lên đầu trang" className="grid h-11 w-11 place-items-center rounded-full bg-sand text-ink shadow-float transition hover:scale-105"><RotateCcw size={19} /></a></div>; }

export default function Home() {
  preload("/images/tram-nha-minh-fleet-480.webp", { as: "image", type: "image/webp", fetchPriority: "high", imageSizes: heroSizes, imageSrcSet: heroWebpSrcSet });
  const goToCars = () => scrollToId("#danh-sach-xe");
  const faqSchema = createFaqPageSchema(faqs as { question: string; answer: string }[], "/");
  return <><Header /><main><Hero onSearch={goToCars} /><WhyUs /><CarsSection /><div className="bg-white px-5 py-6 lg:px-8"><div className="mx-auto max-w-7xl"><BookingCta placement="middle" /></div></div><Pricing /><RentalNotice /><Gallery /><ProcessFaq /><Contact /><LocationMap /><InternalLinks /><div className="bg-mist px-5 pb-20 lg:px-8"><div className="mx-auto max-w-7xl"><BookingCta placement="end" /></div></div></main><Footer /><FloatingActions /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /></>;
}
