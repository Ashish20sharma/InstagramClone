import Edit from "./components/Edit";
import Login from "./components/Login";
import PrivateComponent from "./components/PrivateComponent";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Search from "./components/Search";
import Uploadpost from "./components/Uploadpost";
import Feed from "./components/feed";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/feed" element={<Feed />} />
            <Route path="/" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/uploadpost/:id" element={<Uploadpost />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
