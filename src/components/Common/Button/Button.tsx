import React from 'react';
import styled from 'styled-components';
import { PRIMARY, WHITE, SHADE } from 'constants/Theme';
import { Text } from '../Text';

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  type?: 'Primary' | 'Secondary' | 'Default';
  children?: React.ReactNode;
};

interface StyledButtonProps {
  backgroundColor: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  padding: 10px 16px;
  border: none;
  border-radius: 12px;
`;

export default function (props: Props) {
  const { type = 'Default', children, ...rest } = props;

  let color, backgroundColor;

  switch (type) {
    case 'Primary':
      color = PRIMARY['000'];
      backgroundColor = PRIMARY['100'];
      break;
    case 'Secondary':
      color = PRIMARY['100'];
      backgroundColor = PRIMARY['000'];
      break;
    default:
      color = SHADE['700'];
      backgroundColor = WHITE;
  }

  return (
    <StyledButton backgroundColor={backgroundColor} {...rest}>
      <Text button semibold color={color}>
        {children}
      </Text>
    </StyledButton>
  );
}
