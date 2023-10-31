import React, { ReactNode } from "react";

interface ContentProps {
  content: ReactNode;
}

export default function Caroucel({ content }: ContentProps) {
  return (
    <div className="flex flex-row  overflow-x-scroll carousel">{content}</div>
  );
}
