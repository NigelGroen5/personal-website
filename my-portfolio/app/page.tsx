export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="font-header text-xl font-bold text-slate-800">Nigel Groen</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-800 transition-colors">About</a>
              <a href="#experience" className="text-slate-600 hover:text-slate-800 transition-colors">Experience</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-800 transition-colors">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-800 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h1 className="font-header text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                Nigel Groen
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-700 font-medium mb-8">
                Creative Designer & Developer
              </h2>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                I craft digital experiences that blend beautiful design with powerful functionality. 
                Based in Vancouver, working with clients worldwide.
              </p>
              
              {/* Contact Links */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="https://linkedin.com/in/nigelgroen" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="https://github.com/nigelgroen" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a href="mailto:nigel@example.com"
                   className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Email
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-slate-700 text-white rounded-xl font-semibold hover:bg-slate-800 hover:shadow-lg transition-all">
                  View My Work
                </button>
                <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:border-slate-500 hover:text-slate-800 transition-all">
                  Download Resume
                </button>
              </div>
            </div>

            {/* Right side - Headshot area */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Placeholder for headshot - you can replace this with an actual image */}
                <div className="w-80 h-80 bg-slate-200 rounded-3xl shadow-lg flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    <p className="text-sm font-medium">Your headshot here</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-slate-300 rounded-lg shadow-md flex items-center justify-center">
                  <span className="text-lg">🎨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-header text-5xl font-bold text-slate-900 mb-8">About Me</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I'm a passionate creative professional with 8+ years of experience in digital design and development. 
                I specialize in creating immersive user experiences that tell compelling stories and drive results.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                When I'm not designing or coding, you'll find me hiking in the Canadian Rockies, experimenting with 
                film photography, or exploring Vancouver's incredible food scene.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
                  <p className="text-slate-600">Vancouver, BC</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Experience</h3>
                  <p className="text-slate-600">8+ Years</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Clients</h3>
                  <p className="text-slate-600">50+ Worldwide</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Projects</h3>
                  <p className="text-slate-600">200+ Completed</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-slate-200 rounded-3xl shadow-lg"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white rounded-2xl shadow-md flex items-center justify-center">
                <span className="text-4xl">🎨</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-slate-300 rounded-xl shadow-md flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-header text-5xl font-bold text-slate-900 mb-16 text-center">Experience</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="font-header text-2xl font-semibold text-slate-900 mb-1">Senior UX Designer</h3>
                  <p className="text-slate-600 font-medium text-lg">Glacier Studios</p>
                </div>
                <span className="text-slate-500 font-medium">2021 - Present</span>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Leading design initiatives for Fortune 500 clients, focusing on user-centered design and innovative 
                digital solutions. Managed a team of 6 designers and collaborated with cross-functional teams.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Figma</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Design Systems</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">User Research</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Team Leadership</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="font-header text-2xl font-semibold text-slate-900 mb-1">Product Designer</h3>
                  <p className="text-slate-600 font-medium text-lg">Arctic Tech</p>
                </div>
                <span className="text-slate-500 font-medium">2019 - 2021</span>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Designed and developed user interfaces for SaaS products serving 100K+ users. Increased user 
                engagement by 40% through data-driven design decisions and A/B testing.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Sketch</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Prototyping</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Analytics</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="font-header text-2xl font-semibold text-slate-900 mb-1">Frontend Developer</h3>
                  <p className="text-slate-600 font-medium text-lg">Frost Digital</p>
                </div>
                <span className="text-slate-500 font-medium">2017 - 2019</span>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Built responsive web applications and interactive experiences for creative agencies and startups. 
                Specialized in modern JavaScript frameworks and performance optimization.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">JavaScript</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Vue.js</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">SCSS</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">WebGL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-header text-5xl font-bold text-slate-900 mb-16 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-3xl">🏔️</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">Mountain Explorer App</h3>
                <p className="text-slate-600 mb-4">A mobile app for discovering hiking trails with AR navigation and weather integration.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">React Native</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">AR Kit</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Maps API</span>
                </div>
                <button className="text-slate-600 font-medium hover:text-slate-800 transition-colors">View Project →</button>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="h-48 bg-slate-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-3xl">🌊</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">Ocean Conservation Platform</h3>
                <p className="text-slate-600 mb-4">A web platform connecting marine researchers with citizen scientists worldwide.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Next.js</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">D3.js</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">PostgreSQL</span>
                </div>
                <button className="text-slate-600 font-medium hover:text-slate-800 transition-colors">View Project →</button>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-3xl">❄️</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">Arctic Weather Dashboard</h3>
                <p className="text-slate-600 mb-4">Real-time weather monitoring system for remote Arctic research stations.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Vue.js</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Chart.js</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">WebSocket</span>
                </div>
                <button className="text-slate-600 font-medium hover:text-slate-800 transition-colors">View Project →</button>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="h-48 bg-slate-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-3xl">🧊</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">Glacier Tracking System</h3>
                <p className="text-slate-600 mb-4">Satellite imagery analysis tool for monitoring glacier movement and climate change.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Python</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">TensorFlow</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">GIS</span>
                </div>
                <button className="text-slate-600 font-medium hover:text-slate-800 transition-colors">View Project →</button>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="h-48 bg-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-3xl">🐧</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">Wildlife Migration Tracker</h3>
                <p className="text-slate-600 mb-4">Interactive visualization of Arctic wildlife migration patterns and population data.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">React</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Mapbox</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Node.js</span>
                </div>
                <button className="text-slate-600 font-medium hover:text-slate-800 transition-colors">View Project →</button>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-3xl">🌌</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">Aurora Forecast App</h3>
                <p className="text-slate-600 mb-4">Mobile app for predicting Northern Lights visibility with location-based alerts.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Swift</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Core ML</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Weather API</span>
                </div>
                <button className="text-slate-600 font-medium hover:text-slate-800 transition-colors">View Project →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-header text-5xl font-bold text-white mb-6">Let's Create Something Amazing</h2>
          <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? I'm always excited to work on new projects 
            and collaborate with passionate people.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-white text-slate-600 rounded-xl font-semibold hover:shadow-lg transition-all">
              Start a Project
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-slate-600 transition-all">
              Schedule a Call
            </button>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-200 mb-4 md:mb-0">© 2024 Nigel Groen. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-slate-200 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-slate-200 hover:text-white transition-colors">GitHub</a>
                <a href="#" className="text-slate-200 hover:text-white transition-colors">Dribbble</a>
                <a href="#" className="text-slate-200 hover:text-white transition-colors">Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}