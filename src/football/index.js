import {
    // StrictMode,
    // createContext,
    useState,
} from "react"
// import { createRoot } from "react-dom/client";
import {
    Routes,
    Route,
    // BrowserRouter,
} from "react-router-dom";

//Styles
import './styles/index.scss'

//Components
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import NavFooter from "./components/NavFooter";

// Use this if move to root(src) folder
// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//     <StrictMode>
//         <BrowserRouter>
///// COPY JSX FROM FUNCTION
//         </BrowserRouter>
//     </StrictMode>
// )

function FootballApp() {
    const [country, setCountry] = useState('Thailand')

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <input onChange={(e) => setCountry(e.target.value)} value={country} />
                <Routes>
                    <Route path="/" element={<Welcome country={country} />} />
                </Routes>
            </main>
            <footer>
                <NavFooter />
            </footer>
        </>
    )
}


export default FootballApp