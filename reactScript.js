// This is JS Dom
// const p = document.createElement('p');
// p.innerText = 'This is a React component rendered in a non-React environment.';

// const root = document.getElementById('root');
// root.appendChild(p);

// How React works under the hood
const p = React.createElement('p', null, 'Hello from React!');
ReactDOM.createRoot(document.getElementById('root')).render(p);