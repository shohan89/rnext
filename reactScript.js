// This is JS Dom
// const p = document.createElement('p');
// p.innerText = 'This is a React component rendered in a non-React environment.';

// const root = document.getElementById('root');
// root.appendChild(p);

// How React works under the hood
const myElement = (
    <div>
        <h1>Hello from React!</h1>
        <p>Transpiled with Babel!</p>
    </div>
);
ReactDOM.createRoot(document.getElementById('root')).render(myElement);