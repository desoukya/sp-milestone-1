import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
