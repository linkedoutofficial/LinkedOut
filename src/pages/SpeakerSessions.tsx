import React from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const pastSessions = [
	   {
			   title: "How to Get Your First Client",
			   speaker: "Punya Garg – LinkedIn Creator & Freelancer",
			   date: "June 2025",
			   takeaways: [
					   "How to craft a compelling offer",
					   "DM strategies that actually work",
					   "Live portfolio reviews",
			   ],
			   slides: "/public/assets/linkedout-online-session-1.pdf",
			   snaps: undefined,
			   extraImage: "/public/assets/bi-monthly-linkedin-experts.png",
	   },
	// Add more sessions here as needed
];

const HeroSection = () => (
	<section className="bg-yellow-50 dark:bg-background py-12 px-4 text-center flex flex-col items-center justify-center mt-16">
		<h1 className="text-3xl sm:text-5xl font-black text-electric-yellow mb-4">
			Monthly Sessions with LinkedIn Experts
		</h1>
		<p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
			Actionable, closed-door sessions with LinkedIn pros. We cover content
			strategy, personal branding, and growth tactics — all from creators
			who’ve done it.
		</p>
	</section>
);

const UpcomingSession = () => (
	<section className="flex justify-center py-8 px-4" id="upcoming-session">
		<div className="bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-yellow-500 rounded-2xl shadow-lg max-w-md w-full p-8 text-center">
			<h2 className="text-2xl font-bold text-black mb-2">
				Next Session: August 2025
			</h2>
			<p className="text-gray-900 dark:text-gray-100 mb-4">
				Stay tuned for a new topic and speaker announcement.
			</p>
			<a
				href="https://linkedout.kit.com/f076d5cd9b"
				target="_blank"
				rel="noopener noreferrer"
				className="bg-black text-electric-yellow font-bold px-6 py-2 rounded-full shadow hover:bg-gray-900 transition-colors inline-block"
			>
				🔔 Get Notified
			</a>
		</div>
	</section>
);

const SessionCard = ({ session }) => (
	<div className="bg-white dark:bg-card border border-border rounded-lg shadow-md p-6 mb-6 flex flex-col sm:flex-row gap-6 items-center">
	   <div className="flex-shrink-0 w-full sm:w-48 h-32 flex items-center justify-center">
			   {session.extraImage ? (
					   <img
							   src={session.extraImage}
							   alt="Session Visual"
							   className="rounded-lg object-cover w-full h-full"
					   />
			   ) : session.snaps ? (
					   <img
							   src={session.snaps}
							   alt="Session Snaps"
							   className="rounded-lg object-cover w-full h-full"
					   />
			   ) : null}
	   </div>
		<div className="flex-1">
			<h3 className="text-xl font-bold text-electric-yellow mb-1">
				{session.title}
			</h3>
			<p className="text-gray-700 dark:text-gray-300 mb-1">
				{session.speaker}
			</p>
			<p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
				{session.date}
			</p>
			<ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-2">
				{session.takeaways.map((t, i) => (
					<li key={i}>{t}</li>
				))}
			</ul>
		   <div className="flex flex-wrap gap-4 mt-2">
			   <a
				   href={session.slides}
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

const PastSessions = () => (
	<section className="py-8 px-4 max-w-3xl mx-auto" id="past-sessions">
		<h2 className="text-2xl font-bold text-electric-yellow mb-6 text-center">
			Past Sessions
		</h2>
		{pastSessions.map((session, idx) => (
			<SessionCard key={idx} session={session} />
		))}
	</section>
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

const DashboardHeader = () => (
	<header className="bg-background py-4 px-4 flex items-center justify-between shadow-sm sticky top-0 z-20">
		<Link to="/" className="flex items-center gap-2 text-electric-yellow font-bold text-lg hover:underline">
			<span className="inline-block rotate-180">➔</span>
			<span>Back</span>
		</Link>
		<h1 className="text-xl sm:text-2xl font-black text-black dark:text-electric-yellow">LinkedOut Dashboard</h1>
	</header>
);

const SpeakerSessions = () => {
  return (
	<div className="min-h-screen bg-background text-foreground font-poppins pt-0 pb-32">
	  <Navigation />
	  <HeroSection />
	  <div id="upcoming-session">
		<UpcomingSession />
	  </div>
	  <div id="past-sessions">
		<PastSessions />
	  </div>
	  <BackToHomeFixed />
	</div>
  );
};

export default SpeakerSessions;