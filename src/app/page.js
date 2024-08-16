"use client"

import QuillEditor from "@/components/QuillEditor";
import { useState } from "react";

export default function Home() {
  const [desc, setDesc] = useState("")
  return (
   
    <div className="m-4">
      <h1>Description</h1>
      <QuillEditor value={desc} onChange={setDesc} />
    </div>
  );
}
