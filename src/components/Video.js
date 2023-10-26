import Button from "./Button";
import Thumbnail from "./Thumbnail";
 
const Video = ({img,title,desc}) => {
  return (
    <div className="video">
      <Thumbnail img={img} />
      <div className="text">
        <a href="https:google.com">
        <h3> {title}</h3>
        <p> {desc} </p>
      </a>
      </div>
      
      <Button text={"+"} />
    </div>
  );
};

export default Video;
