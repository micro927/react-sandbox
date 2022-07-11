// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import {
    Routes,
    Route,
    // BrowserRouter,
} from "react-router-dom";

//Styles
import './styles/index.scss'

//Components
import FirstPage from "./components/firstpage";
import Navbar from "./components/navbar";

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
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                {/* <BrowserRouter> */}
                <Routes>
                    <Route path="/" element={<FirstPage />} />
                </Routes>
                {/* </BrowserRouter> */}
            </main>
            <footer></footer>
        </>
    )
}


export default FootballApp