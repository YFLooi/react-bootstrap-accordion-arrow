import AccordionDisplay from "./Accordion";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Container className="my-3">
        <Row>
          <h2>React bootstrap accordions with a rotating arrow indicator</h2>
        </Row>
      </Container>
      <Container className="my-3">
        <Row>
          <AccordionDisplay
            title="Here's a first title"
            arrowPosition="left"
            forceDefaultHide={true}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
          </AccordionDisplay>
        </Row>
      </Container>
      <Container className="my-3">
        <Row>
          <AccordionDisplay
            title="Here's a second title"
            arrowPosition="center"
            forceDefaultHide={false}
          >
            <div>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </div>
          </AccordionDisplay>
        </Row>
      </Container>
      <Container className="my-3">
        <Row>
          <AccordionDisplay
            title="Here's a 3rd title"
            arrowPosition="right"
            forceDefaultHide={true}
          >
            <div>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </div>
          </AccordionDisplay>
        </Row>
      </Container>
    </>
  );
}

export default App;
