import { createGlobalStyle } from "styled-components";

/* Font Family:
.roboto-<uniquifier> {
  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
}

.ubuntu-mono-regular {
  font-family: "Ubuntu Mono", monospace;
  font-weight: 400;
  font-style: normal;
}

.ubuntu-mono-bold {
  font-family: "Ubuntu Mono", monospace;
  font-weight: 700;
  font-style: normal;
}

.ubuntu-mono-regular-italic {
  font-family: "Ubuntu Mono", monospace;
  font-weight: 400;
  font-style: italic;
}

.ubuntu-mono-bold-italic {
  font-family: "Ubuntu Mono", monospace;
  font-weight: 700;
  font-style: italic;
}
*/

/* For Dark Mode
    --color-primary: #C1121F;
    --color-primary-dark: #780000;
    --color-secondary: #669BBC;
    --color-secondary-dark: #003049;
    --color-bg-0: #090C11;
    --color-bg-1: #0E131B;
    --color-bg-2: #19202F;
    --color-text-a-0:#ffffff;
    --color-text-a-1:#fffbf2;
    --color-text-b-0:#14213d;
    --color-text-b-1:#000000;
*/
/* For Light Mode
    --color-primary: #C1121F;
    --color-primary-dark: #780000;
    --color-secondary: #669BBC;
    --color-secondary-dark: #003049;
    --color-bg-0: #edf2fb;
    --color-bg-1: #ccdbfd;
    --color-bg-2: #abc4ff;
    --color-text-a-0:#14213d;
    --color-text-a-1:#000000;
    --color-text-b-0:#ffffff;
    --color-text-b-1:#fffbf2;
*/

const GlobalStyles = createGlobalStyle`

:root{
    
    &.light-mode{
    --color-primary: #f07167;
    --color-primary-dark: #780000;
    --color-secondary: #669BBC;
    --color-secondary-dark: #003049;
    --color-bg-0: #edf2fb;
    --color-bg-1: #ccdbfd;
    --color-bg-2: #abc4ff;
    --color-text-a-0:#14213d;
    --color-text-a-1:#0d1b2a;
    --color-text-b-0:#edf6f9;
    --color-text-b-1:#fffbf2;
    }


    &, &.dark-mode{
    --color-primary: #f07167;
    --color-primary-dark: #780000;
    --color-secondary: #669BBC;
    --color-secondary-dark: #003049;
    --color-bg-0: #293241;
    --color-bg-1: #0E131B;
    --color-bg-2: #19202F;
    --color-text-a-0:#edf6f9;
    --color-text-a-1:#fffbf2;
    --color-text-b-0:#14213d;
    --color-text-b-1:#0d1b2a;
    }


}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;

}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-text-a-0);
  background-color: var(--color-bg-2);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;

}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;

export default GlobalStyles;
