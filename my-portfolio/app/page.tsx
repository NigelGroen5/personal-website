'use client';

export default function Home() {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('nigel.groen5@gmail.com');
      // Create toast notification
      const toast = document.createElement('div');
      toast.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div>
            <p class="text-sm font-medium text-white">Email copied!</p>
            <p class="text-xs text-green-100 mt-1">nigel.groen5@gmail.com</p>
          </div>
        </div>
      `;
      toast.className = 'fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl shadow-2xl z-50 transform translate-y-2 opacity-0 transition-all duration-500 ease-out backdrop-blur-sm border border-green-400/20';
      document.body.appendChild(toast);
      
      // Animate in
      setTimeout(() => {
        toast.style.transform = 'translate-y-0';
        toast.style.opacity = '1';
      }, 10);
      
      // Remove toast after 4 seconds
      setTimeout(() => {
        toast.style.transform = 'translate-y-2';
        toast.style.opacity = '0';
        setTimeout(() => {
          if (document.body.contains(toast)) {
            document.body.removeChild(toast);
          }
        }, 500);
      }, 4000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
      // Error toast
      const errorToast = document.createElement('div');
      errorToast.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div>
            <p class="text-sm font-medium text-white">Failed to copy email</p>
            <p class="text-xs text-red-100 mt-1">Please try again</p>
          </div>
        </div>
      `;
      errorToast.className = 'fixed bottom-8 right-8 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-4 rounded-xl shadow-2xl z-50 transform translate-y-2 opacity-0 transition-all duration-500 ease-out backdrop-blur-sm border border-red-400/20';
      document.body.appendChild(errorToast);
      
      setTimeout(() => {
        errorToast.style.transform = 'translate-y-0';
        errorToast.style.opacity = '1';
      }, 10);
      
      setTimeout(() => {
        errorToast.style.transform = 'translate-y-2';
        errorToast.style.opacity = '0';
        setTimeout(() => {
          if (document.body.contains(errorToast)) {
            document.body.removeChild(errorToast);
          }
        }, 500);
      }, 4000);
    }
  };

  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#top" className="font-header text-xl font-bold text-slate-800 hover:text-slate-900 transition-colors cursor-pointer">Nigel Groen</a>
             <div className="hidden md:flex space-x-8">
               <a href="#about" className="text-slate-600 hover:text-slate-800 transition-colors">About</a>
               <a href="#experience" className="text-slate-600 hover:text-slate-800 transition-colors">Experience</a>
               <a href="#projects" className="text-slate-600 hover:text-slate-800 transition-colors">Projects</a>
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
                Computer Science student at Queen&apos;s University building full-stack applications, machine learning models, 
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
                <a href="#projects" className="px-8 py-4 bg-slate-700 text-white rounded-xl font-semibold hover:bg-slate-800 hover:shadow-lg transition-all text-center">
                  View My Work
                </a>
                <a href="/nigel_groen_resume_2025.pdf" download="Nigel_Groen_Resume.pdf" className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:border-slate-500 hover:text-slate-800 transition-all text-center">
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right side - Headshot area */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Headshot */}
                <div className="w-80 h-80 rounded-3xl shadow-lg overflow-hidden">
                  <img 
                    src="/images/IMG_6331.jpg" 
                    alt="Nigel Groen Headshot" 
                    className="w-full h-full object-cover"
                  />
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
              Currently, I&apos;m involved in Queen&apos;s Computing Student Assocation (COMPSA), Queen&apos;s Themed Entertainment Development Team (QTEDT), and Smith Business and Technology (SBT) where I engage in software development, leadership, and learning new technologies. I&apos;ve always been fascinated by technology which led me to pursue a career in computer science.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me at the pier playing spikeball, playing intramural Soccer, Football, or Ultimate Frisbee, and spending time with my friends.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-3xl shadow-lg overflow-hidden">
                <img 
                  src="/images/soccer.jpg" 
                  alt="Playing soccer" 
                  className="w-full h-full object-cover"
                />
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
                    <span className="text-slate-500 font-medium">Summer 2025</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Engineered full-stack features for VenTrack, a third-party risk management platform. Built auto-generation 
                    tools for company risk profiles and implemented real-time news feed API. Structured data for AI customer 
                    service agent, achieving 30% higher ticket resolution score.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">TypeScript</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">React</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Next.js</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Convex</span>
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
                    alt="Queen&apos;s COMPSA" 
                    className="w-16 h-16 object-contain rounded-lg shadow-sm"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="font-header text-2xl font-semibold text-slate-900 mb-1">Lead Developer</h3>
                      <p className="text-slate-600 font-medium text-lg">Queen&apos;s COMPSA</p>
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
                    alt="Queen&apos;s Web Development Club" 
                    className="w-16 h-16 object-contain rounded-lg shadow-sm"
                  />
                </div>
                <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                      <h3 className="font-header text-2xl font-semibold text-slate-900 mb-1">Software Engineer</h3>
                      <p className="text-slate-600 font-medium text-lg">Queen&apos;s Web Development Club</p>
                </div>
                    <span className="text-slate-500 font-medium">December 2024 - April 2025</span>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                    Collaborated on a 4-person team to build a full-stack scheduling app for Queen&apos;s Web Development Club. 
                    Delivered a functional product that hybridized Calendly & LettuceMeet, streamlining the club&apos;s event 
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
                    alt="Queen&apos;s Themed Entertainment Development Team" 
                    className="w-16 h-16 object-contain rounded-lg shadow-sm"
                  />
                </div>
                <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                      <h3 className="font-header text-2xl font-semibold text-slate-900 mb-1">Project Engineer</h3>
                      <p className="text-slate-600 font-medium text-lg">Queen&apos;s Themed Entertainment Development Team</p>
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
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">PyQt5</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Flask</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">Engineering Design</span>
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
                    <span className="text-slate-500 font-medium">March 2025 - Present</span>
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
            <a href="https://ml-fantasy-qb-predictor.onrender.com/" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2 block">
               <div className="h-48 bg-green-200 relative overflow-hidden">
                 <img 
                   src="/images/qb-ml.png" 
                   alt="NFL Quarterback Fantasy Point Predictor" 
                   className="w-full h-full object-cover"
                 />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              </div>
              <div className="p-6">
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">NFL Quarterback Fantasy Point Predictor <span className="text-slate-500 font-normal text-base">(2025)</span></h3>
                <p className="text-slate-600 mb-4">XGBoost machine learning model predicting NFL quarterback fantasy points with 3.99 MAE. Features interactive JavaScript frontend for fantasy football analysis.</p>
                <p className="text-amber-600 text-sm mb-4 font-medium">Note: Site may take a few minutes to boot up on first visit</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Python</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">XGBoost</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Scikit-learn</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Flask</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">JavaScript</span>
                </div>
                <div className="text-slate-600 font-medium hover:text-slate-800 transition-colors flex items-center gap-2">
                  View Live Project 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="https://compsa.ca/room-booking" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2 block">
              <div className="h-48 bg-slate-300 relative overflow-hidden">
                 <img 
                   src="/images/room-booking.png" 
                   alt="Queen&apos;s Computing Room Booking" 
                   className="w-full h-full object-cover"
                 />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              </div>
              <div className="p-6">
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">Queen&apos;s Computing Room Booking <span className="text-slate-500 font-normal text-base">(2025)</span></h3>
                <p className="text-slate-600 mb-4">Full-stack room booking system for Queen&apos;s Computing students. Built with Next.js, React, and Supabase with AWS SES integration for email notifications.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Next.js</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">React</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Supabase</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">AWS SES</span>
                </div>
                <div className="text-slate-600 font-medium hover:text-slate-800 transition-colors flex items-center gap-2">
                  View Live Project 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>

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
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">QWEB Calendar Booking App <span className="text-slate-500 font-normal text-base">(2024)</span></h3>
                <p className="text-slate-600 mb-4">Full-stack scheduling app hybridizing Calendly &amp; LettuceMeet for Queen&apos;s Web Development Club. Built by 4-person team to streamline event planning.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">React</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Firebase</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">JavaScript</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Node.js</span>
                </div>
                <div className="text-slate-500 text-sm font-medium">Project Showcase</div>
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
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">VenTrack <span className="text-slate-500 font-normal text-base">(2025)</span></h3>
                <p className="text-slate-600 mb-4">Contributed full-stack features to existing third-party risk management platform. Developed auto-generation tools for company risk profiles and implemented real-time news feed API for contextual monitoring.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Next.js</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Convex</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">React</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">TypeScript</span>
                </div>
                <div className="text-slate-500 text-sm font-medium">Project Showcase</div>
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
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">QTEDT Ride Control System <span className="text-slate-500 font-normal text-base">(2025)</span></h3>
                <p className="text-slate-600 mb-4">Roller coaster control simulation built for Universal&apos;s TMU Thrill Design competition. Features start/stop controls, cart removal from track, and real-time ride operation monitoring using Python and PyQt5.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Python</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">PyQt5</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Simulation</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Control Systems</span>
                </div>
                <div className="text-slate-500 text-sm font-medium">Project Showcase</div>
              </div>
            </div>

            <a href="https://github.com/NigelGroen5/personal-website" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2 block">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <img 
                  src="/images/portfolio.png" 
                  alt="Personal Portfolio" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              </div>
              <div className="p-6">
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">Personal Portfolio <span className="text-slate-500 font-normal text-base">(2025)</span></h3>
                <p className="text-slate-600 mb-4">Portfolio website built with Next.js and Tailwind CSS. Features clean design, and showcases projects and experience.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Next.js</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">React</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">TypeScript</span>
                </div>
                <div className="text-slate-600 font-medium hover:text-slate-800 transition-colors flex items-center gap-2">
                  View Project 
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </div>
            </a>

             <a href="https://github.com/NigelGroen5/sorting-algorithm-visualizer" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2 block">
               <div className="h-48 bg-blue-200 relative overflow-hidden">
                 <img 
                   src="/images/algo.png" 
                   alt="Sorting Algorithm Visualizer" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
               </div>
              <div className="p-6">
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">Sorting Algorithm Visualizer <span className="text-slate-500 font-normal text-base">(2023)</span></h3>
                <p className="text-slate-600 mb-4">Interactive Python application built with Pygame to visualize 4 different sorting algorithms in real-time with animated comparisons and swaps.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Python</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Pygame</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Data Structures</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Algorithms</span>
                </div>
                <div className="text-slate-600 font-medium hover:text-slate-800 transition-colors flex items-center gap-2">
                  View Project 
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </div>
            </a>

            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="h-48 bg-green-200 relative overflow-hidden">
                <img 
                  src="/images/game.jfif" 
                  alt="The World&apos;s Hardest Game" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              </div>
              <div className="p-6">
                <h3 className="font-header text-xl font-semibold text-slate-900 mb-2">The World&apos;s Hardest Game <span className="text-slate-500 font-normal text-base">(2023)</span></h3>
                <p className="text-slate-600 mb-4">Personalized recreation of the classic video game built with Python and Pygame. Features 11 challenging levels with identical graphics and gameplay mechanics to the original.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Python</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Pygame</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Game Development</span>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">Graphics</span>
                </div>
                <div className="text-slate-500 text-sm font-medium">Project Showcase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-600">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            That&apos;s all, thanks for visiting.
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