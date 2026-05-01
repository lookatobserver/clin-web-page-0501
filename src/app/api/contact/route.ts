import type { NextRequest } from 'next/server';

const TO = 'info@cloudinfra.co.kr';
const FROM = 'CLIN 문의폼 <noreply@cloudinfra.co.kr>';

function buildHtml(fields: {
  name: string;
  company: string;
  email: string;
  service: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html lang="ko">
<head><meta charset="UTF-8"><title>CLIN 문의</title></head>
<body style="font-family:sans-serif;background:#f5f7fa;margin:0;padding:32px;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
    <div style="background:linear-gradient(135deg,#072B72,#0B3D9B);padding:28px 32px;">
      <h1 style="color:#fff;margin:0;font-size:20px;font-weight:900;letter-spacing:-0.5px;">CLIN 홈페이지 문의</h1>
      <p style="color:#93C5FD;margin:6px 0 0;font-size:13px;">주식회사 클인(CLIN) — 새로운 문의가 접수되었습니다</p>
    </div>
    <div style="padding:28px 32px;">
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr style="border-bottom:1px solid #f1f5f9;">
          <td style="padding:12px 0;color:#64748b;width:96px;font-weight:600;">이름</td>
          <td style="padding:12px 0;color:#0f172a;font-weight:700;">${fields.name}</td>
        </tr>
        <tr style="border-bottom:1px solid #f1f5f9;">
          <td style="padding:12px 0;color:#64748b;font-weight:600;">회사명</td>
          <td style="padding:12px 0;color:#0f172a;">${fields.company}</td>
        </tr>
        <tr style="border-bottom:1px solid #f1f5f9;">
          <td style="padding:12px 0;color:#64748b;font-weight:600;">이메일</td>
          <td style="padding:12px 0;"><a href="mailto:${fields.email}" style="color:#0B3D9B;">${fields.email}</a></td>
        </tr>
        <tr style="border-bottom:1px solid #f1f5f9;">
          <td style="padding:12px 0;color:#64748b;font-weight:600;">문의 유형</td>
          <td style="padding:12px 0;">
            <span style="background:#EBF1FB;color:#0B3D9B;font-size:12px;font-weight:700;padding:3px 10px;border-radius:20px;">
              ${fields.service || '미선택'}
            </span>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 0;color:#64748b;font-weight:600;vertical-align:top;">문의 내용</td>
          <td style="padding:12px 0;color:#0f172a;line-height:1.7;white-space:pre-wrap;">${fields.message || '(내용 없음)'}</td>
        </tr>
      </table>
    </div>
    <div style="background:#f8fafc;padding:16px 32px;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8;">
      이 메일은 <a href="https://cloudinfra.co.kr" style="color:#0B3D9B;">cloudinfra.co.kr</a> 문의 폼에서 자동 발송되었습니다.
      답장 시 발신자(${fields.email})에게 직접 전달됩니다.
    </div>
  </div>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'Email service not configured.' }, { status: 503 });
  }

  let body: { name: string; company: string; email: string; service: string; message: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, company, email, service, message } = body;
  if (!name || !company || !email) {
    return Response.json({ error: '필수 항목(이름·회사명·이메일)을 입력해주세요.' }, { status: 400 });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `[CLIN 문의] ${service || '일반'} — ${name} (${company})`,
      html: buildHtml({ name, company, email, service, message }),
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    console.error('Resend error:', err);
    return Response.json({ error: '이메일 발송에 실패했습니다. 잠시 후 다시 시도해주세요.' }, { status: 502 });
  }

  return Response.json({ success: true });
}
