import ContactForm from '@/components/ContactForm';

/* ============================================================
   CLIN — 주식회사 클인 Landing Page  (Server Component)
   ============================================================ */

/* ── Shared helpers ── */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 bg-[#EBF1FB] text-[#0B3D9B]">
      {children}
    </span>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[#0F172A]">{children}</h2>;
}

function Lead({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-lg leading-relaxed text-[#475569] max-w-2xl">{children}</p>;
}

/* ============================================================
   1. HERO
   ============================================================ */
function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen pt-16 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #072B72 0%, #0B3D9B 55%, #1C5BCC 100%)' }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Glow blobs */}
      <div className="absolute right-0 top-1/4 w-[520px] h-[520px] rounded-full opacity-10 bg-[#3B7DFF]" style={{ filter: 'blur(90px)' }} />
      <div className="absolute -left-20 bottom-1/4 w-[360px] h-[360px] rounded-full opacity-10 bg-[#60A5FA]" style={{ filter: 'blur(70px)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36 w-full">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 bg-white/10 text-[#93C5FD]">
            Cloud · DevOps · Consulting
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white animate-fade-up">
            <span className="text-[#FCD34D]">클</span>라우드{' '}
            <span className="text-[#FCD34D]">인</span>프라로<br />
            비즈니스의 혁신을 이끄는<br />
            <span className="text-[#93C5FD]">완벽한 IT 파트너</span>,<br />
            주식회사 클인(CLIN)
          </h1>

          <p className="mt-6 text-base lg:text-lg leading-relaxed text-[#BAD6F9] animate-fade-up animate-delay-100">
            23년 경력의 멀티 클라우드(AWS, Azure, OCI) 아키텍처 구축 노하우부터<br className="hidden md:block" />
            개발, 디지털 마케팅까지 통합 솔루션을 제공합니다.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-200">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-base font-bold text-white bg-[#1C5BCC] hover:bg-[#1A4FB0] transition-colors"
            >
              도입 문의하기 →
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-colors"
            >
              서비스 살펴보기
            </a>
          </div>

          {/* Key stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-up animate-delay-300">
            {[
              { value: '23년', label: 'IT 전문 경력' },
              { value: '3종', label: '멀티클라우드 전문' },
              { value: '10+', label: '엔터프라이즈 레퍼런스' },
              { value: '24/7', label: '운영 지원' },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-white/20 pl-4">
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-xs mt-0.5 text-[#93C5FD]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   2. ABOUT US
   ============================================================ */
const certifications = [
  { badge: 'AWS', name: 'Solutions Architect Professional', color: '#FF9900' },
  { badge: 'AWS', name: 'DevOps Engineer Professional', color: '#FF9900' },
  { badge: 'Azure', name: 'Solutions Architect Expert', color: '#0078D4' },
];

const competencies = [
  { icon: '☁️', label: 'OCI · Azure · AWS 멀티클라우드 아키텍처 설계' },
  { icon: '⚙️', label: 'Kubernetes / MSA 환경 구축 및 운영' },
  { icon: '📝', label: 'Terraform 기반 Infrastructure as Code (IaC)' },
  { icon: '🔒', label: '제로트러스트 보안 네트워크 설계' },
  { icon: '🔄', label: 'CI/CD DevOps 파이프라인 구축' },
  { icon: '🤝', label: '개발 · 마케팅 통합 솔루션 제공' },
];

function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left — Text */}
          <div>
            <Tag>About Us</Tag>
            <H2>
              23년 IT 전문가,<br />
              <span className="text-[#0B3D9B]">박정민 대표 아키텍트</span>
            </H2>
            <p className="mt-5 text-base leading-relaxed text-[#475569]">
              주식회사 클인(CLIN)은 23년간 국내 최대 엔터프라이즈 기업의 클라우드 전환과
              인프라 운영을 선도해 온 전문가가 설립한 IT 통합 솔루션 기업입니다.
              클라우드 아키텍처 설계부터 애플리케이션 개발, 디지털 마케팅까지
              기업의 디지털 혁신 전 과정을 원스톱으로 지원합니다.
            </p>

            {/* Certifications */}
            <div className="mt-8">
              <p className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-3">
                글로벌 클라우드 자격증
              </p>
              <div className="flex flex-col gap-2.5">
                {certifications.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[#E2E8F0] bg-[#F5F7FA]"
                  >
                    <span
                      className="shrink-0 text-xs font-black px-2 py-0.5 rounded text-white"
                      style={{ background: c.color }}
                    >
                      {c.badge}
                    </span>
                    <span className="text-sm font-semibold text-[#0F172A]">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Competencies */}
          <div className="mt-12 lg:mt-0">
            <p className="text-xs font-bold tracking-widest uppercase text-[#94A3B8] mb-5">
              핵심 역량
            </p>
            <div className="grid grid-cols-1 gap-3">
              {competencies.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-4 px-5 py-4 rounded-xl border border-[#E2E8F0] bg-[#F5F7FA] hover:border-[#0B3D9B]/30 hover:bg-[#EBF1FB] transition-colors"
                >
                  <span className="text-xl shrink-0">{c.icon}</span>
                  <span className="text-sm font-medium text-[#0F172A]">{c.label}</span>
                </div>
              ))}
            </div>

            <div
              className="mt-6 rounded-xl p-5 border border-[#D0E2F9] bg-[#EBF1FB]"
            >
              <p className="text-xs font-bold text-[#0B3D9B] uppercase tracking-widest mb-1">창업 철학</p>
              <p className="text-sm leading-relaxed text-[#0F172A]">
                &ldquo;기술은 비즈니스를 위해 존재합니다. CLIN은 고객의 비즈니스 목표를 정확히 이해하고,
                그에 최적화된 기술 솔루션으로 실질적인 성과를 만들어냅니다.&rdquo;
              </p>
              <p className="mt-2 text-xs font-semibold text-[#0B3D9B]">— 박정민 대표 아키텍트</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. SERVICES
   ============================================================ */
const services = [
  {
    icon: '☁️',
    title: 'Cloud Infra',
    subtitle: '클라우드 인프라',
    color: '#0B3D9B',
    lightColor: '#EBF1FB',
    items: [
      '엔터프라이즈 규모 클라우드 마이그레이션',
      '멀티클라우드(AWS·Azure·OCI) 아키텍처 컨설팅',
      'Kubernetes / MSA 인프라 설계 및 구축',
      'Terraform IaC 기반 자동화 운영',
      '24/7 클라우드 운영 최적화',
    ],
  },
  {
    icon: '💻',
    title: 'Development',
    subtitle: '개발',
    color: '#1D4ED8',
    lightColor: '#EFF6FF',
    items: [
      'DevOps CI/CD 파이프라인 구축',
      '엔터프라이즈 애플리케이션 개발',
      'API 설계 및 시스템 통합',
      'MSA 기반 백엔드 아키텍처',
      '레거시 시스템 현대화(Modernization)',
    ],
  },
  {
    icon: '📈',
    title: 'Marketing',
    subtitle: '디지털 마케팅',
    color: '#0E7490',
    lightColor: '#ECFEFF',
    items: [
      '데이터 분석 기반 디지털 마케팅 전략',
      '퍼포먼스 마케팅 운영 및 최적화',
      '마케팅 자동화 솔루션 도입',
      '고객 데이터 플랫폼(CDP) 구축',
      '통합 데이터 대시보드 및 리포팅',
    ],
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <Tag>Services</Tag>
          <H2>세 가지 핵심 서비스</H2>
          <div className="flex justify-center">
            <Lead>
              클라우드 인프라, 개발, 마케팅을 하나의 파트너와 함께 해결합니다.
            </Lead>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-7">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Card header */}
              <div className="px-7 py-6" style={{ background: s.lightColor }}>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: s.color }}
                >
                  <span>{s.icon}</span>
                </div>
                <h3 className="text-xl font-black" style={{ color: s.color }}>{s.title}</h3>
                <p className="text-sm text-[#475569]">{s.subtitle}</p>
              </div>

              {/* Card body */}
              <div className="px-7 py-6 flex-1">
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#475569]">
                      <span className="mt-0.5 shrink-0 text-xs font-bold" style={{ color: s.color }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-7 pb-6">
                <a
                  href="#contact"
                  className="block text-center py-2.5 rounded-lg text-sm font-semibold text-white transition-colors hover:opacity-90"
                  style={{ background: s.color }}
                >
                  상담 문의하기
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. USE CASES — Timeline
   ============================================================ */
const useCases = [
  {
    year: '금융 · 엔터프라이즈',
    color: '#0B3D9B',
    tags: ['AWS', 'EKS', 'Migration'],
    title: '시중 은행 · 생명보험사',
    projects: [
      {
        client: '시중 은행',
        desc: 'O2O 배달 플랫폼 앱 클라우드 인프라 구축. AWS EKS 기반 컨테이너 환경 및 MSA 아키텍처 설계·운영.',
      },
      {
        client: '생명보험사',
        desc: '채널계 시스템 전면 클라우드 마이그레이션. AWS 기반 EKS 클러스터 도입으로 배포 속도 및 안정성 대폭 향상.',
      },
    ],
  },
  {
    year: '멀티클라우드 · AI',
    color: '#0E7490',
    tags: ['OCI', 'Azure', 'AI Agent'],
    title: '국내 주요 해운사',
    projects: [
      {
        client: '국내 주요 해운사',
        desc: 'OCI(Oracle Cloud Infrastructure)와 Azure를 연계한 멀티클라우드 환경 구축. AI Agent 워크로드를 위한 GPU 인스턴스 및 리소스 최적화 세팅 수행.',
      },
    ],
  },
  {
    year: '대규모 인프라 TA',
    color: '#1D4ED8',
    tags: ['Public Cloud', 'Private Cloud', 'TA'],
    title: '통신사 · IT 서비스사 · 유통 대기업',
    projects: [
      {
        client: '국내 주요 통신사',
        desc: '대규모 퍼블릭 클라우드 전환 기술 어드바이저리(TA) 수행. 클라우드 아키텍처 검증 및 마이그레이션 로드맵 수립.',
      },
      {
        client: '대형 IT 서비스사',
        desc: '프라이빗 클라우드 인프라 기술 자문. 하이브리드 클라우드 전략 컨설팅 및 아키텍처 설계 지원.',
      },
      {
        client: '유통 대기업 면세 플랫폼',
        desc: '이커머스 플랫폼 클라우드 인프라 기술 어드바이저리. 대용량 트래픽 처리를 위한 오토스케일링 아키텍처 설계.',
      },
    ],
  },
];

function UseCasesSection() {
  return (
    <section id="usecases" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Tag>Use Cases</Tag>
          <H2>주요 프로젝트 레퍼런스</H2>
          <div className="flex justify-center">
            <Lead>
              국내 주요 대기업과 함께한 검증된 실행력을 확인하세요.
            </Lead>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-[220px] top-0 bottom-0 w-px bg-[#E2E8F0]" />

          <div className="space-y-12">
            {useCases.map((uc, idx) => (
              <div key={idx} className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-12 items-start">
                {/* Left — label */}
                <div className="mb-6 lg:mb-0 lg:text-right lg:pt-1">
                  <span
                    className="inline-block text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full text-white"
                    style={{ background: uc.color }}
                  >
                    {uc.year}
                  </span>
                  <div className="mt-2 flex flex-wrap lg:justify-end gap-1.5">
                    {uc.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold px-2 py-0.5 rounded"
                        style={{ background: `${uc.color}15`, color: uc.color }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — cards */}
                <div className="relative">
                  {/* Timeline dot */}
                  <div
                    className="hidden lg:block absolute -left-[49px] top-2 w-4 h-4 rounded-full border-4 border-white shadow-md"
                    style={{ background: uc.color }}
                  />

                  <h3 className="text-lg font-bold text-[#0F172A] mb-4">{uc.title}</h3>
                  <div className="space-y-3">
                    {uc.projects.map((p) => (
                      <div
                        key={p.client}
                        className="rounded-xl border border-[#E2E8F0] bg-[#F5F7FA] p-5"
                      >
                        <p
                          className="text-xs font-bold mb-1.5"
                          style={{ color: uc.color }}
                        >
                          {p.client}
                        </p>
                        <p className="text-sm leading-relaxed text-[#475569]">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. BLOG
   ============================================================ */
function BlogSection() {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-[#F5F7FA]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <Tag>Blog</Tag>
        <H2>클인(CLIN) 기술 블로그</H2>
        <Lead>
          클라우드 아키텍처, DevOps, 보안, AI 인프라에 관한 실전 기술 문서와
          최신 클라우드 트렌드를 공유합니다.
        </Lead>

        <div className="mt-10 grid sm:grid-cols-3 gap-5 text-left">
          {[
            { icon: '☁️', title: '멀티클라우드 전략', desc: 'OCI·Azure·AWS를 함께 운용하는 실전 아키텍처 패턴' },
            { icon: '⚙️', title: 'Kubernetes & MSA', desc: 'EKS 기반 마이크로서비스 배포 자동화 가이드' },
            { icon: '🔒', title: '제로트러스트 보안', desc: '금융권 컴플라이언스를 충족하는 Zero Trust 구현 전략' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl border border-[#E2E8F0] p-5">
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <h4 className="text-sm font-bold text-[#0F172A] mb-1">{item.title}</h4>
              <p className="text-xs text-[#475569] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://blog.cloudinfra.co.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-base font-bold text-white bg-[#0B3D9B] hover:bg-[#072B72] transition-colors"
          >
            최신 클라우드 트렌드 및 기술 문서 보기
            <span className="text-sm opacity-80">↗</span>
          </a>
          <p className="mt-3 text-xs text-[#94A3B8]">blog.cloudinfra.co.kr — 새 탭으로 열립니다</p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. CONTACT
   ============================================================ */
function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(135deg, #072B72 0%, #0B3D9B 100%)' }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 bg-white/10 text-[#93C5FD]">
            Contact
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
            지금 바로 도입을<br />
            <span className="text-[#93C5FD]">문의하세요</span>
          </h2>
          <p className="mt-4 text-[#BAD6F9]">
            클라우드 인프라, 개발, 마케팅 — 어떤 고민이든 CLIN이 함께합니다.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15 p-7 lg:p-10">
          <ContactForm />
        </div>

        {/* Direct contact info */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6 text-sm text-[#BAD6F9]">
          <span className="flex items-center gap-2">
            <span className="text-[#93C5FD]">📧</span>
            info@cloudinfra.co.kr
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#93C5FD]">🌐</span>
            blog.cloudinfra.co.kr
          </span>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   7. FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="bg-[#050F1C] text-[#64748B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl font-black text-white">CLIN</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#0B3D9B] text-white">
                주식회사 클인
              </span>
            </div>
            <p className="text-xs leading-relaxed">
              클라우드 · 개발 · 마케팅 통합 IT 솔루션 파트너
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs">
            {[
              { label: 'Home', href: '#home' },
              { label: 'About Us', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Use Cases', href: '#usecases' },
              { label: 'Blog', href: '#blog' },
              { label: 'Contact', href: '#contact' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#0F1F30] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span>© 2020 주식회사 클인(CLIN). All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   Page Export
   ============================================================ */
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <UseCasesSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </>
  );
}
