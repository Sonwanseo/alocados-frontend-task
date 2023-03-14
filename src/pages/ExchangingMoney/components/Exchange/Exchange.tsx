import { Button, FlexBox, Text } from 'components/Common';
import { SHADE } from 'constants/Theme';
import styled from 'styled-components';
import Swap from 'assets/svg/Swap.svg';
import { Select } from '../Select';

const BoxWrapper = styled(FlexBox)`
  gap: 16px;
`;

const TargetBox = styled(FlexBox)`
  box-sizing: border-box;
  width: 472px;
  padding: 10px 16px 10px 14px;
  background-color: ${SHADE['000']};
  gap: 4px;
  border-radius: 12px;
  justify-content: center;
`;

const SwapIcon = styled.img`
  width: 40px;
  height: 40px;
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

export function Exchange() {
  return (
    <FlexBox
      column
      style={{
        alignItems: 'center',
      }}
    >
      <BoxWrapper>
        <TargetBox column>
          <Text overline semibold color={SHADE['600']}>
            전환 수량
          </Text>
          <Text body2 semibold color={SHADE['800']}>
            1
          </Text>
        </TargetBox>
        <Select tokenType="Ethereum" />
      </BoxWrapper>
      <SwapIcon src={Swap} />
      <BoxWrapper>
        <ResultBox>
          <Text body2 semibold color={SHADE['800']}>
            100
          </Text>
        </ResultBox>
        <Select tokenType="Solana" />
      </BoxWrapper>
      <ExchangeButton type="Primary">환전</ExchangeButton>
    </FlexBox>
  );
}
