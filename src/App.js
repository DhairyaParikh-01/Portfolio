import './App.scss';
// import { Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout/index.js';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Portfolio from './Component/Portfolio';
import {createBrowserRouter, Route, RouterProvider, Routes,} from "react-router-dom";

  // 3️⃣ Router singleton created
const router = createBrowserRouter([
  
  {
    path: "/", element: <Layout />,
    children: [
      { index:true, element: <Home />},
      {path: "/Portfolio", element: <Home />},
      {path: "about", element: <About />},
      {path: "contact", element: <Contact />},
      {path: "projects", element: <Portfolio />},
    ]
  },
  
  { path: "*", element: <Root /> },
  // {path:"/about", element:<About/>},
  // {path:"/contact", element:<Contact/>},
  // {path:"/projects", element:<Portfolio/>}
]);

// function App() {
//   return (
//       <Routes>
        //  <Route index element={<Layout/>}/>
//          <Route path="/Portfolio" element={<Home/>}>
//          <Route path="/about" element={<About/>}/>
//          <Route path="/contact" element={<Contact/>}/> 
//          <Route path="/projects" element={<Portfolio/>}/>
//         </Route>
//       </Routes>
//   );
// }

function Root() {
  // `BrowserRouter` component removed, but the <Routes>/<Route>
  // component below are unchanged
  return (
    <Routes>
          <Route element={<Layout/>}/>
          {/* <Route path="/" element={<Home/>}/> */}
          {/* <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/projects" element={<Portfolio/>}/> */}
    </Routes>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
