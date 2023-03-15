import { FlexBox, Text } from 'components/Common';
import { SHADE } from 'constants/Theme';
import styled from 'styled-components';
import { TokenType } from 'types/Model';
import RightChevron from 'assets/svg/RightChevron.svg';
import { getTokenImageByType, getTokenUnitByType } from 'utils';

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
  date: string;
  targetType: TokenType;
  targetAmount: string;
  resultType: TokenType;
  resultAmount: string;
};

export function ExchangeHistoryItem(props: Props) {
  const { date, targetType, targetAmount, resultType, resultAmount } = props;

  return (
    <Container>
      <TextWrapper>
        <Text caption>{date}</Text>
      </TextWrapper>
      <FlexBox center>
        <TokenImage src={getTokenImageByType(targetType)} />
        <Text body2 semibold>
          {`${targetAmount} ${getTokenUnitByType(targetType)}`}
        </Text>
      </FlexBox>
      <img src={RightChevron} />
      <FlexBox center>
        <TokenImage src={getTokenImageByType(resultType)} />
        <Text body2 semibold>
          {`${resultAmount} ${getTokenUnitByType(resultType)}`}
        </Text>
      </FlexBox>
    </Container>
  );
}
