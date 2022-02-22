import React from "react";

import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

function Profile({ userProfile, links_count }) {
    const { name, bio, avatar } = userProfile;
    const currentPath = `https://url-aggregat0r.herokuapp.com/${name}`;
    return (
        <div className="flex justify-content-center">
            <div className="pt-8 align-items-center" style={{ width: "55%" }}>
                <div className="flex justify-content-center">
                    <Avatar
                        image={avatar}
                        size="xlarge"
                        shape="circle"
                        className="p-overlay-badge">
                        <Badge value={links_count} severity="info" />
                    </Avatar>
                </div>
                <div className="flex justify-content-center">
                    <h2>@</h2>
                    <h2 >{name}</h2>
                </div>
                <div className="flex justify-content-center h-1">
                    <p className="p-1 border-1">Share profile: {currentPath}</p>
                </div>
                <div className="flex justify-content-center text-center border-top-2">
                    <p>{bio}</p>
                </div>
            </div >
        </div>
    );
}

export default Profile;