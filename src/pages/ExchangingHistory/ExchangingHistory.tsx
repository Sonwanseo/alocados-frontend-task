import { FlexBox, Text } from 'components/Common';
import { SHADE } from 'constants/Theme';
import { BasicLayout } from 'layouts';
import styled from 'styled-components';
import DownArrow from 'assets/svg/DownArrow.svg';
import { ExchangingHistoryItem } from 'components/Business';

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
          {[0, 1].map((_, index) => (
            <ExchangingHistoryItem
              key={index}
              date="2023-03-12, AM 10:50"
              targetType="Ethereum"
              targetAmount="1,302.44"
              resultType="Solana"
              resultAmount="1,302.44"
            />
          ))}
        </HistoryListWrapper>
      </Container>
    </BasicLayout>
  );
}
