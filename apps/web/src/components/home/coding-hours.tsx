'use client'

import { useTranslations } from '@tszhong0411/i18n/client'
import { ClockIcon } from 'lucide-react'

const CodingHours = () => {
  const t = useTranslations()

  return (
    <div className='shadow-feature-card flex flex-col gap-6 rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <ClockIcon className='size-[18px]' />
        <h2 className='text-sm'>{t('homepage.about-me.codeing-experience')}</h2>
      </div>
      <div className='flex grow items-center justify-center text-4xl font-semibold'>
        {t('homepage.about-me.codeing-experience-time')}
      </div>
    </div>
  )
}

export default CodingHours
