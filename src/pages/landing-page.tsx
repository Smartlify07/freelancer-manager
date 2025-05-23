import Navbar from '@/components/navbar';
import CallToAction from '@/components/pages/landing/cta';
import Features from '@/components/pages/landing/features';
import Footer from '@/components/pages/landing/footer';
import Hero from '@/components/pages/landing/hero';
import ProblemSection from '@/components/pages/landing/problem-section';
import SolutionSection from '@/components/pages/landing/solution-section';
import { Helmet } from 'react-helmet-async';

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Zenya — Track Your Freelance Finances</title>
        <meta
          property="og:title"
          content="Zenya — Track Your Freelance Finances"
        />
        <meta
          property="og:description"
          content="No more spreadsheets. Zenya helps you track income, expenses & stay on top of your freelance money."
        />
        <meta
          property="og:image"
          content={
            'https://res.cloudinary.com/dgpbznsc3/image/upload/v1747567469/zenya-rosy.vercel.app__eeft5p.png'
          }
        />
        <meta property="og:url" content="https://zenya-rosy.vercel.app" />
        <meta
          name="twitter:card"
          content={
            'https://res.cloudinary.com/dgpbznsc3/image/upload/v1747567469/zenya-rosy.vercel.app__eeft5p.png'
          }
        />
      </Helmet>
      <main className="flex flex-col items-center relative gap-4">
        <Navbar />
        <div className="w-full">
          <Hero />
          <ProblemSection />
          <SolutionSection />
          <Features />
          <CallToAction />
          <Footer />
        </div>
      </main>
    </>
  );
}
