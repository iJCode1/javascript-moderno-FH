/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorExerciseComponent = (element) => {
  const $button = document.createElement("button");
  $button.textContent = "Click me";
  document.getElementsByClassName("card")[0].appendChild($button);

  const generator = generatorId();

  const renderValue = () => {
    $button.textContent = `Click me ${generator.next().value}`;
  }

  $button.addEventListener("click", renderValue);
};

function* generatorId() {
  let i = 0;
  while (true) {
    yield ++i;
  }
}
