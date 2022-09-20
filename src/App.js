// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './components/data';
import Contact from './components/Contact';
import SideBar from './components/Sidebar'
import { BrowserRouter,Route,Routes,Link} from 'react-router-dom';

//date
//name
//purpose

//Keep the link 



function App() {
  
  const cards = data.map(item =>{
    return (
      
      <Card
      //props
      // num = {cardArray}
      key = {item.id}
      // item = {item}
      // Or we can spread objects as props like this ----->
      {...item} 
      />
      
      )
    })
    return (
      <div className="App">
      <Navbar/>
      <Hero/> 
      <section className='cards-list'>
        {cards}
      </section>
      
      <Contact/>

      {/* //Sidebar menu */}
      {/* <BrowserRouter>
      <SideBar>
      <Routes>
        <Route path = '/' element  = {<SideBar/>}/>
        <Route path = '/sidebar' element  = {<SideBar/>}/>
      </Routes>
      </SideBar>
      </BrowserRouter> */}

    </div>
  );
}


//Object destructuring
// const person = {
//   name: 'Ojas',
//   lastname: 'Ketkar',
//   age : '19'
// }

// let {name,age}= person
// console.log(name)


export default App;
