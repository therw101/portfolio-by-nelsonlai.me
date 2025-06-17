import { Img, Section } from '@react-email/components'

const Logo = () => {
  return (
    <Section className='mb-6'>
      <Img
        src='/images/avatar.png'
        alt="Rutchx's logo"
        width='48'
        height='48'
        className='rounded-full'
      />
    </Section>
  )
}

export default Logo
