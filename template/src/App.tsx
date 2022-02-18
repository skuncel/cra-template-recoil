import { RecoilRoot } from 'recoil';
import logo from './logo.svg';

function App() {
  return (
    <RecoilRoot>
      <div className="text-center">
        <header className="flex flex-col items-center justify-center text-3xl min-h-screen bg-react-gray text-white">
          <img src={logo} className="pointer-events-none h-[40vmin] animate-spin-slow" alt="logo" />
          <p>
            Edit <code className="font-mono">src/App.tsx</code> and save to reload.
          </p>
          <a
            className="text-react-blue"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </RecoilRoot>
  );
}

export default App;