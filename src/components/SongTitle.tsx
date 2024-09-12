import React from "react";

type SongTitleProps = {
  title: string;
  author: string;
};

const SongTitle: React.FC<SongTitleProps> = ({ title, author }) => {
  return (
    <div className="text-left">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-500">{author}</p>
    </div>
  );
};

export default SongTitle;
