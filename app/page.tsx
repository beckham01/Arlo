import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import DemoChat from '@/components/DemoChat'
import MorningBrief from '@/components/MorningBrief'
import Metrics from '@/components/Metrics'
import Insights from '@/components/Insights'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HowItWorks />
      <Metrics />
      <Insights />
      <DemoChat />
      <MorningBrief />
      <Features />
      <Footer />
    </main>
  )
}
