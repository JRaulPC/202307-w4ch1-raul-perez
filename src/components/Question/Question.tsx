import Button from "../Button/Button";

const Question = (): React.ReactElement => {
  return (
    <>
      <div className="options">
        <span className="options__question">Pregunta:</span>
        <div className="options__answers">
          <Button />
          <Button />
        </div>
      </div>
    </>
  );
};

export default Question;
