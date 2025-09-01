import { Shield, Zap, DollarSign, BadgeCheck } from "lucide-react"

const ExperienceSectionComponent = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure",
      description: "Bank-grade encryption and cold storage protect your crypto 24/7.",
      color: "text-blue-500"
    },
    {
      icon: Zap,
      title: "Fast",
      description: "Buy crypto instantly with PHP cash ins from e-Wallets and banks.",
      color: "text-purple-500"
    },
    {
      icon: DollarSign,
      title: "Affordable",
      description: "Enjoy low trading fees and competitive buy & sell rates.",
      color: "text-green-500"
    },
    {
      icon: BadgeCheck,
      title: "Trustworthy",
      description: "Trusted by over 18 million Filipinos since 2014.",
      color: "text-blue-400"
    }
  ]

  return (
    <section className="bg-black text-white py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            A Complete Crypto Experience for Filipinos
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Looking for the best cryptocurrency wallet in the Philippines? Coins.ph is your all-in-one solution!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={feature.title}
                className="flex flex-col items-start space-y-6 group"
              >
                {/* Icon */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gray-900/50 border border-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  {/* Subtle glow effect */}
                  <div className={`absolute inset-0 w-16 h-16 rounded-2xl opacity-20 blur-xl ${feature.color.replace('text-', 'bg-')} group-hover:opacity-30 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5 rounded-3xl blur-3xl" />
          <div className="relative bg-gray-900/20 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 text-center">
            <p className="text-gray-400 text-sm md:text-base">
              Join millions of Filipinos who trust Coins.ph for their crypto needs
            </p>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/3 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
export default ExperienceSectionComponent