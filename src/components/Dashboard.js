import React from "react";
import Header from "./Header";
import Viewpage from "./Viewpage";

function Dashboard() {
    return (
        <div className="min-h-auto min-w-screen">
            <div className="grid">
                <div style={{ width: "10%", backgroundColor: "#00e68a" }}>
                    <Header />
                </div>
                <div className="flex flex-column align-items-center m-h-auto" style={{ width: "90%", backgroundColor: '#f0f5f5' }}>
                    <section style={{ width: '90%' }}>
                        <Viewpage />
                    </section>
                </div>
            </div>
        </div >
    );
}

export default Dashboard;