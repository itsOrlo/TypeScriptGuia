import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

// import './bases/01-const-let.ts';
// import './bases/02object.ts';
// import './bases/03arrays.ts';
// import './bases/04functions.ts';
// import './bases/05desestructuracion.ts';
// import './bases/06des-arr.ts';
// import './bases/07import-export.ts';
// import './bases/08promises.ts';
// import './bases/09fetch-api.ts';
// import './bases/10axios.ts';
import './bases/11async-await.ts';





document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
