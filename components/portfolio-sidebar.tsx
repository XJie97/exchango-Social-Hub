"use client"

import { cn } from "@/lib/utils"
import { ExchangeIcon } from "@/components/exchange-icon"

interface PortfolioSidebarProps {
  activeSection: number
  onSectionChange: (section: number) => void
}

const navItems = [
  "Service Overview",
  "Design Iteration",
  "End-to-End Flow",
  "Ecosystem Integration",
  "AI Reflection",
]

export function PortfolioSidebar({ activeSection, onSectionChange }: PortfolioSidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-80 bg-white border-r border-[#E5E7EB] flex flex-col py-8 px-6 z-50">
      {/* Logo */}
      <div className="mb-10 flex items-center gap-3">
        <ExchangeIcon className="w-10 h-10 rounded-xl" />
        <div>
          <h1 className="text-xl font-bold text-[#00855E] tracking-tight">exchango</h1>
          <p className="text-xs text-muted-foreground">Social Hub</p>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => onSectionChange(index + 1)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-full text-left transition-all duration-200",
              activeSection === index + 1
                ? "bg-[#E6F4F1] text-foreground font-medium"
                : "text-muted-foreground hover:bg-[#E6F4F1]/50 hover:text-foreground"
            )}
          >
            <span className={cn(
              "w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0",
              activeSection === index + 1
                ? "bg-[#00855E] text-white"
                : "bg-muted text-muted-foreground"
            )}>
              {index + 1}
            </span>
            <span className="text-sm truncate">{item}</span>
          </button>
        ))}
      </nav>
      
      {/* Footer */}
      <div className="pt-6 border-t border-[#E5E7EB] mt-auto">
        <p className="text-xs text-muted-foreground">Loh Xian Jie</p>
        <p className="text-xs text-muted-foreground">CS3240 Integrated Design Project</p>
      </div>
    </aside>
  )
}
