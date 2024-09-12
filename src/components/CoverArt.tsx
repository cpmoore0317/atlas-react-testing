import React from "react";

type CoverArtProps = {
  imageUrl: string;
  altText: string;
};

const CoverArt: React.FC<CoverArtProps> = ({ imageUrl, altText }) => {
  return (
    <img
      src={imageUrl}
      alt={altText}
      className="w-full h-auto rounded-md object-cover"
    />
  );
};

export default CoverArt;
