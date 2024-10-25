import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "./Provider";
import AppRouter from "./Router";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <AppRouter />
      </Router>
    </AppProvider>
  );
};

export default App;
