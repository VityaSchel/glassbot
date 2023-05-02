import { Head } from '@/widgets/common/head'
import { HomePageWrapper } from '@/widgets/homepage/wrapper'
import { HeroSection } from '@/widgets/homepage/hero'
import { About } from '@/widgets/homepage/about'

export default function HomePage() {
  return (
    <HomePageWrapper>
      <Head />
      <HeroSection />
      <About />
    </HomePageWrapper>
  )
}