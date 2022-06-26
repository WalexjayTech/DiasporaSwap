import { memo } from 'react'
import styled from 'styled-components'
import { ButtonMenu, ButtonMenuItem, LinkExternal, Flex, Svg, Image, Button } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { EXCHANGE_DOCS_URLS } from 'config/constants'

const Wrapper = memo(styled.div<{ $isSide: boolean }>`
  width: 0%;
  padding: ${({ $isSide }) => ($isSide ? '0px' : '0px')};
  backgroun-color: red;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: ${({ $isSide }) => ($isSide ? 'column' : 'row')};
  }
`)

const BubbleWrapper = styled(Flex)`
  svg {
    transition: background-color 0.2s, opacity 0.2s;
  }
`

type FooterVariant = 'default' | 'side'

const Footer: React.FC<{ variant?: FooterVariant; helpUrl?: string }> = ({
  variant = 'default',
  helpUrl = EXCHANGE_DOCS_URLS,
}) => {
  const { t } = useTranslation()
  const isSide = variant === 'side'
  return (
    <Wrapper $isSide={isSide}>
      {isSide && <Flex flexGrow={1} />}
      <Flex
        flexGrow={isSide ? 0 : 1}
        alignItems="center"
        width={['0%', '0%', '0%', isSide ? '0%' : 'auto']}
        justifyContent={['center', 'center', 'center', 'flex-end']}
        style={{backgroundColor: "red"}}
      >
        <BubbleWrapper>
          <Button  as="a" external  style={{opacity: "0"}}>
            {t('')}
          </Button>
        </BubbleWrapper>
      </Flex>
    </Wrapper>
  )
}

export default memo(Footer)
