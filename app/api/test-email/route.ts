import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    console.log('=== EMAIL TEST START ===')
    
    // 環境変数の確認
    console.log('Environment variables check:')
    console.log('XSERVER_EMAIL_PASS exists:', !!process.env.XSERVER_EMAIL_PASS)
    console.log('XSERVER_EMAIL_PASS length:', process.env.XSERVER_EMAIL_PASS?.length)
    
    if (!process.env.XSERVER_EMAIL_PASS) {
      return NextResponse.json(
        { error: 'XSERVER_EMAIL_PASS is not set' },
        { status: 500 }
      )
    }

    // Xserver SMTPの設定
    console.log('Setting up SMTP transporter...')
    const transporter = nodemailer.createTransport({
      host: 'sv7209.xserver.jp', // Xserverの正しいSMTPサーバー
      port: 587,
      secure: false,
      auth: {
        user: 'hello@shikanox.io',
        pass: process.env.XSERVER_EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // テストメールの内容
    const mailOptions = {
      from: '"Test" <hello@shikanox.io>',
      to: 'hello@shikanox.io',
      subject: '[TEST] Email Test',
      text: 'This is a test email from ShikanoX contact form.',
      html: '<h1>Test Email</h1><p>This is a test email from ShikanoX contact form.</p>',
    }

    console.log('Attempting to send test email...')
    
    try {
      await transporter.sendMail(mailOptions)
      console.log('Test email sent successfully!')
      return NextResponse.json(
        { success: true, message: 'Test email sent successfully' },
        { status: 200 }
      )
    } catch (emailError) {
      console.error('Test email failed:', emailError)
      console.error('Error details:', {
        message: emailError.message,
        code: emailError.code,
        command: emailError.command,
        responseCode: emailError.responseCode,
        response: emailError.response
      })
      
      return NextResponse.json(
        { 
          success: false, 
          error: 'Test email failed',
          details: {
            message: emailError.message,
            code: emailError.code,
            command: emailError.command,
            responseCode: emailError.responseCode,
            response: emailError.response
          }
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Test email route error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 