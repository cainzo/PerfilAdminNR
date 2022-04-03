import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app" }>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home></Home>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="users">
              <Route index element={<List></List>}></Route>
              <Route path=":userId" element={<Single></Single>}></Route>
              <Route path="new" element={<New inputs={userInputs} title="add new userr"></New>}></Route>
            </Route>
            <Route path="noticias">
              <Route index element={<List></List>}></Route>
              <Route path=":noticiaID" element={<Single></Single>}></Route>
              <Route path="new" element={<New inputs={productInputs} title="add new product"></New>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
