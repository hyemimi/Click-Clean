
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPageLayout from '../layouts/MainPageLayout';
import HomePage from '../pages/HomePage';

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageLayout />}>
          <Route index element={<HomePage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
};

export default RootRoutes;