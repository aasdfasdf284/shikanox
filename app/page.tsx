import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import { Search, Zap, Rocket, CheckCircle, RefreshCw, Bot, DollarSign, Building2, Scale } from 'lucide-react'

export default function Home() {
  return (
    <main className="bg-slate-900 text-white">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen relative overflow-hidden">
          {/* Background with image */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='1920' height='1080' viewBox='0 0 1920 1080' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230f172a;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%231e293b;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%230f172a;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='200' cy='200' r='2'/%3E%3Ccircle cx='400' cy='300' r='1.5'/%3E%3Ccircle cx='600' cy='150' r='1'/%3E%3Ccircle cx='800' cy='400' r='2.5'/%3E%3Ccircle cx='1000' cy='250' r='1.8'/%3E%3Ccircle cx='1200' cy='350' r='1.2'/%3E%3Ccircle cx='1400' cy='200' r='2.2'/%3E%3Ccircle cx='1600' cy='450' r='1.6'/%3E%3Ccircle cx='1800' cy='300' r='1.4'/%3E%3Ccircle cx='200' cy='600' r='1.9'/%3E%3Ccircle cx='400' cy='700' r='1.3'/%3E%3Ccircle cx='600' cy='550' r='2.1'/%3E%3Ccircle cx='800' cy='800' r='1.7'/%3E%3Ccircle cx='1000' cy='650' r='1.1'/%3E%3Ccircle cx='1200' cy='750' r='2.3'/%3E%3Ccircle cx='1400' cy='600' r='1.5'/%3E%3Ccircle cx='1600' cy='850' r='1.8'/%3E%3Ccircle cx='1800' cy='700' r='1.2'/%3E%3Ccircle cx='200' cy='1000' r='2.4'/%3E%3Ccircle cx='400' cy='1100' r='1.4'/%3E%3Ccircle cx='600' cy='950' r='1.6'/%3E%3Ccircle cx='800' cy='1200' r='1.9'/%3E%3Ccircle cx='1000' cy='1050' r='1.3'/%3E%3Ccircle cx='1200' cy='1150' r='2.0'/%3E%3Ccircle cx='1400' cy='1000' r='1.7'/%3E%3Ccircle cx='1600' cy='1250' r='1.5'/%3E%3Ccircle cx='1800' cy='1100' r='1.8'/%3E%3C/g%3E%3Cg fill='%23ffffff' fill-opacity='0.01'%3E%3Cpath d='M0 0 L1920 0 L1920 1080 L0 1080 Z' stroke='%23ffffff' stroke-width='1' stroke-opacity='0.1' fill='none'/%3E%3Cpath d='M0 0 L1920 1080' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.05'/%3E%3Cpath d='M1920 0 L0 1080' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.05'/%3E%3C/g%3E%3C/svg%3E")`
              }}
            ></div>
            {/* Additional overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/50"></div>
          </div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-700/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-slate-800/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          </div>
          
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                  <span className="text-sm font-accent text-white/70 tracking-wide">グローバル・イノベーション</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-heading mb-8 leading-tight text-balance tracking-tight">
                <span className="bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 bg-clip-text text-transparent font-english tracking-tight">
                  制度 × 技術 × 資金
                </span>
                <br />
                <span className="text-white font-body tracking-tight">
                  組み合わせて、事業にする。
                </span>
                <br />
                <span className="text-xl md:text-2xl text-white/60 font-body font-light tracking-wide">
                  誰にも真似できない方法で。
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed text-balance font-body tracking-wide">
                ShikanoXは、補助金・公的融資・技術開発を「つなぐ設計図」を描くチームです。
                <br />
                制度に従うのではなく、制度を読み替え、再構成し、企業や地域の挑戦を動かします。
                <br />
                構想から実装まで、点ではなく、線と構造で支える——それが私たちの仕事です。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="group relative px-8 py-3 bg-slate-800 text-white font-accent rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-600/50"
                >
                  <span className="relative z-10">無料相談を申し込む</span>
                </a>
                <a
                  href="#services"
                  className="group px-8 py-3 border border-white/20 text-white font-accent rounded-lg hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
                >
                  できることを見る
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Strengths Section */}
        <section id="strengths" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading mb-6 text-balance">
                <span className="bg-gradient-to-r from-slate-300 to-slate-200 bg-clip-text text-transparent font-english">
                  私たちの強み
                </span>
                <br />
                <span className="text-white/60 text-xl md:text-2xl font-body font-light">Why ShikanoX</span>
              </h2>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-white/90 mb-8 leading-relaxed font-body">
                    ShikanoXの最大の強みは、「制度 × 技術 × 資金」を一体で組み立てる構造設計力です。
                  </p>
                  <p className="text-lg text-white/90 mb-8 leading-relaxed font-body">
                    多くの支援者は、補助金の申請だけ、技術導入だけ、融資だけを扱います。
                    <br />
                    しかし、制度の本質は、それ単体では機能しません。組み合わせてこそ、力になります。
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                  <h3 className="text-xl font-heading text-white mb-6">私たちは、</h3>
                  <ul className="space-y-4 text-base text-white/90 font-body">
                    <li className="flex items-start">
                      <Zap className="text-slate-300 font-accent mr-4 w-5 h-5 flex-shrink-0 mt-0.5" />
                      補助金制度そのものを"読み解き"、設計に組み込むことができ、
                    </li>
                    <li className="flex items-start">
                      <Building2 className="text-slate-300 font-accent mr-4 w-5 h-5 flex-shrink-0 mt-0.5" />
                      技術開発の方向性を制度に合わせて調整し、
                    </li>
                    <li className="flex items-start">
                      <DollarSign className="text-slate-300 font-accent mr-4 w-5 h-5 flex-shrink-0 mt-0.5" />
                      資金調達のタイミングと規模を最適化できる
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-slate-300 font-accent mr-4 w-5 h-5 flex-shrink-0 mt-0.5" />
                      唯一無二の専門チームです。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-white/5 backdrop-blur-sm p-12 rounded-xl border border-white/10">
                <div className="space-y-8 text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  <p>
                    補助金は、ただの資金源ではありません。
                    <br />
                    技術は、ただのツールではありません。
                    <br />
                    融資は、ただの借金ではありません。
                  </p>
                  
                  <p>
                    それぞれを単体で見るのではなく、
                    <br />
                    制度・技術・資金の重なりから事業を組み立てること。
                    <br />
                    そこに、私たちShikanoXが果たすべき役割があります。
                  </p>
                  
                  <p>
                    世の中には、制度に詳しい人がいます。
                    <br />
                    技術が作れる人も、金融に強い人もいます。
                    <br />
                    でも、それらを"一つの構造として事業化できる人"は、ほとんどいません。
                  </p>
                  
                  <p>
                    私たちは、その"つなぐ力"を担い、
                    <br />
                    企業と地域が新しい成長を掴むための「制度的な舞台」を用意していきます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading mb-6 text-balance">
                <span className="bg-gradient-to-r from-slate-300 to-slate-200 bg-clip-text text-transparent font-english">
                  提供サービス
                </span>
                <br />
                <span className="text-white/60 text-xl md:text-2xl font-body font-light">Our Services</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="mb-4">
                  <Bot className="w-12 h-12 text-slate-300" />
                </div>
                <h3 className="text-2xl font-heading text-white mb-4">【1】制度と技術を結ぶDX導入支援</h3>
                <ul className="space-y-3 text-white/80 mb-6 font-body">
                  <li>• 生成AIの業務活用（チャットボット、文書生成、要約など）</li>
                  <li>• IoT×クラウドによる遠隔監視・自動制御システム</li>
                  <li>• 通信（Wi-Fi7／LPWA／5G）＋クラウド環境整備</li>
                </ul>
                <p className="text-sm text-white/60 font-body">
                  技術単体の導入ではなく、「補助金と接続した導入計画」まで設計
                </p>
              </div>

              <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="mb-4">
                  <DollarSign className="w-12 h-12 text-slate-300" />
                </div>
                <h3 className="text-2xl font-heading text-white mb-4">【2】補助金・助成金の設計型活用支援</h3>
                <ul className="space-y-3 text-white/80 mb-6 font-body">
                  <li>• IT導入補助金、ものづくり補助金、再構築補助金、再エネ関連補助金などに対応</li>
                  <li>• 採択されるだけでなく、"制度で事業が動く"設計支援を提供</li>
                  <li>• 採択→開発→報告→定着の全工程を伴走</li>
                </ul>
              </div>

              <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="mb-4">
                  <Building2 className="w-12 h-12 text-slate-300" />
                </div>
                <h3 className="text-2xl font-heading text-white mb-4">【3】資金構造の統合設計（補助金 × 融資 × 投資）</h3>
                <ul className="space-y-3 text-white/80 mb-6 font-body">
                  <li>• 公的融資（公庫・保証協会）や地銀と連携し、補助金と"整合した"資金スキームを一体で構築</li>
                  <li>• 「ふるさと融資 × 補助金 × VPP等の収益」など、制度的圧縮構造を提案</li>
                  <li>• 自己資金ゼロ・実質返済ゼロスキームも制度的に成立させます</li>
                </ul>
              </div>

              <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="mb-4">
                  <Scale className="w-12 h-12 text-slate-300" />
                </div>
                <h3 className="text-2xl font-heading text-white mb-4">【4】実務支援・士業連携</h3>
                <ul className="space-y-3 text-white/80 mb-6 font-body">
                  <li>• 会計・税務・登記・労務・契約など、実務周辺も士業連携で一括支援</li>
                  <li>• 単発契約で終わらず、「制度に沿った法人設計」まで一貫支援可能</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading mb-6 text-balance">
                <span className="bg-gradient-to-r from-slate-300 to-slate-200 bg-clip-text text-transparent font-english">
                  支援の流れ
                </span>
                <br />
                <span className="text-white/60 text-xl md:text-2xl font-body font-light">How We Work</span>
              </h2>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-600 via-slate-500 to-slate-600 hidden md:block"></div>
                
                <div className="space-y-12">
                  {[
                    {
                      title: "制度の読み解きと初回ヒアリング（無料）",
                      description: "お客様の事業課題を深く理解し、適用可能な制度を特定します。",
                      icon: Search,
                      duration: "30分"
                    },
                    {
                      title: "制度・技術・資金をつなぐ構造案の提示",
                      description: "補助金、技術導入、資金調達を統合した事業設計図を作成します。",
                      icon: Zap,
                      duration: "1週間"
                    },
                    {
                      title: "PoC設計、申請支援、融資調整、開発手配を同時進行",
                      description: "複数の要素を並行して進め、効率的に事業化を加速します。",
                      icon: Rocket,
                      duration: "2-3ヶ月"
                    },
                    {
                      title: "補助金採択後の開発・導入・報告を実行",
                      description: "採択から実装まで、一貫したサポートを提供します。",
                      icon: CheckCircle,
                      duration: "6-12ヶ月"
                    },
                    {
                      title: "実装完了後も、制度運用・次フェーズ展開まで伴走",
                      description: "継続的な成長をサポートし、次のステージへの準備を整えます。",
                      icon: RefreshCw,
                      duration: "継続"
                    }
                  ].map((step, index) => (
                    <div key={index} className="relative flex items-start group">
                      {/* Step Number */}
                      <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-slate-800 border-2 border-slate-600 rounded-full flex items-center justify-center font-heading text-white text-lg group-hover:bg-slate-700 group-hover:border-slate-500 transition-all duration-300 mr-8">
                        {index + 1}
                      </div>
                      
                      {/* Content Card */}
                      <div className="flex-1 bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <step.icon className="w-6 h-6 text-slate-300" />
                            <h3 className="text-xl font-heading text-white group-hover:text-slate-200 transition-colors duration-300">
                              {step.title}
                            </h3>
                          </div>
                          <span className="text-sm font-accent text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-slate-300 font-body leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom Message */}
              <div className="text-center mt-16">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 max-w-4xl mx-auto">
                  <p className="text-xl md:text-2xl text-white font-heading mb-4">
                    ShikanoXの支援は、紙で終わりません。
                  </p>
                  <p className="text-lg text-slate-300 font-body">
                    動くところまで、構造で届けます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading mb-6 text-balance">
                <span className="bg-gradient-to-r from-slate-300 to-slate-200 bg-clip-text text-transparent font-english">
                  お問い合わせ・無料相談フォーム
                </span>
              </h2>
            </div>
            
            <ContactForm />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}