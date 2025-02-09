/* eslint-disable react/prop-types */
import React from 'react'
import VideoPlayer from './VideoPlayer';
import videojs from 'video.js';
const Videojs = ({ onClose }) => {
    const playerRef = React.useRef(null);
    const videoJsOptions = {
        autoplay: true, 
        muted: true, 
        controls: true, 
        responsive: true, 
        fluid: true,
        loop: true, 
        sources: [{
          src: '/sampleVideo.mp4',
          type: 'video/mp4'
        }],
        poster: 'https://ik.imagekit.io/ikmedia/example_video.mp4/ik-thumbnail.jpg?tr=w-1200,h-680'
      };

      const handlePlayerReady = (player) => {
        playerRef.current = player;
        player.ready(() => {
            if (player.requestFullscreen) {
              player.requestFullscreen();
            }
          });
        player.on('waiting', () => {
          videojs.log('player is waiting');
        }); 
    
        player.on('dispose', () => {
          videojs.log('player will dispose');
        });

        player.on("fullscreenchange", () => {
            if (!document.fullscreenElement) {
              onClose();
            }
          });
      };
    
  return (
    <div className=''>
         <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
         
    </div>
  )
}

export default Videojs