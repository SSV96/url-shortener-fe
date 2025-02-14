import { LoginPage, FormPage } from "./components";
import Analytics from "./components/Analytics";
import MyUrls from "./components/MyUrls";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/myurls" element={<MyUrls />} />

          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
