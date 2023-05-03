import React from 'react'
import { Head } from '@/widgets/common/head'
import { PageWrapper } from '@/widgets/common/wrapper'
import { hasCheckboxes } from '@x5io/ads_parameter'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { getPaymentPageProps, makeRedirect } from '@/shared/utils'
import { useRouter } from 'next/router'
import { PaymentForm } from '@/widgets/payment/form'

export type PaymentPageProps = Awaited<ReturnType<typeof getPaymentPageProps>>

export default function PaymentPage(props: PaymentPageProps) {
  const router = useRouter()
  const [showCheckboxes, setShowCheckboxes] = React.useState(true)
  const paymentUUID = router.query['paymentUUID'] as string
  
  React.useEffect(() => {
    setShowCheckboxes(hasCheckboxes(props.status === 'active'))
  }, [])

  return (
    <PageWrapper>
      <Head
        title='Оплата'
      />
      <PaymentForm
        paymentProps={props}
        showCheckboxes={showCheckboxes}
        paymentUUID={paymentUUID}
      />
    </PageWrapper>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<PaymentPageProps>> {
  try {
    const pageProps = await getPaymentPageProps(context)
    return {
      props: {
        ...pageProps
      }
    }
  } catch (e) {
    if (typeof e === 'object' && 'code' in e && e.code === 'NOT_FOUND') {
      return {
        notFound: true
      }
    } else {
      throw e
    }
  }
}