import Map from './components/Map';
import './App.css';
import Maps from './components/Maps';
import Nicolau from './components/Nicolau';
import Brava from './components/Brava';
import Bvista from './components/Bvista';
import Fogo from './components/Fogo';
import Sal from './components/Sal';
import Santiago from './components/Santiago';
import Maio from './components/Maio';

function App() {
  const paragrafoStyle = {
    color: 'blue',
    fontSize: '30px',
    /* Outros estilos */
  };

  return (
    <div className="App">
      <p style={paragrafoStyle}>Mapa de Porto Grande de Cabo Verde</p>
      <img src="https://i.pinimg.com/564x/b7/90/78/b79078f4061689d7b31ed60f2cd728bf.jpg" 
      alt="Descrição da imagem" height={400} 
width={800}/>

      <p>Porto-Santo Antao</p>
      <Maps />
      <p>Porto-Santo Vicente</p>
      <Map />
      <p>Porto-Santo Nicolau</p>
      <Nicolau />
      <p>Porto-Sal</p>
      <Sal />
      <p>Porto-Boa Vista</p>
      <Bvista/>
      <p>Porto-Maio</p>
      <Maio />
      <p>Porto-Santiago</p>
      <Santiago />
      <p>Porto-Fogo</p>
      <Fogo />
      <p>Porto-Santo Nicolau</p>
      <Nicolau />
      <p>Porto-Santo Brava</p>
      <Brava />
     
     
     
     
     
     
     
     
     

    </div>
  );
}

export default App;
