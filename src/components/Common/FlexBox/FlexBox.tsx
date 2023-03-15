import React from 'react';
import styled from 'styled-components';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  fill?: boolean;
  column?: boolean;
  center?: boolean;
};

interface StyledDivProps {
  flexDirection: string;
  flexCenter: string;
}

const StyledDiv = styled.div<StyledDivProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.flexCenter};
  align-items: ${(props) => props.flexCenter};
`;

export default function (props: Props) {
  const { children, column, center, ...rest } = props;

  const flexDirection = column ? 'column' : 'row';
  const flexCenter = center ? 'center' : 'flex-start';

  return (
    <StyledDiv flexDirection={flexDirection} flexCenter={flexCenter} {...rest}>
      {children}
    </StyledDiv>
  );
}
