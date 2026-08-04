function App() {
  const [scrolled, setScrolled] = React.useState(false);
  const [activeFeature, setActiveFeature] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "Intelligent Routing",
      desc: "Kwoat analyzes every prompt and dispatches it to the model best suited for the task — no model-switching fatigue.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "Unified Memory",
      desc: "A continuous thread of context travels with you across models, sessions, and tools. Nothing gets lost.",
      icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
    },
    {
      title: "Tool-Aware",
      desc: "Native hooks for Notion, Drive, GitHub, and your file system. Kwoat knows when to reach out and when to stay sharp.",
      icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
    },
    {
      title: "Built for Speed",
      desc: "Sub-200ms routing decisions. Sub-2s typical first-token response. Built for makers who hate waiting.",
      icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z"
    }
  ];

  const models = [
    { name: "Claude", color: "from-orange-400 to-rose-500", tag: "Reasoning" },
    { name: "GPT-4o", color: "from-emerald-400 to-teal-500", tag: "General" },
    { name: "Gemini", color: "from-blue-400 to-indigo-500", tag: "Multimodal" },
    { name: "Llama", color: "from-purple-400 to-pink-500", tag: "Open Source" },
    { name: "Mistral", color: "from-amber-400 to-orange-500", tag: "Fast" }
  ];

  const steps = [
    { num: "01", title: "You ask", desc: "Drop a prompt, a file, or a half-formed idea into Kwoat." },
    { num: "02", title: "Kwoat thinks", desc: "It scores the task across speed, depth, cost, and tool needs." },
    { num: "03", title: "Best model answers", desc: "The right model is chosen. You get the answer — not the routing drama." }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden font-sans">
      {/* Animated background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/5' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-black text-sm">K</div>
            <span className="text-xl font-bold tracking-tight">Kwoat</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#models" className="hover:text-white transition">Models</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-sm text-gray-300 hover:text-white transition">Sign in</button>
            <button className="text-sm bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition">Get started</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Now routing across 5+ frontier models
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter mb-6">
                One prompt.
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">The right model.</span>
                <br />
                Every time.
              </h1>
              <p className="text-lg text-gray-400 max-w-lg mb-10 leading-relaxed">
                Kwoat is the AI conductor. It reads your task, picks the best model from a chorus of frontier AIs, and hands you the answer — without you ever thinking about routing.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="group bg-white text-black px-6 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition flex items-center gap-2">
                  Start routing free
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </button>
                <button className="px-6 py-3.5 rounded-full font-semibold border border-white/15 hover:bg-white/5 transition">
                  Watch demo
                </button>
              </div>
              <div className="flex items-center gap-6 mt-12 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[ 'from-purple-500 to-pink-500', 'from-blue-500 to-cyan-500', 'from-amber-500 to-orange-500', 'from-emerald-500 to-teal-500' ].map((g, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br ${g} border-2 border-[#0A0A0F]`}></div>
                  ))}
                </div>
                <span>Trusted by 12,000+ builders</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://images.pexels.com/photos/4065186/pexels-photo-4065186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="AI workspace" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span className="text-xs text-gray-300">Routed to Claude Opus</span>
                    <span className="ml-auto text-xs text-gray-500">247ms</span>
                  </div>
                  <div className="text-sm text-white/90">"Refactor this into a scalable event-driven architecture..."</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo marquee */}
      <section className="py-16 bg-[#0A0A0F]/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-gray-500 mb-8">Powering workflows for leading teams</p>
          <div className="flex justify-around items-center flex-wrap gap-8 opacity-70">
            <img src="https://placehold.co/200x80/7C3AED/white?text=CompanyA" alt="Company A" className="h-8 grayscale hover:grayscale-0 transition" />
            <img src="https://placehold.co/200x80/7C3AED/white?text=CompanyB" alt="Company B" className="h-8 grayscale hover:grayscale-0 transition" />
            <img src="https://placehold.co/200x80/7C3AED/white?text=CompanyC" alt="Company C" className="h-8 grayscale hover:grayscale-0 transition" />
            <img src="https://placehold.co/200x80/7C3AED/white?text=CompanyD" alt="Company D" className="h-8 grayscale hover:grayscale-0 transition" />
            <img src="https://placehold.co/200x80/7C3AED/white?text=CompanyE" alt="Company E" className="h-8 grayscale hover:grayscale-0 transition" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Smarter AI,</span>
              <br />
              Less Overhead.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Kwoat abstracts the complexity of a multi-model world, giving you seamless intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-start text-left hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 px-6 bg-[#0A0A0F]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold tracking-tight mb-4">
              The Engine Under the Hood.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A peek into how Kwoat intelligently routes your requests for optimal results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center relative group">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-[#0A0A0F] group-hover:scale-110 transition">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold mt-8 mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models section */}
      <section id="models" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold tracking-tight mb-4">
              Built on the Best.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Kwoat integrates seamlessly with leading AI models, choosing the right one for your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {models.map((model, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col items-center justify-center text-center hover:border-emerald-400/50 transition">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${model.color} flex items-center justify-center text-2xl font-bold mb-3`}>
                  {model.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold mb-1">{model.name}</h3>
                <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">{model.tag}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
            <div className="md:w-1/2">
              <h3 className="text-4xl font-extrabold mb-4 leading-tight">
                Not sure which model to use?
                <br />
                Neither are we (sometimes).
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Kwoat's intelligent router takes the guesswork out of model selection, ensuring optimal performance and cost-efficiency for every task.
              </p>
              <button className="bg-white text-black px-6 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition">
                Learn more about routing
              </button>
            </div>
            <div className="md:w-1/2 relative flex justify-center">
              <div className="w-full max-w-sm aspect-video bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white/50" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 bg-black/30 text-white text-xs rounded-full">Kwoat in action</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#0A0A0F]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold tracking-tight mb-4">
              What Builders Are Saying.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Real feedback from developers and teams loving Kwoat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-bl-full opacity-10 group-hover:opacity-20 transition-all duration-300"></div>
                <blockquote className="relative z-10">
                  <p className="text-lg text-gray-300 mb-6 italic leading-relaxed">
                    "Kwoat has fundamentally changed how we interact with AI. No more second-guessing which model is best—it just works, and the context memory is a game-changer for complex projects."
                  </p>
                  <div className="flex items-center">
                    <img src="https://picsum.photos/seed/person${i}/50/50" alt="Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-purple-500" />
                    <div>
                      <p className="font-semibold text-white">Jane Doe {i}</p>
                      <p className="text-sm text-gray-500">Lead Engineer at TechCorp</p>
                    </div>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-3xl p-16 border border-white/10 backdrop-blur-sm">
          <h2 className="text-5xl font-extrabold tracking-tight mb-6">
            Ready to route smarter?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Stop wasting time picking models. Start building with the intelligent AI conductor.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center font-black text-xs">K</div>
            <span className="font-bold tracking-tight text-white">Kwoat</span>
            <span className="ml-4">&copy; {new Date().getFullYear()} Kwoat. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;