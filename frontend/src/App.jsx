import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ResumeChat from "./pages/ResumeChat";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="resume-chat" element={<ResumeChat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
