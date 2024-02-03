import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";

type PrevButtonProps = {
  onClick: () => void;
  isDisabled: boolean;
};

export const PrevButton: React.FC<PrevButtonProps> = ({
  onClick,
  isDisabled,
}) => {
  return (
    <button
      className={`p-[30px] rounded-full slider-hover ${
        isDisabled ? "disabled" : ""
      }`}
      onClick={onClick}
    >
      <ArrowLeft />
    </button>
  );
};

type NextButtonProps = {
  onClick: () => void;
  isDisabled: boolean;
};

export const NextButton: React.FC<NextButtonProps> = ({
  onClick,
  isDisabled,
}) => {
  return (
    <button
      className={`p-[30px] rounded-full slider-hover ${
        isDisabled ? "disabled" : ""
      }`}
      onClick={onClick}
    >
      <ArrowRight />
    </button>
  );
};
