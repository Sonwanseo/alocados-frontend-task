import { SHADE } from 'constants/Theme';
import React from 'react';
import styled from 'styled-components';

export enum FontFamily {
  Pretendard = 'Pretendard',
  Poppins = 'Poppins',
}

export enum FontWeight {
  Bold = '700',
  Semibold = '600',
  Regular = '400',
}

export enum FontSize {
  Title = 'Title',
  Body = 'Body',
  Body2 = 'Body2',
  Button = 'Button',
  Caption = 'Caption',
  Overline = 'Overline',
}

const Size = {
  [FontSize.Title]: '22px',
  [FontSize.Body]: '20px',
  [FontSize.Body2]: '18px',
  [FontSize.Button]: '15px',
  [FontSize.Caption]: '14px',
  [FontSize.Overline]: '12px',
};

type Props = React.HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
  color?: string;
  // FontWeight
  bold?: boolean;
  semibold?: boolean;
  // FontSize
  body?: boolean;
  body2?: boolean;
  button?: boolean;
  caption?: boolean;
  overline?: boolean;
};

interface StyledTextProps {
  fontWeight: string;
  fontSize: string;
  color: string;
}

const StyledText = styled.p<StyledTextProps>`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;

export default function (props: Props) {
  const { children, color: customColor, bold, semibold, body, body2, button, caption, overline, ...rest } = props;

  const fontWeight = (bold && FontWeight.Bold) || (semibold && FontWeight.Semibold) || FontWeight.Regular;

  const fontSize =
    Size[
      (body && FontSize.Body) ||
        (body2 && FontSize.Body2) ||
        (button && FontSize.Button) ||
        (caption && FontSize.Caption) ||
        (overline && FontSize.Overline) ||
        FontSize.Title
    ];

  const color = customColor || SHADE['900'];

  return (
    <StyledText fontWeight={fontWeight} fontSize={fontSize} color={color} {...rest}>
      {children}
    </StyledText>
  );
}
