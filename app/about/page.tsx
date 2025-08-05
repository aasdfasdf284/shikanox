import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Building2, MapPin, Calendar, Users, Target, Award, Users2, Globe } from 'lucide-react'

export default function About() {
  return (
    <main className="bg-slate-900 text-white">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-heading mb-6 text-balance">
                <span className="bg-gradient-to-r from-slate-300 to-slate-200 bg-clip-text text-transparent font-english">
                  会社概要
                </span>
                <br />
                <span className="text-white/60 text-xl md:text-2xl font-body font-light">About ShikanoX</span>
              </h1>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 mb-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-heading text-white mb-6">基本情報</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Building2 className="w-5 h-5 text-slate-300 mr-3" />
                          <span className="text-slate-300 font-accent">会社名</span>
                        </div>
                        <span className="text-white font-body">シカノックス株式会社</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Users className="w-5 h-5 text-slate-300 mr-3" />
                          <span className="text-slate-300 font-accent">代表取締役</span>
                        </div>
                        <span className="text-white font-body">岩城 彰夫</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 text-slate-300 mr-3" />
                          <span className="text-slate-300 font-accent">設立</span>
                        </div>
                        <span className="text-white font-body">2025年</span>
                      </div>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <MapPin className="w-5 h-5 text-slate-300 mr-3 mt-0.5" />
                          <span className="text-slate-300 font-accent">所在地</span>
                        </div>
                        <span className="text-white font-body text-right">鳥取県鳥取市鹿野町<br />中園116 B棟</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-heading text-white mb-6">事業内容</h2>
                    <div className="space-y-3 text-slate-300 font-body">
                      <p>• 制度×技術×資金の統合設計</p>
                      <p>• 補助金・助成金の設計型活用支援</p>
                      <p>• DX導入支援</p>
                      <p>• 資金構造の統合設計</p>
                      <p>• 実務支援・士業連携</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <Target className="w-12 h-12 text-slate-300 mb-4" />
                  <h3 className="text-xl font-heading text-white mb-3">ミッション</h3>
                  <p className="text-slate-300 font-body leading-relaxed">
                    制度・技術・資金を統合し、従来不可能だった事業化を実現する
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <Award className="w-12 h-12 text-slate-300 mb-4" />
                  <h3 className="text-xl font-heading text-white mb-3">ビジョン</h3>
                  <p className="text-slate-300 font-body leading-relaxed">
                    企業と地域が新しい成長を掴むための「制度的な舞台」を用意する
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <Users2 className="w-12 h-12 text-slate-300 mb-4" />
                  <h3 className="text-xl font-heading text-white mb-3">価値観</h3>
                  <p className="text-slate-300 font-body leading-relaxed">
                    知識ではなく構築力。申請屋でも開発屋でもない、接続と統合に特化
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Philosophy */}
        <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading mb-6 text-balance">
                <span className="bg-gradient-to-r from-slate-300 to-slate-200 bg-clip-text text-transparent font-english">
                  私たちの哲学
                </span>
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <div className="space-y-8 text-lg md:text-xl text-white/90 leading-relaxed text-center">
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
                  
                  <p className="text-xl font-heading text-white">
                    私たちは、その"つなぐ力"を担い、
                    <br />
                    企業と地域が新しい成長を掴むための「制度的な舞台」を用意していきます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Vision */}
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading mb-6 text-balance">
                <span className="bg-gradient-to-r from-slate-300 to-slate-200 bg-clip-text text-transparent font-english">
                  グローバルビジョン
                </span>
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <div className="flex items-center justify-center mb-6">
                  <Globe className="w-16 h-16 text-slate-300" />
                </div>
                <h3 className="text-2xl font-heading text-white text-center mb-6">
                  鳥取県鹿野町から、世界へ
                </h3>
                <p className="text-lg text-slate-300 font-body text-center leading-relaxed">
                  私たちは、鳥取県鹿野町という小さな町から始まり、
                  <br />
                  日本の制度設計のノウハウを世界に展開していきます。
                  <br />
                  地域の課題解決から、グローバルなイノベーションまで。
                  <br />
                  制度×技術×資金の統合設計により、新しい価値を創造します。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
} 