const FAQ = () => {
  const faqs = [
    {
      question: "Who is LinkedOuts for?",
      answer: "Students, freelancers, solopreneurs, and professionals (ages 16–30) who want to grow on LinkedIn, build a personal brand, and turn content into real opportunities."
    },
    {
      question: "Do I need to be a LinkedIn expert to join?",
      answer: "Not at all. Whether you're writing your first post or aiming for Top Voice, LinkedOuts supports creators at every level. All we ask is that you're committed to showing up and creating consistently."
    },
    {
      question: "How is this different from just posting on LinkedIn?",
      answer: "Posting alone can feel slow and isolating. LinkedOuts gives you feedback, visibility, and community — so you're never growing alone."
    },
    {
      question: "What if I'm shy or still figuring out my niche?",
      answer: "Perfect. Many of our members start unsure. You'll find clarity, confidence, and your voice by being part of the community."
    },
    {
      question: "Is LinkedOuts an online or offline community?",
      answer: "Both. We host weekly online sessions and run offline meetups across cities like Delhi, Mumbai, Bangalore, and Chennai."
    },
    {
      question: "How much does it cost to join?",
      answer: "Nothing — it's completely free for early members. Right now, we're focused on building a strong, value-first community."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-card overflow-hidden">
      {/* Enhanced Background Graphics */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-electric-yellow rounded-full opacity-10 animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-electric-yellow rounded-full opacity-15 animate-float"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-electric-yellow rotate-45 opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-electric-yellow rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Additional bottom graphics */}
        <div className="absolute bottom-32 left-10 w-14 h-14 border-2 border-electric-yellow rounded-full opacity-15 animate-bounce-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-16 right-20 w-10 h-10 bg-electric-yellow rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-8 left-1/3 w-6 h-6 border-2 border-electric-yellow rotate-45 opacity-30 animate-bounce-slow" style={{ animationDelay: '5s' }}></div>
        
        {/* Curved flowing lines */}
        <svg className="absolute top-1/3 left-0 w-full h-24 opacity-5" viewBox="0 0 1000 100">
          <path d="M0,50 Q200,20 400,50 Q600,80 800,50 Q900,30 1000,50" stroke="#fdb840" strokeWidth="2" fill="none"/>
        </svg>
        <svg className="absolute bottom-1/3 right-0 w-full h-24 opacity-5" viewBox="0 0 1000 100">
          <path d="M1000,50 Q800,80 600,50 Q400,20 200,50 Q100,70 0,50" stroke="#fdb840" strokeWidth="2" fill="none"/>
        </svg>
        
        {/* Bottom wave pattern */}
        <svg className="absolute bottom-0 left-0 w-full h-16 opacity-5" viewBox="0 0 1000 100">
          <path d="M0,60 Q250,20 500,60 Q750,100 1000,60 L1000,100 L0,100 Z" fill="#fdb840"/>
        </svg>
        
        {/* Infinity symbols */}
        <div className="absolute top-1/4 right-10">
          <svg width="60" height="30" className="text-electric-yellow opacity-10 animate-pulse">
            <path d="M10,15 Q20,5 30,15 Q40,25 50,15 Q40,5 30,15 Q20,25 10,15" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        {/* Question mark graphics */}
        <div className="absolute top-10 right-1/4 text-electric-yellow opacity-10 text-4xl animate-bounce-slow">?</div>
        <div className="absolute bottom-10 left-1/3 text-electric-yellow opacity-10 text-3xl animate-float" style={{ animationDelay: '1.5s' }}>?</div>
        <div className="absolute bottom-6 right-1/4 text-electric-yellow opacity-15 text-2xl animate-bounce-slow" style={{ animationDelay: '6s' }}>?</div>
        
        {/* Lightbulb graphics for ideas */}
        <div className="absolute bottom-24 left-1/2 text-electric-yellow opacity-10 text-2xl animate-float" style={{ animationDelay: '7s' }}></div>
        <div className="absolute bottom-12 right-1/2 text-electric-yellow opacity-15 text-xl animate-bounce-slow" style={{ animationDelay: '8s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-black dark:text-foreground mb-6 drop-shadow-xl">
            Frequently Asked <span className="text-electric-yellow">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto drop-shadow">
            Answers to the most common questions about LinkedOuts
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-electric-yellow border border-border transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-bold text-black dark:text-foreground mb-2 drop-shadow">
                {faq.question}
              </h3>
              <p className="text-gray-500 dark:text-gray-300 mb-4 drop-shadow">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-background text-foreground rounded-2xl p-8 inline-block border border-border relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-2 right-2 w-6 h-6 border-2 border-electric-yellow rounded-full opacity-30"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 bg-electric-yellow rounded-full opacity-20"></div>
            
            <h3 className="text-xl font-bold mb-4 relative z-10">Still have questions?</h3>
            <p className="text-gray-500 dark:text-gray-300 mb-6 relative z-10">
              Can't find what you're looking for? We're here to help!
            </p>
            <a
              href="mailto:linkedincreatorsadda@gmail.com"
              className="bg-electric-yellow text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors inline-block relative z-10"
            >
              Ask Us Anything 💬
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
