'use client';

import { useState } from 'react';

const SERVICE_TYPES = ['클라우드 인프라', '개발', '마케팅', '기타'];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, company, email, service, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || '오류가 발생했습니다. 다시 시도해주세요.');
        setStatus('error');
      } else {
        setStatus('success');
      }
    } catch {
      setErrorMsg('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      setStatus('error');
    }
  }

  /* ── Success state ── */
  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-5">✅</div>
        <h3 className="text-lg font-bold text-white mb-2">문의가 접수되었습니다!</h3>
        <p className="text-[#BAD6F9] text-sm leading-relaxed">
          <strong className="text-white">{name}</strong>님의 문의를{' '}
          <strong className="text-white">info@cloudinfra.co.kr</strong>로 전달했습니다.<br />
          영업일 기준 24시간 이내 담당자가 연락드리겠습니다.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setName(''); setCompany(''); setEmail(''); setService(''); setMessage('');
          }}
          className="mt-6 text-xs text-[#93C5FD] underline underline-offset-2"
        >
          새 문의하기
        </button>
      </div>
    );
  }

  const isLoading = status === 'loading';

  /* ── Form ── */
  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      {/* 이름 + 회사명 */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#93C5FD] mb-1.5">
            이름 <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            disabled={isLoading}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="홍길동"
            className="w-full px-4 py-3 rounded-lg text-sm bg-white/10 text-white border border-white/20 placeholder:text-blue-300/50 focus:border-white/50 focus:outline-none transition-colors disabled:opacity-50"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#93C5FD] mb-1.5">
            회사명 <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            disabled={isLoading}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="주식회사 예시"
            className="w-full px-4 py-3 rounded-lg text-sm bg-white/10 text-white border border-white/20 placeholder:text-blue-300/50 focus:border-white/50 focus:outline-none transition-colors disabled:opacity-50"
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
          disabled={isLoading}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@company.com"
          className="w-full px-4 py-3 rounded-lg text-sm bg-white/10 text-white border border-white/20 placeholder:text-blue-300/50 focus:border-white/50 focus:outline-none transition-colors disabled:opacity-50"
        />
      </div>

      {/* 문의 유형 */}
      <div>
        <label className="block text-xs font-semibold text-[#93C5FD] mb-2">문의 유형</label>
        <div className="flex flex-wrap gap-2">
          {SERVICE_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              disabled={isLoading}
              onClick={() => setService(service === type ? '' : type)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors disabled:opacity-50 ${
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
          disabled={isLoading}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="도입하려는 서비스나 해결하고 싶은 문제를 간략히 적어주세요."
          className="w-full px-4 py-3 rounded-lg text-sm bg-white/10 text-white border border-white/20 placeholder:text-blue-300/50 focus:border-white/50 focus:outline-none transition-colors resize-none disabled:opacity-50"
        />
      </div>

      {/* Error message */}
      {status === 'error' && (
        <p className="text-sm text-red-300 bg-red-900/30 border border-red-500/30 rounded-lg px-4 py-3">
          ⚠️ {errorMsg}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3.5 rounded-lg text-sm font-bold text-white bg-[#1C5BCC] hover:bg-[#1A4FB0] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            전송 중…
          </>
        ) : (
          '문의 보내기 →'
        )}
      </button>

      <p className="text-xs text-center text-[#93C5FD]/70">
        접수된 문의는 <strong className="text-[#93C5FD]">info@cloudinfra.co.kr</strong>로 전달됩니다.
      </p>
    </form>
  );
}
