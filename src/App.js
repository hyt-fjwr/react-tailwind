import './App.css';

function App() {
  return (
    <>
  <header className="text-gray-700 border-b border-gray-200">
    <div className="container flex mx-auto p-4 flex-col md:flex-row items-center">
      <a href="#" className="font-medium text-gray-900 mb-2 md:mb-0">
        <span className="text-xl ml-3">HYT FJWR</span>
      </a>
      <nav className="md:ml-auto text-base">
        <a href="#home" className="mr-5 hover:text-blue-400 duration-300">Home</a>
        <a href="#About" className="mr-5 hover:text-blue-400 duration-300">About</a>
        <a href="#Skillks" className="mr-5 hover:text-blue-400 duration-300">Skillks</a>
        <a href="#Next" className="hover:text-blue-400 duration-300">Next</a>
      </nav>
    </div>
    
  </header>
  <section className="text-gray-700" id="home">
    <div className="flex container mx-auto py-10 px-5 flex-col md:flex-row items-center">
      <div className="md:w-1/2 flex-grow mb-10 lg:pr-24 md:pr-16 text-center md:text-left">
        <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>Hi!
          <br />
          I'm Hayato Fujiwara
          <br />
          Web Developer
        </h1>
        <p className='mb-8 leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem assumenda blanditiis voluptatem? Maxime a ea nobis soluta, unde eligendi amet.
        </p>
        <button className='text-white bg-blue-500 py-2 px-6 border-0 rounded text-lg hover:bg-blue-600 duration-200'>Contact</button>
      </div>
      <div className="md:w-1/2 lg:max-w-lg w-5/6">
        <img src="./img/icon.jpg" alt="" />
      </div>
    </div>
  </section>

  <section className='text-gray-700 border-t border-gray-200'>
    <div className='container px-5 py-16 mx-auto'>
      <div className='text-center mb-20'>
        <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
        <pb className="pb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae quis id, excepturi reiciendis labore hic quibusdam aspernatur laudantium ut doloribus?
        </pb>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, corporis. Vitae ea vel, nostrum id ad cum aliquid harum suscipit dicta! Saepe maiores aspernatur at animi reprehenderit dolorem, inventore, id enim veritatis dolor neque sint iusto sed nihil eaque porro odio aliquam reiciendis? Veritatis accusantium ea laborum repellat quisquam mollitia blanditiis, ut, illo vel sint possimus voluptatum voluptate atque reprehenderit tenetur veniam ab dolores harum beatae error aut consectetur accusamus quae voluptas. Quod quae voluptatibus pariatur maxime libero est quis ad dolores praesentium sint excepturi modi vitae assumenda, non minima, harum natus inventore optio repudiandae earum ducimus voluptatum? Quia, voluptas!
        </p>
      </div>

      <div></div>
    </div>
  </section>
  </>
  );
}

export default App;
