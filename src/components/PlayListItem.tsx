import React from "react";

type PlayListItemProps = {
  title: string;
  artist: string;
  duration: string;
  isSelected: boolean;
  onClick: () => void;
};

const PlayListItem: React.FC<PlayListItemProps> = ({ title, artist, duration, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex justify-between items-center py-2 ${isSelected ? "bg-gray-300" : ""}`}
    >
      <div className="flex-grow w-32">
        <h3 className="text-sm font-bold ml-1">{title}</h3>
        <p className="text-xs text-gray-500 ml-1">{artist}</p>
      </div>
      <span className="text-xs text-gray-500 text-right ml-72 mr-1">{duration}</span>
    </div>
  );
};

export default PlayListItem;
