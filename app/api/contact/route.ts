import { NextRequest, NextResponse } from 'next/server'

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

    // メール送信のシミュレーション（実際の実装ではnodemailer等を使用）
    console.log('Contact Form Submission:', {
      name,
      company,
      email,
      message,
      timestamp: new Date().toISOString(),
    })

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