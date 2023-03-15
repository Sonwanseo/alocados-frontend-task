import { FlexBox, Text } from 'components/Common';
import { BasicLayout } from 'layouts';
import { ExchangeHistoryItem } from 'components/Business';
import { Exchange, Summary } from './components';
import styled from 'styled-components';
import { useExchangingMoney } from './useExchangingMoney';
import { useHistoryStore } from 'store';
import React from 'react';
import { ExchangeHistoryType } from 'types/Model';

const Container = styled(FlexBox)`
  width: 100%;
  padding-top: 11%;
`;

const Title = styled(Text)`
  margin-bottom: 24px;
`;

const ContentWrapper = styled(FlexBox)`
  width: 100%;
  gap: 18px;
`;

const ExchangeWrapper = styled(FlexBox)`
  width: 66%;
`;

const HistoryItemWrapper = styled(FlexBox)`
  width: 100%;
  margin-top: 35px;
`;

export function ExchangingMoney() {
  const {
    targetType,
    targetAmount,
    resultType,
    resultAmount,
    error,
    noneHoldingError,
    changeTargetType,
    changeTargetAmount,
    changeResultType,
    exchangeToken,
  } = useExchangingMoney();
  const { histories } = useHistoryStore();

  const [exchangeHistory, setExchangeHistory] = React.useState<ExchangeHistoryType>(histories[histories.length - 1]);

  React.useEffect(() => {
    setExchangeHistory(histories[histories.length - 1]);
  }, [histories]);

  return (
    <BasicLayout>
      <Container column>
        <Title bold>환전하기</Title>
        <ContentWrapper>
          <Summary />
          <ExchangeWrapper column>
            <Exchange
              targetType={targetType}
              targetAmount={targetAmount}
              resultType={resultType}
              resultAmount={resultAmount}
              error={error}
              noneHoldingError={noneHoldingError}
              changeTargetType={changeTargetType}
              changeTargetAmount={changeTargetAmount}
              changeResultType={changeResultType}
              exchangeToken={exchangeToken}
            />
            <HistoryItemWrapper>
              <ExchangeHistoryItem
                date={exchangeHistory.date}
                targetType={exchangeHistory.targetType}
                targetAmount={exchangeHistory.targetAmount}
                resultType={exchangeHistory.resultType}
                resultAmount={exchangeHistory.resultAmount}
              />
            </HistoryItemWrapper>
          </ExchangeWrapper>
        </ContentWrapper>
      </Container>
    </BasicLayout>
  );
}
