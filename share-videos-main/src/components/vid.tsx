'use client'
import Video from 'next-video';
import myVideo from '/Users/mariakoryakina/Desktop/videoMVP/video/videos/ai vid for website next.mp4';
import MuxPlayer from '@mux/mux-player-react';


interface PageProps {
    id: string;
  }
 

  const Page: React.FC<PageProps> = (props) => {
  return (
    <MuxPlayer
      playbackId={props.id}
      metadata={{
      }}
    />
  );
}

export default Page;