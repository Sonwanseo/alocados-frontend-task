import { FlexBox, Text } from 'components/Common';
import { SHADE } from 'constants/Theme';
import styled from 'styled-components';
import { getTokenImageByType, getUnselectedToken } from 'utils';
import DownChevron from 'assets/svg/DownChevron.svg';
import { TokenType } from 'types/Model';
import React from 'react';

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

const DropDownWrapper = styled(FlexBox)`
  position: relative;
  width: 10px;
  height: 10px;
  top: 20px;
  left: 20px;
  gap: 4px;
`;

type Props = {
  tokenType: TokenType;
  changeToken: (token: TokenType) => void;
};

export function Select(props: Props) {
  const { tokenType, changeToken } = props;

  const [showDropDown, setShowDropDown] = React.useState(false);

  const onClickChangeToken = (item: TokenType) => {
    setShowDropDown((prev) => !prev);
    changeToken(item);
  };

  return (
    <Container>
      <TokenWrapper>
        <TokenImage src={getTokenImageByType(tokenType)} />
        <Text caption>{tokenType}</Text>
      </TokenWrapper>
      {showDropDown && (
        <DropDownWrapper column>
          {getUnselectedToken(tokenType).map((item) => (
            <Text caption key={item} onClick={() => onClickChangeToken(item)}>
              {item}
            </Text>
          ))}
        </DropDownWrapper>
      )}
      <DownChevronImage src={DownChevron} onClick={() => setShowDropDown((prev) => !prev)} />
    </Container>
  );
}
