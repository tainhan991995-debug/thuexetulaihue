import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Không tìm thấy trang | TRẠM NHÀ MINT",
  description: "Trang bạn tìm không tồn tại hoặc đã được chuyển địa chỉ.",
  alternates: { canonical: "/404" },
  robots: { index: false, follow: false, nocache: true },
};

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-mist px-5 py-16 text-center">
      <section className="max-w-xl rounded-[2rem] border border-slate-100 bg-white p-8 shadow-soft sm:p-12">
        <p className="text-sm font-extrabold uppercase tracking-[.2em] text-teal">Lỗi 404</p>
        <h1 className="mt-4 font-heading text-4xl font-black tracking-[-.03em] text-ink sm:text-5xl">
          Không tìm thấy trang này
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-600">
          Liên kết có thể đã thay đổi. Bạn có thể trở về trang chủ hoặc liên hệ trực tiếp để được hỗ trợ.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-teal"
          >
            <Home size={18} /> Về trang chủ
          </Link>
          <a
            href="https://zalo.me/0986789715"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-ink transition hover:border-teal hover:text-teal"
          >
            <MessageCircle size={18} /> Liên hệ Zalo
          </a>
        </div>
        <Link href="/" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-teal">
          <ArrowLeft size={16} /> Quay lại trang chính
        </Link>
      </section>
    </main>
  );
}
