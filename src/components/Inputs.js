import { useState } from "react";
import styled from "styled-components";

function Inputs({ bill, setBill, tip, setTip, people, setPeople }) {
  const [error, setError] = useState(false);
  console.log(error);
  return (
    <Container>
      <Form>
        <p><label for="bill">Bill</label></p>
        <Input
          id="bill"
          type="number"
          placeholder="0"
          min="0"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </Form>

      <TipsWraper>
        <h3>Select Tip %</h3>
        <Button onClick={() => setTip(0.05)}>5%</Button>
        <Button onClick={() => setTip(0.1)}>10%</Button>
        <Button onClick={() => setTip(0.15)}>15%</Button>
        <Button onClick={() => setTip(0.25)}>25%</Button>
        <Button onClick={() => setTip(0.5)}>50%</Button>
        <TipInput
          type="number"
          placeholder="CUSTOM"
          min="0"
          max="100"
          value={tip > 0 ? (tip * 100).toFixed(0) : ""}
          onChange={(e) => setTip(e.target.value / 100)}
        />
      </TipsWraper>

      <Form>
      <Wrapper>
        <label for="people">Number of People</label>
        {error && <Error>can't be zero</Error>}
      </Wrapper>
        <Input
          id="people"
          type="number"
          placeholder="0"
          min="0"
          error={error}
          value={people}
          onChange={(e) => {
            setPeople(e.target.value);
            if (~~e.target.value <= 0) {
              setError(true);
            } else {
              setError(false);
            }
          }}
        />
      </Form>
    </Container>
  );
}

const Container = styled.div`
  max-width: 100%;
  margin: 0 8px 32px 8px;
  @media (min-width:1024px){
    width: 50%;
    margin: 17px 48px 17px 17px;
  }
`;

const Form = styled.form`
  label {
    color: #5e7a7d;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 5px;
  background-color: #f3f9fa;
  font-size: 24px;
  font-weight: 700;
  text-align: right;
  color:#00474B;
  margin-top: 6px;
  padding: 0 17px;
  cursor: pointer;

  :focus{
    outline: none;
    outline: 2px solid #26C2AE;
    outline: ${({error}) => error ? "2px #E17052 solid":""};
  }
`;

const TipsWraper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 32px 0;
  h3{
    width: 100%;
    color: #5E7A7D;
  }
  @media (min-width:1024px){
    margin: 40px 0;
  }
`;

const Button = styled.button`
  width: 48%;
  height: 48px;
  margin-top: 16px;
  border-radius: 5px;
  background-color: #00474b;
  border: none;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  color: #ffffff;
  cursor: pointer;

  :hover{
    background-color: #9FE8DF;
    color: #00474B;
  }
  :focus{
    background-color: #26C2AE;
    color: #00474B;
  }

  @media (min-width:1024px){
    width: 117px;
  }
`;

const TipInput = styled.input`
  width: 146px;
  height: 48px;
  margin-top: 16px;
  padding: 6px 14px;

  border-radius: 5px;
  border: none;

  background-color: #F3F9FA;
  color: #00474b;

  font-size: 20px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: right;

  cursor: pointer;
  ::placeholder {
    color: #547878;
  }
  :focus{
    outline: none;
    outline: 2px solid #26C2AE;
  }
  @media (max-width:360px){
    width: 48%;
  }
  @media (min-width:780px){
    width: 117px;
  }
`;

const Error = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #e17457;
  @media (min-width:450px){
    margin-left: 15px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Inputs;
