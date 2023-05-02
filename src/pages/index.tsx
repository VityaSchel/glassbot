import { Head } from '@/widgets/common/head'
import { HomePageWrapper } from '@/widgets/homepage/wrapper'
import { HeroSection } from '@/widgets/homepage/hero'
import { About } from '@/widgets/homepage/about'
import { PriceSection } from '@/widgets/homepage/price'
import { Footer } from '@/widgets/common/footer'

export default function HomePage() {
  return (
    <HomePageWrapper>
      <Head />
      <HeroSection />
      <About />
      <PriceSection />
      <Footer />
    </HomePageWrapper>
  )
}