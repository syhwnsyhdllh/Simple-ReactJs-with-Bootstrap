import React, {Component} from 'react';
import './App.css';
import MenuMakanan from "./components/MenuMakanan/MenuMakanan";
import MenuMinuman from "./components/MenuMinuman/MenuMinuman"

class App extends Component {
  constructor(){
    super();
    this.state={
      namaResto: 'Morningstar',
      menuMakanan: [
        {nama: 'Ayam bakar', harga: 25000, stock: 10},
        {nama: 'Ikan Bakar', harga: 22000, stock: 0},
      ]
    }
  }
handleGantiNama = (nama) =>{
  this.setState({namaResto: nama})
}
  render() {
    return ( 
     <div className='App'>
       <h1 >Cafe and Resto {this.state.namaResto}</h1>
       <button className="btn btn-primary" onClick={() => this.handleGantiNama ('Lucifer Morningstar')}>Ganti nama resto</button>
       <h2>Menu Makanan</h2>
       {/* <MenuMakanan namaMenu={"Ayam Bakar"} hargaMenu={25000}/> */}
       {/* <MenuMakanan namaMenu={"Ikan Bakar"} hargaMenu={15000}/> */}
        <MenuMakanan
          namaMenu={this.state.menuMakanan[0].nama}
          hargaMenu={this.state.menuMakanan[0].harga}
          stock={this.state.menuMakanan[0].stock}
        />
        <MenuMakanan
          namaMenu={this.state.menuMakanan[1].nama}
          hargaMenu={this.state.menuMakanan[1].harga}
          stock={this.state.menuMakanan[1].stock}
        />
        
       <h2>Menu Minuman</h2>
       <MenuMinuman namaMenu={"Cold White"} hargaMenu={20000}/>
       <MenuMinuman namaMenu={"Vietnam Drip"} hargaMenu={20000}/>
     </div>
     
    );
  }
}

export default App;