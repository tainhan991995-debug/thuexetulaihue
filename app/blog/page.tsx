import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, ChevronRight, MapPin, Phone } from "lucide-react";
import { BookingCta } from "../../components/booking-cta";
import { blogPosts } from "../../data/blog-posts";
import { seoPages } from "../../data/seo-pages";
import { createBreadcrumbSchema, createWebPageSchema, siteUrl } from "../../data/structured-data";

export const metadata: Metadata = {
  title: "Blog thuê xe tự lái Huế | Cẩm nang TRẠM NHÀ MINT",
  description: "Cẩm nang thuê xe tự lái Huế: kinh nghiệm chọn xe VinFast, xe điện, xe gia đình, sân bay Phú Bài và lịch trình du lịch tự túc.",
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: { type: "website", locale: "vi_VN", url: `${siteUrl}/blog`, title: "Blog thuê xe tự lái Huế | TRẠM NHÀ MINT", description: "Kinh nghiệm chọn xe, chuẩn bị lịch trình và xác nhận thuê xe tại Huế.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "TRẠM NHÀ MINT - Blog thuê xe tự lái Huế" }] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

function Header() {
  return <header className="border-b border-white/30 bg-white/90 shadow-[0_2px_20px_rgba(13,59,102,.06)] backdrop-blur-xl"><div className="mx-auto flex min-h-[82px] max-w-7xl items-center justify-between gap-5 px-5 py-3 lg:px-8"><Link href="/" className="group flex items-center gap-3.5"><span className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-white shadow-float"><Image src="/images/logo.jpg" width={48} height={48} alt="Logo TRẠM NHÀ MINT" className="h-full w-full object-contain" /></span><span><span className="block font-heading text-lg font-extrabold leading-none tracking-[.015em] text-ink md:text-2xl">TRẠM NHÀ MINT</span><span className="mt-1 hidden text-sm font-medium text-[#0F9D8C] sm:block">Cho thuê xe tự lái - Huế</span></span></Link><nav aria-label="Điều hướng chính" className="hidden items-center gap-5 xl:flex"><Link href="/thue-xe-tu-lai-hue" className="text-sm font-semibold text-slate-600 hover:text-ink">Thuê xe tự lái</Link><Link href="/thue-xe-vinfast-hue" className="text-sm font-semibold text-slate-600 hover:text-ink">Xe VinFast</Link><Link href="/bang-gia" className="text-sm font-semibold text-slate-600 hover:text-ink">Bảng giá</Link><Link href="/blog" className="text-sm font-bold text-teal">Blog</Link><Link href="/lien-he" className="text-sm font-semibold text-slate-600 hover:text-ink">Liên hệ</Link></nav><a href="tel:0986789715" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0D4C92] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:scale-[1.03] hover:shadow-lg"><Phone size={18} className="text-sand" /> 0986 789 715</a></div></header>;
}

function BlogCards({ posts }: { posts: typeof blogPosts }) {
  return <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{posts.map((post) => <article key={post.slug} className="group overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-float"><Link href={`/blog/${post.slug}`} className="relative block h-52 overflow-hidden"><Image src={post.image} fill sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw" alt={post.imageAlt} className="object-cover transition duration-500 group-hover:scale-[1.04]" /></Link><div className="p-6"><p className="text-xs font-extrabold uppercase tracking-[.15em] text-teal">{post.category}</p><h2 className="mt-3 font-heading text-xl font-bold leading-snug text-ink"><Link href={`/blog/${post.slug}`} className="hover:text-teal">{post.title}</Link></h2><p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{post.description}</p><Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-ink">Đọc bài viết <ArrowRight size={16} /></Link></div></article>)}</div>;
}

export default function BlogIndexPage() {
  const featuredPosts = blogPosts.slice(0, 9);
  const morePosts = blogPosts.slice(9);
  const serviceLinks = seoPages.slice(0, 5);
  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createWebPageSchema({
        name: "Blog thuê xe tự lái Huế | Cẩm nang TRẠM NHÀ MINT",
        description:
          "Kinh nghiệm chọn xe, chuẩn bị lịch trình và xác nhận thuê xe tại Huế.",
        path: "/blog",
      }),
      createBreadcrumbSchema(
        [
          { name: "Trang chủ", path: "/" },
          { name: "Blog", path: "/blog" },
        ],
        "/blog",
      ),
    ],
  };

  return <><Header /><main><nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-5 pt-7 text-sm lg:px-8"><ol className="flex items-center gap-2 text-slate-500"><li><Link href="/" className="hover:text-teal">Trang chủ</Link></li><li aria-hidden="true"><ChevronRight size={15} /></li><li className="font-semibold text-ink">Blog</li></ol></nav><section className="pb-14 pt-8 sm:pb-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.18em] text-teal"><span className="h-px w-8 bg-sand" /> Cẩm nang TRẠM NHÀ MINT</p><h1 className="mt-4 max-w-4xl font-heading text-4xl font-black leading-[1.1] tracking-[-.03em] text-ink sm:text-5xl">Blog thuê xe tự lái Huế: lên kế hoạch chủ động cho chuyến đi</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">Tổng hợp kinh nghiệm thuê xe tại Huế, lựa chọn xe VinFast và xe điện, chuẩn bị lịch nhận trả, sân bay Phú Bài cùng các ý tưởng khám phá Huế tự túc. Nội dung giúp bạn chuẩn bị tốt hơn trước khi xác nhận lịch xe.</p><div className="mt-8 flex flex-wrap gap-3"><a href="https://zalo.me/0986789715" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#207a70]"><BookOpen size={18} /> Nhắn Zalo đặt xe</a><Link href="/thue-xe-tu-lai-hue" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-bold text-ink transition hover:border-teal hover:text-teal">Xem dịch vụ thuê xe <ArrowRight size={17} /></Link></div></div></section><section className="bg-mist py-14 sm:py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-[.18em] text-teal">Bài viết nổi bật</p><h2 className="mt-2 font-heading text-3xl font-bold text-ink">Hướng dẫn chuẩn bị trước khi thuê xe</h2></div><p className="max-w-sm text-sm leading-6 text-slate-500">Đọc theo chủ đề, sau đó liên hệ trực tiếp để kiểm tra lịch xe và phương án giao nhận.</p></div><BlogCards posts={featuredPosts} /><div className="mt-14"><BookingCta placement="middle" /></div></div></section><section className="bg-white py-14 sm:py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-8"><p className="text-xs font-extrabold uppercase tracking-[.18em] text-teal">Dịch vụ liên quan</p><h2 className="mt-2 font-heading text-3xl font-bold text-ink">Chọn trang phù hợp với nhu cầu của bạn</h2></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{serviceLinks.map((service) => <Link key={service.slug} href={`/${service.slug}`} className="group rounded-2xl border border-slate-100 bg-mist p-5 text-sm font-bold text-ink transition hover:border-teal hover:bg-teal hover:text-white">{service.label}<ArrowRight size={17} className="mt-4 transition group-hover:translate-x-1" /></Link>)}</div></div></section><section className="bg-mist py-14 sm:py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-8"><p className="text-xs font-extrabold uppercase tracking-[.18em] text-teal">Đọc thêm</p><h2 className="mt-2 font-heading text-3xl font-bold text-ink">{morePosts.length} bài viết theo nhu cầu thực tế</h2></div><BlogCards posts={morePosts} /><div className="mt-14"><BookingCta placement="end" /></div></div></section></main><footer className="border-t border-slate-100 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-9 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8"><Link href="/" className="flex items-center gap-3 font-heading font-extrabold text-ink"><span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-white shadow-soft"><Image src="/images/logo.jpg" width={40} height={40} alt="Logo TRẠM NHÀ MINT" className="h-full w-full object-contain" /></span> TRẠM NHÀ MINT</Link><div className="flex flex-wrap gap-x-5 gap-y-2"><Link href="/thue-xe-tu-lai-hue">Thuê xe tự lái Huế</Link><Link href="/bang-gia">Bảng giá</Link><Link href="/faq">FAQ</Link><Link href="/lien-he">Liên hệ</Link></div></div></footer><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} /></>;
}
