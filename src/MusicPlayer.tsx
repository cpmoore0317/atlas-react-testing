import React, { useState } from "react";
import PlayControls from "./components/PlayControls";
import Playlist from "./components/Playlist";
import CurrentlyPlaying from "./components/CurrentlyPlaying";
import usePlaylistData from "./hooks/usePlaylistData";

const MusicPlayer: React.FC = () => {
  const { data: playlist, loading } = usePlaylistData();
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Track current song
  const [isPlaying, setIsPlaying] = useState(false); // Play/pause state
  const [isShuffling, setIsShuffling] = useState(false); // Shuffle state
  const [volume, setVolume] = useState(50); // Volume state (0-100)

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleNext = () => {
    if (isShuffling) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      setCurrentSongIndex(randomIndex);
    } else if (currentSongIndex < playlist.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  const toggleShuffle = () => {
    setIsShuffling((prev) => !prev);
  };

  const handleVolumeChange = (value: number) => {
    setVolume(value);
  };

  const currentSong = playlist[currentSongIndex] || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white text-black rounded-lg shadow-thin">
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Currently Playing Section */}
        <div className="flex-1 mb-6 md:mb-0">
          <CurrentlyPlaying
            coverArt={currentSong.coverArt || "/placeholder.png"}
            title={currentSong.title || "Unknown Title"}
            artist={currentSong.artist || "Unknown Artist"}
          />
          <div className="mb-4">
            <PlayControls
              isPlaying={isPlaying}
              onPlayPause={handlePlayPause}
              onNext={handleNext}
              onPrevious={handlePrevious}
              disablePrevious={currentSongIndex === 0}
              disableNext={currentSongIndex === playlist.length - 1}
              onShuffleToggle={toggleShuffle}
              isShuffling={isShuffling}
              volume={volume}
              onVolumeChange={handleVolumeChange}
            />
          </div>
        </div>

        {/* Playlist Section */}
        <div className="flex-1">
          <Playlist
            songs={playlist}
            currentSongIndex={currentSongIndex}
            onSongSelect={(index) => setCurrentSongIndex(index)}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
