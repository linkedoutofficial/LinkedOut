import React from "react";
import Navigation from "@/components/Navigation";

const steps = [
	{
		icon: "📝",
		title: "Share your LinkedIn post",
		text: "Drop your post in the Feedback Adda with a clear ask — hook, structure, CTA, etc.",
	},
	{
		icon: "🧠",
		title: "Get targeted critique from peers",
		text: "Fellow creators give constructive feedback based on what drives traction — not just opinions.",
	},
	{
		icon: "📈",
		title: "Apply, repost, grow",
		text: "Tweak your post and watch it perform better. Many posts have gone from 100s to 1000s with small changes.",
	},
];

const StepCard = ({ icon, title, text }) => (
	<div className="bg-white dark:bg-card rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-all">
		<div className="text-4xl mb-3">{icon}</div>
		<h3 className="text-lg font-bold text-electric-yellow mb-2">{title}</h3>
		<p className="text-gray-700 dark:text-gray-300 text-base">{text}</p>
	</div>
);

const Testimonial = () => (
	<div className="bg-yellow-50 dark:bg-yellow-900 rounded-xl shadow px-6 py-5 max-w-xl mx-auto mt-10 text-center">
		<blockquote className="italic text-gray-800 dark:text-gray-100 text-base">
			"This is the only place where feedback actually helped my post get
			traction — not just vague comments."
		</blockquote>
	</div>
);

const FeedbackCirclesSection = () => (
	<section className="w-full py-20 px-4 bg-white dark:bg-background flex justify-center">
		<div className="max-w-screen-xl w-full mx-auto flex flex-col items-center">
			<h1 className="text-3xl sm:text-5xl font-extrabold text-electric-yellow mb-4 text-center">
				Feedback Circles for Post Traction
			</h1>
			<p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-10 text-center max-w-2xl">
				Refine your content with insights that actually help. Join weekly
				feedback loops designed to improve traction, clarity, and conversion.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-8">
				{steps.map((step, idx) => (
					<StepCard key={idx} {...step} />
				))}
			</div>
			<Testimonial />
			{/* Navigation arrow back to Inside the community section */}
			<div className="w-full flex justify-center mt-12">
				<a
					href="/"
					className="flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900 rounded-full px-6 py-3 shadow font-bold text-electric-yellow dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors"
					aria-label="Back to Home"
				>
					<span className="text-2xl">←</span>
					<span className="text-lg">Back to Home</span>
				</a>
			</div>
		</div>
	</section>
);

const FeedbackCircles = () => {
	return (
		<div className="min-h-screen bg-background text-foreground font-poppins pt-0">
			<Navigation />
			<FeedbackCirclesSection />
		</div>
	);
};

export default FeedbackCircles;
