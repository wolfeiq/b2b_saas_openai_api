'use client'

import MuxPlayer from '@mux/mux-player-react';


interface PageProps {
    id: string;
  }
 

  const Page: React.FC<PageProps> = (props) => {
  return (
    <div className='containervid'>
      <MuxPlayer
      playbackId={props.id}
      thumbnailTime={4}
      metadata={{
      }}
    />
    </div>
  );
}

export default Page;