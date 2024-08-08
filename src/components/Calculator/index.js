import React, { useState } from "react";

import { Button } from "../Button";
import { Input } from "../Input";

import { Content, Row } from "../../styles";
import { Container } from "../../styles";

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setCurrentNumber(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      setCurrentNumber(
        currentNumber === "0" ? String(digit) : currentNumber + digit
      );
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setCurrentNumber("0.");
      setWaitingForSecondOperand(false);
      return;
    }

    if (!currentNumber.includes(".")) {
      setCurrentNumber(currentNumber + ".");
    }
  };

  const clear = () => {
    setCurrentNumber("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(currentNumber);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setCurrentNumber(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "*":
        return firstOperand * secondOperand;
      case "/":
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  const handleEquals = () => {
    if (!operator) return;

    const inputValue = parseFloat(currentNumber);
    const result = calculate(firstOperand, inputValue, operator);
    setCurrentNumber(String(result));
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(true);
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="7" onClick={() => inputDigit(7)} />
          <Button label="8" onClick={() => inputDigit(8)} />
          <Button label="9" onClick={() => inputDigit(9)} />
          <Button label="/" onClick={() => performOperation("/")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => inputDigit(4)} />
          <Button label="5" onClick={() => inputDigit(5)} />
          <Button label="6" onClick={() => inputDigit(6)} />
          <Button label="*" onClick={() => performOperation("*")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => inputDigit(1)} />
          <Button label="2" onClick={() => inputDigit(2)} />
          <Button label="3" onClick={() => inputDigit(3)} />
          <Button label="-" onClick={() => performOperation("-")} />
        </Row>
        <Row>
          <Button label="0" onClick={() => inputDigit(0)} />
          <Button label="." onClick={inputDecimal} />
          <Button label="=" onClick={handleEquals} />
          <Button label="+" onClick={() => performOperation("+")} />
        </Row>
        <Row>
          <Button label="C" onClick={clear} />
        </Row>
      </Content>
    </Container>
  );
};

export default Calculator;
