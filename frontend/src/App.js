import "./App.css";
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;