import styles from './styles.module.scss'
import { Formik } from 'formik'
import { Button } from '@/shared/ui/button'
import * as Yup from 'yup'
import Input from '@/shared/ui/input'
import Link from 'next/link'

export function Form() {
  return (
    <Formik
      initialValues={{
        first6digits: '',
        last4digits: '',
      }}
      validationSchema={
        Yup.object().shape({
          first6digits: Yup.string().matches(/^[0-9]*$/, 'Введите только цифры').required(''),
          last4digits: Yup.string().matches(/^[0-9]*$/, 'Введите только цифры').required('')
        })
      }
      validateOnChange={true}
      validateOnMount={false}
      onSubmit={(values) => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/subscriptions/unsubscribe`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstNumbers: values.first6digits,
            lastNumbers: values.last4digits
          })
        })
          .then(() => alert('Вы успешно отписались'))
          .catch(() => alert('Ошибка!'))
      }}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            name='first6digits'
            label='Первые 6 цифр карты'
            placeholder='Введите 6 цифр'
            onChange={handleChange}
            onEnter={() => handleSubmit()}
            error={errors.first6digits}
            inputProps={{ maxLength: 6 }}
          />
          <Input
            name='last4digits'
            label='Последние 4 цифры карты'
            placeholder='Введите 4 цифры'
            onChange={handleChange}
            onEnter={() => handleSubmit()}
            error={errors.last4digits}
            inputProps={{ maxLength: 4 }}
          />
          <div className={styles.actions}>
            <Link href='/'><Button type='button'>Я передумал</Button></Link>
            <Button variant='text' type='submit' onClick={() => handleSubmit()}>Отписаться</Button>
          </div>
        </form>
      )}
    </Formik>
  )
}