import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

// Local Dependencies
import { DebugObserver } from 'src/config/DebugObserver';
import { App } from 'src/App';
import 'src/styles/index.css';

const render = () =>
  ReactDOM.render(
    <StrictMode>
      <RecoilRoot>
        <DebugObserver />
        <App />
      </RecoilRoot>
    </StrictMode>,
    document.getElementById('root')
  );

render();

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
