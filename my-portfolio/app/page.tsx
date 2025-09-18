'use client';

export default function Home() {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('nigel.groen5@gmail.com');
      // Create toast notification
      const toast = document.createElement('div');
      toast.textContent = 'Email copied to clipboard!';
      toast.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300';
      document.body.appendChild(toast);
      
      // Remove toast after 3 seconds
      setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 300);
      }, 3000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

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
                CS Undergrad, Software Engineer
              </h2>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Computer Science student at Queen's University building full-stack applications, machine learning models, 
                and interactive experiences. Passionate about solving real-world problems through code.
              </p>
              
              {/* Contact Links */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="https://www.linkedin.com/in/nigel-groen-921797326/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="https://github.com/NigelGroen5" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <button onClick={copyToClipboard}
                   className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Email
                </button>
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
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/images/tracker.jfif" 
                    alt="Tracker Networks" 
                    className="w-16 h-16 object-contain rounded-lg shadow-sm"
                  />
                </div>
                <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="font-header text-2xl font-semibold text-slate-900 mb-1">Software Developer Intern</h3>
                  <p className="text-slate-600 font-medium text-lg">Tracker Networks</p>
                </div>
                    <span className="text-slate-500 font-medium">May 2025 - August 2025</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Engineered full-stack features for VenTrack, a third-party risk management platform. Built auto-generation 
                    tools for company risk profiles and implemented real-time news feed API. Structured data for AI customer 
                    service agent, achieving 30% higher ticket resolution score.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">JavaScript</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Python</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">API Development</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Full-Stack</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Risk Management</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/images/compsa.jfif" 
                    alt="Queen's COMPSA" 
                    className="w-16 h-16 object-contain rounded-lg shadow-sm"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="font-header text-2xl font-semibold text-slate-900 mb-1">Lead Developer</h3>
                      <p className="text-slate-600 font-medium text-lg">Queen's COMPSA</p>
                    </div>
                    <span className="text-slate-500 font-medium">August 2025 - Present</span>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                    Lead a team of 8 developers building full-stack applications for 1,800+ students. Architected and 
                    engineered a room booking system using Next.js, React, and Supabase with AWS SES integration. 
                    Mentor developers through technical challenges and code reviews.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Next.js</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">React</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Supabase</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">AWS SES</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Team Leadership</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/images/qweb.jfif" 
                    alt="Queen's Web Development Club" 
                    className="w-16 h-16 object-contain rounded-lg shadow-sm"
                  />
                </div>
                <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                      <h3 className="font-header text-2xl font-semibold text-slate-900 mb-1">Software Engineer</h3>
                      <p className="text-slate-600 font-medium text-lg">Queen's Web Development Club</p>
                </div>
                    <span className="text-slate-500 font-medium">2024 - 2025</span>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                    Collaborated on a 4-person team to build a full-stack scheduling app for Queen's Web Development Club. 
                    Delivered a functional product that hybridized Calendly & LettuceMeet, streamlining the club's event 
                    planning process by a tight sprint deadline.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">React</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">JavaScript</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Firebase</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Node.js</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/images/qtedt.jfif" 
                    alt="Queen's Themed Entertainment Development Team" 
                    className="w-16 h-16 object-contain rounded-lg shadow-sm"
                  />
                </div>
                <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                      <h3 className="font-header text-2xl font-semibold text-slate-900 mb-1">Project Engineer</h3>
                      <p className="text-slate-600 font-medium text-lg">Queen's Themed Entertainment Development Team</p>
                </div>
                    <span className="text-slate-500 font-medium">September 2024 - Present</span>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                    Engineered Python-based ride control simulator modeling roller coaster movement, emergency stops, and 
                    maintenance protocols. Qualified for TMU Thrill Design competition invitational round by Universal Creative. 
                    Developed show control programming for in-house projects.
              </p>
              <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Python</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Simulation</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Control Systems</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Engineering Design</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Show Control</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/images/sbt.jfif" 
                    alt="Smith Business and Technology" 
                    className="w-16 h-16 object-contain rounded-lg shadow-sm"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="font-header text-2xl font-semibold text-slate-900 mb-1">Operational Logistics Coordinator</h3>
                      <p className="text-slate-600 font-medium text-lg">Smith Business and Technology</p>
                    </div>
                    <span className="text-slate-500 font-medium">2022 - 2023</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Coordinated logistics and operations for business technology conferences and case competitions. 
                    Managed event planning, participant coordination, and vendor relationships to ensure successful 
                    execution of large-scale academic and professional events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-header text-5xl font-bold text-slate-900 mb-16 text-center">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2">
               <div className="h-48 bg-green-200 relative overflow-hidden">
                 <img 
                   src="/images/qb-ml.png" 
                   alt="NFL Quarterback Fantasy Point Predictor" 
                   className="w-full h-full object-cover"
                 />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              </div>
              <div className="p-6">
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">NFL Quarterback Fantasy Point Predictor</h3>
                <p className="text-slate-600 mb-4">XGBoost machine learning model predicting NFL quarterback fantasy points with 3.99 MAE. Features interactive JavaScript frontend for fantasy football analysis.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Python</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">XGBoost</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Scikit-learn</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Flask</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">JavaScript</span>
                </div>
                <button className="text-slate-600 font-medium hover:text-slate-800 transition-colors">View Project →</button>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="h-48 bg-slate-300 relative overflow-hidden">
                 <img 
                   src="/images/room-booking.png" 
                   alt="Queen's Computing Room Booking" 
                   className="w-full h-full object-cover"
                 />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              </div>
              <div className="p-6">
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">Queen's Computing Room Booking</h3>
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
                 <img 
                   src="/images/qweb-booking.png" 
                   alt="QWEB Calendar Booking App" 
                   className="w-full h-full object-cover"
                 />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              </div>
              <div className="p-6">
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">QWEB Calendar Booking App</h3>
                <p className="text-slate-600 mb-4">Full-stack scheduling app hybridizing Calendly & LettuceMeet for Queen's Web Development Club. Built by 4-person team to streamline event planning.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">React</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Firebase</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">JavaScript</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Node.js</span>
                </div>
                <button className="text-slate-600 font-medium hover:text-slate-800 transition-colors">View Project →</button>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="h-48 bg-slate-400 relative overflow-hidden">
                 <img 
                   src="/images/ventrack.png" 
                   alt="VenTrack" 
                   className="w-full h-full object-cover"
                 />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              </div>
              <div className="p-6">
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">VenTrack</h3>
                <p className="text-slate-600 mb-4">Contributed full-stack features to existing third-party risk management platform. Developed auto-generation tools for company risk profiles and implemented real-time news feed API for contextual monitoring.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Next.js</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Convex</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">React</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">TypeScript</span>
                </div>
                <button className="text-slate-600 font-medium hover:text-slate-800 transition-colors">View Project →</button>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="h-48 bg-gray-300 relative overflow-hidden">
                 <img 
                   src="/images/roller-coaster.png" 
                   alt="QTEDT Ride Control System" 
                   className="w-full h-full object-cover"
                 />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              </div>
              <div className="p-6">
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">QTEDT Ride Control System</h3>
                <p className="text-slate-600 mb-4">Roller coaster control simulation built for Universal's TMU Thrill Design competition. Features start/stop controls, cart removal from track, and real-time ride operation monitoring using Python and PyQt5.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Python</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">PyQt5</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Simulation</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Control Systems</span>
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
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">Personal Portfolio</h3>
                <p className="text-slate-600 mb-4">Modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, clean design, and showcases projects and experience.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Next.js</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">React</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">TypeScript</span>
                </div>
                <button className="text-slate-600 font-medium hover:text-slate-800 transition-colors">View Project →</button>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="h-48 bg-blue-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-3xl">🚀</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">Sorting Algorithm Visualizer</h3>
                <p className="text-slate-600 mb-4">Interactive Python application built with Pygame to visualize 4 different sorting algorithms in real-time with animated comparisons and swaps.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Python</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Pygame</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Data Structures</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Algorithms</span>
                </div>
                <button className="text-slate-600 font-medium hover:text-slate-800 transition-colors">View Project →</button>
              </div>
            </div>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="h-48 bg-green-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-3xl">🌱</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">The World's Hardest Game</h3>
                <p className="text-slate-600 mb-4">Personalized recreation of the classic video game built with Python and Pygame. Features 11 challenging levels with identical graphics and gameplay mechanics to the original.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Python</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Pygame</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Game Development</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Graphics</span>
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
          <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            That's all, thanks for visiting.
          </p>
          <div className="mt-16 pt-8 border-t border-slate-400">
            <div className="flex flex-col items-center">
              <p className="text-slate-200 mb-2">© 2025 Nigel Groen.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}