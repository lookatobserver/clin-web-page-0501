'use client';

export default function ContactForm() {
  return (
    <form
      className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="업무용 이메일 주소"
        className="flex-1 px-5 py-3 rounded-md text-sm outline-none bg-white/10 text-white border border-white/25 placeholder:text-blue-200 focus:border-white/50 transition-colors"
      />
      <button
        type="submit"
        className="px-7 py-3 rounded-md text-sm font-bold text-white shrink-0 bg-[#1C5BCC] hover:bg-[#1A4FB0] transition-colors"
      >
        무료 상담 신청
      </button>
    </form>
  );
}
