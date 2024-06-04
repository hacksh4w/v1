import Home from './pages/Home';
import Project from './pages/Project';
import './index.css';
import './App.css';
import SlideTabsExample from './pages/Try';
export default function App() {
  return (
    <div className="w-full mx-auto overflow-hidden">
    {/* Code for landing section 
        <div className="bg-primary w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
        </div>
  */} <SlideTabsExample />
      <Project />
      <Home />
      <div className="flex flex-col p-2">
        <h1 className="text-3xl font-bold underline font-serif">
          Hello world!
        </h1>
        <div className='border border-amber-50 p-3 m-2 text-white background-blur' > <h2> yellooo</h2></div>
        <div className='border-b m-2 text-white'> <h2> yellooo</h2></div>
      </div>
    </div>
  )
}
