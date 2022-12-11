import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { ShopifyPage } from 'pages/ShopifyPage/ShopifyPage';
import { GooglePage } from 'pages/GooglePage/GooglePage';
import { PlatformPage } from 'pages/PlatformPage/PlatformPage';
import { NotGooglePage } from 'pages/NotGooglePage/NotGooglePage';
import { ReadyPage } from 'pages/ReadyPage/ReadyPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RegisterPage />} />
        <Route path="shopify" element={<ShopifyPage />} />
        <Route path="other-platform" element={<PlatformPage />} />
        <Route path="google" element={<GooglePage />} />
        <Route path="not-google" element={<NotGooglePage />} />
        <Route path="ready" element={<ReadyPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
