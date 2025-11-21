import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operation) {
      case "add":
        setResult(n1 + n2);
        break;
      case "sub":
        setResult(n1 - n2);
        break;
      case "mul":
        setResult(n1 * n2);
        break;
      case "div":
        setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by 0");
        break;
      default:
        setResult("");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Basic Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={styles.input}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={styles.input}
      />

      <div style={styles.buttonRow}>
        <button onClick={() => calculate("add")} style={styles.button}>+</button>
        <button onClick={() => calculate("sub")} style={styles.button}>−</button>
        <button onClick={() => calculate("mul")} style={styles.button}>×</button>
        <button onClick={() => calculate("div")} style={styles.button}>÷</button>
      </div>

      <h3>Result: {result}</h3>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "40px auto",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
  input: {
    width: "80%",
    padding: "10px",
    margin: "10px 0",
    fontSize: "16px",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },
  button: {
    width: "22%",
    padding: "10px",
    fontSize: "18px",
    cursor: "pointer",
  },
};
