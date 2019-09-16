
const title = <h1>The first react code</h1>;
const description = <p>I am learning the react coding</p>;
const header = React.createElement(
    'header',
    null,
    title,
    description
);

ReactDOM.render(
    header,
    document.getElementById('root')
);