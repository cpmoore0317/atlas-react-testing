import React from "react";

type CurrentlyPlayingProps = {
  coverArt: string;
  title: string;
  artist: string;
};

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({ coverArt, title, artist }) => {
  return (
    <div className="text-left mb-4">
      <img
        src={coverArt || "/placeholder.png"}
        alt="Cover Art"
        className="w-32 h-32 object-cover rounded-md"
      />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500">{artist}</p>
    </div>
  );
};

export default CurrentlyPlaying;
