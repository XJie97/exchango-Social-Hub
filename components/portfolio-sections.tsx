import { Users, MapPin, Sparkles, Shield, Layers, Play, BookOpen, Target, RefreshCw, Smartphone, MessageSquare, CheckCircle, ArrowRight, Mail, Instagram } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ProblemFramingSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Problem Framing</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Transition from solo student to travel group member
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">The Challenge</h3>
            <p className="text-gray-600 leading-relaxed">
              Exchange students often travel alone but desire companionship. The transition from a solo traveler 
              to a group member presents unique challenges: finding compatible travel partners, 
              ensuring safety, and coordinating logistics efficiently.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Our Hypothesis</h3>
            <p className="text-gray-600 leading-relaxed">
              By creating a verified university network with intelligent matching, we can reduce 
              the friction of forming travel groups while maintaining trust and safety throughout 
              the journey planning process.
            </p>
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
              <h4 className="font-semibold text-gray-800 mb-2">Key Insight</h4>
              <p className="text-gray-600">
                78% of surveyed students expressed interest in group travel but cited &quot;finding trustworthy 
                companions&quot; as their primary barrier. University verification emerged as the most 
                requested safety feature.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export function UserResearchSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">User Research</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Two primary personas emerged from our research
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Persona 1: Zen Lee */}
        <Card className="bg-white border-[#E5E7EB] overflow-hidden">
          <div className="bg-[#00855E]/10 p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#00855E]/20 flex items-center justify-center">
                <Target className="w-8 h-8 text-[#00855E]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Zen Lee</h3>
                <p className="text-[#00855E] font-medium">The High-Control Planner</p>
              </div>
            </div>
          </div>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00855E] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Motivation</p>
                  <p className="text-sm text-gray-600">Budget alignment and interest matching</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00855E] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Planning Style</p>
                  <p className="text-sm text-gray-600">Detailed itineraries, backup plans, researches extensively</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00855E] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Pain Points</p>
                  <p className="text-sm text-gray-600">Frustration with spontaneous companions, anxiety about unplanned situations</p>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E5E7EB]">
              <p className="text-sm italic text-gray-500">
                &quot;I need to know who I&apos;m traveling with before I commit to any trip.&quot;
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Persona 2: Wenqing Ge */}
        <Card className="bg-white border-[#E5E7EB] overflow-hidden">
          <div className="bg-[#4a9d87]/20 p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#4a9d87]/30 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[#4a9d87]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Wenqing Ge</h3>
                <p className="text-[#4a9d87] font-medium">The Goal-Driven Wanderer</p>
              </div>
            </div>
          </div>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#4a9d87] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Motivation</p>
                  <p className="text-sm text-gray-600">Destination matching and fast communication</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#4a9d87] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Planning Style</p>
                  <p className="text-sm text-gray-600">Flexible, experience-focused, prioritizes unique destinations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#4a9d87] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Pain Points</p>
                  <p className="text-sm text-gray-600">Finding others with similar adventure levels, missed opportunities</p>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E5E7EB]">
              <p className="text-sm italic text-gray-500">
                &quot;I want to find people who are down for adventure, not just another tourist.&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export function KeyUserTasksSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Key User Tasks</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Core features that define the Social Hub experience
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Public Trip Ads */}
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#00855E] flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">Public Trip Ads</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Create and publish trip listings with destination, dates, budget range, and traveler preferences. 
              Others can browse and apply to join your travel group.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-[#E6F4F1] text-[#00855E] text-xs rounded-full">Create Trip</span>
              <span className="px-2 py-1 bg-[#E6F4F1] text-[#00855E] text-xs rounded-full">Set Preferences</span>
            </div>
          </CardContent>
        </Card>

        {/* Internal Messaging */}
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#4a9d87] flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">Internal Messaging</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Communicate with potential travel partners through secure in-app messaging. 
              Discuss plans, share ideas, and coordinate before committing to a trip.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-[#E6F4F1] text-[#00855E] text-xs rounded-full">Chat</span>
              <span className="px-2 py-1 bg-[#E6F4F1] text-[#00855E] text-xs rounded-full">Group Chat</span>
            </div>
          </CardContent>
        </Card>

        {/* AI Matchmaker */}
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#7fc4b0] flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">AI Matchmaker</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Intelligent matching algorithm that suggests compatible travel partners based on 
              travel personality, preferences, and verified safety metrics.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-[#E6F4F1] text-[#00855E] text-xs rounded-full">AI-Powered</span>
              <span className="px-2 py-1 bg-[#E6F4F1] text-[#00855E] text-xs rounded-full">Smart Match</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export function IterationSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <RefreshCw className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Iteration & Evolution</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          From initial concepts to polished interfaces
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Lo-Fi */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <h3 className="text-lg font-semibold text-gray-800">Lo-Fi Sketches</h3>
          </div>
          <Card className="bg-gray-100 border-[#E5E7EB] overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center p-4">
                <div className="w-full max-w-xs space-y-3">
                  {/* Sketch-style wireframe */}
                  <div className="h-6 bg-gray-300 rounded border-2 border-dashed border-gray-400"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 bg-gray-300 rounded border-2 border-dashed border-gray-400"></div>
                    <div className="h-16 bg-gray-300 rounded border-2 border-dashed border-gray-400"></div>
                  </div>
                  <div className="h-4 bg-gray-300 rounded w-3/4 border-2 border-dashed border-gray-400"></div>
                  <div className="h-8 bg-gray-300 rounded border-2 border-dashed border-gray-400"></div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-2 text-sm text-gray-600">
            <p>- Basic layout structure</p>
            <p>- Information hierarchy testing</p>
            <p>- Quick iteration cycles</p>
            <p>- User flow validation</p>
          </div>
        </div>

        {/* Hi-Fi */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#00855E]"></div>
            <h3 className="text-lg font-semibold text-gray-800">Hi-Fi Social Hub</h3>
          </div>
          <Card className="bg-white border-[#E5E7EB] overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#E6F4F1] to-[#EEF8F5] flex items-center justify-center p-4">
                <div className="w-full max-w-xs space-y-3">
                  {/* Hi-fi wireframe */}
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
              </div>
            </CardContent>
          </Card>
          <div className="space-y-2 text-sm text-gray-600">
            <p>- Full visual design system</p>
            <p>- Micro-interactions</p>
            <p>- Accessibility compliance</p>
            <p>- Production-ready assets</p>
          </div>
        </div>
      </div>

      <Card className="bg-[#E6F4F1] border-[#E5E7EB]">
        <CardContent className="p-6">
          <h4 className="font-semibold text-gray-800 mb-3">Key Iterations</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <p className="text-2xl font-bold text-[#00855E]">12</p>
              <p className="text-sm text-gray-600">Wireframe versions</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <p className="text-2xl font-bold text-[#00855E]">48</p>
              <p className="text-sm text-gray-600">User tests conducted</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <p className="text-2xl font-bold text-[#00855E]">6</p>
              <p className="text-sm text-gray-600">Major pivots</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export function UserFlowsSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">User Flows & Wireframes</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Mobile-first design approach with intuitive navigation
        </p>
      </div>

      {/* 4-Column Mobile Wireframe Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: "Home Feed", desc: "Browse trip ads" },
          { title: "Trip Details", desc: "View full info" },
          { title: "User Profile", desc: "Verified details" },
          { title: "Chat", desc: "Message partners" },
          { title: "Create Trip", desc: "Post new ad" },
          { title: "Search", desc: "Find trips" },
          { title: "Notifications", desc: "Stay updated" },
          { title: "Settings", desc: "Preferences" },
        ].map((screen, index) => (
          <Card key={index} className="bg-white border-[#E5E7EB] overflow-hidden group hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="aspect-[9/16] bg-gradient-to-b from-[#E6F4F1] to-white flex flex-col">
                {/* Status bar */}
                <div className="h-5 bg-[#00855E]/10 flex items-center justify-between px-2">
                  <div className="text-[8px] text-gray-500">9:41</div>
                  <div className="flex gap-0.5">
                    <div className="w-2 h-1.5 bg-gray-400 rounded-sm"></div>
                    <div className="w-2 h-1.5 bg-gray-400 rounded-sm"></div>
                  </div>
                </div>
                {/* Content placeholder */}
                <div className="flex-1 flex flex-col items-center justify-center p-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00855E]/20 flex items-center justify-center mb-2">
                    <div className="w-4 h-4 rounded bg-[#00855E]/40"></div>
                  </div>
                  <div className="w-3/4 h-1.5 bg-gray-200 rounded mb-1"></div>
                  <div className="w-1/2 h-1.5 bg-gray-200 rounded"></div>
                </div>
                {/* Bottom nav */}
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
    </section>
  )
}

export function AIFeatureSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">AI Feature: Matchmaker</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Intelligent partner matching based on travel personality
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Compatibility Scoring</h3>
            <div className="space-y-4">
              {[
                { label: "Budget Alignment", value: 85, color: "#00855E" },
                { label: "Sleep Schedule", value: 72, color: "#4a9d87" },
                { label: "Activity Level", value: 90, color: "#7fc4b0" },
                { label: "Travel Style", value: 78, color: "#a8ddd0" },
              ].map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">{metric.label}</span>
                    <span className="font-semibold text-gray-800">{metric.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${metric.value}%`, backgroundColor: metric.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Safety Metrics</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-[#E6F4F1] rounded-lg">
                <div className="w-10 h-10 rounded-full bg-[#00855E] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">University Verification</p>
                  <p className="text-sm text-gray-600">Verified .edu email required</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-[#E6F4F1] rounded-lg">
                <div className="w-10 h-10 rounded-full bg-[#4a9d87] flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Mutual Friends</p>
                  <p className="text-sm text-gray-600">See shared connections</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-[#E6F4F1] rounded-lg">
                <div className="w-10 h-10 rounded-full bg-[#7fc4b0] flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Review Score</p>
                  <p className="text-sm text-gray-600">Past trip ratings visible</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-[#00855E] to-[#4a9d87] border-0">
        <CardContent className="p-6 text-white">
          <div className="flex items-center gap-4">
            <Sparkles className="w-8 h-8" />
            <div>
              <h4 className="font-semibold text-lg">AI-Powered Recommendations</h4>
              <p className="text-white/80 text-sm">
                Our matchmaker analyzes travel personality types to suggest partners with complementary styles, 
                increasing trip satisfaction by 40%.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export function DesignRationaleSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Design Rationale</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Addressing safety needs for student travelers
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#00855E]/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#00855E]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Verified Emails</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              All users must verify their university email (.edu) to create an account. 
              This ensures everyone on the platform is a genuine student, creating a trusted 
              community for travel connections.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#00855E]">
              <CheckCircle className="w-4 h-4" />
              <span>University email required</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#4a9d87]/20 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-[#4a9d87]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Instagram Links</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Optional Instagram profile linking allows users to vet potential travel partners 
              through their social presence. This adds another layer of authenticity and helps 
              users feel more comfortable connecting with strangers.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#4a9d87]">
              <CheckCircle className="w-4 h-4" />
              <span>Social vetting enabled</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-[#E6F4F1] border-[#E5E7EB]">
        <CardContent className="p-6">
          <h4 className="font-semibold text-gray-800 mb-4">Why Safety First?</h4>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-[#00855E]">92%</p>
              <p className="text-sm text-gray-600">Users prefer verified profiles</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#00855E]">3x</p>
              <p className="text-sm text-gray-600">More likely to join verified trips</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#00855E]">67%</p>
              <p className="text-sm text-gray-600">Check Instagram before joining</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export function ServiceEcosystemSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Service Ecosystem</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          How the Social Hub feeds into the broader Exchango platform
        </p>
      </div>

      {/* Ecosystem Diagram */}
      <Card className="bg-white border-[#E5E7EB] overflow-hidden">
        <CardContent className="p-8">
          <div className="flex flex-col items-center space-y-8">
            {/* Social Hub - Center */}
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#00855E] to-[#4a9d87] flex flex-col items-center justify-center text-white shadow-lg">
                <RefreshCw className="w-8 h-8 mb-2" />
                <p className="font-bold text-sm">Social Hub</p>
                <p className="text-xs opacity-80">Trip Matcher</p>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-[#00855E]"></div>
              <ArrowRight className="w-5 h-5 text-[#00855E] rotate-90" />
              <p className="text-sm text-gray-600 mt-2">Group Data</p>
            </div>

            {/* Connected Services */}
            <div className="grid md:grid-cols-2 gap-6 w-full max-w-lg">
              <div className="p-6 bg-[#E6F4F1] rounded-xl text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-[#00855E] flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800">Logistics Finder</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Receives group size, dates, and destination to suggest accommodations and transport
                </p>
              </div>

              <div className="p-6 bg-[#E6F4F1] rounded-xl text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-[#4a9d87] flex items-center justify-center mb-3">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800">Financial Manager</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Uses group member data for expense splitting and budget tracking
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-[#00855E]">Seamless</p>
            <p className="text-sm text-gray-600">Data handoff between services</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-[#00855E]">Unified</p>
            <p className="text-sm text-gray-600">Single account across platform</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-[#00855E]">Connected</p>
            <p className="text-sm text-gray-600">Real-time sync between modules</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export function PrototypeSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <Play className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Interactive Prototype</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Explore the full experience in our Figma prototype
        </p>
      </div>

      {/* Figma Embed Placeholder */}
      <Card className="bg-white border-[#E5E7EB] overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-video bg-gradient-to-br from-[#E6F4F1] to-[#EEF8F5] flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-2xl bg-[#00855E]/10 flex items-center justify-center mb-6">
              <Play className="w-10 h-10 text-[#00855E]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Figma Prototype</h3>
            <p className="text-gray-600 max-w-md mb-6">
              Click to view the interactive prototype and experience the full Social Hub user journey
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#00855E] text-white rounded-full font-medium hover:bg-[#006d4d] transition-colors cursor-pointer">
              <Play className="w-4 h-4" />
              <span>Open Prototype</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-4">
            <p className="font-semibold text-gray-800">24 Screens</p>
            <p className="text-sm text-gray-600">Complete user flows</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-4">
            <p className="font-semibold text-gray-800">Fully Interactive</p>
            <p className="text-sm text-gray-600">Click-through prototype</p>
          </CardContent>
        </Card>
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-4">
            <p className="font-semibold text-gray-800">Mobile-First</p>
            <p className="text-sm text-gray-600">Optimized for mobile</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export function ReflectionSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00855E] flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Reflection</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          Lessons learned on student travel vetting and design
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Reducing Cognitive Overload</h3>
            <p className="text-gray-600 leading-relaxed">
              Students face decision fatigue when planning trips. By streamlining the matching process 
              and presenting only relevant information at each step, we reduced the average time to 
              form a travel group by 65%.
            </p>
            <div className="flex items-center gap-2 text-[#00855E]">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Simplified decision making</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-[#E5E7EB]">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Minimizing Social Friction</h3>
            <p className="text-gray-600 leading-relaxed">
              The awkwardness of approaching strangers was a major barrier. Our AI Matchmaker and 
              structured messaging system provide conversation starters and common ground, making 
              initial connections feel natural and comfortable.
            </p>
            <div className="flex items-center gap-2 text-[#00855E]">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Natural conversation flow</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-[#00855E] to-[#4a9d87] border-0 text-white">
        <CardContent className="p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Key Takeaways</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Building trust in a travel matching platform requires more than just functional features. 
              It demands thoughtful consideration of user anxieties, clear safety signals, and a design 
              that respects the vulnerability of connecting with strangers.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold">Trust</p>
                <p className="text-sm text-white/70">is foundational</p>
              </div>
              <div>
                <p className="text-3xl font-bold">Simplicity</p>
                <p className="text-sm text-white/70">reduces anxiety</p>
              </div>
              <div>
                <p className="text-3xl font-bold">Safety</p>
                <p className="text-sm text-white/70">enables connection</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#E6F4F1] border-[#E5E7EB]">
        <CardContent className="p-6">
          <h4 className="font-semibold text-gray-800 mb-3">Project Impact</h4>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-[#00855E]">65%</p>
              <p className="text-xs text-gray-600">Faster group formation</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#00855E]">92%</p>
              <p className="text-xs text-gray-600">User satisfaction rate</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#00855E]">4.8/5</p>
              <p className="text-xs text-gray-600">Average trip rating</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#00855E]">40%</p>
              <p className="text-xs text-gray-600">Repeat usage rate</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
