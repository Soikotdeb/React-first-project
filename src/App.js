
import './App.css';
import Countries from './component/Countries/Countries';

function App() {
  return (
    <div className="App">
     {/* <LoadCountry></LoadCountry> */}

<Countries></Countries>

    </div>
  );
}



















// function LoadCountry(){
//   const [Countries,setCountries]=useState([])


//   useEffect( ()=>{
// fetch('https://restcountries.com/v3.1/all')
// .then(res => res.json())
// .then(data=> setCountries(data))
//   },[])

//    return(
//     <div>
//       <h1>Visiting Every Country Of the  World!!</h1>
//       <h3>countries : {Countries.length}</h3>
//       {
//         Countries.map(country=> <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//    )
// }
// function Country(props){
//   return(
//     <div>
//       <h2>name:{props.name}</h2>
//       <h4>Population: {props.population}</h4>
//     </div>
//   )
// }

export default App;
