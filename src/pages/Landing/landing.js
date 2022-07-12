import classes from "./landing.module.css";
import { Text } from "../../constant";
import Dock from "../../components/Dock/dock";
import { useEffect } from "react";
import Star from "../../assets/star.png";
import Construction from "../../assets/images/Landing/construction.gif";
import Typed from "react-typed";

const Landing = () => {
  const handleScroll = (e) => {};
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <main className={`relative ${classes.main}`}>
        <div className={classes.text1}>
          <Text />
        </div>
        <div className={classes.star2}>
          <img src={Star} alt="" />
        </div>
        <div className={`${classes.container}`}>
          <h1 className="center t-bg mb-md">
            I'm Victor Ogunjobi, a software developer from Lagos Nigeria.
          </h1>
          <p className="center t-md">
            Passionate about high quality solutions for clients, coding to solve
            a problem by doing something better, faster, or easier. I ensure the
            product is involved in a process of continuous improvement and
            refinement to ensure that it is functioning at the highest level
            possible and achieving maximum client satisfaction.
          </p>
        </div>
        {/* <Typed
        strings={[
          "<p class='first'>Responsible for the look and feel of a website or application to ensure a seamless experience for users.</p>",
          "<p class='first'>Develops, designs and implements user-facing features for websites and applications using React.js</p>",
          "<p class='first'>Work with a team of developers, programmers, web designers, and project managers to work closely on a client’s software project.</p>",
        ]}
        typeSpeed={40}
        loop
      /> */}
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
      <main className={`absolute-center ${classes.mobile}`}>
        <img src={Construction} alt="" />
        <h1 className="center">
          Construction is ongoing for the mobile view 🥲
          <br />
          <br />
          Use a desktop or check back later, thank you 💜
        </h1>
      </main>
    </>
  );
};

export default Landing;
