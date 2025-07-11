import { Building, Users, Star, Award, Shield, Globe, Briefcase, TrendingUp, Target, Linkedin } from "lucide-react";

const CommunityPartners = () => {
  const sponsors = [
    { name: "Homey", logo: "/assets/homey-logo.png", type: "Food Sponsor", link: "https://www.homeystays.org/" },
  ];

  const communityPartners = [
    { name: "Prajvalan", logo: undefined, type: "Community Partner", image: "/assets/prajvalan-logo.png" },
  ];

  const pastSpeakers = [
    {
      name: "Archy Gupta",
      role: "SDE III at Google",
      image: "/assets/archy_gupta.jpeg",
      linkedIn: "https://www.linkedin.com/in/archy-gupta-myprofile/",
      followers: "8 lakh"
    },
    {
      name: "Abhay Singh",
      role: "SDE II at Outcomes",
      image: "/assets/abhay_singh.jpeg",
      linkedIn: "https://www.linkedin.com/in/abhay-singh-a64b89192/",
      followers: "1.2 lakh"
    },
    {
      name: "Vanya Goel",
      role: "Co-Founder at Pitch N Hire",
      image: "/assets/vanya_goel.jpeg",
      linkedIn: "https://www.linkedin.com/in/vanyagoel/",
      followers: "1 lakh"
    },
    {
      name: "Upasana Singh",
      role: "SDE at Flipkart",
      image: "/assets/upasana_singh.jpeg",
      linkedIn: "https://www.linkedin.com/in/upasana-singh1216/",
      followers: "70k"
    },
    {
      name: "Shivangi Jajoo",
      role: "CA Finalist",
      image: "/assets/shivangi_jajoo.jpeg",
      linkedIn: "https://www.linkedin.com/in/shivangi-jajoo/",
      followers: "20k"
    },
    {
      name: "Kashish Gaur",
      role: "LinkedIn Ghostwriter",
      image: "/assets/kashish_gaur.jpeg",
      linkedIn: "https://www.linkedin.com/in/kashishgaur/",
      followers: "20k"
    }
  ];

  return (
    <section id="partners" className="relative py-20 bg-background overflow-hidden">
      {/* Enhanced Background Graphics */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-electric-yellow rounded-full opacity-10 animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-14 h-14 bg-electric-yellow rounded-full opacity-15 animate-float"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 border-2 border-electric-yellow rotate-45 opacity-10 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-electric-yellow rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Curved flowing lines */}
        <svg className="absolute top-1/4 left-0 w-full h-24 opacity-5" viewBox="0 0 1000 100">
          <path d="M0,50 Q200,20 400,50 Q600,80 800,50 Q900,30 1000,50" stroke="#fdb840" strokeWidth="2" fill="none"/>
        </svg>
        <svg className="absolute bottom-1/4 right-0 w-full h-24 opacity-5" viewBox="0 0 1000 100">
          <path d="M1000,50 Q800,80 600,50 Q400,20 200,50 Q100,70 0,50" stroke="#fdb840" strokeWidth="2" fill="none"/>
        </svg>
        
        {/* Partnership symbols */}
        <div className="absolute top-1/3 right-10">
          <svg width="40" height="40" className="text-electric-yellow opacity-10 animate-pulse">
            <path d="M20,5 L30,15 L20,25 L10,15 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        {/* Handshake graphics */}
        <div className="absolute top-10 right-1/4 text-electric-yellow opacity-10 text-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-10 left-1/3 text-electric-yellow opacity-10 text-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Sponsors Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-black dark:text-foreground mb-6 drop-shadow-xl">
              Our <span className="text-electric-yellow">Sponsors</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto drop-shadow">
              Proud to be supported by amazing organizations that believe in empowering LinkedIn creators
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-electric-yellow rounded-full p-0 mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-28 h-28 overflow-hidden">
                    <img src={sponsor.logo} alt={sponsor.name + ' logo'} className="w-full h-full rounded-full object-cover" />
                  </div>
                  <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xl font-bold text-foreground mb-2">{sponsor.name}</h3>
                  </a>
                  <p className="text-electric-yellow text-sm font-semibold mb-4">{sponsor.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Community Partners Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-black dark:text-foreground mb-6 drop-shadow-xl">
              Our Community <span className="text-electric-yellow">Partners</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto drop-shadow">
              Collaborating with organizations that share our vision of creator empowerment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityPartners.map((partner, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border transform hover:-translate-y-2 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-electric-yellow rounded-full p-0 mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-28 h-28 overflow-hidden">
                    {partner.image && (
                      <img src={partner.image} alt={partner.name} className="w-full h-full object-contain" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{partner.name}</h3>
                  <p className="text-electric-yellow text-sm font-semibold mb-4">{partner.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Past Speakers Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-black dark:text-foreground mb-6 drop-shadow-xl">
              Our Past <span className="text-electric-yellow">Speakers</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto drop-shadow">
              Learn from the LinkedIn legends who have shared their expertise with our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastSpeakers.map((speaker, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 shadow-2xl hover:shadow-2xl transition-all duration-300 border border-border transform hover:-translate-y-2 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-electric-yellow/20 group-hover:ring-electric-yellow/50 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-electric-yellow rounded-full p-2">
                      <Linkedin className="w-4 h-4 text-black" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-black dark:text-foreground mb-2 group-hover:text-electric-yellow transition-colors drop-shadow">
                    {speaker.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 text-sm mb-4 leading-relaxed drop-shadow">
                    {speaker.role}
                  </p>
                  <p className="text-electric-yellow text-xs font-semibold mb-4">
                    Followers: {speaker.followers}
                  </p>
                  <a
                    href={speaker.linkedIn}
                    className="inline-flex items-center justify-center bg-electric-yellow text-black py-2 px-4 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 text-sm"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-electric-yellow to-yellow-300 text-black rounded-2xl p-8 inline-block relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-2 right-2 w-6 h-6 border-2 border-black rounded-full opacity-30"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 bg-black rounded-full opacity-20"></div>
            
            <h3 className="text-2xl font-bold mb-4 relative z-10">Want to Partner with Us?</h3>
            <p className="text-black/80 mb-6 relative z-10 max-w-2xl">
              Join our growing network of partners and sponsors who believe in empowering the next generation of LinkedIn creators
            </p>
            <a
              href="mailto:thelinkedoutofficial@gmail.com"
              className="bg-background text-foreground px-6 py-3 rounded-full font-bold hover:bg-background/80 transition-colors inline-block relative z-10"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPartners;