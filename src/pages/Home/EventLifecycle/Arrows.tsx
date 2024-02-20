import { ChevronsLeft, ChevronsRight } from "lucide-react";

export const ArrowTopRight = () => {
  return (
    <span className="e-Cycle-Arrow-3">
      <ChevronsLeft className="-rotate-45" />
    </span>
  );
};
export const ArrowBottomRight = () => {
  return (
    <span className="e-Cycle-Arrow-4">
      <ChevronsLeft className="-rotate-[125deg]" />
    </span>
  );
};
export const ArrowTopLeft = () => {
  return (
    <span className="e-Cycle-Arrow-1 ">
      <ChevronsRight className="-rotate-45" />
    </span>
  );
};
export const ArrowBottomLeft = () => {
  return (
    <span className="e-Cycle-Arrow-2">
      <ChevronsRight className="-rotate-[125deg]" />
    </span>
  );
};
