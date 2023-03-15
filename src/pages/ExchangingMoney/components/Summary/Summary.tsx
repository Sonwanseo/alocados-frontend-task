import { FlexBox, Text } from 'components/Common';
import { SHADE } from 'constants/Theme';
import { useTokenStore } from 'store';
import styled from 'styled-components';
import { getTokenImageByType } from 'utils';
import { HoldingToken } from '../HoldingToken';

const Container = styled(FlexBox)`
  box-sizing: border-box;
  width: 32%;
  padding: 24px 24px 0px 24px;
  background-color: ${SHADE['000']};
  border-radius: 12px;
`;

const Divider = styled(FlexBox)`
  width: 100%;
  height: 1px;
  margin: 15px 0px;
  background-color: ${SHADE[300]};
`;

export function Summary() {
  const {
    tokens: { Solana, Ethereum, BnB },
  } = useTokenStore();

  return (
    <Container column>
      <Text semibold body color={SHADE['700']}>
        요약
      </Text>
      <Divider />
      <HoldingToken icon={getTokenImageByType('Solana')} token="Solana" holding={Solana} />
      <HoldingToken icon={getTokenImageByType('Ethereum')} token="Ethereum" holding={Ethereum} />
      <HoldingToken icon={getTokenImageByType('BnB')} token="BnB" holding={BnB} />
    </Container>
  );
}
