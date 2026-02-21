const PaymentSuccess = () => (
  <div
    style={{
      textAlign: "center",
      padding: "100px",
      color: "#00ff88",
      fontFamily: "Orbitron",
    }}
  >
    <h1>✅ Payment Successful!</h1>
    <p style={{ color: "#a0c4aa" }}>Your withdrawal is being processed.</p>
    <a href="/home" style={{ color: "#57f7df" }}>
      Go to Dashboard
    </a>
  </div>
);
export default PaymentSuccess;
