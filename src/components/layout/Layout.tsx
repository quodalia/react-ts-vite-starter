import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="container mx-auto md:px-5 my-5">
      <Outlet />
    </div>
  );
}

export default Layout;
