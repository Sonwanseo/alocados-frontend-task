import { Button, FlexBox, Text } from 'components/Common';
import { SHADE, ERROR } from 'constants/Theme';
import styled from 'styled-components';
import Swap from 'assets/svg/Swap.svg';
import { Select } from '../Select';
import { TokenType } from 'types/Model';

const Container = styled(FlexBox)`
  width: 100%;
  align-items: center;
`;

const BoxWrapper = styled(FlexBox)`
  gap: 16px;
  width: 100%;
  height: 56px;
`;

const TargetBox = styled(FlexBox)<{ disabled: boolean }>`
  box-sizing: border-box;
  width: 74%;
  height: 100%;
  padding: 10px 16px 10px 14px;
  background-color: ${SHADE['000']};
  gap: 4px;
  border-radius: 12px;
  justify-content: center;
  border: ${(props) => (props.disabled ? `1px solid ${ERROR[100]}` : 'none')};
`;

const TargetInput = styled.input`
  width: 100%;
  font-weight: 600;
  font-size: 18px;
  color: ${SHADE['800']};
  outline: none;
  border: none;
  background-color: ${SHADE['000']};
`;

const SwapIcon = styled.img`
  width: 40px;
  height: 40px;
  margin: 24px 0px;
`;

const ResultBox = styled(FlexBox)`
  box-sizing: border-box;
  width: 74%;
  height: 100%;
  padding: 10px 16px 10px 14px;
  border-radius: 12px;
  align-items: center;
`;

const ExchangeButton = styled(Button)`
  margin-top: 47px;
`;

type Props = {
  targetType: TokenType | undefined;
  targetAmount: string;
  resultType: TokenType | undefined;
  resultAmount: number;
  error: boolean;
  noneHoldingError: boolean;
  changeTargetType: (token: TokenType) => void;
  changeTargetAmount: (amount: string) => void;
  changeResultType: (token: TokenType) => void;
  exchangeToken: () => void;
};

export function Exchange(props: Props) {
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
  } = props;

  return (
    <Container column>
      <BoxWrapper>
        <TargetBox column disabled={error}>
          <Text overline semibold color={SHADE['600']}>
            전환 수량
          </Text>
          <TargetInput value={targetAmount} onChange={(e) => changeTargetAmount(e.target.value)} disabled={noneHoldingError} />
        </TargetBox>
        <Select tokenType={targetType} changeToken={changeTargetType} />
      </BoxWrapper>
      <SwapIcon src={Swap} />
      <BoxWrapper>
        <ResultBox>
          <Text body2 semibold color={SHADE['700']}>
            {resultAmount}
          </Text>
        </ResultBox>
        <Select tokenType={resultType} changeToken={changeResultType} />
      </BoxWrapper>
      <ExchangeButton buttonType="Primary" disabled={!targetType || !resultType || error || targetType === resultType} onClick={exchangeToken}>
        환전
      </ExchangeButton>
    </Container>
  );
}
