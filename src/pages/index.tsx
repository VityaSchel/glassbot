import { Head } from '@/widgets/common/head'
import { PageWrapper } from '@/widgets/common/wrapper'
import { HeroSection } from '@/widgets/homepage/hero'
import { About } from '@/widgets/homepage/about'
import { PriceSection } from '@/widgets/homepage/price'
import { Footer } from '@/widgets/common/footer'

export default function HomePage() {
  return (
    <PageWrapper>
      <Head />
      <HeroSection />
      <About />
      <PriceSection />
      <Footer />
    </PageWrapper>
  )
}