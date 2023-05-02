//Props:- In ReactJS, the props are a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”, and its working
//functionality is quite similar to HTML attributes. Basically, these props components are read-only components. 
//
Example:--
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;   
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Atul" />;
root.render(element);

//Output :- Hello Atul

// There are props types for know what is it. just go for react documentaion.

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
