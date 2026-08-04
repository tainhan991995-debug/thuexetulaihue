import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CarFront, Check, ChevronRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { seoPageBySlug, seoPages } from "../../data/seo-pages";
import { createBreadcrumbSchema, createFaqPageSchema, createWebPageSchema, siteUrl } from "../../data/structured-data";

const hotline = "0986 789 715";
const hotlineHref = "tel:0986789715";
const zaloHref = "https://zalo.me/0986789715";

export function generateStaticParams() {
  return seoPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = seoPageBySlug[slug];
  if (!page) return {};
  const canonical = `${siteUrl}/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "vi_VN",
      url: canonical,
      title: page.title,
      description: page.description,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "TRẠM NHÀ MINT - Thuê xe tự lái Huế" }],
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: ["/og.png"] },
  };
}

function SiteHeader() {
  return <header className="border-b border-white/30 bg-white/90 shadow-[0_2px_20px_rgba(13,59,102,.06)] backdrop-blur-xl"><div className="mx-auto flex min-h-[82px] max-w-7xl items-center justify-between gap-5 px-5 py-3 lg:px-8"><Link href="/" className="group flex items-center gap-3.5"><span className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-white shadow-float"><img src="/images/logo.png" alt="Logo TRẠM NHÀ MINT" className="h-full w-full object-contain" /></span><span><span className="block font-heading text-lg font-extrabold leading-none tracking-[.015em] text-ink md:text-2xl">TRẠM NHÀ MINT</span><span className="mt-1 hidden text-sm font-medium text-[#0F9D8C] sm:block">Cho thuê xe tự lái - Huế</span></span></Link><nav aria-label="Điều hướng dịch vụ" className="hidden items-center gap-5 xl:flex"><Link href="/thue-xe-tu-lai-hue" className="text-sm font-semibold text-slate-600 hover:text-ink">Thuê xe tự lái</Link><Link href="/thue-xe-vinfast-hue" className="text-sm font-semibold text-slate-600 hover:text-ink">Xe VinFast</Link><Link href="/bang-gia" className="text-sm font-semibold text-slate-600 hover:text-ink">Bảng giá</Link><Link href="/faq" className="text-sm font-semibold text-slate-600 hover:text-ink">FAQ</Link><Link href="/lien-he" className="text-sm font-semibold text-slate-600 hover:text-ink">Liên hệ</Link></nav><a href={hotlineHref} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0D4C92] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:scale-[1.03] hover:shadow-lg"><Phone size={18} className="text-sand" /> {hotline}</a></div></header>;
}

function Breadcrumb({ label }: { label: string }) {
  return <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-5 pt-7 text-sm lg:px-8"><ol className="flex flex-wrap items-center gap-2 text-slate-500"><li><Link href="/" className="hover:text-teal">Trang chủ</Link></li><li aria-hidden="true"><ChevronRight size={15} /></li><li className="font-semibold text-ink">{label}</li></ol></nav>;
}

function ContactCta() {
  return <section className="rounded-[1.75rem] bg-ink p-7 text-white shadow-float sm:p-9"><p className="text-xs font-extrabold uppercase tracking-[.18em] text-sand">Đặt xe nhanh</p><h2 className="mt-3 font-heading text-2xl font-bold sm:text-3xl">Cần xác nhận lịch xe tại Huế?</h2><p className="mt-3 max-w-2xl leading-7 text-slate-300">Gửi ngày nhận, ngày trả, mẫu xe và điểm nhận dự kiến để TRẠM NHÀ MINT kiểm tra xe, giá theo ngày và phương án giao nhận phù hợp.</p><div className="mt-6 flex flex-wrap gap-3"><a href={hotlineHref} className="inline-flex items-center gap-2 rounded-xl bg-sand px-5 py-3 text-sm font-bold text-ink transition hover:bg-[#f8b576]"><Phone size={18} /> {hotline}</a><a href={zaloHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#0068FF] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0056d6]"><MessageCircle size={18} /> Nhắn Zalo xác nhận lịch</a></div></section>;
}

export default async function SeoLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = seoPageBySlug[slug];
  if (!page) notFound();
  const canonical = `${siteUrl}/${page.slug}`;
  const pageSchema = createWebPageSchema({ name: page.title, description: page.description, path: `/${page.slug}`, image: "/og.png" });
  const breadcrumbSchema = createBreadcrumbSchema([{ name: "Trang chủ", path: "/" }, { name: page.label, path: `/${page.slug}` }], `/${page.slug}`);
  const faqSchema = createFaqPageSchema(page.faqs, `/${page.slug}`);
  return <><SiteHeader /><main><Breadcrumb label={page.label} /><section className="pb-14 pt-8 sm:pb-20"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_.92fr] lg:items-center lg:px-8"><div><p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.18em] text-teal"><span className="h-px w-8 bg-sand" /> TRẠM NHÀ MINT · Huế</p><h1 className="mt-4 max-w-3xl font-heading text-4xl font-black leading-[1.1] tracking-[-.03em] text-ink sm:text-5xl">{page.h1}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{page.lead}</p><div className="mt-7 flex flex-wrap gap-3"><a href={zaloHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#207a70]"><MessageCircle size={18} /> Nhắn Zalo đặt xe</a><Link href="/bang-gia" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-bold text-ink transition hover:border-teal hover:text-teal">Xem bảng giá <ArrowRight size={17} /></Link></div></div><div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-mist p-2 shadow-soft"><img src={page.image} alt={page.imageAlt} className="h-[330px] w-full rounded-[1.55rem] object-cover object-center sm:h-[410px]" /></div></div></section><article className="bg-white py-16 sm:py-20"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8"><div className="min-w-0"><div className="space-y-12">{page.sections.map((section) => <section key={section.heading}><h2 className="font-heading text-2xl font-bold leading-tight text-ink sm:text-3xl">{section.heading}</h2><div className="mt-5 space-y-5 text-[16px] leading-8 text-slate-600">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}</div><div className="mt-14"><ContactCta /></div><section className="mt-14" id="cau-hoi"><p className="text-xs font-extrabold uppercase tracking-[.18em] text-teal">Câu hỏi thường gặp</p><h2 className="mt-3 font-heading text-3xl font-bold text-ink">Giải đáp về {page.label.toLowerCase()}</h2><div className="mt-7 divide-y divide-slate-100 overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-soft">{page.faqs.map((faq) => <details key={faq.question} className="group p-5"><summary className="cursor-pointer list-none font-heading font-bold text-ink">{faq.question}</summary><p className="mt-3 leading-7 text-slate-600">{faq.answer}</p></details>)}</div></section></div><aside className="h-fit rounded-[1.5rem] bg-mist p-6 lg:sticky lg:top-6"><MapPin size={22} className="text-teal" /><h2 className="mt-4 font-heading text-xl font-bold text-ink">Khám phá thêm</h2><p className="mt-2 text-sm leading-6 text-slate-500">Các nội dung liên quan giúp bạn so sánh xe và chuẩn bị lịch thuê.</p><div className="mt-5 grid gap-2">{page.related.map((slug) => <Link key={slug} href={`/${slug}`} className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-bold text-ink shadow-sm transition hover:bg-teal hover:text-white">{seoPageBySlug[slug].label}<ArrowRight size={16} /></Link>)}</div><Link href="/lien-he" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-ink">Liên hệ TRẠM NHÀ MINT <ArrowRight size={16} /></Link></aside></div></article></main><footer className="border-t border-slate-100 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-9 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8"><Link href="/" className="flex items-center gap-3 font-heading font-extrabold text-ink"><span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-white shadow-soft"><img src="/images/logo.png" alt="Logo TRẠM NHÀ MINT" className="h-full w-full object-contain" /></span> TRẠM NHÀ MINT</Link><div className="flex flex-wrap gap-x-5 gap-y-2"><Link href="/thue-xe-tu-lai-hue">Thuê xe tự lái Huế</Link><Link href="/bang-gia">Bảng giá</Link><Link href="/faq">FAQ</Link><Link href="/lien-he">Liên hệ</Link></div></div></footer><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /></>;
}
