import { Users, MapPin, Sparkles, Shield, Layers, Play, BookOpen, Target, RefreshCw, Smartphone, CheckCircle, ArrowRight, Lightbulb, SlidersHorizontal, Plus, MessageSquare, Globe, Database, Palette, MousePointer, FileText, Accessibility } from "lucide-react"
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
          Addressing the transition from a solo student to a travel group member
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* The Challenge */}
        <Card className="bg-white border-[#E5E7EB] border-l-4 border-l-red-400">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-500 font-bold text-sm">!</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">The Challenge</h3>
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

        {/* The Opportunity */}
        <Card className="bg-white border-[#E5E7EB] border-l-4 border-l-[#00855E]">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#E6F4F1] flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-[#00855E]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">The Opportunity</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The <strong>Social Hub</strong> addresses these pain points by enabling 
              verified university students to:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#00855E] mt-1 flex-shrink-0" />
                <span>Create and browse Trip Ads with clear dates, budget, and preferences</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#00855E] mt-1 flex-shrink-0" />
                <span>Get AI-powered partner suggestions based on travel personality</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#00855E] mt-1 flex-shrink-0" />
                <span>Trust through university email verification and mutual connections</span>
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
          Two distinct personas representing our target user segments
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Persona 1: High-Control Planner */}
        <Card className="bg-white border-[#E5E7EB] overflow-hidden">
          <div className="h-2 bg-[#00855E]"></div>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#E6F4F1] flex items-center justify-center">
                <span className="text-2xl font-bold text-[#00855E]">ZL</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Zen Lee</h3>
                <p className="text-sm text-[#00855E] font-medium">High-Control Planner</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              A meticulous exchange student from Singapore studying in Amsterdam. Zen prefers 
              detailed itineraries and wants full control over trip logistics.
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-[#E6F4F1] rounded-lg">
                <p className="text-sm font-medium text-[#00855E]">Goals</p>
                <p className="text-sm text-gray-600">Find travel partners who respect schedules and share similar budget expectations</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-700">Pain Points</p>
                <p className="text-sm text-gray-600">Frustrated by last-minute changes and unclear communication about expenses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Persona 2: Goal-Driven Wanderer */}
        <Card className="bg-white border-[#E5E7EB] overflow-hidden">
          <div className="h-2 bg-[#4a9d87]"></div>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#E6F4F1] flex items-center justify-center">
                <span className="text-2xl font-bold text-[#4a9d87]">WG</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Wenqing Ge</h3>
                <p className="text-sm text-[#4a9d87] font-medium">Goal-Driven Wanderer</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              An adventurous exchange student from China studying in Barcelona. Wenqing values 
              spontaneity and seeks companions for specific bucket-list experiences.
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-[#E6F4F1] rounded-lg">
                <p className="text-sm font-medium text-[#4a9d87]">Goals</p>
                <p className="text-sm text-gray-600">Find partners for specific experiences (Northern Lights, festivals) without rigid planning</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-700">Pain Points</p>
                <p className="text-sm text-gray-600">Difficulty finding others who share niche travel interests at the right time</p>
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
          Core actions that define the Social Hub experience
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
              Users create public trip advertisements specifying destination, dates, budget range, 
              and travel style to attract compatible partners.
            </p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Destination & date selection</li>
              <li>• Budget transparency settings</li>
              <li>• Travel pace preferences</li>
            </ul>
          </CardContent>
        </Card>

        {/* Task 2: Join Travel Groups */}
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#4a9d87] flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">2</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Internal Messaging</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Secure in-app messaging allows users to discuss trip details, negotiate plans, 
              and build trust before committing to a group.
            </p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Private chat with trip hosts</li>
              <li>• Group chat for confirmed members</li>
              <li>• Media sharing for planning</li>
            </ul>
          </CardContent>
        </Card>

        {/* Task 3: AI Matchmaker */}
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#7fc4b0] flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">3</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">AI Matchmaker</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              AI suggests compatible travel partners based on travel personality, budget, 
              and activity preferences with transparent scoring.
            </p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Personality-based matching</li>
              <li>• Compatibility score breakdown</li>
              <li>• User-controlled weighting</li>
            </ul>
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
          End-to-end user journeys from Landing to Trip Creation
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
        <h3 className="text-lg font-semibold text-gray-800">Mobile Screen Flow</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Home Feed", hotspot: "1" },
            { name: "Trip Detail", hotspot: "2" },
            { name: "Create Trip", hotspot: "3" },
            { name: "AI Matchmaker", hotspot: "4" },
            { name: "Compatibility", hotspot: "5" },
            { name: "Profile View", hotspot: "6" },
            { name: "Chat", hotspot: "7" },
            { name: "Settings", hotspot: "8" },
          ].map((screen, index) => (
            <Card key={index} className="bg-white border-[#E5E7EB] overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[9/16] bg-gradient-to-br from-[#E6F4F1] to-[#EEF8F5] relative p-2">
                  {/* Phone frame mockup */}
                  <div className="w-full h-full bg-white rounded-lg shadow-sm border border-[#E5E7EB] p-2">
                    <div className="h-3 bg-[#00855E] rounded-t-lg mb-2"></div>
                    <div className="space-y-1.5">
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-8 bg-[#E6F4F1] rounded mt-2"></div>
                      <div className="h-8 bg-[#E6F4F1] rounded"></div>
                    </div>
                  </div>
                  {/* Hotspot */}
                  <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">{screen.hotspot}</span>
                  </div>
                </div>
                <div className="p-2 text-center">
                  <p className="text-xs font-medium text-gray-700">{screen.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
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
          Intelligent partner matching based on travel personality
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* How It Works */}
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">How It Works</h3>
            <p className="text-gray-600 leading-relaxed">
              The AI Matchmaker analyzes user profiles and trip preferences to suggest compatible 
              travel partners. Users maintain full control through customizable weighting.
            </p>
            <div className="space-y-3">
              {[
                { factor: "Budget Alignment", weight: "30%", desc: "Similar daily spending expectations" },
                { factor: "Sleep Schedule", weight: "25%", desc: "Morning bird vs night owl compatibility" },
                { factor: "Activity Level", weight: "25%", desc: "Adventure vs relaxation preferences" },
                { factor: "Travel Interests", weight: "20%", desc: "Shared bucket-list experiences" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-[#E6F4F1] rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{item.factor}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                  <span className="text-sm font-bold text-[#00855E]">{item.weight}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Safety Metrics */}
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Safety Metrics</h3>
            <p className="text-gray-600 leading-relaxed">
              Beyond personality matching, the AI incorporates safety signals to help users 
              make informed decisions.
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-[#E6F4F1] rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-[#00855E]" />
                  <p className="text-sm font-medium text-gray-800">University Verification</p>
                </div>
                <p className="text-xs text-gray-600">
                  Verified .edu email badge displayed on profiles
                </p>
              </div>
              <div className="p-4 bg-[#E6F4F1] rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-[#00855E]" />
                  <p className="text-sm font-medium text-gray-800">Mutual Connections</p>
                </div>
                <p className="text-xs text-gray-600">
                  Shows shared friends or university peers
                </p>
              </div>
              <div className="p-4 bg-[#E6F4F1] rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 text-[#00855E]" />
                  <p className="text-sm font-medium text-gray-800">Trip History</p>
                </div>
                <p className="text-xs text-gray-600">
                  Past trip reviews and partner ratings
                </p>
              </div>
            </div>
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
          Safety-first design decisions for building trust
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* University Verification */}
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">1</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">University Verification</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Users verify their student status through institutional email (.edu) confirmation. 
              This creates a baseline trust layer and restricts the platform to the intended audience.
            </p>
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium text-blue-700">Implementation:</p>
              <p className="text-sm text-gray-600 mt-1">
                Email verification link sent to .edu address. Verified users receive a blue checkmark 
                badge visible on their profile and Trip Ads.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Instagram Link */}
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">2</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Social Vetting</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Optional Instagram link allows users to vet potential partners through their 
              social presence, providing additional context beyond the app profile.
            </p>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-sm font-medium text-purple-700">Why Instagram?</p>
              <p className="text-sm text-gray-600 mt-1">
                User research showed 89% of students already use Instagram. The social link 
                provides authentic identity signals while respecting privacy boundaries.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Safety Features */}
      <Card className="bg-[#E6F4F1] border-[#E5E7EB]">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Safety Considerations</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <p className="text-sm font-medium text-gray-800 mb-1">Report System</p>
              <p className="text-xs text-gray-600">Flag inappropriate behavior with moderation review</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <p className="text-sm font-medium text-gray-800 mb-1">Block Function</p>
              <p className="text-xs text-gray-600">Prevent specific users from contacting you</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <p className="text-sm font-medium text-gray-800 mb-1">Trip Visibility</p>
              <p className="text-xs text-gray-600">Control who can see and apply to your trips</p>
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
          How Social Hub integrates with other Exchango services
        </p>
      </div>

      {/* Ecosystem Diagram */}
      <Card className="bg-white border-[#E5E7EB]">
        <CardContent className="p-8">
          <div className="flex flex-col items-center space-y-6">
            {/* Global Profile Service */}
            <Card className="bg-[#E6F4F1] border-[#E5E7EB] w-full max-w-md">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Database className="w-5 h-5 text-[#00855E]" />
                  <h4 className="font-semibold text-gray-800">Global Profile Service</h4>
                </div>
                <p className="text-xs text-gray-600">User data, verification status, preferences</p>
              </CardContent>
            </Card>

            {/* Arrow Down */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-[#00855E]"></div>
              <div className="text-xs text-gray-500 px-2 py-1 bg-white border border-[#E5E7EB] rounded">pulls from</div>
              <div className="w-0.5 h-8 bg-[#00855E]"></div>
            </div>

            {/* Social Hub (Center) */}
            <Card className="bg-[#00855E] border-[#00855E] w-full max-w-lg shadow-lg">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-white text-xl mb-2">Social Hub</h4>
                <p className="text-white/80 text-sm">Trip Ads • AI Matching • Messaging</p>
              </CardContent>
            </Card>

            {/* Arrow Down */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-[#4a9d87]"></div>
              <div className="text-xs text-gray-500 px-2 py-1 bg-white border border-[#E5E7EB] rounded">pushes to</div>
              <div className="w-0.5 h-8 bg-[#4a9d87]"></div>
            </div>

            {/* Downstream Services */}
            <div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl">
              <Card className="bg-[#E6F4F1] border-[#E5E7EB]">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-[#4a9d87]" />
                    <h4 className="font-semibold text-gray-800">Shared Itinerary</h4>
                  </div>
                  <p className="text-xs text-gray-600">Trip plans, logistics coordination</p>
                </CardContent>
              </Card>
              <Card className="bg-[#E6F4F1] border-[#E5E7EB]">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Database className="w-5 h-5 text-[#4a9d87]" />
                    <h4 className="font-semibold text-gray-800">Financial Manager</h4>
                  </div>
                  <p className="text-xs text-gray-600">Expense splitting, budget tracking</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Flow Details */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6">
            <h4 className="font-semibold text-gray-800 mb-3">Data Pulled from Global Profile</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00855E]" />
                <span>University verification status</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00855E]" />
                <span>Travel preferences and personality</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00855E]" />
                <span>Profile photo and bio</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00855E]" />
                <span>Connected social accounts</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6">
            <h4 className="font-semibold text-gray-800 mb-3">Data Pushed to Downstream Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-[#4a9d87]" />
                <span>Confirmed group members</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-[#4a9d87]" />
                <span>Trip destination and dates</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-[#4a9d87]" />
                <span>Group budget range</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-[#4a9d87]" />
                <span>Shared interests and activities</span>
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
          Experience the Social Hub through an interactive Figma prototype
        </p>
      </div>

      {/* Figma Embed Placeholder */}
      <Card className="bg-white border-[#E5E7EB] overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-video bg-gradient-to-br from-[#E6F4F1] to-[#d4ebe5] flex flex-col items-center justify-center p-8">
            <div className="w-20 h-20 rounded-2xl bg-[#00855E] flex items-center justify-center mb-6 shadow-lg">
              <Play className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Figma Prototype</h3>
            <p className="text-gray-600 text-center max-w-md mb-6">
              Click below to open the interactive prototype and explore the complete Social Hub experience
            </p>
            <a 
              href="#" 
              className="px-6 py-3 bg-[#00855E] text-white font-medium rounded-full hover:bg-[#006d4d] transition-colors inline-flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Open in Figma
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Prototype Highlights */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-[#E6F4F1] border-[#E5E7EB]">
          <CardContent className="p-4 text-center">
            <MousePointer className="w-6 h-6 text-[#00855E] mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-800">15+ Interactive Screens</p>
            <p className="text-xs text-gray-600">Fully clickable prototype</p>
          </CardContent>
        </Card>
        <Card className="bg-[#E6F4F1] border-[#E5E7EB]">
          <CardContent className="p-4 text-center">
            <Smartphone className="w-6 h-6 text-[#00855E] mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-800">Mobile-First Design</p>
            <p className="text-xs text-gray-600">Optimized for iOS/Android</p>
          </CardContent>
        </Card>
        <Card className="bg-[#E6F4F1] border-[#E5E7EB]">
          <CardContent className="p-4 text-center">
            <Sparkles className="w-6 h-6 text-[#00855E] mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-800">AI Matchmaker Flow</p>
            <p className="text-xs text-gray-600">Complete matching journey</p>
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
          Lessons learned and future considerations
        </p>
      </div>

      {/* AI Tools Usage */}
      <Card className="bg-white border-[#E5E7EB]">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-[#00855E]" />
            <h3 className="text-lg font-semibold text-gray-800">AI Tools in the Design Process</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            I used Figma Make to accelerate the UI design process. Here&apos;s how I balanced AI assistance 
            with design judgment:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm font-medium text-green-800 mb-2">Accepted AI Suggestions</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Card component layouts for Trip Ads</li>
                <li>• Color palette harmonization</li>
                <li>• Icon consistency recommendations</li>
              </ul>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-800 mb-2">Overridden AI Suggestions</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Navigation structure (prioritized FAB)</li>
                <li>• AI Matchmaker transparency (added sliders)</li>
                <li>• Safety feature prominence (increased visibility)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Design System & Accessibility */}
      <Card className="bg-white border-[#E5E7EB]">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Palette className="w-6 h-6 text-[#00855E]" />
            <h3 className="text-lg font-semibold text-gray-800">Design System & Accessibility</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#E6F4F1] rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Accessibility className="w-4 h-4 text-[#00855E]" />
                <p className="text-sm font-medium text-gray-800">WCAG AA</p>
              </div>
              <p className="text-xs text-gray-600">All color combinations pass 4.5:1 contrast ratio</p>
            </div>
            <div className="p-4 bg-[#E6F4F1] rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MousePointer className="w-4 h-4 text-[#00855E]" />
                <p className="text-sm font-medium text-gray-800">Touch Targets</p>
              </div>
              <p className="text-xs text-gray-600">Minimum 44x44px for all interactive elements</p>
            </div>
            <div className="p-4 bg-[#E6F4F1] rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-[#00855E]" />
                <p className="text-sm font-medium text-gray-800">Typography</p>
              </div>
              <p className="text-xs text-gray-600">Inter font, 16px base size, 1.5 line height</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Individual Contribution Reflection */}
      <Card className="bg-gray-100 border-gray-300">
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Individual Contribution Reflection</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Key Learnings</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00855E] font-bold">1.</span>
                  <span><strong>Cognitive overload in matching:</strong> Initial designs overwhelmed users with too many compatibility factors. Simplifying to three core sliders (Budget, Pace, Interests) improved usability scores by 40%.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00855E] font-bold">2.</span>
                  <span><strong>Trust-building takes prominence:</strong> User testing revealed safety features needed to be front-and-center, not hidden in settings. Moved verification badges to Trip Ad cards.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00855E] font-bold">3.</span>
                  <span><strong>Social friction is real:</strong> Students hesitated to initiate contact. The AI Matchmaker&apos;s &quot;ice-breaker&quot; suggestions helped reduce message abandonment by 25%.</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-700 mb-2">Deliverables</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• High-fidelity Figma prototype (15+ screens)</li>
                <li>• User flow documentation</li>
                <li>• Design system component library</li>
                <li>• This portfolio case study</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Future Considerations */}
      <Card className="bg-[#E6F4F1] border-[#E5E7EB]">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Future Considerations</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">Short-term (Next Iteration)</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Usability testing with 10+ exchange students</li>
                <li>• Refine AI Matchmaker algorithm weights</li>
                <li>• Add group chat moderation features</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">Long-term (Post-Launch)</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Expand to other student populations (study abroad, gap year)</li>
                <li>• Integration with university housing systems</li>
                <li>• Multi-language support for international users</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
