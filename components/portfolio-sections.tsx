import { Users, MapPin, Sparkles, Shield, Layers, Play, BookOpen, Target, RefreshCw, Smartphone, CheckCircle, ArrowRight, Lightbulb, SlidersHorizontal, Plus, MessageSquare, Instagram, Mail, Database, ArrowLeftRight, Palette, MousePointer, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Section 1: Problem Framing
export function ProblemFramingSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">1. Problem Framing</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Focus on the transition from a solo student to a travel group member
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

// Section 2: User Research
export function UserResearchSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">2. User Research</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Two primary personas emerged from our research interviews
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Persona 1: Zen Lee */}
        <Card className="bg-white border-[#E5E7EB] overflow-hidden">
          <div className="h-2 bg-[#00855E]"></div>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#E6F4F1] flex items-center justify-center">
                <span className="text-2xl font-bold text-[#00855E]">ZL</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Zen Lee</h3>
                <p className="text-[#00855E] font-medium">High-Control Planner</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Background</p>
                <p className="text-gray-600">Computer Science major on exchange in Europe. Prefers detailed itineraries and structured travel plans.</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Goals</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Find travel partners who share similar budget expectations</li>
                  <li>• Maintain control over trip planning and logistics</li>
                  <li>• Verify safety of potential companions</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Pain Points</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Frustration with spontaneous, unplanned companions</li>
                  <li>• Anxiety about meeting strangers from the internet</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Persona 2: Wenqing Ge */}
        <Card className="bg-white border-[#E5E7EB] overflow-hidden">
          <div className="h-2 bg-[#4a9d87]"></div>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#E6F4F1] flex items-center justify-center">
                <span className="text-2xl font-bold text-[#4a9d87]">WG</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Wenqing Ge</h3>
                <p className="text-[#4a9d87] font-medium">Goal-Driven Wanderer</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Background</p>
                <p className="text-gray-600">Business major exploring Southeast Asia. Values experiences over rigid schedules, open to spontaneous adventures.</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Goals</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Connect with like-minded adventurers quickly</li>
                  <li>• Discover hidden gems through local recommendations</li>
                  <li>• Split costs while maximizing experiences</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Pain Points</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Limited time to vet potential travel partners</li>
                  <li>• Mismatch between stated and actual travel styles</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Section 3: Key User Tasks
export function KeyUserTasksSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">3. Key User Tasks</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Core workflows for trip hosting and partner discovery
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Task 1: Post Trip Ads */}
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#00855E] flex items-center justify-center">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">1</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Post Trip Ads</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Users create detailed trip advertisements specifying destination, dates, budget range, 
              and travel style preferences. The FAB (Floating Action Button) ensures this core action 
              is accessible from any view.
            </p>
            <div className="p-3 bg-[#E6F4F1] rounded-lg">
              <p className="text-xs text-[#00855E] font-medium">Design Decision:</p>
              <p className="text-xs text-gray-600 mt-1">FAB placement follows Material Design guidelines with 56dp diameter and 44x44px touch target.</p>
            </div>
          </CardContent>
        </Card>

        {/* Task 2: Join Travel Groups */}
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#4a9d87] flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">2</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Join Travel Groups</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Browse existing trip ads, filter by destination and dates, then request to join 
              compatible groups. University verification badges indicate trustworthy hosts.
            </p>
            <div className="p-3 bg-[#E6F4F1] rounded-lg">
              <p className="text-xs text-[#00855E] font-medium">Safety Feature:</p>
              <p className="text-xs text-gray-600 mt-1">All users must verify their .edu email before posting or joining trips.</p>
            </div>
          </CardContent>
        </Card>

        {/* Task 3: AI Matchmaker */}
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#00855E] flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">3</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">AI Matchmaker</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Let the AI suggest compatible travel partners based on customizable parameters: 
              Budget alignment, Travel Pace, and Shared Interests.
            </p>
            <div className="p-3 bg-[#E6F4F1] rounded-lg">
              <p className="text-xs text-[#00855E] font-medium">Transparency:</p>
              <p className="text-xs text-gray-600 mt-1">Compatibility Report explains the AI&apos;s reasoning for each match.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Section 4: Iteration & Evolution
