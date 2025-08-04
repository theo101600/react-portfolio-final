const computedColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-primary")
  .trim();

export { computedColor };
