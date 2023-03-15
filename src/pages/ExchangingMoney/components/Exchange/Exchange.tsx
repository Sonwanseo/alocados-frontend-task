import { Button, FlexBox, Text } from 'components/Common';
import { SHADE, ERROR } from 'constants/Theme';
import styled from 'styled-components';
import Swap from 'assets/svg/Swap.svg';
import { Select } from '../Select';
import { TokenType } from 'types/Model';

const BoxWrapper = styled(FlexBox)`
  gap: 16px;
`;

const TargetBox = styled(FlexBox)<{ disabled: boolean }>`
  box-sizing: border-box;
  width: 472px;
  padding: 10px 16px 10px 14px;
  background-color: ${SHADE['000']};
  gap: 4px;
  border-radius: 12px;
  justify-content: center;
  border: ${(props) => (props.disabled ? `1px solid ${ERROR[100]}` : 'none')};
`;

const TargetInput = styled.input`
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
  width: 472px;
  height: 54px;
  padding: 10px 16px 10px 14px;
  border-radius: 12px;
  align-items: center;
`;

const ExchangeButton = styled(Button)`
  margin-top: 47px;
`;

type Props = {
  targetType: TokenType;
  resultType: TokenType;
  resultAmount: number;
  noneHoldingError: boolean;
  changeTargetType: (token: TokenType) => void;
  changeTargetAmount: (amount: string) => void;
  changeResultType: (token: TokenType) => void;
};

export function Exchange(props: Props) {
  const { targetType, resultType, resultAmount, noneHoldingError, changeTargetType, changeTargetAmount, changeResultType } = props;

  return (
    <FlexBox
      column
      style={{
        alignItems: 'center',
      }}
    >
      <BoxWrapper>
        <TargetBox column disabled={noneHoldingError}>
          <Text overline semibold color={SHADE['600']}>
            전환 수량
          </Text>
          <TargetInput placeholder="0" onChange={(e) => changeTargetAmount(e.target.value)} disabled={noneHoldingError} />
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
      <ExchangeButton type="Primary">환전</ExchangeButton>
    </FlexBox>
  );
}
