import React from "react";
import Navigation from "@/components/Navigation";

const HeroSection = () => (
	<section className="bg-yellow-50 dark:bg-background py-12 px-4 text-center flex flex-col items-center justify-center mt-16">
		<h1 className="text-3xl sm:text-5xl font-black text-electric-yellow mb-4">
			Brand Collabs with Top Companies
		</h1>
		<p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
			Unlock exclusive opportunities to collaborate with leading brands. Gain
			hands-on experience, mentorship, and portfolio-building projects through
			our curated partnerships.
		</p>
	</section>
);


// --- Brand Logo Carousel Section ---
const logos = [
  "/assets/brands-partnered/adani.png",
  "/assets/brands-partnered/boAt.png",
  "/assets/brands-partnered/hyfun-foods.jpeg",
  "/assets/brands-partnered/instaastro.png",
  "/assets/brands-partnered/jeevansathi.jpeg",
  "/assets/brands-partnered/lakme.jpg",
  "/assets/brands-partnered/livpure.png",
  "/assets/brands-partnered/lumio.jpeg",
  "/assets/brands-partnered/netflix.jpg",
  "/assets/brands-partnered/razorpay.png",
  "/assets/brands-partnered/stable-money.png",
  "/assets/brands-partnered/Starbucks.png",
  "/assets/brands-partnered/swiggy.jpeg",
  "/assets/brands-partnered/tata-motors.jpg",
  "/assets/brands-partnered/topmate.jpeg",
  "/assets/brands-partnered/vedanta.png",
  "/assets/brands-partnered/yesmadam.jpg",
  "/assets/brands-partnered/zomato.png",
];

const LogoCarousel = () => (
	<div className="w-full py-8 flex justify-center items-center">
		<div className="overflow-hidden w-full max-w-screen-xl px-4">
			<div className="flex gap-8 animate-scroll-x whitespace-nowrap">
			   {[...logos, ...logos, ...logos].map((logo, idx) => (
				   <div
					   key={idx}
					   className="h-16 w-16 aspect-square flex items-center justify-center bg-white dark:bg-card rounded-lg shadow mx-2"
				   >
					   <img
						   src={logo}
						   alt="Brand Logo"
						   className="object-contain h-12 w-12"
					   />
				   </div>
			   ))}
			</div>
		</div>
		<style>{`
	  @keyframes scroll-x {
		0% { transform: translateX(0); }
		100% { transform: translateX(-50%); }
	  }
	  .animate-scroll-x {
		animation: scroll-x 18s linear infinite;
	  }
	`}</style>
	</div>
);

// --- Stats / Feature Cards Section ---
const stats = [
	{ label: "Paid Campaigns", value: "38+" },
	{ label: "Brands Worked With", value: "21+" },
	{ label: "Creators Hired", value: "65+" },
];

const StatsCards = () => (
	<div className="w-full py-8 flex justify-center items-center">
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-screen-xl px-4">
			{stats.map((stat, idx) => (
				<div
					key={idx}
					className="bg-white dark:bg-card rounded-lg shadow-md flex flex-col items-center justify-center py-8 px-6"
				>
					<span className="text-4xl font-black text-electric-yellow mb-2">
						{stat.value}
					</span>
					<span className="text-base font-medium text-gray-700 dark:text-gray-300">
						{stat.label}
					</span>
				</div>
			))}
		</div>
	</div>
);




const BackToHomeFixed = () => (
  <div className="fixed bottom-8 left-0 w-full flex justify-center z-50">
	<a
	  href="/"
	  className="flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 rounded-full px-6 py-3 shadow font-bold text-electric-yellow dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors"
	  aria-label="Back to Home"
	>
	  <span className="text-2xl">←</span>
	  <span className="text-lg">Back to Home</span>
	</a>
  </div>
);


const BrandCollabs = () => {
  return (
	<div className="min-h-screen bg-background text-foreground font-poppins pt-0">
	  <Navigation />
	  <div id="hero">
		<HeroSection />
	  </div>
	  <div id="carousel">
		<LogoCarousel />
	  </div>
	  <div id="stats">
		<StatsCards />
	  </div>
  <BackToHomeFixed />
	</div>
  );
};

export default BrandCollabs;
