
import Navbar from 'scenes/nav';
import './index.css';
import Carousel from 'scenes/carousel';
import Details from 'scenes/details';

function App() {
  return (
    <div className="app w-[90%] lg:w-[80%] items-center justify-center mx-auto">
      <Navbar />
      <div className=' flex flex-col lg:flex-row items-center justify-between'>
        <Carousel />
        <Details />
      </div>
    </div>
  );
}

export default App;
