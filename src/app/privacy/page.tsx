export const metadata = {
  title: '개인정보처리방침 | CLIN 주식회사 클인',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Hero bar */}
      <div className="bg-[#0B3D9B] pt-20 pb-10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#93C5FD] text-sm font-semibold mb-1">주식회사 클인(CLIN)</p>
          <h1 className="text-2xl lg:text-3xl font-black text-white">개인정보처리방침</h1>
          <p className="text-[#BAD6F9] text-sm mt-2">시행일: 2020년 1월 1일</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 lg:p-12 space-y-10 text-[#0F172A]">

          <Section title="제1조 (개인정보처리방침의 목적)">
            <p>
              주식회사 클인(CLIN, 이하 &ldquo;회사&rdquo;)은 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고
              이와 관련한 고충을 신속하게 처리할 수 있도록 다음과 같이 개인정보처리방침을 수립·공개합니다.
            </p>
          </Section>

          <Section title="제2조 (개인정보의 처리 목적)">
            <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로 사용되지 않으며,
            이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
            <ul>
              <li>홈페이지 문의 접수 및 처리: 이름, 회사명, 이메일 주소, 문의 내용</li>
              <li>서비스 도입 상담 및 컨설팅 제안</li>
              <li>계약 체결 및 이행, 서비스 제공</li>
              <li>고객 불만 처리 및 분쟁 조정</li>
            </ul>
          </Section>

          <Section title="제3조 (처리하는 개인정보의 항목)">
            <p>회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
            <Table
              headers={['구분', '수집 항목', '수집 방법']}
              rows={[
                ['필수', '이름, 회사명, 이메일 주소', '홈페이지 문의 폼'],
                ['선택', '문의 유형, 문의 내용', '홈페이지 문의 폼'],
              ]}
            />
            <p className="mt-3 text-sm text-[#475569]">
              ※ 서비스 이용 과정에서 IP 주소, 쿠키, 서비스 이용 기록 등이 자동으로 생성되어 수집될 수 있습니다.
            </p>
          </Section>

          <Section title="제4조 (개인정보의 처리 및 보유 기간)">
            <p>회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보
            보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
            <Table
              headers={['처리 목적', '보유 기간']}
              rows={[
                ['홈페이지 문의 처리', '문의 처리 완료 후 1년'],
                ['계약 관련 정보', '계약 종료 후 5년 (상법)'],
                ['세금계산서 등 거래 기록', '5년 (부가가치세법)'],
              ]}
            />
          </Section>

          <Section title="제5조 (개인정보의 제3자 제공)">
            <p>
              회사는 정보주체의 개인정보를 제2조에서 명시한 목적 범위 내에서만 처리하며,
              정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
              현재 회사는 개인정보를 제3자에게 제공하지 않습니다.
            </p>
          </Section>

          <Section title="제6조 (개인정보처리의 위탁)">
            <p>
              회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
            </p>
            <Table
              headers={['수탁사', '위탁 업무', '보유·이용 기간']}
              rows={[
                ['Resend Inc.', '이메일 발송 서비스', '위탁 계약 종료 시까지'],
              ]}
            />
            <p className="mt-3 text-sm text-[#475569]">
              위탁 계약 시 「개인정보 보호법」 제26조에 따라 위탁업무 수행 목적 외 개인정보 처리 금지,
              기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등의 내용을 계약서에 명시하고 있습니다.
            </p>
          </Section>

          <Section title="제7조 (정보주체의 권리·의무 및 행사 방법)">
            <p>정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
            <ul>
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리 정지 요구</li>
            </ul>
            <p>
              권리 행사는 이메일(<strong>info@cloudinfra.co.kr</strong>)로 요청하실 수 있으며,
              회사는 지체 없이 조치하겠습니다.
            </p>
          </Section>

          <Section title="제8조 (처리하는 개인정보의 안전성 확보 조치)">
            <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
            <ul>
              <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육</li>
              <li>기술적 조치: 개인정보처리시스템 접근 권한 관리, 접근통제시스템 설치, 개인정보 암호화, 보안 프로그램 설치</li>
              <li>물리적 조치: 전산실, 자료보관실 등의 접근 통제</li>
            </ul>
          </Section>

          <Section title="제9조 (개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항)">
            <p>
              회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용 정보를 저장하고 수시로 불러오는 쿠키(cookie)를
              사용할 수 있습니다. 이용자는 웹브라우저 옵션 설정을 통해 쿠키 허용, 차단 등을 선택할 수 있습니다.
              다만, 쿠키 저장을 거부할 경우 일부 서비스 이용에 어려움이 있을 수 있습니다.
            </p>
          </Section>

          <Section title="제10조 (개인정보 보호책임자)">
            <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 정보주체의 불만 처리 및 피해구제 등을 위하여
            아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
            <div className="mt-3 bg-[#EBF1FB] rounded-xl p-5 text-sm">
              <p className="font-bold text-[#0B3D9B] mb-2">개인정보 보호책임자</p>
              <p>성명: 박정민</p>
              <p>직책: 대표</p>
              <p>이메일: info@cloudinfra.co.kr</p>
            </div>
          </Section>

          <Section title="제11조 (개인정보 처리방침 변경)">
            <p>
              이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경 내용의 추가, 삭제 및 정정이 있는 경우에는
              변경사항의 시행 7일 전부터 홈페이지를 통하여 고지할 것입니다.
            </p>
          </Section>

          <Section title="제12조 (권익침해 구제 방법)">
            <p>정보주체는 아래의 기관에 개인정보 침해에 대한 피해구제, 상담 등을 문의할 수 있습니다.</p>
            <ul>
              <li>개인정보 침해신고센터: (국번없이) 118 / privacy.kisa.or.kr</li>
              <li>개인정보 분쟁조정위원회: 1833-6972 / www.kopico.go.kr</li>
              <li>대검찰청: (국번없이) 1301 / www.spo.go.kr</li>
              <li>경찰청: (국번없이) 182 / ecrm.cyber.go.kr</li>
            </ul>
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
      <div className="text-sm leading-relaxed text-[#334155] space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
        {children}
      </div>
    </section>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mt-3">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-[#EBF1FB]">
            {headers.map((h) => (
              <th key={h} className="text-left px-4 py-2.5 text-xs font-bold text-[#0B3D9B] border border-[#D0E2F9]">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="even:bg-[#F8FAFC]">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2.5 border border-[#E2E8F0] text-[#334155]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
