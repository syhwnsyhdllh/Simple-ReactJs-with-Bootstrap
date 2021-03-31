import React, {Component} from 'react';
import './App.css';
import MenuMakanan from "./components/MenuMakanan/MenuMakanan";

class App extends Component {
  render() {
    return ( 
     <div className="App">
       <h1 >Cafe and Resto Morningstar</h1>
       <h2>Menu Makanan</h2>
       <MenuMakanan />
       <h2>Menu Minuman</h2>
       <div style={{border: '1px solid black', width: 300, margin:'auto'}}>
       <p>Nama Menu: Jus Melon</p>
       <p>Harga: Rp. 15.000 </p>
       </div>
     </div>
     
    );
  }
}

export default App;