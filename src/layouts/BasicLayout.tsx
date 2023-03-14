import { FlexBox } from 'components/Common';
import styled from 'styled-components';

const Container = styled(FlexBox)`
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled(FlexBox)`
  width: 960px;
`;

type Props = {
  children: React.ReactNode;
};

export function BasicLayout(props: Props) {
  const { children } = props;

  return (
    <Container center>
      <ContentWrapper center>{children}</ContentWrapper>
    </Container>
  );
}
