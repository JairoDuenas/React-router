import { HashRouter, Routes, Route } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import Menu from './components/Menu';
import ProfilePage from './pages/ProfilePage';
import BlogPost from './pages/BlogPost';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import { AuthProvider } from './auth';

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path='/blog' element={<BlogPage />}>
              <Route path=':slug' element={<BlogPost />} />
            </Route>

            <Route path='/login' element={<LoginPage />} />
            <Route path='/logout' element={<LogoutPage />} />

            <Route path='/profile' element={<ProfilePage />} />
            <Route path='*' element={<h2>Not Found</h2>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
