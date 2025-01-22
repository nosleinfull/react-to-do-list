import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import Uploady, { useItemProgressListener } from "@rpldy/uploady";
import ChunkedUploady from "@rpldy/chunked-uploady";
import DropZone from "./components/DropZone";
import UploadButton from "@rpldy/upload-button";


const LogProgress = () => {
  useItemProgressListener((item) => {
      console.log(`>>>>> (hook) File ${item.file.name} completed: ${item.completed}`);
  });

  return null;
}

export const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <ChunkedUploady
        destination={{ url: 'https://webhook.site/1aff4911-1cd7-4c77-8637-75c21c740000' }}
        chunkSize={50000}
        retries={3}
        parallel={3}
        multiple
      >
          <DropZone />
          <UploadButton/>
          <LogProgress/>
      </ChunkedUploady>
    </DndProvider>
  );
};

export default App
