import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

const hotline = "0986 789 715";
const hotlineHref = "tel:0986789715";
const zaloHref = "https://zalo.me/0986789715";

export function BookingCta({ placement }: { placement: "middle" | "end" }) {
  const isFinal = placement === "end";

  return (
    <section className="rounded-[1.75rem] bg-ink p-7 text-white shadow-float sm:p-9">
      <p className="text-xs font-extrabold uppercase tracking-[.18em] text-sand">
        {isFinal ? "Sẵn sàng đặt xe" : "Kiểm tra lịch xe"}
      </p>
      <h2 className="mt-3 font-heading text-2xl font-bold sm:text-3xl">
        {isFinal ? "Đã chọn được xe? Liên hệ để xác nhận lịch ngay." : "Cần xác nhận xe phù hợp cho hành trình tại Huế?"}
      </h2>
      <p className="mt-3 max-w-2xl leading-7 text-slate-300">
        Gửi ngày nhận, ngày trả, mẫu xe và điểm nhận dự kiến để TRẠM NHÀ MINT kiểm tra xe, giá theo ngày và phương án giao nhận phù hợp.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={hotlineHref} className="inline-flex items-center gap-2 rounded-xl bg-sand px-5 py-3 text-sm font-bold text-ink transition hover:bg-[#f8b576]">
          <Phone size={18} /> Gọi {hotline}
        </a>
        <a href={zaloHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#0068FF] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0056d6]">
          <MessageCircle size={18} /> Nhắn Zalo đặt xe
        </a>
        {isFinal && <Link href="/lien-he" className="inline-flex items-center rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">Xem thông tin liên hệ</Link>}
      </div>
    </section>
  );
}
