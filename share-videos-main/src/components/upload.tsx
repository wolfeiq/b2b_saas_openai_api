import MuxUploader from '@mux/mux-uploader-react';
import React from "react";



interface UploaderProps {
    id: string;
  }
  const id = "";
  const Uploader: React.FC<UploaderProps> = (props) => {
  return (
    <div>
  <MuxUploader endpoint={props.id}/>
</div>
  );
};

export default Uploader;




  
