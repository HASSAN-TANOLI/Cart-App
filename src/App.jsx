import Home from "./Home.jsx";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
