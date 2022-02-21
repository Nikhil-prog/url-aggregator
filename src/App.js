import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css";

import Profile from "./components/Profile";
import { useEffect, useState } from "react";
import Links from "./components/Links";

function App() {

  const [profile, setProfile] = useState({
    "name": "unknown",
    "bio": "-",
    "avatar": "",
    "links": []
  });

  useEffect(() => {
    fetch("/data/user1.json")
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);

  return (

    <div className="flex justify-content-center flex-column align-items-center pt-4" style={{ backgroundColor: 'red' }}>
      <Profile userProfile={profile} total_links={profile.links.length} />
      <Links links={profile.links} />
    </div >
  );
}

export default App;
