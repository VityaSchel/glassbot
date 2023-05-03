import React from 'react'
import styles from './styles.module.scss'
import Checkout from '@x5io/checkout'
import Checkbox from '@x5io/flat-uikit/dist/checkbox'
import { Button } from '@/shared/ui/button'
import { Formik, FormikProps } from 'formik'
import * as Yup from 'yup'
import Input from '@/shared/ui/input'
import { PaymentPageProps } from '@/pages/payment/[paymentUUID]'
import Script from 'next/script'

export function PaymentForm({ paymentProps, showCheckboxes, paymentUUID }: {
  paymentProps: PaymentPageProps
  showCheckboxes: boolean
  paymentUUID: string
}) {
  type FormikRefType = FormikProps<{ email: string, privacyPolicyAgreement: boolean, recurrentAgreement: boolean }>
  const formikRef = React.useRef<FormikRefType>()

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          privacyPolicy: false,
          recurrentAgreement: false
        }}
        validationSchema={
          Yup.object().shape({
            email: Yup.string().email().required('Введите почту'),
            ...(showCheckboxes && ({
              privacyPolicy: Yup.bool().equals([true], ' ').required(),
              recurrentAgreement: Yup.bool().equals([true], ' ').required()
            }))
          })
        }
        validateOnChange={false}
        validateOnMount={false}
        onSubmit={async (values) => {
          const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/payments/${paymentUUID}/set-email`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: values.email
            })
          })
          if (emailResponse.status !== 200) {
            alert('Ошибка')
            throw new Error(await emailResponse.text())
          }

          const widget = new cp.CloudPayments()
          const payResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/payments/${paymentUUID}/pay`)
          if (payResponse.status !== 200) {
            alert('Ошибка')
            throw new Error(await payResponse.text())
          }
          const result = await payResponse.json()
          widget.charge(result.cloudpayments, () => alert('Успешно оплачено!'), () => alert('Ошибка!'))
        }}
        innerRef={formikRef as any}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <h1 className={styles.price}>
              {/* <span className={styles.tryFor}>Попробуй подписку всего за</span> */}
              <span className={styles.specialOffer}>
                <span className={styles.highlight}>{paymentProps.amount} ₽</span> в первый месяц
                вместо <span className={styles.oldPriceNumber}>{paymentProps.amountWithoutDiscount} ₽</span>
              </span>
            </h1>
            <Input
              name='email'
              label='Введите ваш email'
              placeholder='Email'
              onChange={handleChange}
              onEnter={() => handleSubmit()}
              error={errors.email}
            />
            {showCheckboxes && (<>
              <Checkbox
                name='privacyPolicy'
                value={values.privacyPolicy}
                error={errors.privacyPolicy}
                onChange={handleChange}
              >
                Нажимая кнопку “Оплатить” Вы даете согласие на обработку персональных данных, а также подтверждаете ознакомление с публичной офертой.
              </Checkbox>
              <Checkbox
                name='recurrentAgreement'
                value={values.recurrentAgreement}
                error={errors.recurrentAgreement}
                onChange={handleChange}
              >
                Нажимая кнопку “Оплатить” Вы подтверждаете ознакомление с автоматическими списаниями. Первое списание в размере 1₽ через 72 часа после подписки, и далее согласно тарифу раз в 7 дней 199₽ или 49₽ за день
              </Checkbox>
            </>)}
            <Button type='submit' className={styles.button}>
              Оплатить
            </Button>
          </form>
        )}
      </Formik>
      <Script src="https://widget.cloudpayments.ru/bundles/cloudpayments.js" />
    </>
  )
}