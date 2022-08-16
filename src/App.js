import "./App.css";
import styled from "styled-components";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const refColor = useRef();
  useEffect(() => {
    const timeout = setInterval(() => {
      if (refColor.current.style.background === "blue") {
        return (refColor.current.style.background = "red");
      } 
        return refColor.current.style.background ="blue"
      
    },1000)
    return () => clearInterval(timeout)
  }, []);

  return <Div ref={refColor}></Div>;
}

export default App;

const Div = styled.div`
  width: 400px;
  height: 400px;
  margin: auto;
  border-radius: 50%;
`;
