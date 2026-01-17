import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 px-4 text-center">
			<h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
				Philippians Veterinary Clinic
			</h1>
			<p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl">
				Let your pets be our concern too...
			</p>

			<div className="mt-10 flex items-center justify-center gap-x-6">
				<Button size="lg">
					<Link href="/login">Get Started</Link>
				</Button>

				<Button variant="ghost" size="lg">
					<Link href="/dashboard">Dashboard Preview →</Link>
				</Button>
			</div>
		</div>
	);
}
