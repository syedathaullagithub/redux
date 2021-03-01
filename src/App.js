
import './App.css';
import ArrayRedux from './ArrayRedux';
import Counter from './Counter';
import Header from './Header';
import Name from './Name';
import { BrowserRouter as router,Link,Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';



function App() {

  return (
    <router>
    <div className="App">
      <Header header='Welcome to hacking app' />
      <Counter />
      <ArrayRedux />
      <Name />
      <Footer />
    </div>
    </router>
  );
}

export default App;
