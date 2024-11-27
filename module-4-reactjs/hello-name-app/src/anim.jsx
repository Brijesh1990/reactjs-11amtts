import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import '../public/assets/css/anim.css'
import 'animate.css'
var nm="Rakesh patel"
createRoot(document.getElementById("demo-app")).render(

    <StrictMode>
        <div className="content">
            <h1>My name is :<b className="anm">{nm}</b></h1>
        </div>
    </StrictMode>
)