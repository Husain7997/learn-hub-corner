import logo from './logo.svg';
import './App.css';
import { RouterProvider } from "react-router-dom";
import { routes } from './Routes/Route/Routes';
import theme from './Sheard/Navbar/Navigationbar.css'
function App() {
  return (
    <div className={`${theme}`}>
      <RouterProvider router={routes}> </RouterProvider>
    </div>
  );
}


export default App;
