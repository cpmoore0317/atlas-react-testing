import React, { useState } from "react";
import { PlayIcon, PauseIcon, ForwardIcon, BackwardIcon, ArrowsRightLeftIcon, SpeakerWaveIcon } from "@heroicons/react/24/solid";

type PlayControlsProps = {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
  disablePrevious: boolean;
  disableNext: boolean;
  onShuffleToggle: () => void;
  isShuffling: boolean;
  volume: number;
  onVolumeChange: (value: number) => void;
};

const PlayControls: React.FC<PlayControlsProps> = ({
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
  disablePrevious,
  disableNext,
  onShuffleToggle,
  isShuffling,
  volume,
  onVolumeChange,
}) => {
  const [speed, setSpeed] = useState(1); // State for speed (1x, 2x, 3x)

  const handleSpeedClick = () => {
    setSpeed((prevSpeed) => (prevSpeed === 3 ? 1 : prevSpeed + 1)); // Cycle through 1x, 2x, 3x
  };

  return (
    <div className="flex flex-col w-full">
      {/* Controls Row */}
      <div className="flex items-center justify-between w-full space-x-4">
        {/* Speed Button */}
        <button onClick={handleSpeedClick} className="text-gray-500 hover:text-black">
          {speed}x
        </button>

        {/* Rewind Button */}
        <button onClick={onPrevious} disabled={disablePrevious} className="text-gray-500 hover:text-black">
          <BackwardIcon className="h-6 w-6" />
        </button>

        {/* Play/Pause Button */}
        <button onClick={onPlayPause} className="text-gray-500 hover:text-black">
          {isPlaying ? (
            <PauseIcon className="h-8 w-8" />
          ) : (
            <PlayIcon className="h-8 w-8" />
          )}
        </button>

        {/* Forward Button */}
        <button onClick={onNext} disabled={disableNext} className="text-gray-500 hover:text-black">
          <ForwardIcon className="h-6 w-6" />
        </button>

        {/* Shuffle Button */}
        <button onClick={onShuffleToggle} className={`text-gray-500 hover:text-black ${isShuffling ? 'text-blue-500' : ''}`}>
          <ArrowsRightLeftIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Volume Controls */}
      <div className="flex items-center w-full mt-4 space-x-2">
        <SpeakerWaveIcon className="h-6 w-6 text-gray-500 hover:text-black" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => onVolumeChange(Number(e.target.value))}
          className="flex-1"
        />
      </div>
    </div>
  );
};

export default PlayControls;
