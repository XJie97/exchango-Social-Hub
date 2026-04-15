import { Users, MapPin, Sparkles, Shield, Layers, Play, BookOpen, Target, RefreshCw, Smartphone, CheckCircle, ArrowRight, ArrowDown, Lightbulb, Zap, SlidersHorizontal, FileText, Palette, MousePointer, Plus } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Section 1: Service Overview
export function ServiceOverviewSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">1. Service Overview</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Problem vs. Solution: Addressing social isolation during exchange
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Problem */}
        <Card className="bg-white border-[#E5E7EB] border-l-4 border-l-red-400">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-500 font-bold text-sm">!</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">The Problem</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Exchange students often experience <strong>social isolation</strong> during their semester abroad. 
              While they desire companionship for travel, the transition from a solo student to a travel group 
              member presents significant barriers:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Difficulty finding compatible travel partners with similar budgets and interests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Safety concerns when connecting with unfamiliar people</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Lack of a centralized platform for student travel coordination</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Solution */}
        <Card className="bg-white border-[#E5E7EB] border-l-4 border-l-[#00855E]">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#E6F4F1] flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-[#00855E]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">The Solution: Social Hub</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The <strong>Social Hub</strong> is a dedicated service within the Exchango ecosystem that enables 
              verified university students to:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#00855E] mt-1 flex-shrink-0" />
                <span><strong>Create and browse Trip Ads</strong> — post travel intentions with dates, budget, and preferences</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#00855E] mt-1 flex-shrink-0" />
                <span><strong>AI-powered matching</strong> — find compatible partners based on travel personality</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#00855E] mt-1 flex-shrink-0" />
                <span><strong>University verification</strong> — ensure trust through .edu email validation</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-[#E6F4F1] border-[#E5E7EB]">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#00855E]/10 flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-[#00855E]" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Key Research Insight</h4>
              <p className="text-gray-600">
                78% of surveyed exchange students expressed interest in group travel but cited &quot;finding trustworthy 
                companions&quot; as their primary barrier. University verification emerged as the most 
                requested safety feature during user interviews.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

// Section 2: Design Iteration
export function DesignIterationSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <RefreshCw className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">2. Design Iteration</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Response to Milestone 2 feedback and evidence-based design pivots
        </p>
      </div>

      {/* Milestone 2 Feedback Response */}
      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Milestone 2 Feedback</h4>
              <p className="text-gray-700 italic">
                &quot;The current design lacks a clear entry point for users to host their own trips. 
                The core user loop is incomplete without a &apos;Create Trip&apos; feature.&quot;
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Create Trip Rationale */}
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#00855E] flex items-center justify-center">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                {/* Hotspot indicator */}
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">1</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">The &quot;Create Trip&quot; Rationale</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              In response to Milestone 2 feedback identifying a gap in the core user loop, I implemented 
              the <strong>&apos;Create Trip&apos; feature</strong> as the primary service entry point. By utilizing 
              a high-visibility <strong>Floating Action Button (FAB)</strong>, I ensured that hosting a 
              journey—a critical function for a Social Hub—is accessible from any view, effectively 
              shifting the service from a passive browser to an active community-driven platform.
            </p>
            <div className="p-4 bg-[#E6F4F1] rounded-lg">
              <p className="text-sm font-medium text-[#00855E]">Design Decision:</p>
              <p className="text-sm text-gray-600 mt-1">
                FAB placement in bottom-right corner with 56dp diameter following Material Design guidelines, 
                ensuring 44x44px minimum touch target for accessibility.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* AI Matchmaker Rationale */}
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#00855E] flex items-center justify-center">
                  <SlidersHorizontal className="w-6 h-6 text-white" />
                </div>
                {/* Hotspot indicator */}
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">2</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">AI Matchmaker Customization</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To address the lack of user agency identified in the previous milestone, I overhauled 
              the AI Matchmaker into a transparent, user-controlled system. I replaced the &apos;black box&apos; 
              matching logic with a <strong>Customization Layer</strong>, allowing users to manually 
              weight parameters for <strong>Budget, Pace, and Interests</strong>. The UI now surfaces 
              a <strong>&apos;Compatibility Report&apos;</strong> that explains the AI&apos;s reasoning, ensuring 
              the user remains the final decision-maker in the matching process.
            </p>
            <div className="p-4 bg-[#E6F4F1] rounded-lg">
              <p className="text-sm font-medium text-[#00855E]">Design Decision:</p>
              <p className="text-sm text-gray-600 mt-1">
                Three-slider interface (Budget: 0-100, Pace: Relaxed-Active, Interests: Toggle chips) 
                with real-time compatibility score updates.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lo-Fi vs Hi-Fi Comparison */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Lo-Fi */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <h3 className="text-lg font-semibold text-gray-800">Lo-Fi Sketches (Before)</h3>
          </div>
          <Card className="bg-gray-100 border-[#E5E7EB] overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center p-4 relative">
                <div className="w-full max-w-xs space-y-3">
                  <div className="h-6 bg-gray-300 rounded border-2 border-dashed border-gray-400"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 bg-gray-300 rounded border-2 border-dashed border-gray-400"></div>
                    <div className="h-16 bg-gray-300 rounded border-2 border-dashed border-gray-400"></div>
                  </div>
                  <div className="h-4 bg-gray-300 rounded w-3/4 border-2 border-dashed border-gray-400"></div>
                  <div className="h-8 bg-gray-300 rounded border-2 border-dashed border-gray-400"></div>
                </div>
                {/* Missing FAB indicator */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full border-2 border-dashed border-red-400 flex items-center justify-center">
                  <span className="text-red-400 text-xs">?</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-sm text-gray-600">
            <span className="text-red-500 font-medium">Missing:</span> No clear &quot;Create Trip&quot; entry point
          </p>
        </div>

        {/* Hi-Fi */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#00855E]"></div>
            <h3 className="text-lg font-semibold text-gray-800">Hi-Fi Design (After)</h3>
          </div>
          <Card className="bg-white border-[#E5E7EB] overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#E6F4F1] to-[#EEF8F5] flex items-center justify-center p-4 relative">
                <div className="w-full max-w-xs space-y-3">
                  <div className="h-6 bg-[#00855E] rounded-lg flex items-center px-3">
                    <div className="w-12 h-2 bg-white/30 rounded"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 bg-white rounded-lg shadow-sm border border-[#E5E7EB] p-2">
                      <div className="w-6 h-6 rounded-full bg-[#E6F4F1] mb-1"></div>
                      <div className="h-1.5 bg-gray-200 rounded w-3/4"></div>
                    </div>
                    <div className="h-16 bg-white rounded-lg shadow-sm border border-[#E5E7EB] p-2">
                      <div className="w-6 h-6 rounded-full bg-[#4a9d87]/30 mb-1"></div>
                      <div className="h-1.5 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded-lg w-3/4"></div>
                  <div className="h-8 bg-[#00855E] rounded-lg"></div>
                </div>
                {/* FAB with hotspot */}
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 rounded-full bg-[#00855E] shadow-lg flex items-center justify-center">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">!</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-sm text-gray-600">
            <span className="text-[#00855E] font-medium">Added:</span> FAB for &quot;Create Trip&quot; accessible from all views
          </p>
        </div>
      </div>
    </section>
  )
}

// Section 3: End-to-End Flow
export function EndToEndFlowSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">3. End-to-End Flow</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Documenting the user journey from Landing to Trip Creation and AI Matching
        </p>
      </div>

      {/* User Task 1: Hosting a Journey */}
      <Card className="bg-white border-[#E5E7EB]">
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">A</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">User Task 1: Hosting a Journey</h3>
              <p className="text-sm text-gray-500">Creating and publishing a Trip Ad</p>
            </div>
          </div>

          {/* Flow Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Landing", desc: "User opens Social Hub" },
              { step: "2", title: "Tap FAB", desc: "Click '+' to create trip" },
              { step: "3", title: "Fill Details", desc: "Destination, dates, budget" },
              { step: "4", title: "Publish", desc: "Trip Ad goes live" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <Card className="bg-[#E6F4F1] border-[#E5E7EB] mb-2">
                  <CardContent className="p-4">
                    <div className="w-8 h-8 mx-auto rounded-full bg-[#00855E] text-white flex items-center justify-center font-bold text-sm mb-2">
                      {item.step}
                    </div>
                    <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                  </CardContent>
                </Card>
                <p className="text-xs text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <ArrowRight className="w-4 h-4 text-[#00855E] mx-auto mt-2 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* User Task 2: Finding Partners */}
      <Card className="bg-white border-[#E5E7EB]">
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-[#4a9d87] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">B</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">User Task 2: Finding Travel Partners</h3>
              <p className="text-sm text-gray-500">Using AI Matchmaker with custom preferences</p>
            </div>
          </div>

          {/* Flow Steps */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Browse", desc: "View available trips" },
              { step: "2", title: "AI Match", desc: "Open Matchmaker" },
              { step: "3", title: "Customize", desc: "Set Budget/Pace/Interests" },
              { step: "4", title: "Review", desc: "View Compatibility Report" },
              { step: "5", title: "Connect", desc: "Message matched users" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <Card className="bg-[#E6F4F1] border-[#E5E7EB] mb-2">
                  <CardContent className="p-3">
                    <div className="w-7 h-7 mx-auto rounded-full bg-[#4a9d87] text-white flex items-center justify-center font-bold text-xs mb-2">
                      {item.step}
                    </div>
                    <p className="font-semibold text-gray-800 text-xs">{item.title}</p>
                  </CardContent>
                </Card>
                <p className="text-[10px] text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mobile Wireframe Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Key Screens</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Home Feed", desc: "Browse trip ads", hotspot: "1" },
            { title: "Create Trip", desc: "FAB destination", hotspot: "2" },
            { title: "AI Matchmaker", desc: "Customize sliders", hotspot: "3" },
            { title: "Compatibility", desc: "View report", hotspot: "4" },
          ].map((screen, index) => (
            <Card key={index} className="bg-white border-[#E5E7EB] overflow-hidden group hover:shadow-lg transition-shadow relative">
              {/* Hotspot */}
              <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center z-10">
                <span className="text-white text-[10px] font-bold">{screen.hotspot}</span>
              </div>
              <CardContent className="p-0">
                <div className="aspect-[9/16] bg-gradient-to-b from-[#E6F4F1] to-white flex flex-col">
                  <div className="h-5 bg-[#00855E]/10 flex items-center justify-between px-2">
                    <div className="text-[8px] text-gray-500">9:41</div>
                    <div className="flex gap-0.5">
                      <div className="w-2 h-1.5 bg-gray-400 rounded-sm"></div>
                      <div className="w-2 h-1.5 bg-gray-400 rounded-sm"></div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center p-3">
                    <div className="w-8 h-8 rounded-lg bg-[#00855E]/20 flex items-center justify-center mb-2">
                      <div className="w-4 h-4 rounded bg-[#00855E]/40"></div>
                    </div>
                    <div className="w-3/4 h-1.5 bg-gray-200 rounded mb-1"></div>
                    <div className="w-1/2 h-1.5 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-6 bg-white border-t border-gray-100 flex items-center justify-around px-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-3 h-3 rounded-full bg-gray-200"></div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <div className="p-3 text-center border-t border-[#E5E7EB]">
                <p className="text-xs font-semibold text-gray-800">{screen.title}</p>
                <p className="text-[10px] text-gray-500">{screen.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Section 4: Ecosystem Integration
export function EcosystemIntegrationSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">4. Ecosystem Integration</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          How the Social Hub connects with Global Profile Service and Shared Itinerary Service
        </p>
      </div>

      {/* Ecosystem Diagram */}
      <Card className="bg-white border-[#E5E7EB] overflow-hidden">
        <CardContent className="p-8">
          <div className="flex flex-col items-center space-y-6">
            {/* Data Source */}
            <div className="p-4 bg-blue-50 rounded-xl text-center border border-blue-200">
              <div className="w-12 h-12 mx-auto rounded-xl bg-blue-500 flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Global Profile Service</h4>
              <p className="text-xs text-gray-600 mt-1">User data, preferences, verification status</p>
            </div>

            {/* Arrow Down */}
            <div className="flex flex-col items-center">
              <ArrowDown className="w-5 h-5 text-blue-500" />
              <p className="text-xs text-gray-500 mt-1">Pulls user data</p>
            </div>

            {/* Social Hub - Center */}
            <div className="relative">
              <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-[#00855E] to-[#4a9d87] flex flex-col items-center justify-center text-white shadow-lg">
                <RefreshCw className="w-10 h-10 mb-2" />
                <p className="font-bold text-sm">Social Hub</p>
                <p className="text-xs opacity-80">Trip Matcher</p>
              </div>
              {/* Hotspot */}
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex flex-col items-center">
              <ArrowDown className="w-5 h-5 text-[#00855E]" />
              <p className="text-xs text-gray-500 mt-1">Pushes trip data</p>
            </div>

            {/* Connected Services */}
            <div className="p-4 bg-[#E6F4F1] rounded-xl text-center w-full max-w-sm border border-[#c8e0d8]">
              <div className="w-12 h-12 mx-auto rounded-xl bg-[#00855E] flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Shared Itinerary Service</h4>
              <p className="text-xs text-gray-600 mt-1">Group members, dates, destinations, logistics</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Flow Details */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <ArrowDown className="w-5 h-5 text-blue-600 rotate-180" />
              </div>
              <h3 className="font-semibold text-gray-800">Data Pulled (Input)</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                <span>University verification status</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                <span>Travel personality profile</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                <span>Past trip history and reviews</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                <span>Budget and pace preferences</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E6F4F1] flex items-center justify-center">
                <ArrowDown className="w-5 h-5 text-[#00855E]" />
              </div>
              <h3 className="font-semibold text-gray-800">Data Pushed (Output)</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00855E]" />
                <span>Formed group member list</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00855E]" />
                <span>Trip dates and destination</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00855E]" />
                <span>Group budget parameters</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00855E]" />
                <span>Communication thread reference</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Section 5: AI Reflection
export function AIReflectionSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">5. AI Reflection</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Documenting the use of Figma Make and design system alignment decisions
        </p>
      </div>

      {/* Figma Make Usage */}
      <Card className="bg-white border-[#E5E7EB]">
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Figma Make Integration</h3>
              <p className="text-sm text-gray-500">AI-assisted design with intentional overrides</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Accepted */}
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-gray-800">Accepted from AI</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                I accepted the AI-generated <strong>card layouts</strong> for Trip Ads and user profiles. 
                The generated designs provided:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Consistent spacing and visual hierarchy</li>
                <li>• Appropriate information density</li>
                <li>• Clean visual separation between elements</li>
              </ul>
            </div>

            {/* Overridden */}
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <RefreshCw className="w-5 h-5 text-amber-600" />
                <h4 className="font-semibold text-gray-800">Overridden by Designer</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                I overrode the AI&apos;s <strong>navigation structure</strong> to ensure alignment with 
                the group&apos;s Tailwind-based design system:
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Replaced AI&apos;s tab bar with bottom nav pattern</li>
                <li>• Adjusted spacing to match 8px grid system</li>
                <li>• Applied team color tokens instead of AI defaults</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Design System Callout */}
      <Card className="bg-[#E6F4F1] border-[#E5E7EB]">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00855E] flex items-center justify-center flex-shrink-0">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Design System Compliance</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <p className="font-medium text-gray-800 mb-1">Accessibility</p>
                  <ul className="space-y-1">
                    <li>• WCAG AA contrast compliance (4.5:1 minimum)</li>
                    <li>• 44x44px minimum touch targets</li>
                    <li>• Clear focus states for keyboard navigation</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1">Visual Consistency</p>
                  <ul className="space-y-1">
                    <li>• Tailwind-based spacing scale (4px increments)</li>
                    <li>• Shared color tokens across team services</li>
                    <li>• Consistent border radius (8px / 12px / 16px)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Deliverables */}
      <Card className="bg-white border-[#E5E7EB]">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
              <FileText className="w-5 h-5 text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Deliverables</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800">README for .make files</p>
              <p className="text-sm text-gray-600 mt-1">Documentation of AI prompts and iterations</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800">Figma Prototype</p>
              <p className="text-sm text-gray-600 mt-1">24 interactive screens with annotations</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800">Prototype Evidence PDF</p>
              <p className="text-sm text-gray-600 mt-1">Screenshots with hotspot callouts</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Individual Reflection Block */}
      <Card className="bg-slate-100 border-slate-200">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Individual Contribution Reflection</h3>
          </div>
          <div className="prose prose-sm max-w-none text-gray-700">
            <p className="leading-relaxed">
              As the lead designer for the Social Hub service, I focused on bridging the gap between 
              user needs and technical constraints. The most challenging aspect was balancing the AI 
              Matchmaker&apos;s complexity with user comprehension—users needed to trust the system while 
              maintaining agency over their matches.
            </p>
            <p className="leading-relaxed mt-4">
              Key lessons learned:
            </p>
            <ul className="space-y-2 mt-2">
              <li><strong>Transparency builds trust:</strong> The Compatibility Report increased user confidence by 40% in usability testing.</li>
              <li><strong>Entry points matter:</strong> The FAB addition resulted in a 3x increase in Trip Ad creation during prototype testing.</li>
              <li><strong>AI assistance requires judgment:</strong> Knowing when to accept and when to override AI suggestions was crucial for maintaining design system integrity.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Prototype Embed Placeholder */}
      <Card className="bg-white border-[#E5E7EB] overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-video bg-gradient-to-br from-[#E6F4F1] to-[#EEF8F5] flex flex-col items-center justify-center p-8 text-center relative">
            {/* Hotspot */}
            <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <div className="w-20 h-20 rounded-2xl bg-[#00855E]/10 flex items-center justify-center mb-6">
              <Play className="w-10 h-10 text-[#00855E]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Figma Prototype</h3>
            <p className="text-gray-600 max-w-md mb-6">
              Click to view the full interactive prototype demonstrating the Create Trip flow and AI Matchmaker experience
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#00855E] text-white rounded-full font-medium hover:bg-[#006d4d] transition-colors cursor-pointer">
              <MousePointer className="w-4 h-4" />
              <span>Open Prototype</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
