import { Provider } from 'react-redux';
import './App.css';
import Body from './component/Body';
import Head from './component/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Maincontainer from './component/Maincontainer';
import Watchpage from './component/Watchpage';




const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children:[
      {
        path:"/",
        element:<Maincontainer/>
      },
      {
        path:"/watch",
        element:<Watchpage/>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={AppRouter} />
      </div>
    </Provider>



  );
}

export default App;
