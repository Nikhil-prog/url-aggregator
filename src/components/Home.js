import React from "react";
import { ReactHookFormDemo } from "./Form/SignInForms";

function Home() {
    return (
        <div className="grid min-h-screen">
            <div className="w-8 flex flex-column align-items-center p-8">
                <img className="align-items-center" src="./images/logo.png" alt='' style={{ width: "40%" }} />
                <h1 className="p-4">URL Aggregator - All you need is one Link</h1>
                <h3 className="text-center">
                    URL Aggregator is a platform where a user can add various links
                    and create a public URL that they can then share with anyone. Connect audiences to all of your content with just one link.
                </h3>
            </div>
            <div className="w-4" style={{ backgroundColor: "#00e68a" }}>
                <div className="h-full" >
                    <ReactHookFormDemo />
                </div>
            </div>
        </div >
    );
}

export default Home;