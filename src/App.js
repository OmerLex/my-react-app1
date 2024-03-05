
import './App.css';
import image1 from "./image/cupcakes1.jpg";
import Header from "./components/Header"
import MenuItems from './components/MenuItems';


// function Header() {
//   return(
//     <h1>This text is comes from Header Component</h1>
//   );
// }

// const Header = () => {
//   return(
//     <h1>This text is comes from Header Component</h1>
//   );
// }

function App() {
  const name = "Jane";
  const x = false;
  return (
    <div className="App">
      <MenuItems />
      <h1>Hello React!</h1>
      <h2>Hello {name}</h2>
      <h2>{x ? 'Yes' : 'No'}</h2>
      <img src={image1}></img>
      <Header />
      {/* <Header /> */}
      <p>This paragraph added....</p>
     
    </div>
  );
}

export default App;
