import Links from "./Links";
import Profile from "./Profile";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Viewpage() {
    const { username } = useParams();
    const [profile, setProfile] = useState({
        "name": "unknown",
        "bio": "-",
        "avatar": "",
        "links": []
    });

    useEffect(() => {
        fetch(`/data/${username}.json`)
            .then((response) => response.json())
            .then((data) => setProfile(data));
    }, [username]);

    return (
        <div className="flex flex-column align-items-center m-h-auto min-h-screen" style={{ backgroundColor: '#f0f5f5' }}>
            <div className="w-full">
                <Profile userProfile={profile} links_count={profile.links.length} />
                <Links links={profile.links} />
            </div>
            <footer style={{ marginTop: 'auto', height: 'auto', paddingBottom: '1rem' }}> All rights reserved.</footer>
        </div>
    );
}

export default Viewpage;