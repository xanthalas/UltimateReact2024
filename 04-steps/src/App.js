import {useState} from "react";
import Button from "./Button";

const messages = [
    "Learn React",
    "Apply for jobs",
    "Invest your new income",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((val) => !val)}>&times;</button>

      {isOpen && (
      <div className="steps">
        <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>

          <p className="message">
              Step {step}: {messages[step -1]}
          </p>

          <div className="buttons">
            <Button backgroundColor="#7950f2" textColor="#fff" handler={handlePrevious}>
              {"<--"} Previous
            </Button>
            <Button backgroundColor="#7950f2" textColor="#fff" handler={handleNext}>
              Next {"-->"}
            </Button>
          </div>
      </div>
        )}
    </div>
  )

  function handlePrevious() {
    if (step > 1) {
        setStep((val) => val - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
        setStep((val) => val + 1);
    }
  }

}
