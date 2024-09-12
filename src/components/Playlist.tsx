import React from "react";
import PlayListItem from "./PlayListItem";

type PlaylistProps = {
  songs: { title: string; artist: string; duration: string }[];
  currentSongIndex: number;
  onSongSelect?: (index: number) => void;
};

const Playlist: React.FC<PlaylistProps> = ({ songs, currentSongIndex, onSongSelect }) => {
  return (
    <div className="bg-white p-4 rounded-md h-full overflow-auto">
      <h2 className="text-black text-lg font-bold mb-4">Playlist</h2>
      <ul className="space-y-2">
        {songs.map((song, index) => (
          <li
            key={index}
            className={`flex ${index === currentSongIndex ? 'bg-gray-200' : ''}`}
            onClick={() => onSongSelect && onSongSelect(index)}
          >
            <PlayListItem
              title={song.title}
              artist={song.artist}
              duration={song.duration}
              isSelected={index === currentSongIndex}
              onClick={() => onSongSelect && onSongSelect(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
