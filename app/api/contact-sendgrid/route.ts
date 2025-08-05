import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, company, email, message } = body

    // バリデーション
    if (!name || !company || !email) {
      return NextResponse.json(
        { error: '必須項目が入力されていません。' },
        { status: 400 }
      )
    }

    // SendGridの設定
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

    const msg = {
      to: process.env.SENDGRID_TO || 'hello@shikanox.io',
      from: process.env.SENDGRID_FROM || 'noreply@shikanox.io',
      subject: `[ShikanoX] お問い合わせ - ${name}様より`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e293b;">ShikanoX お問い合わせフォーム</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>お名前:</strong> ${name}</p>
            <p><strong>会社名:</strong> ${company}</p>
            <p><strong>メールアドレス:</strong> ${email}</p>
            <p><strong>ご相談内容:</strong></p>
            <p style="white-space: pre-wrap;">${message || '未入力'}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
          <p style="color: #64748b; font-size: 12px;">
            送信日時: ${new Date().toLocaleString('ja-JP')}
          </p>
        </div>
      `,
    }

    // メール送信
    try {
      await sgMail.send(msg)
      console.log('Email sent successfully via SendGrid:', { name, company, email })
    } catch (emailError) {
      console.error('SendGrid email sending failed:', emailError)
      // メール送信に失敗しても、フォーム送信は成功として扱う
      console.log('Contact form submission (SendGrid failed):', {
        name,
        company,
        email,
        message,
        timestamp: new Date().toISOString(),
      })
    }

    // 成功レスポンス
    return NextResponse.json(
      { 
        success: true, 
        message: 'お問い合わせを受け付けました。担当者よりご連絡いたします。' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: '送信に失敗しました。しばらく時間をおいて再度お試しください。' },
      { status: 500 }
    )
  }
} 