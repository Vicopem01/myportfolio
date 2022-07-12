import { Link } from "react-router-dom";
import {
  Behance,
  Blog,
  Dark,
  Home,
  LinkedIn,
  Mail,
  Projects,
  Twitter,
} from "../../constant/svgs";
import classes from "./dock.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import Avatar from "../../assets/images/Dock/avatar.png";

const Dock = () => {
  let { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };
  return (
    <div className={`flex ${classes.container}`}>
      <div className={classes.circle}>
        <img src={Avatar} alt="avatar" />
      </div>
      <span className={classes.line}></span>
      <Link to="/" className={classes.home}>
        <p>Home</p>
        <Home />
      </Link>
      <Link to="/projects" className={classes.projects}>
        <p>Projects</p>
        <Projects />
      </Link>
      <a
        className={classes.blog}
        href="https://medium.com/me/stories/drafts"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Blog</p>
        <Blog />
      </a>
      <a
        className={classes.behance}
        href="https://www.behance.net/ajaoafeez"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Behance</p>
        <Behance />
      </a>
      <span className={classes.line}></span>
      <a
        className={classes.linkedIn}
        href="https://www.linkedin.com/in/ajao-afeez-olanrewaju-78844210a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>LinkedIn</p>
        <LinkedIn />
      </a>
      <a
        className={classes.twitter}
        href="https://twitter.com/Righteous_man13"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Twitter</p>
        <Twitter />
      </a>
      <a
        className={classes.mail}
        href="mailto:Ajaoafeez93@gmail.com?subject=Hi%20Afeez&body=I%20saw%20your%20portfolio%20and%20"
        rel="noopener noreferrer"
      >
        <p>Mail</p>
        <Mail />
      </a>
      <div className={classes.dark} onClick={handleClick}>
        <p>Dark</p>
        <Dark />
      </div>
    </div>
  );
};

export default Dock;
