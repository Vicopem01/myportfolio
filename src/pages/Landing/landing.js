import classes from "./landing.module.css";
import { Text } from "../../constant";
import Dock from "../../components/Dock/dock";
import { useEffect } from "react";
import Star from "../../assets/star.png";

const Landing = () => {
  const handleScroll = (e) => {
    console.log(e);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className={`relative ${classes.main}`}>
      <div className={classes.text1}>
        <Text />
      </div>
      <div className={classes.star2}>
        <img src={Star} alt="" />
        {/* <StarLight /> */}
      </div>
      <div className={`${classes.container}`}>
        <h1 className="center t-bg mb-md">
          I'm Olanrewaju, a Product Designer from Lagos-State
        </h1>
        <p className="center t-md">
          I appreciate making easy users experience and planning magnificent
          computerized items. I carry organizations nearer to their users by
          distinguishing and giving reasonable answers for issues experienced by
          users while utilizing new or existing items, joining usefulness and
          style in my work to give comprehensive answers for a wide range of
          users.
        </p>
      </div>
      <div className={classes.text2}>
        <Text />
      </div>
      <div className={classes.star1}>
        <img src={Star} alt="" />
      </div>
      <div className={classes.dock}>
        <Dock />
      </div>
    </main>
  );
};

export default Landing;
