import { FlexBox, Text } from 'components/Common';
import { SHADE } from 'constants/Theme';
import { BasicLayout } from 'layouts';
import styled from 'styled-components';
import DownArrow from 'assets/svg/DownArrow.svg';
import { ExchangeHistoryItem } from 'components/Business';
import { useHistoryStore } from 'store';

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
`;

const DownArrowImage = styled.img`
  width: 16px;
  height: 16px;
`;

export function ExchangingHistory() {
  const { histories } = useHistoryStore();

  return (
    <BasicLayout>
      <Container column>
        <Title bold>환전 내역</Title>
        <HistoryListWrapper column>
          <HistoryTopWrapper>
            <HistoryLeftWrapper>
              <Text caption bold>
                환전 내역
              </Text>
              <DownArrowImage src={DownArrow} />
            </HistoryLeftWrapper>
            <Text caption>환전금액</Text>
          </HistoryTopWrapper>
          {histories.map((item) => (
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
