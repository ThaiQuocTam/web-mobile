import SignIn from 'components/Sign-in/SignIn';
import SignUp from 'components/Sign-up/SignUp';
import Home from 'components/Trang-chu/Home';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
