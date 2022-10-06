import { HashRouter, Routes, Route } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import Menu from './components/Menu';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='*' element={<h2>Not Found</h2>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
