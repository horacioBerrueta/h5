
import './App.css'
import MainImage from './components/MainImage';
import MainImage2 from './components/MainImage2/Image2';
import Button1 from './components/Buttons/button';
import Button2 from './components/Buttons/button2';
import Button3 from './components/Buttons/button3';
import Text1 from './components/Texts/Text1';
import Text2 from './components/Texts/Text2';
import Text3 from './components/Texts/Text3';
import Text4 from './components/Texts/Text4';
import Text5 from './components/Texts/Text5';
import Text6 from './components/Texts/Text6';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <>
      <div><MainImage /></div>
      
      <div className="flex space-x-4 justify-center mt-10"><Button1 /><Button2 /></div>
      
      <div className="flex justify-center items-center mt-20 py-4 px-8"><Text2 /></div>

      <div className="flex justify-center items-center  py-0 px-8"><Text1 /></div>

      <div className="flex justify-center items-center py-4 px-8 mt-20"><Text3 /></div>

      <div className="flex justify-center items-center py-0 px-8"><Text4 /></div>

      <div className="flex space-x-4 justify-center mt-20"> <Button3 /></div>
      
      <div className="w-auto flex justify-center items-center mt-20"><MainImage2/></div>

      <div className="flex justify-center items-center py-4 px-8 mt-20"><Text5 /></div>

      <div className="flex justify-center items-center py-0 px-8"><Text6 /></div>

      <Footer />
    
    
    
    
    </>
  );
};

export default App;