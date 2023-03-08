import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ExchangingMoney, ExchangingHistory } from 'pages';
import { RoutingPath } from './CONSTANTS';

export default function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutingPath.Root} element={<Navigate to={RoutingPath.ExchangingMoney} />} />
        <Route path={RoutingPath.ExchangingMoney} element={<ExchangingMoney />} />
        <Route path={RoutingPath.ExchangingHistory} element={<ExchangingHistory />} />
      </Routes>
    </BrowserRouter>
  );
}
