import { FlexBox, Text } from 'components/Common';
import { SHADE } from 'constants/Theme';
import { BasicLayout } from 'layouts';
import styled from 'styled-components';
import DownArrow from 'assets/svg/DownArrow.svg';
import { ExchangeHistoryItem } from 'components/Business';
import { useHistoryStore } from 'store';
import React from 'react';

const Container = styled(FlexBox)`
  width: 634px;
  padding-top: 120px;
`;

const Title = styled(Text)`
  margin-bottom: 24px;
`;

const HistoryListWrapper = styled(FlexBox)`
  width: 100%;
  gap: 8px;
`;

const HistoryTopWrapper = styled(FlexBox)`
  width: 100%;
  height: 41px;
  background-color: ${SHADE[100]};
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  box-sizing: border-box;
`;

const HistoryLeftWrapper = styled(FlexBox)`
  align-items: center;
  cursor: pointer;
`;

const DownArrowImage = styled.img`
  width: 16px;
  height: 16px;
`;

export function ExchangingHistory() {
  const { histories } = useHistoryStore();
  const [isDescending, setIsDescending] = React.useState(true);

  return (
    <BasicLayout>
      <Container column>
        <Title bold>환전 내역</Title>
        <HistoryListWrapper column>
          <HistoryTopWrapper>
            <HistoryLeftWrapper onClick={() => setIsDescending((prev) => !prev)}>
              <Text caption bold>
                환전 시간
              </Text>
              <DownArrowImage src={DownArrow} />
            </HistoryLeftWrapper>
            <Text caption>환전금액</Text>
          </HistoryTopWrapper>
          {(isDescending ? histories.slice().reverse() : histories).map((item) => (
            <ExchangeHistoryItem
              key={item.date.toString()}
              date={item.date}
              targetType={item.targetType}
              targetAmount={item.targetAmount}
              resultType={item.resultType}
              resultAmount={item.resultAmount}
            />
          ))}
        </HistoryListWrapper>
      </Container>
    </BasicLayout>
  );
}
