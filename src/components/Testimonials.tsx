const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Parth Sanghvi",
      role: "Senior Consultant at Genpact",
      image: "/assets/parth-sanghvi.jpeg",
      quote: "Being part of this community opened doors I never knew existed. The brand collaborations and networking opportunities are incredible!",
    },
    {
      id: 2,
      name: "Devangana Ghosh",
      role: "Content Strategist",
      image: "/assets/devangana-ghosh.jpeg",
      quote: "From hesitant poster to confident creator - this community helped me find my voice on LinkedIn. The support and guidance here is exceptional!",
    },
    {
      id: 3,
      name: "Piyush Singh",
      role: "Nutritionist",
      image: "/assets/piyush-singh.jpeg",
      quote: "The bi-monthly speaker sessions and networking calls have completely transformed how I approach LinkedIn. This community is a game-changer!",
    },
    {
      id: 4,
      name: "Vansh Sethi",
      role: "Flutter Developer",
      image: "/assets/vansh-sethi.jpeg",
      quote: "The feedback circles here don't sugarcoat - they help you grow. Real connections, real growth, real results. That's what this Adda delivers!",
    },
    
  ];

  return (
    <section id="testimonials" className="py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-black dark:text-foreground mb-6 drop-shadow-xl">
            What Our <span className="text-electric-yellow">Creators Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto drop-shadow">
            Real stories from real creators who've transformed their LinkedIn presence with our community
          </p>
        </div>
        
        {/* Testimonials in a responsive grid, no horizontal scroll */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-4">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-background/20 transition-all duration-300 transform hover:-translate-y-2 border border-electric-yellow/20 hover:border-electric-yellow/50 w-full"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-electric-yellow/30"
                />
                <div>
                  <h3 className="text-lg font-bold text-foreground">{testimonial.name}</h3>
                  <p className="text-electric-yellow text-sm">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-500 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-electric-yellow text-background px-6 py-3 rounded-full font-bold">
            <span>⭐</span>
            <span>Join 500+ Happy Creators</span>
            <span>⭐</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
