import React from "react";
import { Button } from 'primereact/button';

function Links({ links }) {
    return (
        <div className="flex justify-content-center pt-4" >
            <div className="flex flex-column align-items-center" style={{ width: "40%" }}>
                {
                    links.map((link) => (
                        <a className="mt-4 w-full flex justify-content-center" href={link.url} target='_blank' rel="noopener noreferrer" style={{ backgroundColor: '#00e68a', textDecoration: 'none' }}>
                            <Button style={{ backgroundColor: '#00e68a', border: 'none' }} >
                                <i className={`pi pi-${link.favicon} px-2`}></i>
                                <span className=" flex align-items-center">{link.name}</span>
                            </Button>
                        </a>)
                    )
                }
            </div>
        </div>
    );
}

export default Links;