import React from "react";
import { Button } from 'primereact/button';

function Links({ links }) {
    return <div>
        <div className="flex flex-column align-items-center" style={{ width: "70%", backgroundColor: 'white' }}>'
            {
                links.map((link) => (
                    <Button className="p-p-3 p-m-2 mt-4" >
                        <i className={'pi pi-youtube px-2'}></i>
                        <span className="p-px-3">{link.name}</span>
                    </Button>
                ))
            }
        </div>
    </div>
}

export default Links;