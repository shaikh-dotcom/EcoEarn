const functions = require("firebase-functions");
const SSLCommerzPayment = require("sslcommerz-lts");

const STORE_ID = process.env.STORE_ID;
const STORE_PASS = process.env.STORE_PASS;
const IS_LIVE = false; // true when you go live

// ── Initiate Payment ──
exports.initiateWithdraw = functions.https.onCall(async (data, context) => {
  if (!context.auth)
    throw new functions.https.HttpsError("unauthenticated", "Login required");

  const { amount, phone, method } = data;

  const paymentData = {
    // ... your existing fields
    cus_add2: "Dhaka", // Added
    cus_postcode: "1200", // Added
    cus_state: "Dhaka", // Added
    cus_fax: "01711111111", // Added

    ship_name: userName || "EcoEarn User", // Added
    ship_add1: "Dhaka", // Added
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: "1000",
    ship_country: "Bangladesh",
  };

  const sslcz = new SSLCommerzPayment(STORE_ID, STORE_PASS, IS_LIVE);
  const response = await sslcz.init(paymentData);

  if (response?.GatewayPageURL) {
    return { url: response.GatewayPageURL, tran_id: paymentData.tran_id };
  } else {
    throw new functions.https.HttpsError("internal", "Payment init failed");
  }
});

// ── Validate Payment ──
exports.validatePayment = functions.https.onCall(async (data, context) => {
  const sslcz = new SSLCommerzPayment(STORE_ID, STORE_PASS, IS_LIVE);
  const response = await sslcz.validate({ val_id: data.val_id });
  return { status: response.status, amount: response.amount };
});
