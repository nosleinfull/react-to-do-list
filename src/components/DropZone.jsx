import React from 'react'
import { useDrop } from "react-dnd";
import { NativeTypes } from 'react-dnd-html5-backend';
import { useUploady } from "@rpldy/uploady";

export default function DropZone() {
  const { upload } = useUploady();

  const [{ isDragging }, dropRef] = useDrop({
      accept: NativeTypes.FILE,
      collect: ((monitor) => ({
          isDragging: !!monitor.isOver()
      })),
      drop: (item) => {
          upload(item.files);
      },
  });

  return (
    <div ref={dropRef} className={isDragging ? "drag-over dropZone" : "dropZone"}>
        <p>Drop File(s) Here</p>
    </div>
  )
}
