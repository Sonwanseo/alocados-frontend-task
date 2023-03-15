import { FlexBox, Text } from 'components/Common';
import { BasicLayout } from 'layouts';
import { ExchangingHistoryItem } from 'components/Business';
import { Exchange, Summary } from './components';
import styled from 'styled-components';
import { useExchangingMoney } from './useExchangingMoney';

const Container = styled(FlexBox)`
  padding-top: 120px;
`;

const Title = styled(Text)`
  margin-bottom: 24px;
`;

const ContentWrapper = styled(FlexBox)`
  gap: 18px;
`;

const ExchangeWrapper = styled(FlexBox)`
  width: 634px;
`;

const HistoryItemWrapper = styled(FlexBox)`
  width: 100%;
  margin-top: 35px;
`;

export function ExchangingMoney() {
  const { targetType, resultType, resultAmount, changeTargetType, changeTargetAmount, changeResultType } = useExchangingMoney();

  return (
    <BasicLayout>
      <Container column>
        <Title bold>환전하기</Title>
        <ContentWrapper>
          <Summary />
          <ExchangeWrapper column>
            <Exchange
              targetType={targetType}
              resultType={resultType}
              resultAmount={resultAmount}
              changeTargetType={changeTargetType}
              changeTargetAmount={changeTargetAmount}
              changeResultType={changeResultType}
            />
            <HistoryItemWrapper>
              <ExchangingHistoryItem
                date="2023-03-12, AM 10:50"
                targetType="Ethereum"
                targetAmount="1,302.44"
                resultType="Solana"
                resultAmount="1,302.44"
              />
            </HistoryItemWrapper>
          </ExchangeWrapper>
        </ContentWrapper>
      </Container>
    </BasicLayout>
  );
}
