import React from "react";

export default function OTP() {
  return (
    <div style={styles.container}>
      <h2>Entrez votre code OTP</h2>
      <div style={styles.inputContainer}>
        <input type="number" maxLength="1" style={styles.inputBox} />
        <input type="number" maxLength="1" style={styles.inputBox} />
        <input type="number" maxLength="1" style={styles.inputBox} />
        <input type="number" maxLength="1" style={styles.inputBox} />
      </div>
      <button style={styles.submitButton}>Vérifier OTP</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    margin: "20px 0",
  },
  inputBox: {
    width: "50px",
    height: "50px",
    fontSize: "24px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  submitButton: {
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
