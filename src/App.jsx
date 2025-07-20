import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import AppLayout from "./ui/AppLayout";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Homepage />} />
          <Route element={<AppLayout />}>
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
