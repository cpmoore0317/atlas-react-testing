import React from "react";
import { SpeakerWaveIcon } from "@heroicons/react/24/solid";

type VolumeControlsProps = {
  volume: number;
  onVolumeChange: (newVolume: number) => void;
};

const VolumeControls: React.FC<VolumeControlsProps> = ({ volume, onVolumeChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <SpeakerWaveIcon className="h-6 w-6 text-gray-500 hover:text-black" />
      <input
        id="volume"
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => onVolumeChange(Number(e.target.value))}
        className="cursor-pointer"
      />
    </div>
  );
};

export default VolumeControls;
