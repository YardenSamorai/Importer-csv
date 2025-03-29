import { Routes, Route } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';


import Logs from "./pages/Logs";
import SignInPage from './pages/SignInPage';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import SyncInventory from './pages/SyncInventory';
const App = () => {
  return (
    <>
      <SignedIn>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Logs" element={<Logs />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/SyncInventory" element={<SyncInventory />} />
        </Routes>
      </SignedIn>

      <SignedOut>
        <Routes>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="*" element={<RedirectToSignIn />} />
        </Routes>
      </SignedOut>
    </>
  );
};

export default App;