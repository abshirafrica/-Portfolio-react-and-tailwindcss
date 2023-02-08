import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Main from "./components/Main";






function App() {
  return (
  
    <Router>
        <div className="max-w-4xl p-2 mx-auto">
            <Header />

           <Main />

            <Footer />

         
           
         
        </div>
          
      
    </Router>
    
  
  );
}

export default App;
