import React from 'react';
import VideoItem from './VideoItem';
//perduodamas onVideoSelect is App.js
const VideoList = ({videos, onVideoSelect}) => {
  const renderedList = videos.map((video) => {
      return (
      <VideoItem 
         key={video.id.videoId} 
         onVideoSelect={onVideoSelect} 
         video={video}
      />
      );
   });
   //props ateina is App.js VideoList
   return (
      <div className="ui relaxed divided list">{renderedList}</div>
   )
};


export default VideoList;