import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import "./reactplayer.scss";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./listItem.scss";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://www.youtube.com/watch?v=7TavVZMewpY";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://heroichollywood.com/wp-content/uploads/2019/02/The-Lion-King-Disney-Banner-1280x720.jpg"
        alt=""
      />
      {isHovered && (
        <>
          <div className="player">
            <ReactPlayer
            allow="autplay; encrypted-media"
              url={trailer}
              playing={true}
              width={"225"}
              height={"140"}
              playsinline
              fluid={false}
              objectFit={"cover"}
              controls={false}
              loop={true}
              style={{
                width: "225px",
                height: "140px",
                position: "absolute",
                objectFit: "cover",
                top: "0",
                left: "0"
              }}
            />
          </div>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow />
              <Add />
              <ThumbUpAltOutlined />
              <ThumbDownAltOutlined />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 52 minutes</span>
              <span className="limit">+12</span>
              <span>2020</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              provident nobis, officiis nihil id velit molestiae error sapiente
              consectetur incidunt vero aliquam mollitia maiores numquam
              voluptate laboriosam sit corrupti! Optio!
            </div>
            <div className="genre">Drama</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
