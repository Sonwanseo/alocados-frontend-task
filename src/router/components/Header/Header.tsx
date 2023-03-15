import { Button, FlexBox } from 'components/Common';
import styled from 'styled-components';

import Logo from 'assets/svg/Logo.svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutingPath } from 'router/CONSTANTS';

const Container = styled(FlexBox)`
  justify-content: space-between;
  align-items: center;
  padding: 32px;
`;

const RightWrapper = styled(FlexBox)`
  gap: 24px;
`;

type SelectedPage = 'ExchangingMoney' | 'ExchangingHistory';

export function Header() {
  const navigate = useNavigate();
  const [selected, setSelected] = React.useState<SelectedPage>();

  React.useEffect(() => {
    if (window.location.pathname === RoutingPath.ExchangingMoney) setSelected('ExchangingMoney');
    else if (window.location.pathname === RoutingPath.ExchangingHistory) setSelected('ExchangingHistory');
  }, []);

  return (
    <Container>
      <img src={Logo} />
      <RightWrapper>
        <Button
          buttonType={selected === 'ExchangingMoney' ? 'Secondary' : 'Default'}
          onClick={() => {
            setSelected('ExchangingMoney');
            navigate(RoutingPath.ExchangingMoney);
          }}
        >
          환전하기
        </Button>
        <Button
          buttonType={selected === 'ExchangingHistory' ? 'Secondary' : 'Default'}
          onClick={() => {
            setSelected('ExchangingHistory');
            navigate(RoutingPath.ExchangingHistory);
          }}
        >
          거래내역
        </Button>
      </RightWrapper>
    </Container>
  );
}
