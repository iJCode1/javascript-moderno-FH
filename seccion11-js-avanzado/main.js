import "./style.css";
import { asyncAwait2Component } from "./src/concepts/07-async-await2";
import { asyncAwaitComponent } from "./src/concepts/06-async-await";
import { asyncComponent } from "./src/concepts/05-async";
import { callbackComponent } from "./src/concepts/02-callback";
import { environmentsComponent } from "./src/concepts/01-environments";
import { promiseComponent } from "./src/concepts/03-promises";
import { promiseRaceComponent } from "./src/concepts/04-promise-race";
import javascriptLogo from "./javascript.svg";
import { forAwaitComponent } from "./src/concepts/08-for-await";
import { generatorFunctionComponent } from "./src/concepts/09.generator-function";
import { generatorExerciseComponent } from "./src/concepts/10.generatorExercise";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    </div>
  </div>
`;

// environmentsComponent(".card");
// callbackComponent(".card");
// promiseComponent(".card");
// promiseRaceComponent(".card");
// asyncComponent(".card");
// asyncAwaitComponent(".card");
// asyncAwait2Component(".card");
// forAwaitComponent(".card");
// generatorFunctionComponent(".card");
generatorExerciseComponent(".card");