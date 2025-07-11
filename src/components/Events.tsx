import { Link } from "react-router-dom";

const Events = () => {
  const eventImages = [
    {
      id: 1,
      src: "/assets/bi-monthly-linkedin-experts.png",
      alt: "Bi-monthly sessions with LinkedIn experts",
      caption: "Bi-monthly sessions with LinkedIn experts",
      route: "/speaker-sessions"
    },
    {
      id: 2,
      src: "/assets/brand-collabs-top-companies.png",
      alt: "Brand collabs with top companies",
      caption: "Brand collabs with top companies",
      route: "/brand-collabs"
    },
    {
      id: 3,
      src: "/assets/weekly-networking-calls.png",
      alt: "Weekly Friday networking calls",
      caption: "Weekly Friday networking calls",
      route: "/networking-calls"
    },
    {
      id: 4,
      src: "/assets/feedback-circles-post-traction.png",
      alt: "Feedback circles for post traction",
      caption: "Feedback circles for post traction",
      route: "/feedback-circles"
    }
  ];

  return (
    <section id="inside-community" className="py-20 bg-background text-foreground">
      {/* Enhanced Background Graphics */}
      <div className="absolute inset-0">
        <svg className="absolute top-1/4 left-0 w-full h-32 opacity-5" viewBox="0 0 1000 100">
          <path d="M0,50 Q250,10 500,50 Q750,90 1000,50 L1000,100 L0,100 Z" fill="#fdb840"/>
        </svg>
        <svg className="absolute bottom-1/4 right-0 w-full h-32 opacity-5" viewBox="0 0 1000 100">
          <path d="M0,50 Q250,90 500,50 Q750,10 1000,50 L1000,0 L0,0 Z" fill="#fdb840"/>
        </svg>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-electric-yellow rounded-full opacity-10 animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-electric-yellow rounded-full opacity-15 animate-float"></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-electric-yellow rounded-full opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Flowing curve elements */}
        <div className="absolute top-10 left-1/4">
          <svg width="150" height="75" className="text-electric-yellow opacity-10 animate-curve-flow">
            <path d="M10,37.5 Q50,10 100,37.5 Q125,50 140,37.5" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-black dark:text-foreground mb-6 drop-shadow-xl">
            Inside The <span className="text-electric-yellow">Community</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto drop-shadow">
            From intimate workshops to high-energy networking sessions, 
            our community is where magic happens and careers transform!
          </p>
        </div>
        
        {/* Event Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {eventImages.map((event) => (
            <Link
              key={event.id}
              to={event.route}
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border block bg-card"
            >
              <div className="aspect-w-16 aspect-h-12 bg-background">
                <img
                  src={event.src}
                  alt={event.alt}
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-950 group-hover:opacity-200 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white dark:text-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-2xl group-hover:drop-shadow-[0_8px_32px_rgba(0,0,0,0.85)]">
                <h3 className="text-base sm:text-lg font-bold mb-2 drop-shadow-2xl group-hover:drop-shadow-[0_8px_32px_rgba(0,0,0,0.95)]">{event.caption}</h3>
                <div className="w-12 h-1 bg-electric-yellow"></div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-electric-yellow text-background px-6 py-3 rounded-full font-bold">
            <span></span>
            <span>50+ Events Conducted</span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;