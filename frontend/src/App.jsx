import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./components/details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
import "./App.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <h1> NEAT-O </h1>
        <Routes>
          <Route path="/" element={<div> ROOT TOOTY </div>} />
          <Route path="/details/" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