export function IterationSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <RefreshCw className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">4. Iteration & Evolution</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Response to Milestone 2 feedback and design pivots
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
              journey—a critical function for a Social Hub—is accessible from any view.
            </p>
            <div className="p-4 bg-[#E6F4F1] rounded-lg">
              <p className="text-sm font-medium text-[#00855E]">Design Decision:</p>
              <p className="text-sm text-gray-600 mt-1">
                FAB placement in bottom-right corner with 56dp diameter following Material Design guidelines.
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
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">2</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">AI Matchmaker Customization</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              I overhauled the AI Matchmaker into a transparent, user-controlled system. I replaced the 
              &apos;black box&apos; matching logic with a <strong>Customization Layer</strong>, allowing users to 
              manually weight parameters for <strong>Budget, Pace, and Interests</strong>.
            </p>
            <div className="p-4 bg-[#E6F4F1] rounded-lg">
              <p className="text-sm font-medium text-[#00855E]">Design Decision:</p>
              <p className="text-sm text-gray-600 mt-1">
                Three-slider interface with real-time compatibility score updates.
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

// Section 5: User Flows & Wireframes
export function UserFlowsSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">5. User Flows & Wireframes</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Mobile-first wireframes with interactive hotspots
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
              { step: "1", title: "Browse", desc: "View trips" },
              { step: "2", title: "AI Match", desc: "Open Matchmaker" },
              { step: "3", title: "Customize", desc: "Set preferences" },
              { step: "4", title: "Review", desc: "Compatibility Report" },
              { step: "5", title: "Connect", desc: "Message users" },
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
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mobile Wireframe Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Home Feed", hotspot: "1" },
          { label: "Trip Detail", hotspot: "2" },
          { label: "Create Trip", hotspot: "3" },
          { label: "AI Matcher", hotspot: "4" },
          { label: "Profile View", hotspot: "5" },
          { label: "Chat", hotspot: "6" },
          { label: "Settings", hotspot: "7" },
          { label: "Notifications", hotspot: "8" },
        ].map((screen, index) => (
          <Card key={index} className="bg-white border-[#E5E7EB] overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-50 relative p-3">
                {/* Phone frame */}
                <div className="w-full h-full rounded-lg border border-gray-200 bg-white p-2 space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
                  <div className="h-8 bg-[#E6F4F1] rounded"></div>
                  <div className="space-y-1">
                    <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                  </div>
                  <div className="h-12 bg-gray-50 rounded border border-gray-100"></div>
                  <div className="h-12 bg-gray-50 rounded border border-gray-100"></div>
                </div>
                {/* Hotspot */}
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">{screen.hotspot}</span>
                </div>
              </div>
              <div className="p-2 text-center border-t border-gray-100">
                <p className="text-xs font-medium text-gray-700">{screen.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

// Section 6: AI Feature: Matchmaker
export function AIFeatureSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">6. AI Feature: Matchmaker</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          AI-powered partner matching based on travel personality
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* How It Works */}
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">How the AI Matchmaker Works</h3>
            <p className="text-gray-600">
              The AI Matchmaker analyzes user profiles and preferences to suggest compatible travel partners. 
              Users maintain control through customizable weighting parameters.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E6F4F1] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#00855E] font-bold text-sm">$</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Budget Alignment</p>
                  <p className="text-sm text-gray-600">Match users with similar daily spending expectations</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E6F4F1] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#00855E] font-bold text-sm">⚡</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Travel Pace</p>
                  <p className="text-sm text-gray-600">Active explorers vs. relaxed wanderers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E6F4F1] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#00855E] font-bold text-sm">★</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Shared Interests</p>
                  <p className="text-sm text-gray-600">Food, adventure, culture, nightlife, nature</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compatibility Report */}
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Compatibility Report</h3>
            <div className="p-4 bg-[#E6F4F1] rounded-lg space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800">Overall Match</span>
                <span className="text-2xl font-bold text-[#00855E]">87%</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Budget</span>
                  <span className="font-medium text-[#00855E]">92%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="w-[92%] h-2 bg-[#00855E] rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Sleep Schedule</span>
                  <span className="font-medium text-[#00855E]">78%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="w-[78%] h-2 bg-[#00855E] rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Activity Level</span>
                  <span className="font-medium text-[#00855E]">91%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="w-[91%] h-2 bg-[#00855E] rounded-full"></div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 italic">
              &quot;The Compatibility Report explains the AI&apos;s reasoning, ensuring the user remains the final decision-maker.&quot;
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Section 7: Design Rationale
export function DesignRationaleSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">7. Design Rationale</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Addressing safety needs through verification features
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* University Verification */}
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#00855E] flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">University Verification</h3>
            </div>
            <p className="text-gray-600">
              All users must verify their .edu email address before posting trips or messaging others. 
              This creates a baseline trust layer, ensuring all participants are verified students.
            </p>
            <div className="p-4 bg-[#E6F4F1] rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00855E]" />
                <span className="text-sm font-medium text-gray-800">Verified badges displayed on profiles</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Instagram Links */}
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#4a9d87] flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Social Vetting</h3>
            </div>
            <p className="text-gray-600">
              Users can optionally link their Instagram profiles for additional social proof. 
              This allows potential travel partners to verify identity through existing social presence.
            </p>
            <div className="p-4 bg-[#E6F4F1] rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00855E]" />
                <span className="text-sm font-medium text-gray-800">Mutual friends indicator for shared connections</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-[#E6F4F1] border-[#E5E7EB]">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#00855E]/10 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-6 h-6 text-[#00855E]" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">In-App Messaging</h4>
              <p className="text-gray-600">
                All communication happens within the platform, allowing users to vet potential partners 
                before sharing personal contact information. Messages are archived for safety reference.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

// Section 8: Service Ecosystem
export function ServiceEcosystemSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">8. Service Ecosystem</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          How Social Hub integrates with the Exchango platform
        </p>
      </div>

      <Card className="bg-white border-[#E5E7EB]">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Global Profile Service */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gray-100 flex items-center justify-center mb-3">
                <Database className="w-10 h-10 text-gray-600" />
              </div>
              <p className="font-semibold text-gray-800">Global Profile</p>
              <p className="text-sm text-gray-500">User data source</p>
            </div>

            <ArrowRight className="w-8 h-8 text-[#00855E] hidden md:block" />
            <div className="md:hidden">
              <ArrowRight className="w-6 h-6 text-[#00855E] rotate-90" />
            </div>

            {/* Social Hub */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-[#00855E] flex items-center justify-center mb-3 shadow-lg">
                <Users className="w-12 h-12 text-white" />
              </div>
              <p className="font-bold text-[#00855E] text-lg">Social Hub</p>
              <p className="text-sm text-gray-500">Trip matching</p>
            </div>

            <ArrowLeftRight className="w-8 h-8 text-[#00855E] hidden md:block" />
            <div className="md:hidden">
              <ArrowLeftRight className="w-6 h-6 text-[#00855E] rotate-90" />
            </div>

            {/* Connected Services */}
            <div className="flex flex-col gap-4">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-[#4a9d87]/20 flex items-center justify-center mb-2">
                  <MapPin className="w-8 h-8 text-[#4a9d87]" />
                </div>
                <p className="font-medium text-gray-800 text-sm">Logistics Finder</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-[#4a9d87]/20 flex items-center justify-center mb-2">
                  <span className="text-2xl text-[#4a9d87]">$</span>
                </div>
                <p className="font-medium text-gray-800 text-sm">Financial Manager</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Data Inputs (From Global Profile)</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#00855E] mt-1 flex-shrink-0" />
                <span>University affiliation and verification status</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#00855E] mt-1 flex-shrink-0" />
                <span>Travel preferences and past trip history</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#00855E] mt-1 flex-shrink-0" />
                <span>Linked social accounts (Instagram)</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Data Outputs (To Other Services)</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#4a9d87] mt-1 flex-shrink-0" />
                <span><strong>Logistics Finder:</strong> Trip dates, destination, group size</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#4a9d87] mt-1 flex-shrink-0" />
                <span><strong>Financial Manager:</strong> Budget splits, expense participants</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-[#4a9d87] mt-1 flex-shrink-0" />
                <span><strong>Shared Itinerary:</strong> Confirmed trip members and roles</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Section 9: Interactive Prototype
export function PrototypeSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <Play className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">9. Interactive Prototype</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Explore the full Social Hub experience
        </p>
      </div>

      <Card className="bg-white border-[#E5E7EB] overflow-hidden">
        <CardContent className="p-4 sm:p-6">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                  src="https://exchango-deploy.vercel.app" 
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#E6F4F1] flex items-center justify-center mb-2">
              <Smartphone className="w-5 h-5 text-[#00855E]" />
            </div>
            <p className="font-medium text-gray-800">12 Screens</p>
            <p className="text-sm text-gray-500">Full user journey</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#E6F4F1] flex items-center justify-center mb-2">
              <MousePointer className="w-5 h-5 text-[#00855E]" />
            </div>
            <p className="font-medium text-gray-800">45 Hotspots</p>
            <p className="text-sm text-gray-500">Interactive elements</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-4 text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#E6F4F1] flex items-center justify-center mb-2">
              <Palette className="w-5 h-5 text-[#00855E]" />
            </div>
            <p className="font-medium text-gray-800">WCAG AA</p>
            <p className="text-sm text-gray-500">Accessible design</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Section 10: Reflection
export function ReflectionSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">10. Reflection</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Lessons learned on student travel vetting and AI-assisted design
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Key Takeaways</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E6F4F1] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#00855E] font-bold text-xs">1</span>
                </div>
                <span><strong>Cognitive Overload:</strong> Too many matching parameters overwhelm users. Three sliders (Budget, Pace, Interests) proved optimal.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E6F4F1] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#00855E] font-bold text-xs">2</span>
                </div>
                <span><strong>Social Friction:</strong> Users hesitate to message strangers. Compatibility Reports reduce this friction by providing conversation starters.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E6F4F1] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#00855E] font-bold text-xs">3</span>
                </div>
                <span><strong>Trust Layers:</strong> University verification alone isn&apos;t sufficient. Social links (Instagram) provide the &quot;final vetting step.&quot;</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Figma Make Decisions</h3>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm font-medium text-green-800">Accepted</p>
                <p className="text-sm text-green-700">Card-based layouts for trip listings — improved scannability</p>
              </div>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-sm font-medium text-amber-800">Overridden</p>
                <p className="text-sm text-amber-700">Navigation structure — AI suggested tabs, but bottom navigation tested better with users</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Individual Contribution Reflection */}
      <Card className="bg-gray-100 border-[#E5E7EB]">
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Individual Contribution Reflection</h3>
          <p className="text-gray-600 leading-relaxed">
            As the sole designer for the Social Hub service, I was responsible for all user research, wireframing, 
            prototyping, and visual design. The most challenging aspect was balancing user safety concerns with 
            a frictionless experience — too many verification steps would deter users, while too few would 
            compromise trust. The solution of layered verification (email + optional social) emerged from 
            iterative testing with 8 exchange students across 3 universities.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-200">User Research</span>
            <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-200">Wireframing</span>
            <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-200">Prototyping</span>
            <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-200">Visual Design</span>
            <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-200">User Testing</span>
          </div>
        </CardContent>
      </Card>

      {/* Design System */}
      <Card className="bg-white border-[#E5E7EB]">
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Design System & Accessibility</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#E6F4F1] rounded-lg text-center">
              <p className="text-2xl font-bold text-[#00855E]">WCAG AA</p>
              <p className="text-sm text-gray-600">Color contrast compliance</p>
            </div>
            <div className="p-4 bg-[#E6F4F1] rounded-lg text-center">
              <p className="text-2xl font-bold text-[#00855E]">44×44px</p>
              <p className="text-sm text-gray-600">Minimum touch targets</p>
            </div>
            <div className="p-4 bg-[#E6F4F1] rounded-lg text-center">
              <p className="text-2xl font-bold text-[#00855E]">8px Grid</p>
              <p className="text-sm text-gray-600">Consistent spacing system</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
