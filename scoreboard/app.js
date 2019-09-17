
// const title = "The first react code";

const description = "I am learning the react coding";
const idTitle = "main-title";
const name ="Fatemeh";
const header = (
    <header>
    {/* comments */}
        <h1 id ={idTitle}>{name}'s First React Element</h1>
        <p className ="headline">{description}</p>
    </header>   
);

ReactDOM.render(
    header,
    document.getElementById('root')
);