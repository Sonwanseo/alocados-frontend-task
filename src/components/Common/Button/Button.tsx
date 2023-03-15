import React from 'react';
import styled from 'styled-components';
import { PRIMARY, WHITE, SHADE } from 'constants/Theme';
import { Text } from '../Text';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: 'Primary' | 'Secondary' | 'Default';
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

const StyledText = styled(Text)`
  line-height: 36px;
`;

export default function (props: Props) {
  const { buttonType = 'Default', children, disabled, ...rest } = props;

  let color, backgroundColor;

  switch (buttonType) {
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

  if (disabled) {
    color = SHADE['400'];
    backgroundColor = SHADE['200'];
  }

  return (
    <StyledButton backgroundColor={backgroundColor} {...rest}>
      <StyledText button semibold color={color}>
        {children}
      </StyledText>
    </StyledButton>
  );
}
