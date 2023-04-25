import { BrowserRouter as Router,Routes,Route,
NavLink } from "react-router-dom";


export const Menu = () => {
  return (
    <Router>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">about</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">login</NavLink>
                    </li>
                </ul>
                <Routes>
                    <Route path="about" element={<h1>
                        Soy el about
                    </h1>}></Route>
                    <Route path="home" element={<h1>
                        El home más chimba
                    </h1>}></Route>
                    <Route path="login" element={
                        <h2>Puta logueate</h2>
                    }></Route>
                    <Route path="/"element={
                        <h1>Soy el home</h1>
                    }></Route>
                    <Route path="*"element={
                        <h3>Eres un error puto</h3>
                    }></Route>
                </Routes>
            </nav>
    </Router>
  )
}
