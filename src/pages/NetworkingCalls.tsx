import React from "react";
import Navigation from "@/components/Navigation";

const pastCalls = [
	{
		title: "How to Network Like a Pro",
		host: "LinkedOut Team",
		date: "June 2025",
		highlights: [
			"Breakout rooms for focused discussions",
			"Guest speaker Q&A",
			"Open mic for sharing ideas",
		],
		snaps: "/images/networking-call.png",
		slides: "/slides/networking-call.pdf",
	},
	// Add more calls here as needed
];

const FridayNetworkingSection = () => (
  <section className="w-full bg-white dark:bg-background py-16 px-4 flex justify-center mt-24">
	<div className="max-w-screen-xl w-full flex flex-col md:flex-row gap-12 items-center">
	  {/* Left: Text Block */}
	  <div className="flex-1 min-w-[280px]">
		<div className="bg-yellow-50 dark:bg-yellow-900 rounded-2xl shadow-lg p-8 flex flex-col justify-center h-full">
		  <h2 className="text-4xl sm:text-5xl font-extrabold text-electric-yellow mb-4 leading-tight">
			Weekly Friday Networking Calls
		  </h2>
		  <p className="text-xl sm:text-2xl text-gray-800 dark:text-gray-200 mb-6 font-medium">
			Where creators stop scrolling and start connecting.
		  </p>
		  <ul className="list-disc pl-6 space-y-4 mb-2 text-lg text-gray-700 dark:text-gray-100">
			<li>Share content wins and challenges</li>
			<li>Get live feedback on your ideas</li>
			<li>Build real connections with other LinkedIn creators</li>
		  </ul>
		</div>
	  </div>
	  {/* Right: Image Block */}
	  <div className="flex-1 flex flex-col items-center min-w-[220px]">
		<div className="bg-white dark:bg-card border border-yellow-200 dark:border-yellow-700 rounded-2xl shadow-md p-4 w-full max-w-md flex flex-col items-center">
		  <img
			src="/assets/weekly-networking-calls.png"
			alt="Weekly Networking Calls"
			className="rounded-xl w-full object-cover mb-3 shadow-md"
		  />
		  <span className="text-base text-gray-500 dark:text-gray-400 mt-1 font-medium">
			Real creators. Real conversations.
		  </span>
		</div>
	  </div>
	</div>
  </section>
);

const FridayNetworkingCTA = () => (
	<div className="w-full flex justify-center mt-4">
		<div className="bg-yellow-50 dark:bg-yellow-900 rounded-xl px-6 py-6 text-center shadow max-w-lg w-full">
			<h3 className="text-lg font-semibold text-gray-900 dark:text-yellow-100 mb-3">
				Want in on this Friday’s call?
			</h3>
			<a
				href="/"
				className="bg-black dark:bg-electric-yellow text-electric-yellow dark:text-black font-bold px-6 py-2 rounded-full shadow hover:bg-gray-900 dark:hover:bg-yellow-300 transition-colors inline-block"
			>
				🔗 Join the Community
			</a>
		</div>
	</div>
);

const CallCard = ({ call }) => (
	<div className="bg-white dark:bg-card border border-border rounded-lg shadow-md p-6 mb-6 flex flex-col sm:flex-row gap-6 items-center">
		<div className="flex-shrink-0 w-full sm:w-48 h-32 flex items-center justify-center">
			<img
				src={call.snaps}
				alt="Call Snaps"
				className="rounded-lg object-cover w-full h-full"
			/>
		</div>
		<div className="flex-1">
			<h3 className="text-xl font-bold text-electric-yellow mb-1">
				{call.title}
			</h3>
			<p className="text-gray-700 dark:text-gray-300 mb-1">{call.host}</p>
			<p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
				{call.date}
			</p>
			<ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-2">
				{call.highlights.map((h, i) => (
					<li key={i}>{h}</li>
				))}
			</ul>
			<div className="flex flex-wrap gap-4 mt-2">
				<a
					href={call.snaps}
					target="_blank"
					rel="noopener noreferrer"
					className="text-electric-yellow font-semibold hover:underline"
				>
					📸 View Call Snaps
				</a>
				<a
					href={call.slides}
					target="_blank"
					rel="noopener noreferrer"
					className="text-electric-yellow font-semibold hover:underline"
				>
					📊 Download Slides
				</a>
			</div>
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

const NetworkingCalls = () => {
  return (
	<div className="min-h-screen bg-background text-foreground font-poppins pt-0 pb-48">
	  <Navigation />
	  <FridayNetworkingSection />
	  <FridayNetworkingCTA />
	  <BackToHomeFixed />
	</div>
  );
};

export default NetworkingCalls;
