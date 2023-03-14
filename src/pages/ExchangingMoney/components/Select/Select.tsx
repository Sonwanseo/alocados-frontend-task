import { FlexBox, Text } from 'components/Common';
import { SHADE } from 'constants/Theme';
import styled from 'styled-components';
import { getTokenImageByType } from 'utils';
import DownChevron from 'assets/svg/DownChevron.svg';
import { TokenType } from 'types/Model';

const Container = styled(FlexBox)`
  box-sizing: border-box;
  width: 147px;
  height: 54px;
  background-color: ${SHADE['000']};
  padding: 15.5px 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
`;

const TokenWrapper = styled(FlexBox)`
  align-items: center;
`;

const TokenImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

const DownChevronImage = styled.img`
  width: 24px;
  height: 24px;
`;

type Props = {
  tokenType: TokenType;
};

export function Select(props: Props) {
  const { tokenType } = props;

  return (
    <Container>
      <TokenWrapper
        style={{
          alignItems: 'center',
        }}
      >
        <TokenImage src={getTokenImageByType(tokenType)} />
        <Text caption>{tokenType}</Text>
      </TokenWrapper>
      <DownChevronImage src={DownChevron} />
    </Container>
  );
}
