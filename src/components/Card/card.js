import classes from "./card.module.css";

const Card = ({ heading, img, skills, link }) => {
  return (
    <a
      className={classes.card}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p>{heading}</p>
      <img src={img} alt="" />
      <div>
        <span>{skills}</span>
      </div>
    </a>
  );
};

export default Card;
