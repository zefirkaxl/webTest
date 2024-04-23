import Account from "./components/Account";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/home/Home";
import Games from "./components/games/Games";
import Test from "./components/tests/Test";
import News from "./components/news/News";
import TestContextProvider from "./components/contexts/ContextTest";
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Account />}>
        <Route index path={"Головна"} element={<Home />} />
        <Route index path={"Ігри"} element={<Games />} />

        <Route
          index
          path={"Тести"}
          element={
            <TestContextProvider>
              <Test />
            </TestContextProvider>
          }
        />

        <Route index path={"Новини IT"} element={<News />} />

        <Route path="*" element={<Navigate to={"Головна"} />} />
      </Route>
    </Routes>
  );
}

export default App;
