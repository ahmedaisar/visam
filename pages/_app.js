import { AuthProvider } from "../hooks/useAuth";
import "../public/assets/css/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
