import { Button } from "@/components/ui/button"
import { Smartphone, Download, Star, Users, TrendingUp, Shield, ArrowRight, Play } from "lucide-react"

const TradeAppSectionComponent = () => {
  const stats = [
    { label: "Active Users", value: "18M+", icon: Users },
    { label: "App Rating", value: "4.8", icon: Star },
    { label: "Trading Volume", value: "₱50B+", icon: TrendingUp },
    { label: "Security Level", value: "Bank-grade", icon: Shield }
  ]

  const features = [
    "Real-time market data and charts",
    "Instant buy/sell with PHP",
    "Advanced trading tools",
    "24/7 customer support",
    "Multi-layer security",
    "Portfolio tracking"
  ]

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                <Smartphone className="w-4 h-4" />
                Mobile Trading App
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Trade Crypto 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Anywhere</span>
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                Experience the most advanced crypto trading platform in the Philippines. 
                Trade, invest, and manage your portfolio with professional-grade tools.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={stat.label} className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 h-14 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-[3rem] blur-3xl"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>

            {/* Phone Mockup Container */}
            <div className="relative z-10 flex justify-center items-center">
              {/* Main Phone */}
              <div className="relative">
                <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl border-8 border-gray-800">
                  <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone Screen Content */}
                    <div className="p-6 h-full flex flex-col">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center text-white text-sm mb-6">
                        <span>9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-4 h-2 bg-white/50 rounded-sm"></div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="text-center mb-6">
                        <h3 className="text-white text-xl font-bold">P-Wallet.ph</h3>
                        <p className="text-gray-400 text-sm">Portfolio Overview</p>
                      </div>

                      {/* Balance Card */}
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 mb-6">
                        <div className="text-white/80 text-sm">Total Balance</div>
                        <div className="text-white text-2xl font-bold">₱125,450.75</div>
                        <div className="text-green-300 text-sm">+12.5% today</div>
                      </div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="bg-slate-800 rounded-xl p-3 text-center">
                          <div className="text-blue-400 text-sm font-medium">Buy</div>
                        </div>
                        <div className="bg-slate-800 rounded-xl p-3 text-center">
                          <div className="text-purple-400 text-sm font-medium">Sell</div>
                        </div>
                      </div>

                      {/* Holdings */}
                      <div className="flex-1">
                        <h4 className="text-white font-medium mb-3">Your Holdings</h4>
                        <div className="space-y-3">
                          {[
                            { coin: "BTC", amount: "0.0025", value: "₱15,450", change: "+2.5%" },
                            { coin: "ETH", amount: "0.15", value: "₱8,200", change: "-1.2%" },
                            { coin: "BNB", amount: "12.5", value: "₱4,800", change: "+5.8%" }
                          ].map((holding, index) => (
                            <div key={index} className="flex justify-between items-center bg-slate-800/50 rounded-lg p-3">
                              <div>
                                <div className="text-white font-medium">{holding.coin}</div>
                                <div className="text-gray-400 text-sm">{holding.amount}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-white">{holding.value}</div>
                                <div className={`text-sm ${holding.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                                  {holding.change}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Live Trading</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-600 dark:text-gray-400">24/7 Support</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">99.9% Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Crypto Journey?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join millions of Filipinos who trust Coins.ph for their crypto needs
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 h-14 text-lg group">
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
    </section>
  )
}
export default TradeAppSectionComponent