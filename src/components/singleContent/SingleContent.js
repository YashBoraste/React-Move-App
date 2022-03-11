import { Badge } from '@material-ui/core';
import React from 'react';
import { img_300, unavailable } from '../../config/config';
import ContentModal from '../ContentModel/ContentModel';
import "./SingleContent.css";

const SingleContent = ({
  id,
  poster,
  title,
  language,
  date,
  vote_average,
  
}) => {


  return (

    <ContentModal  id={id}>
      <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"} />
      <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} />
      <b className='title'>{title}</b>
      <div className='subData'>
        <span className='language'>Language: {language}</span>
        <span className='date'>{date}</span>
      </div>
    </ContentModal>
  );
}

export default SingleContent