import Footer from "@/components/Footer";

const JoinUs = () => {
  return (
    <section id="socials" className="relative py-10 bg-gradient-to-br from-electric-yellow to-yellow-300 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="bg-white dark:bg-black text-black dark:text-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center sm:items-start gap-4">
            <img
              src="/assets/linkedout-logo-light-theme.jpg"
              alt="LinkedOut Logo Light"
              className="w-20 h-20 rounded-full object-cover border-4 border-electric-yellow shadow-lg block dark:hidden"
            />
            <img
              src="/assets/linkedout-logo-dark-theme.jpg"
              alt="LinkedOut Logo Dark"
              className="w-20 h-20 rounded-full object-cover border-4 border-electric-yellow shadow-lg hidden dark:block"
            />
            <h3 className="text-2xl font-bold text-electric-yellow text-center sm:text-left">Get in Touch</h3>
          </div>
          <div className="flex flex-row flex-wrap gap-6 items-center justify-center">
            <a href="https://www.linkedin.com/company/thelinkedout/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <img src="/assets/linkedin-logo.png" alt="LinkedIn" className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-black dark:text-white font-semibold group-hover:text-electric-yellow transition-colors">LinkedIn</span>
            </a>
            <a href="https://www.commudle.com/communities/creators-adda" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <img src="/assets/commudle-logo.png" alt="Commudle" className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-black dark:text-white font-semibold group-hover:text-electric-yellow transition-colors">Commudle</span>
            </a>
            <a href="https://www.instagram.com/linkedoutofficial/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <img src="/assets/instagram-logo.png" alt="Instagram" className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-black dark:text-white font-semibold group-hover:text-electric-yellow transition-colors">Instagram</span>
            </a>
            <a href="mailto:thelinkedoutofficial@gmail.com" className="flex flex-col items-center group">
              <svg xmlns="http://www.w3.org/2000/png" fill="currentColor" viewBox="0 0 32 32" className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform text-[#ea4335]">
                <rect width="32" height="32" rx="16" fill="#ea4335"/>
                <path d="M16 18.065l-8-5.065v10c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-10l-8 5.065zm8-7.065c0-1.104-.896-2-2-2h-12c-1.104 0-2 .896-2 2v.217l8 5.066 8-5.066v-.217z" fill="#fff"/>
              </svg>
              <span className="text-black dark:text-white font-semibold group-hover:text-electric-yellow transition-colors">Email</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <a
          href="https://linkedout.kit.com/f076d5cd9b"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-bold py-3 px-6 rounded-full shadow-lg text-lg transition-colors
            bg-white text-electric-yellow hover:bg-yellow-100
            dark:bg-black dark:text-electric-yellow dark:hover:bg-zinc-900"
        >
          Subscribe to Our Newsletter
        </a>
      </div>
    </section>
  );
};

export default JoinUs;
