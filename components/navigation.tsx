"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, Settings, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavigationProps {
  variant?: "landing" | "app"
}

export default function Navigation({ variant = "app" }: NavigationProps) {
  const [isConnected, setIsConnected] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  if (variant === "landing") {
    return (
      <header className="border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">M</span>
            </div>
            <div>
              <span className="text-xl font-bold">MYSHARE</span>
              <div className="text-xs text-slate-400">INC.</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors ${isActive("/") ? "text-emerald-400" : "text-slate-300 hover:text-white"}`}
            >
              Home
            </Link>
            <Link
              href="/ido"
              className={`transition-colors ${isActive("/ido") ? "text-emerald-400" : "text-slate-300 hover:text-white"}`}
            >
              IDO
            </Link>
            <Link
              href="/dashboard"
              className={`transition-colors ${isActive("/dashboard") ? "text-emerald-400" : "text-slate-300 hover:text-white"}`}
            >
              Dashboard
            </Link>
            <Link href="#" className="text-slate-300 hover:text-white transition-colors">
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-slate-300" onClick={() => setIsConnected(!isConnected)}>
              {isConnected ? "Connected" : "Connect Wallet"}
            </Button>
            <Link href="/ido">
              <Button className="bg-emerald-400 text-black hover:bg-emerald-500">Launch App</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-900 border-slate-800">
              <div className="flex flex-col space-y-6 mt-6">
                <Link
                  href="/"
                  className={`text-lg font-medium ${isActive("/") ? "text-emerald-400" : "text-slate-300"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/ido"
                  className={`text-lg ${isActive("/ido") ? "text-emerald-400" : "text-slate-300"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  IDO
                </Link>
                <Link
                  href="/dashboard"
                  className={`text-lg ${isActive("/dashboard") ? "text-emerald-400" : "text-slate-300"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link href="#" className="text-lg text-slate-300" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
                <div className="border-t border-slate-800 pt-6 space-y-3">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-slate-300"
                    onClick={() => {
                      setIsConnected(!isConnected)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {isConnected ? "Connected" : "Connect Wallet"}
                  </Button>
                  <Link href="/ido" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-emerald-400 text-black hover:bg-emerald-500">Launch App</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    )
  }

  return (
    <header className="border-b border-slate-800 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold">M</span>
            </div>
            <div>
              <span className="text-xl font-bold">MYSHARE</span>
              <div className="text-xs text-slate-400">
                {pathname === "/ido" ? "IDO Platform" : pathname === "/dashboard" ? "Dashboard" : "Platform"}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/ido">
              <Button variant="ghost" className={isActive("/ido") ? "text-emerald-400 bg-emerald-400/10" : ""}>
                IDO
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="ghost" className={isActive("/dashboard") ? "text-emerald-400 bg-emerald-400/10" : ""}>
                Dashboard
              </Button>
            </Link>
            <Button variant="ghost">Analytics</Button>
            <Button variant="ghost" className="flex items-center space-x-1">
              <span>Staking</span>
              <Badge className="bg-emerald-400 text-black text-xs">New</Badge>
            </Button>
          </nav>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input placeholder="Search tokens" className="pl-10 bg-slate-800 border-slate-700 w-64" />
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="w-4 h-4" />
          </Button>
          <Button
            className={`${isConnected ? "bg-green-500" : "bg-emerald-400"} text-black hover:bg-emerald-500`}
            onClick={() => setIsConnected(!isConnected)}
          >
            {isConnected ? "Connected" : "Connect Wallet"}
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-slate-900 border-slate-800">
            <div className="flex flex-col space-y-6 mt-6">
              <Link
                href="/ido"
                className={`text-lg ${isActive("/ido") ? "text-emerald-400" : "text-slate-300"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                IDO
              </Link>
              <Link
                href="/dashboard"
                className={`text-lg ${isActive("/dashboard") ? "text-emerald-400" : "text-slate-300"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <span className="text-lg text-slate-300">Analytics</span>
              <span className="text-lg text-slate-300 flex items-center space-x-2">
                <span>Staking</span>
                <Badge className="bg-emerald-400 text-black text-xs">New</Badge>
              </span>
              <div className="border-t border-slate-800 pt-6 space-y-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input placeholder="Search tokens" className="pl-10 bg-slate-800 border-slate-700" />
                </div>
                <Button
                  className={`w-full ${isConnected ? "bg-green-500" : "bg-emerald-400"} text-black hover:bg-emerald-500`}
                  onClick={() => {
                    setIsConnected(!isConnected)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  {isConnected ? "Connected" : "Connect Wallet"}
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
