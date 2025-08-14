"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ChevronDown, ArrowUpDown, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import Navigation from "@/components/navigation"

export default function IDOPage() {
  const [activeTab, setActiveTab] = useState("instant")
  const [sellAmount, setSellAmount] = useState("")
  const [buyAmount, setBuyAmount] = useState("")
  const [isConnected, setIsConnected] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [transactionStatus, setTransactionStatus] = useState<"idle" | "pending" | "success" | "error">("idle")
  const [slippage, setSlippage] = useState("0.5")

  const exchangeRate = 8.0 // 1 PUSD = 8 SHR
  const shrPrice = 0.125 // $0.125 per SHR
  const networkFee = 0.25

  useEffect(() => {
    if (sellAmount) {
      const calculatedSHR = (Number.parseFloat(sellAmount) * exchangeRate).toFixed(2)
      setBuyAmount(calculatedSHR)
    } else {
      setBuyAmount("")
    }
  }, [sellAmount])

  useEffect(() => {
    if (buyAmount && !sellAmount) {
      const calculatedPUSD = (Number.parseFloat(buyAmount) / exchangeRate).toFixed(2)
      setSellAmount(calculatedPUSD)
    }
  }, [buyAmount])

  const handlePurchase = async () => {
    if (!isConnected) {
      setIsConnected(true)
      return
    }

    if (!sellAmount || Number.parseFloat(sellAmount) <= 0) {
      return
    }

    setShowConfirmDialog(true)
  }

  const confirmPurchase = async () => {
    setIsLoading(true)
    setTransactionStatus("pending")
    setShowConfirmDialog(false)

    // Simulate transaction
    setTimeout(() => {
      setTransactionStatus("success")
      setIsLoading(false)
      // Reset form after successful purchase
      setTimeout(() => {
        setSellAmount("")
        setBuyAmount("")
        setTransactionStatus("idle")
      }, 3000)
    }, 2000)
  }

  const trendingTokens = [
    { name: "MYSHARE", symbol: "SHR", change: "+15.7%", volume: "$847K", rank: 1, positive: true },
    { name: "PAU Dollar", symbol: "PUSD", change: "+0.02%", volume: "$2.1M", rank: 2, positive: true },
    { name: "Ethereum", symbol: "ETH", change: "+2.49%", volume: "$144M", rank: 3, positive: true },
  ]

  const recentTrades = [
    { token: "SHR", amount: "1,250", price: "$0.125", time: "2m ago", positive: true },
    { token: "SHR", amount: "850", price: "$0.124", time: "5m ago", positive: false },
    { token: "SHR", amount: "2,100", price: "$0.126", time: "8m ago", positive: true },
  ]

  const purchaseHistory = [
    { id: "1", amount: "500 SHR", paid: "62.5 PUSD", date: "2024-01-15", status: "completed" },
    { id: "2", amount: "1,200 SHR", paid: "150 PUSD", date: "2024-01-14", status: "completed" },
    { id: "3", amount: "800 SHR", paid: "100 PUSD", date: "2024-01-13", status: "pending" },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-80 border-r border-slate-800 p-6 relative">
          <div className="absolute inset-0 opacity-10">
            <img
              src="/images/trading-interface-bg.png"
              alt="Trading interface background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 relative z-10">
            <div>
              <h3 className="text-slate-400 text-sm font-medium mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-slate-300">
                  <div className="w-6 h-6 bg-emerald-400 rounded mr-3 flex items-center justify-center">
                    <span className="text-black text-xs font-bold">$</span>
                  </div>
                  Buy SHR Tokens
                </Button>
                <Button variant="ghost" className="w-full justify-start text-slate-300">
                  <div className="w-6 h-6 bg-slate-700 rounded mr-3"></div>
                  Portfolio Tracker
                </Button>
                <Button variant="ghost" className="w-full justify-start text-slate-300">
                  <div className="w-6 h-6 bg-slate-700 rounded mr-3"></div>
                  Staking Rewards
                </Button>
                <Button variant="ghost" className="w-full justify-start text-slate-300">
                  <div className="w-6 h-6 bg-slate-700 rounded mr-3"></div>
                  Governance
                </Button>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-6">
              <h3 className="text-slate-400 text-sm font-medium mb-4">IDO Progress</h3>
              <div className="relative mb-4 h-20 rounded-lg overflow-hidden">
                <img
                  src="/images/ido-progress.png"
                  alt="IDO progress visualization"
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20"></div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Raised</span>
                  <span className="text-emerald-400">$2.4M / $5M</span>
                </div>
                <Progress value={48} className="h-2" />
                <div className="flex justify-between text-xs text-slate-400">
                  <span>48% Complete</span>
                  <span>12 days left</span>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-6">
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-slate-300">
                  Documentation
                </Button>
                <Button variant="ghost" className="w-full justify-start text-slate-300">
                  Community
                </Button>
                <Button variant="ghost" className="w-full justify-start text-slate-300">
                  Support
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 relative">
          <div className="absolute inset-0 opacity-5">
            <img
              src="/images/financial-dashboard-bg.png"
              alt="Financial dashboard background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {/* Swap Interface */}
            <div className="lg:col-span-2">
              <Card className="bg-slate-900/95 border-slate-800 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <img
                    src="/images/crypto-exchange.png"
                    alt="Crypto exchange visualization"
                    className="w-full h-full object-cover rounded-bl-3xl"
                  />
                </div>

                {/* Tab Navigation */}
                <div className="flex space-x-1 mb-6 bg-slate-800 rounded-lg p-1">
                  <Button
                    variant={activeTab === "instant" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab("instant")}
                    className={activeTab === "instant" ? "bg-emerald-400 text-black" : "text-slate-400"}
                  >
                    ⚡ Instant Buy
                  </Button>
                  <Button
                    variant={activeTab === "limit" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab("limit")}
                    className="text-slate-400"
                  >
                    📊 Limit Order
                  </Button>
                  <Button
                    variant={activeTab === "dca" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveTab("dca")}
                    className="text-slate-400"
                  >
                    🔄 DCA
                  </Button>
                </div>

                {/* Route Selection */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-slate-400">⚡ MYSHARE IDO</span>
                    <Badge className="bg-emerald-400/10 text-emerald-400 text-xs">Live</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-slate-400">Slippage: {slippage}%</span>
                  </div>
                </div>

                {transactionStatus === "pending" && (
                  <Alert className="mb-4 border-yellow-500/20 bg-yellow-500/10">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <AlertDescription className="text-yellow-400">
                      Transaction pending... Please wait for confirmation.
                    </AlertDescription>
                  </Alert>
                )}

                {transactionStatus === "success" && (
                  <Alert className="mb-4 border-green-500/20 bg-green-500/10">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription className="text-green-400">
                      Purchase successful! Your SHR tokens have been added to your wallet.
                    </AlertDescription>
                  </Alert>
                )}

                {transactionStatus === "error" && (
                  <Alert className="mb-4 border-red-500/20 bg-red-500/10">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-red-400">Transaction failed. Please try again.</AlertDescription>
                  </Alert>
                )}

                {/* Selling Section */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">You Pay</label>
                    <div className="bg-slate-800 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-white">P</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="font-medium">PUSD</span>
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                          </div>
                        </div>
                        <div className="text-right">
                          <Input
                            value={sellAmount}
                            onChange={(e) => setSellAmount(e.target.value)}
                            placeholder="0.00"
                            className="bg-transparent border-none text-right text-2xl font-bold p-0 h-auto"
                            disabled={isLoading}
                          />
                          <div className="text-sm text-slate-400">Balance: 1,250 PUSD</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Swap Arrow */}
                  <div className="flex justify-center">
                    <Button variant="ghost" size="icon" className="bg-slate-800 hover:bg-slate-700">
                      <ArrowUpDown className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Buying Section */}
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">You Receive</label>
                    <div className="bg-slate-800 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                            <span className="text-black text-xs font-bold">S</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="font-medium">SHR</span>
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                          </div>
                        </div>
                        <div className="text-right">
                          <Input
                            value={buyAmount}
                            onChange={(e) => setBuyAmount(e.target.value)}
                            placeholder="0.00"
                            className="bg-transparent border-none text-right text-2xl font-bold p-0 h-auto"
                            disabled={isLoading}
                          />
                          <div className="text-sm text-slate-400">
                            ≈ ${(Number.parseFloat(buyAmount || "0") * shrPrice).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Exchange Rate</span>
                      <span className="text-white">1 PUSD = {exchangeRate} SHR</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Price Impact</span>
                      <span className="text-green-400">{"<0.01%"}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Network Fee</span>
                      <span className="text-white">~${networkFee}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm border-t border-slate-700 pt-2">
                      <span className="text-slate-400">Total Cost</span>
                      <span className="text-white font-medium">
                        {sellAmount ? `${Number.parseFloat(sellAmount) + networkFee} PUSD` : "0 PUSD"}
                      </span>
                    </div>
                  </div>

                  <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full bg-emerald-400 text-black hover:bg-emerald-500 py-6 text-lg font-semibold"
                        onClick={handlePurchase}
                        disabled={isLoading || !sellAmount || Number.parseFloat(sellAmount) <= 0}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                          </>
                        ) : !isConnected ? (
                          "Connect Wallet"
                        ) : (
                          "Buy SHR Tokens"
                        )}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-900 border-slate-800">
                      <DialogHeader>
                        <DialogTitle className="text-white">Confirm Purchase</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="bg-slate-800 rounded-lg p-4 space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-400">You Pay</span>
                            <span className="text-white font-medium">{sellAmount} PUSD</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">You Receive</span>
                            <span className="text-emerald-400 font-medium">{buyAmount} SHR</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Network Fee</span>
                            <span className="text-white">${networkFee}</span>
                          </div>
                          <div className="border-t border-slate-700 pt-3 flex justify-between">
                            <span className="text-slate-400">Total Cost</span>
                            <span className="text-white font-bold">
                              {(Number.parseFloat(sellAmount || "0") + networkFee).toFixed(2)} PUSD
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-3">
                          <Button
                            variant="outline"
                            className="flex-1 border-slate-600 text-slate-300 bg-transparent"
                            onClick={() => setShowConfirmDialog(false)}
                          >
                            Cancel
                          </Button>
                          <Button
                            className="flex-1 bg-emerald-400 text-black hover:bg-emerald-500"
                            onClick={confirmPurchase}
                          >
                            Confirm Purchase
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>

              <Card className="bg-slate-900/95 border-slate-800 p-6 mt-6 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-16 opacity-10">
                  <img
                    src="/images/transaction-history.png"
                    alt="Transaction history visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-4 relative z-10">Recent Purchases</h3>
                <div className="space-y-3">
                  {purchaseHistory.map((purchase) => (
                    <div key={purchase.id} className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                          <span className="text-black text-xs font-bold">S</span>
                        </div>
                        <div>
                          <div className="font-medium">{purchase.amount}</div>
                          <div className="text-sm text-slate-400">Paid {purchase.paid}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-400">{purchase.date}</div>
                        <Badge
                          className={`text-xs ${
                            purchase.status === "completed"
                              ? "bg-green-500/10 text-green-400"
                              : "bg-yellow-500/10 text-yellow-400"
                          }`}
                        >
                          {purchase.status === "completed" ? (
                            <>
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Completed
                            </>
                          ) : (
                            <>
                              <Clock className="w-3 h-3 mr-1" />
                              Pending
                            </>
                          )}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Trending Section */}
              <Card className="bg-slate-900/95 border-slate-800 p-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 opacity-15">
                  <img
                    src="/images/market-trends.png"
                    alt="Market trends visualization"
                    className="w-full h-full object-cover rounded-bl-2xl"
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="font-medium">Trending</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-slate-400">
                    More →
                  </Button>
                </div>
                <div className="space-y-3">
                  {trendingTokens.map((token, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-slate-400 text-sm">#{token.rank}</span>
                      <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{token.symbol}</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-medium ${token.positive ? "text-green-400" : "text-red-400"}`}>
                          {token.change}
                        </div>
                        <div className="text-xs text-slate-400">Vol {token.volume}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Recent Trades */}
              <Card className="bg-slate-900/95 border-slate-800 p-4 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-12 opacity-10">
                  <img
                    src="/images/live-trading.png"
                    alt="Live trading visualization"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium">Recent Trades</span>
                  <Button variant="ghost" size="sm" className="text-slate-400">
                    View All →
                  </Button>
                </div>
                <div className="space-y-3">
                  {recentTrades.map((trade, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                        <div>
                          <div className="font-medium text-sm">
                            {trade.amount} {trade.token}
                          </div>
                          <div className="text-xs text-slate-400">{trade.time}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-sm">{trade.price}</div>
                        <div className={`text-xs ${trade.positive ? "text-green-400" : "text-red-400"}`}>
                          {trade.positive ? "↗" : "↘"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
