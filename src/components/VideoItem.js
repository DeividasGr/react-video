import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
   return (
      //paspaudus ant tevynio div suveikia eventHandler su specifiniu video 
      <div onClick={() => onVideoSelect(video)} className="video-item item">
         <img
            className="ui image"
            src={video.snippet.thumbnails.medium.url} 
            alt={video.snippet.channelTitle}
         />
         <div className="content">
            <div className="header">{video.snippet.title}</div>
         </div>
      </div>
   );
};

export default VideoItem;