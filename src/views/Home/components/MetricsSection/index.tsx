import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import useSWRImmutable from 'swr/immutable'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'

const Stats = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const { data: tvl } = useSWRImmutable('tvl')
  const { data: txCount } = useSWRImmutable('totalTx30Days')
  const { data: addressCount } = useSWRImmutable('addressCount30Days')
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)
  const tvlString = tvl ? formatLocalisedCompactNumber(tvl) : '-'

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)

  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="primary" width="50px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="50px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="primary" width="50px" />,
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('3.2 Millions Supply')}
            bodyText={t('Total Supply')}
            highlightColor={theme.colors.secondary}
          />
        </IconCard>

        <IconCard {...StakedCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('6.32 Million Market')}
            bodyText={t('Market Cap')}
            highlightColor={theme.colors.primary}
          />
        </IconCard>

        <IconCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('21 Current Emission')}
            bodyText={t('Current Emissions per block')}
            highlightColor={theme.colors.primary}
          />
        </IconCard>
        
      </Flex>
    </Flex>
  )
}

export default Stats
