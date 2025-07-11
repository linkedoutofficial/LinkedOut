const About = () => {
  return <section id="about" className="relative py-20 bg-card overflow-hidden">
      {/* Curvy Background Graphics */}
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
          <path d="M0,200 Q250,50 500,200 Q750,350 1000,200 L1000,0 L0,0 Z" fill="#fdb840" />
          <path d="M0,800 Q250,650 500,800 Q750,950 1000,800 L1000,1000 L0,1000 Z" fill="#fdb840" />
        </svg>
        
        {/* Floating curved elements */}
        <div className="absolute top-20 right-20">
          <svg width="100" height="50" className="text-electric-yellow opacity-20 animate-float">
            <path d="M10,25 Q30,5 50,25 Q70,45 90,25" stroke="currentColor" strokeWidth="3" fill="none" />
          </svg>
        </div>
        <div className="absolute bottom-32 left-16">
          <svg width="80" height="40" className="text-electric-yellow opacity-15 animate-bounce-slow">
            <path d="M10,20 Q25,5 40,20 Q55,35 70,20" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-foreground mb-6">
            About <span className="text-electric-yellow">LinkedOuts</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6 text-lg sm:text-xl text-gray-500 leading-relaxed mb-8">
              <p>
                <strong className="text-gray-700 dark:text-gray-300">From your first post to your first client. From feeling invisible to earning your Top Voice badge.</strong>
              </p>
              <p>
                LinkedOuts is where LinkedIn creators find the community they've always needed — online and in real life.
              </p>
              <p>
                We're not just another content group. We're building a real home for creators across India.
                A space to belong. A space to grow. A space where your content actually gets seen, supported, and celebrated.
              </p>
              <p>
                So far, we've brought together over <strong className="text-electric-yellow">200 creators</strong> across <strong className="text-electric-yellow">Delhi, Bangalore, Mumbai, and Chennai</strong>, and we're just getting started. Offline meetups. Honest feedback. Real friendships. That's the energy we move with.
              </p>
              <p>
                Whether you're a <strong className="text-electric-yellow">student figuring it out</strong>, a <strong className="text-electric-yellow">freelancer chasing consistency</strong>, or a <strong className="text-electric-yellow">professional ready to be seen</strong>, there's a place here for you.
              </p>
              <p>
                If LinkedIn ever felt like a lonely grind, this is the platform you wish you had when you started.
                Now it's here.
              </p>
            </div>
          </div>
          
          <div className="relative">
            {/* Curved decorative background */}
            <div className="absolute inset-0">
              <svg className="w-full h-full opacity-10" viewBox="0 0 400 400">
                <path d="M50,200 Q200,50 350,200 Q200,350 50,200" stroke="#fdb840" strokeWidth="2" fill="none" className="animate-pulse" />
                <path d="M100,200 Q200,100 300,200 Q200,300 100,200" stroke="#fdb840" strokeWidth="1" fill="none" className="animate-pulse" style={{
                animationDelay: '1s'
              }} />
              </svg>
            </div>
            
            <div className="relative bg-gradient-to-br from-electric-yellow to-[#e5a538] rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white dark:bg-dark-bg rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">Why Join Us?</h3>
                <ul className="space-y-3 text-gray-500 dark:text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span>Bi-monthly sessions with LinkedIn experts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>Weekly Friday networking calls</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>Feedback circles for post traction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>Brand collabs with top companies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;