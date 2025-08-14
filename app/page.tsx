"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Shield, Zap, Users } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function LandingPage() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Token Swaps",
      description: "Exchange PUSD for SHR tokens instantly with minimal slippage and optimal routing.",
      image: "/images/instant-trading.png",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Audited",
      description: "Built with security-first principles and audited smart contracts for peace of mind.",
      image: "/images/security-audit.png",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Track your portfolio performance and market trends with advanced analytics.",
      image: "/images/analytics-dashboard.png",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description: "Join a thriving community of SHR token holders and participate in governance.",
      image: "/images/community-governance.png",
    },
  ]

  const stats = [
    { label: "Total Value Locked", value: "$2.4M", change: "+12.5%" },
    { label: "SHR Holders", value: "15,847", change: "+8.2%" },
    { label: "24h Volume", value: "$847K", change: "+24.1%" },
    { label: "Market Cap", value: "$12.8M", change: "+15.7%" },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation variant="landing" />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/financial-hero-bg.png"
            alt="Financial technology background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="text-center space-y-8">
            <Badge className="bg-emerald-400/10 text-emerald-400 border-emerald-400/20">IDO Platform Now Live</Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              The Future of
              <br />
              Decentralized Finance
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Join the MYSHARE ecosystem and participate in the next generation of DeFi. Exchange PUSD for SHR tokens
              and become part of our revolutionary platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/ido">
                <Button size="lg" className="bg-emerald-400 text-black hover:bg-emerald-500 px-8 py-4 text-lg">
                  Start Trading
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-slate-800 relative">
        <div className="absolute inset-0">
          <img
            src="/images/market-data-bg.png"
            alt="Market data visualization"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-emerald-400">{stat.value}</div>
                <div className="text-slate-400 mt-1">{stat.label}</div>
                <div className="text-sm text-green-400 mt-2">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose MYSHARE?</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Experience the most advanced IDO platform with cutting-edge features designed for modern DeFi.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-900 border-slate-800 p-6 hover:border-emerald-400/50 transition-colors cursor-pointer overflow-hidden"
                onClick={() => setActiveFeature(index)}
              >
                <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-emerald-400">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Token Info Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">SHR Token</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                MYSHARE (SHR) is the native utility token powering our ecosystem. Use PUSD to participate in our IDO and
                gain access to exclusive features, governance rights, and staking rewards.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-800">
                  <span className="text-slate-400">Token Symbol</span>
                  <span className="font-semibold">SHR</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-800">
                  <span className="text-slate-400">Payment Token</span>
                  <span className="font-semibold">PUSD</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-800">
                  <span className="text-slate-400">Current Price</span>
                  <span className="font-semibold text-emerald-400">$0.125</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-400">24h Change</span>
                  <span className="font-semibold text-green-400">+15.7%</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <img
                  src="/images/investment-chart.png"
                  alt="Investment performance chart"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <Card className="bg-slate-900/90 border-slate-800 p-8 relative z-10">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-black font-bold text-3xl">SHR</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">MYSHARE Token</h3>
                    <p className="text-slate-400">The future of decentralized sharing</p>
                  </div>
                  <Link href="/ido">
                    <Button className="w-full bg-emerald-400 text-black hover:bg-emerald-500 py-4">
                      Buy SHR Tokens
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0">
          <img
            src="/images/defi-ecosystem.png"
            alt="DeFi ecosystem visualization"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-400 mb-8">
            Join thousands of users who are already part of the MYSHARE ecosystem.
          </p>
          <Link href="/ido">
            <Button size="lg" className="bg-emerald-400 text-black hover:bg-emerald-500 px-12 py-4 text-lg">
              Launch IDO Platform
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold">M</span>
              </div>
              <div>
                <span className="text-lg font-bold">MYSHARE</span>
                <div className="text-xs text-slate-400">INC.</div>
              </div>
            </div>
            <div className="text-slate-400 text-sm">© 2025 MYSHARE INC. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
