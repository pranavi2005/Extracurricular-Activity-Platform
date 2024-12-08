import React, { useState } from "react";

const Payment = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Processing payment:", paymentDetails);

    // Mock Payment API Call
    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentDetails),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Payment successful: " + data.message);
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("An error occurred while processing payment.");
    }
  };

  return (
    <div className="payment-form-container" style={styles.container}>
      <h2 style={styles.title}>Make a Payment</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Name on Card</label>
          <input
            type="text"
            name="name"
            value={paymentDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label>Expiry</label>
            <input
              type="text"
              name="expiry"
              value={paymentDetails.expiry}
              onChange={handleChange}
              placeholder="MM/YY"
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label>CVV</label>
            <input
              type="text"
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div style={styles.inputGroup}>
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={paymentDetails.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Pay Now
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Payment;
