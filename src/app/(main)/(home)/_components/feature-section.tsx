import { Button } from "@/components/ui/button"
import { ChevronRight, TrendingUp, TrendingDown } from "lucide-react"

const FeatureSectionComponent = () => {
  const cryptoData = [
    {
      id: "btc",
      name: "BTC",
      fullName: "Bitcoin",
      icon: "₿",
      iconBg: "bg-orange-500",
      price: "₱6,249,460.88",
      change24h: "+₱9,328.6",
      changePercent: "+0.15%",
      isPositive: true,
      chartColor: "text-green-500"
    },
    {
      id: "eth",
      name: "ETH",
      fullName: "Ethereum",
      icon: "Ξ",
      iconBg: "bg-gray-700",
      price: "₱254,209.99",
      change24h: "-₱1,163.03",
      changePercent: "-0.46%",
      isPositive: false,
      chartColor: "text-red-500"
    },
    {
      id: "xrp",
      name: "XRP",
      fullName: "XRP",
      icon: "◊",
      iconBg: "bg-gray-800",
      price: "₱158.3",
      change24h: "-₱4.18",
      changePercent: "-2.64%",
      isPositive: false,
      chartColor: "text-red-500"
    },
    {
      id: "sol",
      name: "SOL",
      fullName: "Solana",
      icon: "◎",
      iconBg: "bg-purple-600",
      price: "₱11,526.68",
      change24h: "-₱149.04",
      changePercent: "-1.29%",
      isPositive: false,
      chartColor: "text-red-500"
    },
    {
      id: "usdt",
      name: "USDT",
      fullName: "Tether",
      icon: "₮",
      iconBg: "bg-teal-500",
      price: "₱57.42",
      change24h: "+₱0.05",
      changePercent: "+0.09%",
      isPositive: true,
      chartColor: "text-green-500"
    },
    {
      id: "usdc",
      name: "USDC",
      fullName: "USD Coin",
      icon: "$",
      iconBg: "bg-blue-500",
      price: "₱57.34",
      change24h: "+₱0.06",
      changePercent: "+0.10%",
      isPositive: true,
      chartColor: "text-green-500"
    }
  ]

  const MiniChart = ({ isPositive }: { isPositive: boolean }) => (
    <div className="w-20 h-8 flex items-end justify-center">
      <svg width="80" height="32" viewBox="0 0 80 32" className="overflow-visible">
        <polyline
          points={isPositive ? "0,20 20,18 40,15 60,12 80,8" : "0,8 20,12 40,15 60,18 80,20"}
          fill="none"
          stroke={isPositive ? "#10b981" : "#ef4444"}
          strokeWidth="2"
          className="drop-shadow-sm"
        />
        <defs>
          <linearGradient id={`gradient-${isPositive ? 'up' : 'down'}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: isPositive ? "#10b981" : "#ef4444", stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: isPositive ? "#10b981" : "#ef4444", stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <polygon
          points={isPositive ? "0,20 20,18 40,15 60,12 80,8 80,32 0,32" : "0,8 20,12 40,15 60,18 80,20 80,32 0,32"}
          fill={`url(#gradient-${isPositive ? 'up' : 'down'})`}
        />
      </svg>
    </div>
  )

  return (
    <section className="bg-background py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real-Time Crypto Market Data
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Monitor live cryptocurrency prices, discover the top performing assets.
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 self-start md:self-auto group">
            View More
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Crypto Table */}
        <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-6 bg-muted/30 border-b text-sm font-medium text-muted-foreground">
            <div className="col-span-3">Name</div>
            <div className="col-span-2 text-right">Price</div>
            <div className="col-span-2 text-right">24h Change</div>
            <div className="col-span-2 text-right">%Change</div>
            <div className="col-span-2 text-right">Chart</div>
            <div className="col-span-1"></div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-border">
            {cryptoData.map((crypto, index) => (
              <div 
                key={crypto.id} 
                className="grid grid-cols-12 gap-4 p-6 hover:bg-muted/20 transition-colors cursor-pointer group"
              >
                {/* Name */}
                <div className="col-span-3 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${crypto.iconBg} flex items-center justify-center text-white font-bold`}>
                    {crypto.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{crypto.name}</div>
                    <div className="text-sm text-muted-foreground">{crypto.fullName}</div>
                  </div>
                </div>

                {/* Price */}
                <div className="col-span-2 text-right">
                  <div className="font-semibold text-foreground">{crypto.price}</div>
                </div>

                {/* 24h Change */}
                <div className="col-span-2 text-right">
                  <div className={`font-medium ${crypto.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {crypto.change24h}
                  </div>
                </div>

                {/* % Change */}
                <div className="col-span-2 text-right">
                  <div className={`font-medium flex items-center justify-end gap-1 ${crypto.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {crypto.isPositive ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    {crypto.changePercent}
                  </div>
                </div>

                {/* Chart */}
                <div className="col-span-2 flex justify-end">
                  <MiniChart isPositive={crypto.isPositive} />
                </div>

                {/* Arrow */}
                <div className="col-span-1 flex justify-end items-center">
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            Start Trading Now
          </Button>
        </div>
      </div>
    </section>
  )
}
export default FeatureSectionComponent