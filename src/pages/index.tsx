import { HomePageWrapper } from '@/widgets/homepage/wrapper'
import { HeroSection } from '@/widgets/homepage/hero'
import { Head } from '@/widgets/common/head'

export default function HomePage() {
  return (
    <HomePageWrapper>
      <Head />
      <HeroSection />
    </HomePageWrapper>
  )
}