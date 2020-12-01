import React, { useLayoutEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import './Meme.css';

const Meme = ({ id, topText, bottomText, imgUrl }) => {
  const dispatch = useDispatch();
  const container = useRef();

  const handleDelete = () => {
    dispatch({
      type: 'REMOVE_MEME',
      payload: { id }
    });
  }

  useLayoutEffect(() => {
    const div = container.current;
    // https://stackoverflow.com/questions/623172/how-to-get-image-size-height-width-using-javascript/623174
    const image = new Image();
    image.onload = function() {
        div.style.backgroundImage = `url(${imgUrl})`;
        div.style.height = `${(this.height/this.width)*20}vw`;
    }
    image.src = imgUrl;
  }, [imgUrl]);

  return (
    <div
      className="Meme"
      ref={container}
    >
      <span className="Meme-topText">{topText}</span>
      <span className="Meme-bottomText">{bottomText}</span>
      <span className="Meme-delete" onClick={handleDelete}>&times;</span>
    </div>
  )
}

export default Meme;