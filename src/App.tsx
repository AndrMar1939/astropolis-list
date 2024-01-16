import {
  Routes,
  Route,
} from "react-router-dom";
import { Layout, Home, List } from "./pages";

function App() {
  return (
   <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Route>
   </Routes>
  )
}

export default App
