import React from "react";
import Image from 'react-bootstrap/Image'

const ListItemImg = (props) => {

  // const handleClick = props.onclick;
   const thumbnail = props.track.thumbnailUrl;
   const title = props.track.title;
   const onItemClicked = props.onclick;

 
  return (
    
    <div data-testid="onclickevent"
      className="ListItemImg"
      onClick={() => {
        onItemClicked(props.track);
      }}
    >
      <Image data-testid="imagethumbnail" className="img-thumbnail" id="thumbnail" src={thumbnail} alt="" rounded />&nbsp;&nbsp;
      {/* <span id="text">{title}</span> */}
    </div>
    
  );
};

export default ListItemImg;