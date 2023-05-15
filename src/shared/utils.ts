import { GetServerSidePropsContext } from 'next'

export function makeRedirect(path: string, params: { [key: string]: any }, method='post') {
  const form = document.createElement('form')
  form.method = method
  form.action = path

  for (const key in params) {
    if (Object.hasOwnProperty.bind(params)(key)) {
      const hiddenField = document.createElement('input')
      hiddenField.type = 'hidden'
      hiddenField.name = key
      hiddenField.value = params[key]

      form.appendChild(hiddenField)
    }
  }

  document.body.appendChild(form)
  form.submit()
}

export async function getPaymentPageProps(context: GetServerSidePropsContext): Promise<{ amount: number, amountWithoutDiscount: number, status: string, deactivated: boolean }> {
  const paymentUUID = context.params?.paymentUUID

  // if (process.env.DEBUG_API === 'true') {
  return {
    amount: 1,
    amountWithoutDiscount: 690,
    status: 'activated',
    deactivated: false
  }
  // }

  const paymentDetailsRequest = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/payments/${paymentUUID}`)
  if (paymentDetailsRequest.status !== 200) {
    console.error('Couldn\'t request with UUID', paymentUUID, await paymentDetailsRequest.text())
    throw { message: 'Couldn\'t request with UUID', code: 'NOT_FOUND' }
  }

  const paymentDetails = await paymentDetailsRequest.json() as {
    amount: number
    amountWithoutDiscount: number
    deactivated: boolean
    status: string
  }
  const deactivated = paymentDetails.status !== 'in_process'

  const company = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/advertising_companies/` + (context.query.ads ?? 0))
  const status = (await company.json()).status

  return {
    amount: paymentDetails.amount ?? 0,
    amountWithoutDiscount: paymentDetails.amountWithoutDiscount ?? 0,
    status: status ?? 'deactivated', deactivated
  }
}