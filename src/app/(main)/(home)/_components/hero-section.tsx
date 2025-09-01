import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSectionComponent = () => {
   return (
      <section className="relative overflow-hidden">
         <div className="container mx-auto px-4 pt-20 pb-32">
            <div className="text-center max-w-4xl mx-auto">
               <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Start Your Crypto Journey Today
               </h1>
               <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
                  Start your crypto journey today with the best crypto exchange
                  in the Philippines. Get started with as little as ₱5.
               </p>

               {/* Sign up form */}
               <div className="max-w-md mx-auto flex gap-3 mb-16">
                  <Input
                     type="email"
                     placeholder="Email/Mobile"
                     className="flex-1 h-12 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400"
                  />
                  <Button
                     size="lg"
                     className="h-12 px-8 bg-white text-black hover:bg-slate-100"
                  >
                     Sign up
                  </Button>
               </div>

               {/* Trading Chart Placeholder */}
               <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mx-auto max-w-6xl">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                     {/* Chart Area */}
                     <div className="lg:col-span-2">
                        <div className="bg-slate-900/50 rounded-xl p-6 h-80">
                           <div className="flex justify-between items-center mb-4">
                              <div className="flex items-center gap-4">
                                 <span className="text-green-400 text-sm">
                                    +5%
                                 </span>
                                 <span className="text-slate-400 text-sm">
                                    24h
                                 </span>
                              </div>
                              <div className="flex gap-2">
                                 {["1H", "4H", "1D", "1W", "1M"].map(
                                    (timeframe) => (
                                       <button
                                          key={timeframe}
                                          className="px-3 py-1 text-xs text-slate-400 hover:text-white transition-colors"
                                       >
                                          {timeframe}
                                       </button>
                                    )
                                 )}
                              </div>
                           </div>

                           {/* Simulated Chart */}
                           <div className="h-48 bg-gradient-to-t from-green-500/10 to-transparent rounded-lg flex items-end justify-center">
                              <div className="text-slate-500 text-sm">
                                 Trading Chart Visualization
                              </div>
                           </div>

                           <div className="flex justify-center gap-4 mt-4 text-xs text-slate-400">
                              {["MA", "EMA", "BOLL", "VOL", "MACD"].map(
                                 (indicator) => (
                                    <button
                                       key={indicator}
                                       className="hover:text-white transition-colors"
                                    >
                                       {indicator}
                                    </button>
                                 )
                              )}
                           </div>
                        </div>
                     </div>

                     {/* Trading Panel */}
                     <div className="space-y-4">
                        <div className="bg-slate-900/50 rounded-xl p-4">
                           <h3 className="text-white font-semibold mb-4">
                              Last trades
                           </h3>
                           <div className="space-y-2">
                              {[
                                 {
                                    price: "104,171.93",
                                    amount: "0.0000143",
                                    time: "11:01:4",
                                 },
                                 {
                                    price: "104,739.91",
                                    amount: "0.0000157",
                                    time: "11:01:3",
                                 },
                                 {
                                    price: "104,600.00",
                                    amount: "0.0147877",
                                    time: "11:01:4",
                                    highlight: true,
                                 },
                                 {
                                    price: "104,600.00",
                                    amount: "0.0145537",
                                    time: "11:00:5",
                                    highlight: true,
                                 },
                                 {
                                    price: "104,600.00",
                                    amount: "0.0146621",
                                    time: "11:00:5",
                                    highlight: true,
                                 },
                              ].map((trade, index) => (
                                 <div
                                    key={index}
                                    className="flex justify-between text-xs"
                                 >
                                    <span
                                       className={
                                          trade.highlight
                                             ? "text-red-400"
                                             : "text-green-400"
                                       }
                                    >
                                       {trade.price}
                                    </span>
                                    <span className="text-slate-400">
                                       {trade.amount}
                                    </span>
                                    <span className="text-slate-500">
                                       {trade.time}
                                    </span>
                                 </div>
                              ))}
                           </div>
                        </div>

                        <div className="bg-slate-900/50 rounded-xl p-4">
                           <div className="flex justify-between text-sm mb-4">
                              <button className="text-green-400 font-medium">
                                 Buy
                              </button>
                              <button className="text-slate-400">Sell</button>
                           </div>
                           <div className="space-y-3">
                              <div>
                                 <label className="text-xs text-slate-400 block mb-1">
                                    Price (USDT)
                                 </label>
                                 <Input className="h-8 bg-slate-800 border-slate-700 text-white text-sm" />
                              </div>
                              <div>
                                 <label className="text-xs text-slate-400 block mb-1">
                                    Amount (BTC)
                                 </label>
                                 <Input className="h-8 bg-slate-800 border-slate-700 text-white text-sm" />
                              </div>
                              <Button className="w-full h-8 bg-green-600 hover:bg-green-700 text-sm">
                                 Buy BTC
                              </Button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Background decoration */}
         <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5 pointer-events-none" />
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>
   );
};
export default HeroSectionComponent;
