import SignIn from 'components/Sign-in/SignIn';
import SignUp from 'components/Sign-up/SignUp';
import HomePage from 'page/Home.page';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
