import { Routes,Route,Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import User from "./components/User";


function App() {
  return (
    <div>
      <nav>
        <ul>
        {/* // React-router-dom ile bir diğer sayfaya geçmek için oluşturduğumuz butona tıkladığımızda sayfa yenilenmiyor sadece değişmesini istediğimiz alana gidiyoruz. */}
          <li>
            <Link to="/">Home</Link>
              {/* <a href="#">Home</a> 
          {/* Buraya a tagiyle de link ekleyebilirdim ancak o zaman sayfa yenilenirdi bu yüzden Link to kullanıyoruz.*/} 
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/about" element={<About /> }/>
        {/* NESTED ---------------- İç içe geçmiş route */}
        <Route   path="/users" element={<Users /> }>
          {/* User componenti de Users içerisinde nested(iç içe geçmiş şeklinde)görüntüleneceği için User'ı Users'ın içine sardım. */}
          <Route  path=":id" element={<User />}/>
          {/* Parametreyi v6'da bu şekilde gönderiyoruz. */}
       </Route>
      </Routes>
    </div>
  );
}

export default App;
