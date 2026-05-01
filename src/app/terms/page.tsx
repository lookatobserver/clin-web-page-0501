export const metadata = {
  title: '이용약관 | CLIN 주식회사 클인',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Hero bar */}
      <div className="bg-[#0B3D9B] pt-20 pb-10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#93C5FD] text-sm font-semibold mb-1">주식회사 클인(CLIN)</p>
          <h1 className="text-2xl lg:text-3xl font-black text-white">이용약관</h1>
          <p className="text-[#BAD6F9] text-sm mt-2">시행일: 2020년 1월 1일</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 lg:p-12 space-y-10 text-[#0F172A]">

          <Section title="제1조 (목적)">
            <p>
              이 약관은 주식회사 클인(CLIN, 이하 &ldquo;회사&rdquo;)이 제공하는 클라우드 인프라 구축, DevOps, IT 컨설팅 및
              관련 서비스(이하 &ldquo;서비스&rdquo;)의 이용과 관련하여 회사와 이용자 간의 권리·의무 및 책임사항,
              기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </Section>

          <Section title="제2조 (정의)">
            <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
            <ul>
              <li>
                <strong>&ldquo;서비스&rdquo;</strong>란 회사가 제공하는 클라우드 인프라 컨설팅, 아키텍처 설계, DevOps 구축,
                IT 컨설팅, 디지털 마케팅 솔루션 및 이에 부수된 제반 서비스를 의미합니다.
              </li>
              <li>
                <strong>&ldquo;이용자&rdquo;</strong>란 이 약관에 따라 회사와 이용계약을 체결하고 서비스를 이용하는 기업 및 개인을 말합니다.
              </li>
              <li>
                <strong>&ldquo;홈페이지&rdquo;</strong>란 회사가 서비스를 제공하기 위하여 운영하는 인터넷 사이트(cloudinfra.co.kr)를 말합니다.
              </li>
            </ul>
          </Section>

          <Section title="제3조 (약관의 효력 및 변경)">
            <ul>
              <li>이 약관은 홈페이지에 게시함으로써 효력이 발생합니다.</li>
              <li>
                회사는 「약관의 규제에 관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을
                위반하지 않는 범위에서 이 약관을 개정할 수 있습니다.
              </li>
              <li>
                약관을 개정할 경우 적용일자 및 개정 사유를 명시하여 홈페이지에 시행일 7일 이전부터 공지합니다.
                다만, 이용자에게 불리한 내용으로 변경하는 경우에는 30일 이전부터 공지합니다.
              </li>
              <li>
                이용자는 개정된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수 있으며,
                시행일 이후에도 서비스를 계속 이용하면 개정 약관에 동의한 것으로 간주됩니다.
              </li>
            </ul>
          </Section>

          <Section title="제4조 (서비스 제공 및 변경)">
            <ul>
              <li>회사는 다음과 같은 서비스를 제공합니다.
                <ul className="mt-1 ml-4">
                  <li>클라우드 인프라(AWS · Azure · OCI) 아키텍처 설계 및 구축</li>
                  <li>Kubernetes · MSA · DevOps CI/CD 파이프라인 구축</li>
                  <li>Terraform 기반 IaC 자동화 및 클라우드 운영 최적화</li>
                  <li>제로트러스트 보안 네트워크 구성 및 컨설팅</li>
                  <li>애플리케이션 개발 및 시스템 통합</li>
                  <li>데이터 분석 기반 디지털 마케팅 솔루션</li>
                  <li>기타 회사가 정하는 IT 관련 서비스</li>
                </ul>
              </li>
              <li>
                회사는 서비스의 내용, 품질 향상 등을 위해 서비스를 변경할 수 있으며,
                이 경우 변경된 서비스의 내용 및 제공일자를 명시하여 사전에 공지합니다.
              </li>
            </ul>
          </Section>

          <Section title="제5조 (서비스 이용 신청 및 계약 체결)">
            <ul>
              <li>서비스 이용 신청은 홈페이지의 문의 폼 또는 이메일(info@cloudinfra.co.kr)을 통해 할 수 있습니다.</li>
              <li>
                회사는 신청에 대하여 승낙하는 것을 원칙으로 하나, 다음 각 호의 경우에는 승낙하지 않거나 취소할 수 있습니다.
                <ul className="mt-1 ml-4">
                  <li>실명이 아니거나 타인의 명의를 이용한 경우</li>
                  <li>허위 정보를 기재하거나 회사가 제시하는 내용을 기재하지 않은 경우</li>
                  <li>법령 위반 또는 공서양속을 저해할 우려가 있는 경우</li>
                </ul>
              </li>
              <li>구체적인 서비스 범위, 금액, 기간 등은 별도의 계약서를 통해 확정됩니다.</li>
            </ul>
          </Section>

          <Section title="제6조 (이용자의 의무)">
            <p>이용자는 다음 행위를 하여서는 안 됩니다.</p>
            <ul>
              <li>회사의 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제, 유통, 이용하는 행위</li>
              <li>회사 또는 제3자의 지식재산권, 명예, 신용, 기타 권리를 침해하는 행위</li>
              <li>서비스 운영을 방해하거나 불법적인 방법으로 서비스를 이용하는 행위</li>
              <li>관련 법령 또는 이 약관의 규정에 위반하는 행위</li>
            </ul>
          </Section>

          <Section title="제7조 (회사의 의무)">
            <ul>
              <li>회사는 관련 법령과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 지속적·안정적으로 서비스를 제공하기 위해 노력합니다.</li>
              <li>회사는 이용자가 안전하게 서비스를 이용할 수 있도록 개인정보 보호를 위한 보안 시스템을 갖추어야 합니다.</li>
              <li>회사는 서비스 이용과 관련한 이용자의 불만 또는 피해구제 요청을 적절하게 처리할 수 있도록 노력합니다.</li>
            </ul>
          </Section>

          <Section title="제8조 (지식재산권)">
            <ul>
              <li>
                회사가 제공하는 서비스 결과물(보고서, 아키텍처 문서, 소스코드 등)의 지식재산권 귀속은
                별도 계약서에 따르며, 별도 약정이 없는 경우 해당 결과물의 저작권은 회사에 귀속됩니다.
              </li>
              <li>이용자는 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 제3자에게 제공하거나 상업적으로 이용할 수 없습니다.</li>
            </ul>
          </Section>

          <Section title="제9조 (면책 조항)">
            <ul>
              <li>
                회사는 천재지변, 전쟁, 불가항력적 사유로 서비스를 제공할 수 없는 경우 책임이 면제됩니다.
              </li>
              <li>
                회사는 이용자의 귀책 사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다.
              </li>
              <li>
                회사는 이용자가 서비스와 관련하여 기대하는 수익을 얻지 못하거나 손실이 발생한 경우에 대해
                별도 계약에 명시된 범위 외의 책임을 지지 않습니다.
              </li>
              <li>
                회사가 제공하는 정보, 자료 등은 참고 목적으로만 활용되어야 하며,
                이를 근거로 한 이용자의 결정에 대한 책임은 이용자에게 있습니다.
              </li>
            </ul>
          </Section>

          <Section title="제10조 (손해배상)">
            <p>
              회사의 고의 또는 중과실로 인하여 이용자에게 손해가 발생한 경우 회사는 그 손해를 배상합니다.
              단, 회사의 손해배상 범위는 별도 계약서에 명시된 한도를 초과하지 않으며,
              간접 손해, 특별 손해, 결과적 손해는 배상 범위에서 제외됩니다.
            </p>
          </Section>

          <Section title="제11조 (분쟁 해결)">
            <ul>
              <li>회사와 이용자 간에 발생한 분쟁은 원만한 협의로 해결하는 것을 원칙으로 합니다.</li>
              <li>협의가 이루어지지 않을 경우 「콘텐츠산업진흥법」 제29조의 규정에 따른 콘텐츠분쟁조정위원회에 조정을 신청할 수 있습니다.</li>
              <li>소송이 제기될 경우 회사의 소재지를 관할하는 법원을 전속 관할 법원으로 합니다.</li>
            </ul>
          </Section>

          <Section title="제12조 (준거법)">
            <p>이 약관의 해석 및 적용은 대한민국 법령에 따릅니다.</p>
          </Section>

          <p className="text-xs text-[#94A3B8] border-t border-[#E2E8F0] pt-6">
            공고일자: 2020년 1월 1일 &nbsp;|&nbsp; 시행일자: 2020년 1월 1일
          </p>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3D9B] hover:text-[#072B72] transition-colors">
            ← 메인 페이지로 돌아가기
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Shared sub-components ── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-base font-bold text-[#0B3D9B] mb-3 pb-2 border-b border-[#E2E8F0]">{title}</h2>
      <div className="text-sm leading-relaxed text-[#334155] space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
        {children}
      </div>
    </section>
  );
}
