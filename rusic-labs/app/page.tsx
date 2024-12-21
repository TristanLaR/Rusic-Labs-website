'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import TransformationSection from './TransformationSection';
import FeaturesSection from './FeaturesSection';
import StepsSection from './StepsSection';
import TestimonialsSection from './TestimonialsSection';
import CaseStudiesSection from './CaseStudiesSection';
import UseCasesSection from './UseCasesSection';
import StatsSection from './StatsSection';
import CTASection from './CTASection';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rusic Labs - Real-Time Market Intelligence & Data Analysis</title>
        <meta name="description" content="Transform your business with real-time market intelligence, competitor analysis, and data-driven insights. Get actionable intelligence to stay ahead of the competition." />
        <meta name="keywords" content="market intelligence, data analysis, competitor tracking, business intelligence, real-time analytics, data-driven decisions, market trends analysis" />
      </Head>
      <main className="min-h-screen">
        <HeroSection />
        <ProblemSection />
        <TransformationSection />
        <FeaturesSection />
        <StepsSection />
        <TestimonialsSection />
        <CaseStudiesSection />
        <UseCasesSection />
        <StatsSection />
        <CTASection />
      </main>
    </>
  );
}
