"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  Wallet,
  PieChart,
  Clock,
  Vote,
  Gift,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
} from "lucide-react"
import Navigation from "@/components/navigation"

export default function DashboardPage() {
  const [activeTimeframe, setActiveTimeframe] = useState("7d")

  const portfolioData = {
    totalValue: 15847.32,
    totalSHR: 126778,
    totalPUSD: 2450.5,
    change24h: 12.5,
    changePercent: 8.2,
  }

  const stakingData = {
    stakedAmount: 85000,
    stakingRewards: 1247.83,
    apy: 18.5,
    nextReward: "2h 15m",
  }

  const transactions = [
    {
      id: "1",
      type: "buy",
      token: "SHR",
      amount: "2,500",
      price: "$0.125",
      total: "$312.50",
      date: "2024-01-15 14:30",
      status: "completed",
    },
    {
      id: "2",
      type: "stake",
      token: "SHR",
      amount: "10,000",
      price: "-",
      total: "Staked",
      date: "2024-01-15 12:15",
      status: "completed",
    },
    {
      id: "3",
      type: "reward",
      token: "SHR",
      amount: "125.5",
      price: "$0.124",
      total: "+$15.56",
      date: "2024-01-15 10:00",
      status: "completed",
    },
    {
      id: "4",
      type: "buy",
      token: "SHR",
      amount: "1,800",
      price: "$0.123",
      total: "$221.40",
      date: "2024-01-14 16:45",
      status: "completed",
    },
  ]

  const governanceProposals = [
    {
      id: "1",
      title: "Increase Staking Rewards Pool",
      description: "Proposal to allocate additional 500K SHR tokens to staking rewards",
      status: "active",
      votesFor: 1247832,
      votesAgainst: 234567,
      timeLeft: "5 days",
      userVoted: false,
    },
    {
      id: "2",
      title: "New Partnership Integration",
      description: "Approve partnership with DeFi protocol for cross-chain functionality",
      status: "active",
      votesFor: 987654,
      votesAgainst: 123456,
      timeLeft: "12 days",
      userVoted: true,
    },
    {
      id: "3",
      title: "Token Burn Mechanism",
      description: "Implement quarterly token burn based on platform revenue",
      status: "passed",
      votesFor: 2145678,
      votesAgainst: 456789,
      timeLeft: "Ended",
      userVoted: true,
    },
  ]

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "buy":
        return <ArrowUpRight className="w-4 h-4 text-green-400" />
      case "sell":
        return <ArrowDownRight className="w-4 h-4 text-red-400" />
      case "stake":
        return <Clock className="w-4 h-4 text-blue-400" />
      case "reward":
        return <Gift className="w-4 h-4 text-emerald-400" />
      default:
        return <MoreHorizontal className="w-4 h-4 text-slate-400" />
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <div className="absolute inset-0 opacity-5">
        <img
          src="/images/portfolio-dashboard-bg.png"
          alt="Portfolio dashboard background"
          className="w-full h-full object-cover"
        />
      </div>
      <Navigation />

      <div className="max-w-7xl mx-auto p-6 relative z-10">
        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 relative z-10">
          <Card className="bg-slate-900/95 border-slate-800 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
              <img
                src="/images/portfolio-growth.png"
                alt="Portfolio growth"
                className="w-full h-full object-cover rounded-bl-xl"
              />
            </div>
            <div className="flex items-center justify-between mb-2 relative z-10">
              <span className="text-slate-400 text-sm">Total Portfolio Value</span>
              <Wallet className="w-4 h-4 text-slate-400" />
            </div>
            <div className="text-2xl font-bold">${portfolioData.totalValue.toLocaleString()}</div>
            <div className="flex items-center space-x-1 mt-1">
              <TrendingUp className="w-3 h-3 text-green-400" />
              <span className="text-green-400 text-sm">+{portfolioData.changePercent}%</span>
              <span className="text-slate-400 text-sm">24h</span>
            </div>
          </Card>

          <Card className="bg-slate-900/95 border-slate-800 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
              <img
                src="/images/token-holdings.png"
                alt="Token holdings"
                className="w-full h-full object-cover rounded-bl-xl"
              />
            </div>
            <div className="flex items-center justify-between mb-2 relative z-10">
              <span className="text-slate-400 text-sm">SHR Holdings</span>
              <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-black text-xs font-bold">S</span>
              </div>
            </div>
            <div className="text-2xl font-bold">{portfolioData.totalSHR.toLocaleString()}</div>
            <div className="text-slate-400 text-sm mt-1">≈ ${(portfolioData.totalSHR * 0.125).toLocaleString()}</div>
          </Card>

          <Card className="bg-slate-900/95 border-slate-800 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
              <img
                src="/images/staking-rewards.png"
                alt="Staking rewards"
                className="w-full h-full object-cover rounded-bl-xl"
              />
            </div>
            <div className="flex items-center justify-between mb-2 relative z-10">
              <span className="text-slate-400 text-sm">Staked SHR</span>
              <Clock className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl font-bold">{stakingData.stakedAmount.toLocaleString()}</div>
            <div className="text-blue-400 text-sm mt-1">APY: {stakingData.apy}%</div>
          </Card>

          <Card className="bg-slate-900/95 border-slate-800 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
              <img
                src="/images/investment-returns.png"
                alt="Investment returns"
                className="w-full h-full object-cover rounded-bl-xl"
              />
            </div>
            <div className="flex items-center justify-between mb-2 relative z-10">
              <span className="text-slate-400 text-sm">Staking Rewards</span>
              <Gift className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold">{stakingData.stakingRewards.toLocaleString()}</div>
            <div className="text-emerald-400 text-sm mt-1">Next: {stakingData.nextReward}</div>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-slate-800 border-slate-700">
            <TabsTrigger value="overview" className="data-[state=active]:bg-emerald-400 data-[state=active]:text-black">
              Overview
            </TabsTrigger>
            <TabsTrigger value="staking" className="data-[state=active]:bg-emerald-400 data-[state=active]:text-black">
              Staking
            </TabsTrigger>
            <TabsTrigger
              value="governance"
              className="data-[state=active]:bg-emerald-400 data-[state=active]:text-black"
            >
              Governance
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-emerald-400 data-[state=active]:text-black">
              History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Portfolio Chart */}
              <Card className="lg:col-span-2 bg-slate-900/95 border-slate-800 p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <img
                    src="/images/portfolio-analytics.png"
                    alt="Portfolio analytics"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <h3 className="text-lg font-semibold">Portfolio Performance</h3>
                  <div className="flex space-x-1 bg-slate-800 rounded-lg p-1">
                    {["24h", "7d", "30d", "90d"].map((period) => (
                      <Button
                        key={period}
                        variant={activeTimeframe === period ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setActiveTimeframe(period)}
                        className={
                          activeTimeframe === period ? "bg-emerald-400 text-black" : "text-slate-400 hover:text-white"
                        }
                      >
                        {period}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center bg-slate-800/50 rounded-lg">
                  <div className="text-center">
                    <PieChart className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                    <p className="text-slate-400">Portfolio chart visualization</p>
                    <p className="text-sm text-slate-500">Interactive chart would be implemented here</p>
                  </div>
                </div>
              </Card>

              {/* Token Breakdown */}
              <Card className="bg-slate-900/95 border-slate-800 p-6 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-15">
                  <img
                    src="/images/asset-allocation.png"
                    alt="Asset allocation"
                    className="w-full h-full object-cover rounded-tl-2xl"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-4">Token Breakdown</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                        <span className="text-black text-xs font-bold">S</span>
                      </div>
                      <div>
                        <div className="font-medium">SHR</div>
                        <div className="text-sm text-slate-400">MYSHARE</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">85.2%</div>
                      <div className="text-sm text-slate-400">${(portfolioData.totalSHR * 0.125).toLocaleString()}</div>
                    </div>
                  </div>
                  <Progress value={85.2} className="h-2" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">P</span>
                      </div>
                      <div>
                        <div className="font-medium">PUSD</div>
                        <div className="text-sm text-slate-400">PAU Dollar</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">14.8%</div>
                      <div className="text-sm text-slate-400">${portfolioData.totalPUSD.toLocaleString()}</div>
                    </div>
                  </div>
                  <Progress value={14.8} className="h-2" />
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="staking" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Staking Overview */}
              <Card className="bg-slate-900/95 border-slate-800 p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <img src="/images/defi-staking.png" alt="DeFi staking" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Staking Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Staked Amount</span>
                    <span className="font-medium">{stakingData.stakedAmount.toLocaleString()} SHR</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Current APY</span>
                    <span className="font-medium text-emerald-400">{stakingData.apy}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Earned Rewards</span>
                    <span className="font-medium text-green-400">+{stakingData.stakingRewards} SHR</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Next Reward</span>
                    <span className="font-medium">{stakingData.nextReward}</span>
                  </div>
                </div>
                <div className="flex space-x-3 mt-6">
                  <Button className="flex-1 bg-emerald-400 text-black hover:bg-emerald-500">Stake More</Button>
                  <Button variant="outline" className="flex-1 border-slate-600 text-slate-300 bg-transparent">
                    Unstake
                  </Button>
                </div>
              </Card>

              {/* Staking Rewards */}
              <Card className="bg-slate-900/95 border-slate-800 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-20 opacity-10">
                  <img src="/images/reward-history.png" alt="Reward history" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Reward History</h3>
                <div className="space-y-3">
                  {[
                    { amount: "125.5", date: "2024-01-15", value: "$15.56" },
                    { amount: "118.2", date: "2024-01-14", value: "$14.73" },
                    { amount: "122.8", date: "2024-01-13", value: "$15.35" },
                    { amount: "119.6", date: "2024-01-12", value: "$14.95" },
                  ].map((reward, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Gift className="w-4 h-4 text-emerald-400" />
                        <div>
                          <div className="font-medium">+{reward.amount} SHR</div>
                          <div className="text-sm text-slate-400">{reward.date}</div>
                        </div>
                      </div>
                      <div className="text-green-400 font-medium">{reward.value}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="governance" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-slate-900/95 border-slate-800 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <img
                    src="/images/dao-governance.png"
                    alt="DAO governance"
                    className="w-full h-full object-cover rounded-bl-3xl"
                  />
                </div>
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <h3 className="text-lg font-semibold">Governance Proposals</h3>
                  <Badge className="bg-emerald-400/10 text-emerald-400">Voting Power: 126,778 SHR</Badge>
                </div>
                <div className="space-y-4">
                  {governanceProposals.map((proposal) => (
                    <Card key={proposal.id} className="bg-slate-800 border-slate-700 p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{proposal.title}</h4>
                          <p className="text-sm text-slate-400 mb-3">{proposal.description}</p>
                        </div>
                        <Badge
                          className={`ml-4 ${
                            proposal.status === "active"
                              ? "bg-emerald-400/10 text-emerald-400"
                              : proposal.status === "passed"
                                ? "bg-green-400/10 text-green-400"
                                : "bg-red-400/10 text-red-400"
                          }`}
                        >
                          {proposal.status}
                        </Badge>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">For: {proposal.votesFor.toLocaleString()}</span>
                          <span className="text-slate-400">Against: {proposal.votesAgainst.toLocaleString()}</span>
                        </div>
                        <Progress
                          value={(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100}
                          className="h-2"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-400">{proposal.timeLeft}</span>
                        {proposal.status === "active" && (
                          <div className="flex space-x-2">
                            {!proposal.userVoted ? (
                              <>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-red-500 text-red-400 bg-transparent"
                                >
                                  Vote Against
                                </Button>
                                <Button size="sm" className="bg-emerald-400 text-black hover:bg-emerald-500">
                                  Vote For
                                </Button>
                              </>
                            ) : (
                              <Badge className="bg-blue-400/10 text-blue-400">
                                <Vote className="w-3 h-3 mr-1" />
                                Voted
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card className="bg-slate-900/95 border-slate-800 p-6 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-24 opacity-10">
                <img
                  src="/images/blockchain-transactions.png"
                  alt="Blockchain transactions"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-4">Transaction History</h3>
              <div className="space-y-3">
                {transactions.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
                    <div className="flex items-center space-x-4">
                      {getTransactionIcon(tx.type)}
                      <div>
                        <div className="font-medium capitalize">
                          {tx.type} {tx.amount} {tx.token}
                        </div>
                        <div className="text-sm text-slate-400">{tx.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{tx.total}</div>
                      <Badge
                        className={`text-xs ${
                          tx.status === "completed"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >
                        {tx.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
