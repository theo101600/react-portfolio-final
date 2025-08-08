import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router";
import Homepage from "./pages/Homepage";
import AppLayout from "./ui/AppLayout";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import { DarkModeProvider } from "./context/DarkModeContext";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 60 * 1000,
    },
  },
});

function App() {
  const location = useLocation();

  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <Toaster
          position="bottom-right"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-text-a-0)",
              color: "var(--color-text-b-0)",
            },
          }}
        />
        <Routes location={location}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Homepage />} />
          <Route element={<AppLayout />}>
            <Route path="about" element={<About />} />
            {/* <Route path="resume" element={<Resume />} /> */}
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
