import React from 'react'
import { Footer } from '@/widgets/common/footer'
import { UnsubscribeForm } from '@/features/subscription/unsubscribe'
import { SubscriptionInfo } from '@/widgets/subscription/info'
import { PageWrapper } from '@/widgets/common/wrapper'
import { Head } from '@/widgets/common/head'

export default function Subscription() {
  return (
    <>
      <PageWrapper>
        <Head 
          title='Управление подпиской'
        />
        <SubscriptionInfo />
        <UnsubscribeForm />
        <Footer />
      </PageWrapper>
    </>
  )
}