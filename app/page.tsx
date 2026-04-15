"use client"

import { useState, useEffect, useRef } from "react"
import { PortfolioSidebar } from "@/components/portfolio-sidebar"
import {
  ServiceOverviewSection,
  DesignIterationSection,
  EndToEndFlowSection,
  EcosystemIntegrationSection,
  AIReflectionSection,
} from "@/components/portfolio-sections"
import { Menu, X, ChevronDown } from "lucide-react"
import { ExchangeIcon } from "@/components/exchange-icon"
import { Button } from "@/components/ui/button"

const sections = [
  { id: 1, component: ServiceOverviewSection },
  { id: 2, component: DesignIterationSection },
  { id: 3, component: EndToEndFlowSection },
  { id: 4, component: EcosystemIntegrationSection },
  { id: 5, component: AIReflectionSection },
]

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showHero, setShowHero] = useState(true)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight
      const scrollY = window.scrollY
      const triggerPoint = scrollY + viewportHeight * 0.3 // 30% from top of viewport

      // Check if hero is visible
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect()
        const heroBottom = scrollY + heroRect.bottom
        if (triggerPoint < heroBottom) {
          setShowHero(true)
          setActiveSection(0)
          return
        }
      }

      setShowHero(false)

      // Find which section the trigger point is within
      for (let i = sectionRefs.current.length - 1; i >= 0; i--) {
        const ref = sectionRefs.current[i]
        if (ref) {
          const rect = ref.getBoundingClientRect()
          const sectionTop = scrollY + rect.top
          if (triggerPoint >= sectionTop) {
            setActiveSection(i + 1)
            return
          }
        }
      }

      // Default to first section if nothing else matches
      setActiveSection(1)
    }

    // Initial check
    handleScroll()

    // Add scroll listener with passive flag for performance
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionNumber: number) => {
    if (sectionNumber === 0) {
      heroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      const ref = sectionRefs.current[sectionNumber - 1]
      if (ref) {
        ref.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
    setMobileMenuOpen(false)
  }

  const scrollToFirstSection = () => {
    const ref = sectionRefs.current[0]
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-[#EEF8F5]">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E7EB] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ExchangeIcon className="w-8 h-8 rounded-xl" />
          <div>
            <h1 className="text-lg font-bold text-[#00855E]">exchango</h1>
            <p className="text-[10px] text-muted-foreground">Social Hub</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white pt-20">
          <nav className="px-6 py-4 space-y-2">
            {[
              "Service Overview",
              "Design Iteration",
              "End-to-End Flow",
              "Ecosystem Integration",
              "AI Reflection",
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index + 1)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-full text-left transition-all ${
                  activeSection === index + 1
                    ? "bg-[#E6F4F1] text-foreground font-medium"
                    : "text-muted-foreground hover:bg-[#E6F4F1]/50"
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold ${
                    activeSection === index + 1
                      ? "bg-[#00855E] text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index + 1}
                </span>
                <span>{item}</span>
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <PortfolioSidebar activeSection={activeSection} onSectionChange={scrollToSection} />
      </div>

      {/* Main Content */}
      <main className="lg:ml-80 pt-20 lg:pt-0">
        {/* Hero Section - Full viewport height */}
        <div 
          ref={heroRef}
          className="min-h-screen flex flex-col items-center justify-center px-6 relative"
        >
          <div className="text-center max-w-2xl mx-auto space-y-6">
            {/* Logo Icon */}
            <div className="flex justify-center mb-8">
              <ExchangeIcon className="w-20 h-20 rounded-2xl shadow-lg" />
            </div>

            {/* Brand Name */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#00855E] tracking-tight">
              exchango
            </h1>

            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800">
              Social Hub & Trip Matcher
            </h2>

            {/* Sub-headline */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto text-pretty">
              Connecting solo exchange students to their perfect travel groups — from the first Trip Ad to the final departure
            </p>

            {/* Credits */}
            <div className="pt-8">
              <p className="text-sm text-gray-500">
                Loh Xian Jie — CS3240 Integrated Design Project
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToFirstSection}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-[#00855E] transition-colors cursor-pointer"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-24">
          {sections.map((section, index) => (
            <div
              key={section.id}
              ref={(el) => { sectionRefs.current[index] = el }}
              id={`section-${section.id}`}
              className="scroll-mt-24"
            >
              <section.component />
            </div>
          ))}

          {/* Footer */}
          <footer className="py-12 border-t border-[#E5E7EB]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ExchangeIcon className="w-10 h-10 rounded-xl" />
                <div>
                  <h2 className="text-xl font-bold text-[#00855E]">exchango</h2>
                  <p className="text-sm text-muted-foreground">Social Hub Case Study</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Loh Xian Jie — CS3240 Integrated Design Project
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}
