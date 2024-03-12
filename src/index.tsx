// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';

const App: React.FC = () => {
  return <div>Hello, world!</div>;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
