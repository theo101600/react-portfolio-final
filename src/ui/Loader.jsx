import { Bouncy } from "ldrs/react";

function Loader() {
  const computedColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-primary")
    .trim();

  return (
    <Bouncy className="loader" size="45" speed="1" color={computedColor} />
  );
}

export default Loader;
