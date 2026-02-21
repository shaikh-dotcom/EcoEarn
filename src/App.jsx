import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Interface from "./Interface";
import Home from "./Home";
import PaymentSuccess from "./PaymentSuccess";
import PaymentFail from "./PaymentFail";
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // wait for Firebase to check auth
  useEffect(() => {
    // Firebase automatically checks if user is already logged in
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsub();
  }, []);
  // Don't render anything until Firebase confirms auth state
  if (loading) return null;
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page — if already logged in, skip to dashboard */}
        <Route path="/" element={<Interface />} />
        {/* Dashboard — if not logged in, send back to landing */}
        <Route
          path="/home"
          element={user ? <Home user={user} /> : <Navigate to="/" />}
        />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/fail" element={<PaymentFail />} />
        <Route path="/payment/cancel" element={<PaymentFail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
