import './App.css';
import Card from './components/Card';
import Header from './components/Header';

const infoRioDeJaneiro = {
  city: 'Rio de Janeiro',
  country: 'Brasil',
  imageUrl: '/src/assets/rio.webp',
  visited: true,
};

function App() {
  return (
    <main>
      <Header />
      <Card cityInfo={ infoRioDeJaneiro } />
    </main>
  );
}

export default App;
