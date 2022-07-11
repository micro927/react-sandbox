import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import App from "./App";
import Welcome from "./components/welcome";
import Game from "./tictactoe";
import FootBallApp from "./football/";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/football/*" element={<FootBallApp />} />
                <Route path="/game/*" element={<Game />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
