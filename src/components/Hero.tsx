import LiquidBackground from './LiquidBackground';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-background pt-16 overflow-hidden">
      {/* 3D Liquid Background */}
      <LiquidBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading with better spacing */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-6xl font-black text-foreground mb-4 leading-tight sm:text-7xl">LinkedOut</h1>
        </div>
        
        {/* Subtitle with better contrast */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-electric-yellow mb-6">
            Create. Connect. Conquer.
          </h2>
        </div>
        
        {/* Description with improved readability */}
        <p className="text-lg sm:text-xl text-foreground/80 mb-10 max-w-4xl mx-auto leading-relaxed">
          Join the most vibrant community of LinkedIn creators where ideas spark, 
          connections flourish, and careers transform. Your journey to LinkedIn stardom starts here!
        </p>
        
        {/* Call-to-action buttons with better spacing */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#"
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:bg-black hover:text-white"
          >
            Apply via Google Form
          </a>
          
          <button onClick={() => {
          const element = document.getElementById('about');
          if (element) element.scrollIntoView({
            behavior: 'smooth'
          });
        }} className="border-2 border-electric-yellow text-electric-yellow px-8 py-4 rounded-full font-bold text-lg hover:bg-electric-yellow hover:text-background transition-all duration-300 hover:shadow-lg">
            Learn More
          </button>
        </div>
        
        {/* Curved decorative SVGs for subtle brand consistency */}
        <svg className="absolute top-1/2 left-4 w-20 h-20 text-electric-yellow opacity-10" viewBox="0 0 100 100">
          <path d="M10,50 Q30,10 50,50 Q70,90 90,50" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse" />
        </svg>
        <svg className="absolute top-1/3 right-4 w-16 h-16 text-electric-yellow opacity-10" viewBox="0 0 100 100">
          <path d="M10,50 Q30,90 50,50 Q70,10 90,50" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;