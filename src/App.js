import './App.css';
import { Fragment } from 'react';
import Header from './compoenents/header';
import Footer from './compoenents/footer';
import Hero from './compoenents/hero';
import About from './compoenents/about';

function App() {
  return (
    <Fragment className="App">
      <Header />
      <main>
        <Hero/>
        <About/>
      </main>
      <Footer/>
    </Fragment>
  );
}

export default App;
