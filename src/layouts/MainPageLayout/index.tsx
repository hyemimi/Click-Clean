import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainPageLayout = () => {

  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <footer>Click-Clean</footer>
    </div>
   
  );
};
  
export default MainPageLayout;