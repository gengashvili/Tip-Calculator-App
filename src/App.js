import { useState } from "react";
import styled from "styled-components";
import Inputs from "./components/Inputs";
import ResultContainer from "./components/ResultContainer";
import logo from "./images/logo.svg";

function App() {
  const [bill, setBill] = useState();
  const [tip, setTip] = useState();
  const [people, setPeople] = useState();

  const tipAmount = ((bill * tip) / people).toFixed(2);
  const total = ((bill * (1 + tip)) / people).toFixed(2);

  const reset = () => {
    setBill("");
    setTip("");
    setPeople("");
  };

  return (
    <>
      <Logo><img src={logo} alt="" /></Logo>
      <Wrapper>
        <Inputs
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
        />
        <ResultContainer
          tipAmount={tipAmount} 
          total={total} 
          reset={reset}
        />
      </Wrapper>
    </>
  );
}

const Logo = styled.div`
  width: fit-content;
  margin: 50px auto 40px auto;

  @media (min-width:1024px){
    margin: 163px auto 87px auto;
  }
`;

const Wrapper = styled.div`
  margin: auto;
  background-color: #ffffff;
  border-radius: 25px;
  max-width: 390px;
  padding: 32px 24px;

  @media (min-width:1024px){
    display: flex;
    justify-content: space-between;
    max-width: 920px;
    padding: 32px;
  }

`;

export default App;
