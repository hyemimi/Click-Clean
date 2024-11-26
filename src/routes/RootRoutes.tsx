
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPageLayout from '../layouts/MainPageLayout';
import HomePage from '../pages/HomePage';
import ArticlePage from 'pages/ArticlePage';
import BookmarkPage from 'pages/BookmarkPage';

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageLayout />}>
          <Route index element={<HomePage />}/>
          <Route path="/article/:news_id" element={<ArticlePage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
};

export default RootRoutes;