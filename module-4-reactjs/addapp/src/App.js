import './App.css';
var nm="Brijesh kumar Pandey";
var a=10;
var b=20;
var c=a+b;
var d=a*b;
var e=a/b;
function App() {
  return (
    <div className="App">
    
        <h1>The name of users is {nm}</h1>
        <h2>Additions of numbers is :{c}</h2>
        <h2>Multiplications of numbers is :{d}</h2>
        <h2>Divisions of numbers is :{e}</h2>

    </div>
  );
}

export default App;
