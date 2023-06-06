import Header from "./Header/Header";
import Search from "./Search/Search";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <Header />
      <div className='container-fluid'>
        <main className='bm-main'>
          <Search />
          <Outlet />
          <Footer />
        </main>
      </div>
    </>
  );
}
