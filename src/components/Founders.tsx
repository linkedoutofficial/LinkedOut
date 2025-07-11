import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const Founders = () => {
  const founders = [
    {
      id: 1,
      name: "Punya Garg",
      role: "Founder & Community Lead",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face",
      bio: "Passionate about building communities that empower creators to unlock their potential on LinkedIn.",
      linkedIn: "https://www.linkedin.com/in/thepunyagarg/",
      phone: "+91 9810884995"
    },
    {
      id: 2,
      name: "Co-Founder Name",
      role: "Co-Founder & Growth Strategist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Helping creators transform their LinkedIn presence and build meaningful professional networks.",
      linkedIn: "#"
    }
  ];

  return (
    <section id="founders" className="py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black mb-6">
            Meet Our <span className="text-electric-yellow">Founders</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            The visionaries behind the LinkedIn Creators Adda - building a community 
            where creators don't just scroll, they run the show!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder) => (
            <Card 
              key={founder.id} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-background/10 backdrop-blur-sm border-2 hover:border-electric-yellow/50 text-foreground"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-electric-yellow/20 group-hover:ring-electric-yellow/50 transition-all duration-300">
                    <AvatarImage src={founder.image} alt={founder.name} />
                    <AvatarFallback className="text-2xl font-bold bg-electric-yellow text-black">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-electric-yellow transition-colors">
                    {founder.name}
                  </h3>
                  
                  <p className="text-electric-yellow font-semibold mb-4 uppercase tracking-wide">
                    {founder.role}
                  </p>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {founder.bio}
                </p>
                
                <div className="space-y-3">
                  <a
                    href={founder.linkedIn}
                    className="inline-flex items-center justify-center w-full bg-electric-yellow text-black py-3 px-4 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                  
                  {founder.phone && (
                    <p className="text-gray-400 text-sm">
                      📞 {founder.phone}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
