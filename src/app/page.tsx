"use client";

import Sidebar from "./_components/Sidebar";
import NoteContent from "./_components/NoteContent";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <NoteContent />
    </div>
  );
}
