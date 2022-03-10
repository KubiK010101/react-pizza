import { Button } from "./components/button";
import { Layout } from "./components/layout";
import { Navbar } from "./components/navbar";
import Home from "./pages/Home";
import AppRouter from "./router/AppRouter";


function App() {
  return (
    <>
      <Layout>
        <AppRouter/>
      </Layout>
    </>
  );
}

export default App;
