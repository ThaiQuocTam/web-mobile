import HomeAdminPage from "page/HomeAdmin.page";

function App() {
  return (
    <>
      <div className=''>
        <Routes>
          <Route path='/' element={<HomeAdminPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
