import './App.css';
import Tag from './componants/Tag';
import Random from './componants/Random';

function App() {
  return (
    <div className='w-full h-screen flex flex-col background relative overflow-x-hidden items-center' >
      <h1 className="bg-white rounded-lg  w-11/12 text-center mt-[40px] px-10 py-2 text-3xl font-bold">RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center mt-10 gap-y-10'>
        <Random />
        <Tag/>
      </div>
    </div>
  );
}

export default App;
