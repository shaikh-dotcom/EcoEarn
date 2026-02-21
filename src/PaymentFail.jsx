const PaymentFail = () => (
  <div
    style={{
      textAlign: "center",
      padding: "100px",
      color: "#ff4d6d",
      fontFamily: "Orbitron",
    }}
  >
    <h1>❌ Payment Failed</h1>
    <p style={{ color: "#a0c4aa" }}>Something went wrong. Please try again.</p>
    <a href="/home" style={{ color: "#57f7df" }}>
      Go to Dashboard
    </a>
  </div>
);
export default PaymentFail;
