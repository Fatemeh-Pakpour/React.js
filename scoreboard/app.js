const title = React.createElement(
    'h1',
    {id :'main-title', title : 'this is a title'},
    'My first React'
);

ReactDom.render(
    title,
    document.getElementById('root')
);