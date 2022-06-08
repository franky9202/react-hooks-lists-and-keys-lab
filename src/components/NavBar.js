import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const naviBar = links.map((link) => {
    console.log(link);
    return <a href={"#" +link} key={link}>{link}</a>
  })
  return(
    <nav>
      {naviBar}
    </nav>
  )
}

export default NavBar;
