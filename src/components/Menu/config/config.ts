import {
  MenuItemsType,
  DropdownMenuItemType,
  ExchangeIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean } & {
  items?: ConfigMenuDropDownItemsType[]
}

const config: (t: ContextApi['t'], languageCode?: string) => ConfigMenuItemsType[] = (t, languageCode) => [
  {
    label: t('Trade'),
    icon: ExchangeIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Farms'),
    href: '#',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    items: [
      {
        label: t('Gold Farms'),
        href: '#',
      },
      {
        label: t('Diamond Farms'),
        href: '#',
      },
    ],
  },
  {
    label: t('Pools'),
    href: '#',
    icon: TrophyIcon,
    fillIcon: TrophyFillIcon,
    items: [
      {
        label: t('Staking'),
        href: '#',
        hideSubNav: true,
      },
      {
        label: t('Pools'),
        href: '#',
      },
    ],
  },
  {
    label: t('NFT'),
    href: '#',
    icon: NftIcon,
    fillIcon: NftFillIcon,
    items: [
      {
        label: t('Mint'),
        href: '#',
      },
      {
        label: t('Farm'),
        href: '#',
      },
      {
        label: t('Staking'),
        href: '#',
      },
      {
        label: t('Marketplace'),
        href: '#',
      },
    ],
  },
  {
    label: 'About',
    href: '#',
    icon: MoreIcon,
    hideSubNav: true,
    items: [
      {
        label: t('Contact'),
        href: '#',
      },
      {
        label: t('WhitePaper'),
        href: '#',
      },
    ],
  },
]

export default config
