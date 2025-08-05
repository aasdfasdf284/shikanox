import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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

    // Gmail SMTPの設定
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // アプリパスワードを使用
      },
      secure: false, // TLSを使用
      port: 587,
    })

    // メールの内容
    const mailOptions = {
      from: `"ShikanoX お問い合わせフォーム" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || 'hello@shikanox.io',
      replyTo: email, // 返信先を設定
      subject: `[ShikanoX] お問い合わせ - ${name}様より`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <div style="background-color: #1e293b; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">ShikanoX お問い合わせフォーム</h1>
          </div>
          
          <div style="padding: 30px; background-color: #ffffff;">
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1e293b; margin-top: 0;">お問い合わせ内容</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">お名前:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">会社名:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">${company}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">メールアドレス:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">
                    <a href="mailto:${email}" style="color: #3b82f6;">${email}</a>
                  </td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
              <h3 style="color: #1e293b; margin-top: 0;">ご相談内容</h3>
              <div style="white-space: pre-wrap; line-height: 1.6; color: #374151;">
                ${message || '未入力'}
              </div>
            </div>
          </div>
          
          <div style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #64748b; font-size: 12px;">
            <p style="margin: 0;">送信日時: ${new Date().toLocaleString('ja-JP')}</p>
            <p style="margin: 5px 0 0 0;">このメールはShikanoXのお問い合わせフォームから送信されました。</p>
          </div>
        </div>
      `,
    }

    // メール送信
    try {
      await transporter.sendMail(mailOptions)
      console.log('Email sent successfully via Gmail:', { name, company, email })
    } catch (emailError) {
      console.error('Gmail email sending failed:', emailError)
      // メール送信に失敗しても、フォーム送信は成功として扱う
      console.log('Contact form submission (Gmail failed):', {
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