import { TranslateFunction } from 'contexts/Localization/types'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade AFD with any coin. No hassle.'),
  bodyText: t('Connect your wallet and start trading in no time.'),
  reverse: true,
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
    path: '/images/home/afd/',
    attributes: [{ src: 'AFD', alt: t('AFD token') }],
  },
})
