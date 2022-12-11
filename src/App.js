
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import OnlineCourses from './component/Details/OnlineCourses/OnlineCourses';
import Quize from './component/Details/Quiz/Quize';
import TechMax from './component/Details/TechMax/TechMax';
import Home from './component/Home';

import Main from './Lauout/Main';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/tecmax',
          element:<TechMax></TechMax>
        },
        {
          path:'/quize',
          element:<Quize></Quize>
        },
        {
          path:'/coures',
          element:<OnlineCourses></OnlineCourses>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className='w-4/5 mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
