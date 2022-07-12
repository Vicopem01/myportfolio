import classes from "./projects.module.css";
import Dock from "../../components/Dock/dock";
import Card from "../../components/Card/card";
import { data } from "../../constant";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Projects = () => {
  let { theme } = useContext(ThemeContext);
  return (
    <main className={classes.main}>
      <div>
        <h3>Featured Projects</h3>
        <p className={classes.fade}>Projects</p>
      </div>
      <div className={classes.cardContainer}>
        {data.map((item, index) => (
          <Card
            heading={item.heading}
            img={item.img}
            skills={item.skills}
            link={theme === "light" ? item.link1 : item.link2}
            key={index}
          />
        ))}
      </div>
      <Dock />
    </main>
  );
};

export default Projects;
