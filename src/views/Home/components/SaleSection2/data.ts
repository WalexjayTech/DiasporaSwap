import { TranslateFunction } from 'contexts/Localization/types'
import { SalesSectionProps } from '.'

export const swapSectionData2 = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t(' Connect with us by trading our BKWS coin'),
  bodyText: t('Link your wallet and start trading in an instant.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: '#',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/bkws/',
    attributes: [{ src: 'BKWS', alt: t('BKWS token') }],
  },
})
