import styled from "styled-components";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Header from "./ui/Header";
import Row from "./ui/Row";
import GlobalStyles from "./styles/GlobalStyles";

const StyledApp = styled.main`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Header>The Wild Oasis</Header>
            <div>
              <Header>Check in and out</Header>
              <Button variation="primary" size="medium" onClick={() => alert("Check in")}>Check in</Button>
              <Button variation="primary" size="medium" onClick={() => alert("Check out")}>Check out</Button>
            </div>
          </Row>

          <Row type="vertical">
            <Header>Form</Header>
            <form>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
