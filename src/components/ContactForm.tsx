'use client';

import { useState } from 'react';

const SERVICE_TYPES = ['클라우드 인프라', '개발', '마케팅', '기타'];

export default function ContactForm() {
  const [service, setService] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-lg font-bold text-white mb-2">문의가 접수되었습니다</h3>
        <p className="text-[#BAD6F9] text-sm">영업일 기준 24시간 이내 담당자가 연락드리겠습니다.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="space-y-4 text-left"
    >
      {/* 이름 + 회사명 */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#93C5FD] mb-1.5">
            이름 <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="홍길동"
            className="w-full px-4 py-3 rounded-lg text-sm bg-white/10 text-white border border-white/20 placeholder:text-blue-300/50 focus:border-white/50 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#93C5FD] mb-1.5">
            회사명 <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="주식회사 예시"
            className="w-full px-4 py-3 rounded-lg text-sm bg-white/10 text-white border border-white/20 placeholder:text-blue-300/50 focus:border-white/50 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* 이메일 */}
      <div>
        <label className="block text-xs font-semibold text-[#93C5FD] mb-1.5">
          이메일 <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          required
          placeholder="example@company.com"
          className="w-full px-4 py-3 rounded-lg text-sm bg-white/10 text-white border border-white/20 placeholder:text-blue-300/50 focus:border-white/50 focus:outline-none transition-colors"
        />
      </div>

      {/* 문의 유형 */}
      <div>
        <label className="block text-xs font-semibold text-[#93C5FD] mb-2">
          문의 유형 <span className="text-red-400">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {SERVICE_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setService(type)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${
                service === type
                  ? 'bg-white text-[#0B3D9B] border-white'
                  : 'bg-transparent text-white/70 border-white/25 hover:border-white/50'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* 문의 내용 */}
      <div>
        <label className="block text-xs font-semibold text-[#93C5FD] mb-1.5">문의 내용</label>
        <textarea
          rows={4}
          placeholder="도입하려는 서비스나 해결하고 싶은 문제를 간략히 적어주세요."
          className="w-full px-4 py-3 rounded-lg text-sm bg-white/10 text-white border border-white/20 placeholder:text-blue-300/50 focus:border-white/50 focus:outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-lg text-sm font-bold text-white bg-[#1C5BCC] hover:bg-[#1A4FB0] transition-colors"
      >
        문의 보내기 →
      </button>

      <p className="text-xs text-center text-[#93C5FD]/70">
        영업일 기준 24시간 이내 담당자가 연락드립니다.
      </p>
    </form>
  );
}
