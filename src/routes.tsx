import { Routes as Switch, Route } from 'react-router-dom';

import { Auth } from './pages/Auth';

export default function Routes() {
  return (
    <Switch>
      <Route path="/auth" element={<Auth />} />
    </Switch>
  );
}
