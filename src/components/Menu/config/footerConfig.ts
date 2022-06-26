import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {

    label: t('Features'),
    items: [
      {
        label: "Trade",
        href: "/swap",
      },
      {
        label: "Farms",
        href: "#",
      },
      {
        label: "Pool",
        href: "#",
      },
      {
        label: "NFT",
        href: "#",
      },
      {
        label: "Launchpad",
        href: "#",
      },

    ],
  },
]


