import React, { useState } from "react";
import "./PaymentValidation.css";

const PaymentValidation = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [isCardNumberValid, setIsCardNumberValid] = useState(false);
  const [isCardNameValid, setIsCardNameValid] = useState(false);
  const [isExpiryMonthValid, setIsExpiryMonthValid] = useState(false);
  const [isExpiryYearValid, setIsExpiryYearValid] = useState(false);
  const [isCvvValid, setIsCvvValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit payment information to the server
    console.log("Payment submitted!");
  };

  const handleCardNumberChange = (e) => {
    const newCardNumber = e.target.value;
    setCardNumber(newCardNumber);
    const isValid = /^[0-9]{16}$/.test(newCardNumber);
    setIsCardNumberValid(isValid);
  };

  const handleCardNameChange = (e) => {
    const newCardName = e.target.value;
    setCardName(newCardName);
    const isValid = /^[a-zA-Z ]+$/.test(newCardName);
    setIsCardNameValid(isValid);
  };

  const handleExpiryMonthChange = (e) => {
    const newExpiryMonth = e.target.value;
    setExpiryMonth(newExpiryMonth);
    const isValid = /^[01][0-9]$/.test(newExpiryMonth);
    setIsExpiryMonthValid(isValid);
  };

  const handleExpiryYearChange = (e) => {
    const newExpiryYear = e.target.value;
    setExpiryYear(newExpiryYear);
    const currentYear = new Date().getFullYear();
    const isValid =
      /^[0-9]{4}$/.test(newExpiryYear) &&
      newExpiryYear >= currentYear &&
      newExpiryYear <= currentYear + 3;
    setIsExpiryYearValid(isValid);
  };

  const handleCvvChange = (e) => {
    const newCvv = e.target.value;
    setCvv(newCvv);
    const isValid = /^[0-9]{3}$/.test(newCvv);
    setIsCvvValid(isValid);
  };

  const isSubmitDisabled =
    !isCardNumberValid ||
    !isCardNameValid ||
    !isExpiryMonthValid ||
    !isExpiryYearValid ||
    !isCvvValid;

  return (
    <div className="mt-30 layout-column justify-content-center align-items-center">
      <div className="card outlined" style={{ width: "650px" }}>
        <div data-testid="debit-card">
          <h3 style={{ textAlign: "center" }}>Card Details</h3>
          <br />
          <div className="debit-card-body">
            <p className="debit-card-bank">Bank Name</p>
            <p className="debit-card-no">{`${
              isCardNumberValid ? cardNumber : "XXXXXXXXXXXXXXXX"
            }`}</p>
            <br />
            <div
              style={{ height: "45px", backgroundColor: "black" }}
              className="debit-card-stripe"
            ></div>
            <p>
             
