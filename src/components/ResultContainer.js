import React from "react";
import styled from "styled-components";

function ResultContainer({ tipAmount, total, reset }) {
  return (
    <Container>
      <TextWraper>
        <div>
          <h4>Tip Amount</h4>
          <p>/ person</p>
        </div>
        <h3>
          $
          {tipAmount === "NaN" || tipAmount === "Infinity" ? "0.00" : tipAmount}
        </h3>
      </TextWraper>

      <TextWraper>
        <div>
          <h4>Total</h4>
          <p>/ Person</p>
        </div>
        <h3>${total === "NaN" || total === "Infinity" ? "0.00" : total}</h3>
      </TextWraper>
      <Button onClick={reset}>RESET</Button>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  max-width: 100%;
  margin-top: 32px;
  padding: 37px 22px 24px 22px;
  background: #00474b;
  border-radius: 15px;
  @media (min-width:1024px){
    width: 50%;
    margin: 0;
    padding: 40px;
  }
`;

const TextWraper = styled.div`
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :first-child{
    margin-bottom: 25px;
  }
  :last-child{
    margin-bottom: 35px;
  }
  h4 {
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
  }
  p {
    font-size: 13px;
    font-weight: 700;
    color: #7f9d9f;
  }
  h3 {
    font-weight: 700;
    font-size: 32px;
    color: #26c2ae;
    @media (min-width: 1024px) {
      font-size: 48px;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  height: 48px;

  background: #26c2ae;
  border: none;
  border-radius: 5px;

  color: #00474b;
  font-size: 20px;
  font-weight: 700;

  cursor: pointer;
  :hover {
    background: #9fe8df;
  }
  :focus {
    background: #0d686d;
  }
  @media (min-width:1024px){
    position: absolute;
    bottom: 40px;
    right: 40px;
    left: 40px;
    width: 333px;
  }
`;

export default ResultContainer;
