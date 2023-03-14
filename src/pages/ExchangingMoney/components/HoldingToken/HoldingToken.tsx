import { FlexBox, Text } from 'components/Common';
import { SHADE } from 'constants/Theme';
import styled from 'styled-components';
import { TokenType } from 'types/Model';
import { addThousandSeparator, getTokenUnitByType } from 'utils';

const Container = styled(FlexBox)`
  margin-bottom: 24px;
  height: 77px;
  box-sizing: border-box;
`;

const TopWrapper = styled(FlexBox)`
  align-items: center;
`;

const IconWrapper = styled(FlexBox)`
  padding: 8px;
  border-radius: 50%;
  background-color: ${SHADE.Opacity5};
  margin-right: 4px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const HoldingText = styled(Text)`
  line-height: 32px;
`;

type Props = {
  icon: string;
  token: TokenType;
  holding: number;
};

export function HoldingToken(props: Props) {
  const { icon, token, holding } = props;

  return (
    <Container column>
      <TopWrapper>
        <IconWrapper>
          <Icon src={icon} />
        </IconWrapper>
        <Text body2 color={SHADE[700]}>
          {token}
        </Text>
      </TopWrapper>
      <HoldingText body2 semibold>
        {`${addThousandSeparator(holding)} ${getTokenUnitByType(token)}`}
      </HoldingText>
    </Container>
  );
}
