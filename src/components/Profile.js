import React from "react";

import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';


function Profile({ userProfile, total_links }) {
    const { name, bio, avatar } = userProfile
    return <div style={{ backgroundColor: 'white', width: "100%" }}>
        <div className="p-d-flex p-jc-center p-ai-center" style={{ backgroundColor: 'yellow' }}>
            <div>
                <Avatar
                    image={avatar}
                    size="xlarge"
                    shape="circle"
                    className="p-overlay-badge">
                    <Badge value={total_links} severity="info" />
                </Avatar>
                <h1>{name}</h1>
            </div>
        </div>
        <div style={{ backgroundColor: 'yellow' }}>
            <p>{bio}</p>
        </div>
    </div >;
}

export default Profile;