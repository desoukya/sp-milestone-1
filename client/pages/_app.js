import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import {
  QueryClient,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "react-query";

const QueryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={QueryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
