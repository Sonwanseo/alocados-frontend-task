import { FlexBox, Text } from 'components/Common';
import { SHADE } from 'constants/Theme';
import styled from 'styled-components';
import { TokenType } from 'types/Model';
import RightChevron from 'assets/svg/RightChevron.svg';
import { addThousandSeparator, getTokenImageByType, getTokenUnitByType, historyItemDateFormat } from 'utils';

const Container = styled(FlexBox)`
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  background-color: ${SHADE[100]};
`;

const TextWrapper = styled.div`
  width: 206px;
`;

const TokenImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

type Props = {
  date: Date;
  targetType: TokenType;
  targetAmount: number;
  resultType: TokenType;
  resultAmount: number;
};

export function ExchangeHistoryItem(props: Props) {
  const { date, targetType, targetAmount, resultType, resultAmount } = props;

  return (
    <Container>
      <TextWrapper>
        <Text caption>{historyItemDateFormat(date)}</Text>
      </TextWrapper>
      <FlexBox center>
        <TokenImage src={getTokenImageByType(targetType)} />
        <Text body2 semibold>
          {`${addThousandSeparator(targetAmount)} ${getTokenUnitByType(targetType)}`}
        </Text>
      </FlexBox>
      <img src={RightChevron} />
      <FlexBox center>
        <TokenImage src={getTokenImageByType(resultType)} />
        <Text body2 semibold>
          {`${addThousandSeparator(resultAmount)} ${getTokenUnitByType(resultType)}`}
        </Text>
      </FlexBox>
    </Container>
  );
}
