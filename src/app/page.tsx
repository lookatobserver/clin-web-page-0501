import ContactForm from '@/components/ContactForm';

/* ──────────────────────────────────────────────
   CLIN Cloud — Main Landing Page
   Server Component — no event handlers here
   ────────────────────────────────────────────── */

/* ── Shared ── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 bg-[#EBF1FB] text-[#0B3D9B]">
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A]">
      {children}
    </h2>
  );
}

function SectionSub({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-lg leading-relaxed max-w-2xl text-[#475569]">
      {children}
    </p>
  );
}

/* ── 1. Hero ── */
function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen pt-16 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #072B72 0%, #0B3D9B 50%, #1C5BCC 100%)' }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Decorative glows */}
      <div className="absolute -right-32 top-1/4 w-[480px] h-[480px] rounded-full opacity-10 bg-[#3B7DFF]" style={{ filter: 'blur(80px)' }} />
      <div className="absolute -left-16 bottom-1/4 w-[320px] h-[320px] rounded-full opacity-10 bg-[#60A5FA]" style={{ filter: 'blur(60px)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 bg-white/10 text-[#93C5FD]">
            Cloud · MSP · Security · AI
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white animate-fade-up">
            클라우드로<br />
            <span className="text-[#93C5FD]">비즈니스의 내일</span>을<br />
            설계합니다
          </h1>
          <p className="mt-6 text-lg lg:text-xl leading-relaxed text-[#BAD6F9] animate-fade-up animate-delay-100">
            CLIN은 클라우드 전환부터 운영·보안·AI까지,<br className="hidden sm:block" />
            엔터프라이즈 IT 전 영역을 책임지는 전문 파트너입니다.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-200">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-base font-semibold text-white bg-[#1C5BCC] hover:bg-[#1A4FB0] transition-colors"
            >
              무료 상담 시작하기 →
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-colors"
            >
              서비스 둘러보기
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-16 flex flex-wrap gap-8 animate-fade-up animate-delay-300">
            {[
              { value: '500+', label: '고객사' },
              { value: '12년', label: '클라우드 전문 경력' },
              { value: '99.9%', label: 'SLA 가용성' },
              { value: '24/7', label: '운영 지원' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-sm mt-0.5 text-[#93C5FD]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 2. Partner logos strip ── */
const partners = ['AWS', 'Microsoft Azure', 'Google Cloud', 'Oracle', 'Naver Cloud', 'Samsung SDS'];

function PartnersStrip() {
  return (
    <section className="py-12 border-b border-[#E2E8F0] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-widest uppercase mb-8 text-[#94A3B8]">
          글로벌 클라우드 파트너
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((p) => (
            <span key={p} className="text-sm font-bold tracking-tight text-[#CBD5E1]">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 3. Services ── */
const services = [
  {
    icon: '☁️',
    title: '클라우드 마이그레이션',
    desc: '레거시 인프라를 AWS·Azure·GCP로 안전하게 이전. 비용 분석부터 전환, 검증까지 원스톱 제공.',
  },
  {
    icon: '🛠️',
    title: 'Managed Service (MSP)',
    desc: '24/7 모니터링·운영 대행으로 팀은 핵심 비즈니스에 집중. SLA 기반 책임 운영.',
  },
  {
    icon: '🔒',
    title: 'Cloud Security',
    desc: 'CSPM·SIEM·Zero Trust 아키텍처로 클라우드 전 영역의 보안 위협을 사전에 차단.',
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    desc: '데이터 레이크 구축, BI 대시보드, 실시간 파이프라인으로 데이터 기반 의사결정 지원.',
  },
  {
    icon: '⚙️',
    title: 'DevOps / MLOps',
    desc: 'CI/CD 자동화, 컨테이너·쿠버네티스 관리, MLOps 파이프라인으로 개발 속도를 극대화.',
  },
  {
    icon: '🌐',
    title: 'Multi·Hybrid Cloud',
    desc: '복수 클라우드 환경을 하나의 콘솔에서 통합 관리. 벤더 종속 없는 유연한 아키텍처 설계.',
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Services</SectionLabel>
          <SectionHeading>엔터프라이즈 클라우드의 모든 것</SectionHeading>
          <div className="flex justify-center">
            <SectionSub>
              기업이 클라우드에서 마주하는 모든 과제를 CLIN이 함께 해결합니다.
            </SectionSub>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-xl p-7 border border-[#E2E8F0] hover:shadow-md transition-shadow group cursor-default"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-5 bg-[#EBF1FB]">
                {s.icon}
              </div>
              <h3 className="text-base font-bold mb-2 text-[#0F172A] group-hover:text-[#0B3D9B] transition-colors">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#475569]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 4. About / Why CLIN ── */
const strengths = [
  { num: '500+', label: '누적 고객사', sub: '금융·제조·공공·IT' },
  { num: '12년', label: '클라우드 전문 경력', sub: '2013년 창립' },
  { num: '1,200+', label: '완료 프로젝트', sub: '마이그레이션·MSP·보안' },
  { num: '99.9%', label: 'SLA 가용성', sub: '연간 다운타임 < 8h' },
];

function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <SectionLabel>About Us</SectionLabel>
            <SectionHeading>
              단순한 IT 벤더가 아닌<br />
              <span className="text-[#0B3D9B]">전략적 클라우드 파트너</span>
            </SectionHeading>
            <p className="mt-5 text-base leading-relaxed text-[#475569]">
              CLIN은 2013년부터 국내 주요 기업의 클라우드 전환을 선도해 왔습니다.
              기술 컨설팅에서 구축·운영·보안까지 전 주기를 책임지며,
              비즈니스 목표에 맞는 클라우드 전략을 함께 수립합니다.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              AWS Premier Partner, Microsoft Azure Expert MSP,
              Google Cloud Partner를 보유한 멀티클라우드 전문 기업으로,
              고객의 산업과 규모에 최적화된 솔루션을 제공합니다.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold text-white bg-[#0B3D9B] hover:bg-[#072B72] transition-colors"
              >
                회사 소개서 받기 →
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-14 lg:mt-0 grid grid-cols-2 gap-5">
            {strengths.map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-7 border border-[#D0E2F9] bg-[#EBF1FB]"
              >
                <div className="text-3xl font-black text-[#0B3D9B]">{s.num}</div>
                <div className="mt-1 text-sm font-bold text-[#0F172A]">{s.label}</div>
                <div className="mt-0.5 text-xs text-[#475569]">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 5. Use Cases ── */
const useCases = [
  {
    industry: '금융',
    title: '시중은행 코어뱅킹 클라우드 전환',
    desc: '온프레미스 레거시 코어뱅킹 시스템을 하이브리드 클라우드로 전환하여 TCO 37% 절감 및 가용성 99.99% 달성.',
    tags: ['AWS', 'Hybrid Cloud', 'Migration'],
  },
  {
    industry: '제조',
    title: '스마트팩토리 IoT 데이터 플랫폼 구축',
    desc: '생산 라인 IoT 센서 데이터를 실시간 수집·분석하는 클라우드 데이터 플랫폼을 3개월 만에 구축. 불량률 22% 감소.',
    tags: ['Azure', 'IoT', 'Data Analytics'],
  },
  {
    industry: '공공',
    title: '정부기관 사이버보안 강화 프로젝트',
    desc: 'Zero Trust 아키텍처 도입 및 CSPM 솔루션 연동으로 보안 취약점 94% 조기 탐지. 컴플라이언스 100% 충족.',
    tags: ['Security', 'Zero Trust', 'Compliance'],
  },
];

function UseCasesSection() {
  return (
    <section id="usecases" className="py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel>Use Cases</SectionLabel>
          <SectionHeading>고객과 함께 만든 성과</SectionHeading>
          <div className="flex justify-center">
            <SectionSub>
              산업별 레퍼런스로 증명된 CLIN의 실행력을 확인하세요.
            </SectionSub>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-7">
          {useCases.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-xl overflow-hidden border border-[#E2E8F0] flex flex-col"
            >
              <div className="px-6 py-3 text-xs font-bold tracking-widest uppercase text-white bg-[#0B3D9B]">
                {c.industry}
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-base font-bold leading-snug mb-3 text-[#0F172A]">
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1 text-[#475569]">
                  {c.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EBF1FB] text-[#0B3D9B]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contact" className="inline-flex items-center text-sm font-semibold text-[#0B3D9B] hover:text-[#072B72] transition-colors">
            전체 레퍼런스 보기 →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── 6. Blog ── */
const posts = [
  {
    date: '2026. 04. 25',
    tag: '클라우드 전략',
    title: '2026년 멀티클라우드 비용 최적화를 위한 5가지 전략',
    desc: 'FinOps 방법론과 RI/SP 구매 전략을 결합해 클라우드 비용을 30% 이상 절감하는 방법을 소개합니다.',
  },
  {
    date: '2026. 04. 10',
    tag: '보안',
    title: 'Zero Trust 아키텍처, 금융권 도입 가이드',
    desc: '금융보안원 기준을 충족하면서 Zero Trust를 단계적으로 도입하는 로드맵과 실전 사례를 분석합니다.',
  },
  {
    date: '2026. 03. 28',
    tag: 'DevOps',
    title: 'Kubernetes 기반 MLOps 플랫폼 구축 사례',
    desc: '모델 학습부터 배포·모니터링까지 하나의 파이프라인으로 통합한 국내 제조사의 구축 사례를 공개합니다.',
  },
];

function BlogSection() {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <SectionLabel>Blog</SectionLabel>
            <SectionHeading>최신 인사이트</SectionHeading>
          </div>
          <a href="#blog" className="text-sm font-semibold shrink-0 text-[#0B3D9B] hover:text-[#072B72] transition-colors">
            전체 글 보기 →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="h-40 flex items-center justify-center bg-gradient-to-br from-[#072B72] to-[#1C5BCC]">
                <span className="text-3xl opacity-30">📄</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EBF1FB] text-[#0B3D9B]">
                    {p.tag}
                  </span>
                  <span className="text-xs text-[#94A3B8]">{p.date}</span>
                </div>
                <h3 className="text-sm font-bold leading-snug mb-2 text-[#0F172A] group-hover:text-[#0B3D9B] transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#475569]">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 7. CTA Banner ── */
function CTASection() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(135deg, #072B72 0%, #0B3D9B 100%)' }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
          지금 바로 클라우드 전환을<br />
          <span className="text-[#93C5FD]">무료로 진단받으세요</span>
        </h2>
        <p className="mt-5 text-base lg:text-lg text-[#BAD6F9]">
          전문 컨설턴트가 현재 인프라를 분석하고 최적의 클라우드 로드맵을 제안합니다.<br className="hidden sm:block" />
          비용 없이, 부담 없이 시작하세요.
        </p>
        <ContactForm />
        <p className="mt-4 text-xs text-[#93C5FD]">
          영업일 기준 24시간 이내 전문 컨설턴트가 연락드립니다.
        </p>
      </div>
    </section>
  );
}

/* ── 8. Footer ── */
const footerLinks = {
  서비스: ['클라우드 마이그레이션', 'Managed Service', 'Cloud Security', 'Data & Analytics', 'DevOps / MLOps'],
  회사: ['About Us', 'Careers', 'Partners', 'Press', 'Contact'],
  리소스: ['Blog', 'Case Studies', 'Whitepapers', 'Docs', 'FAQ'],
};

function Footer() {
  return (
    <footer className="bg-[#0A1929] text-[#94A3B8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black text-white">CLIN</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0B3D9B] text-white">
                CLOUD
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#64748B]">
              클라우드 전환·운영·보안의<br />모든 것을 책임지는 파트너.
            </p>
            <div className="mt-5 flex gap-3">
              {['in', 'tw', 'yt'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold bg-[#1E2D3D] text-[#94A3B8] hover:text-white transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-bold tracking-widest uppercase mb-4 text-white">{group}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-[#64748B] hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs border-t border-[#1E2D3D] text-[#334155]">
          <span>© 2026 CLIN Cloud Inc. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">보안정책</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Page ── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersStrip />
      <ServicesSection />
      <AboutSection />
      <UseCasesSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </>
  );
}
