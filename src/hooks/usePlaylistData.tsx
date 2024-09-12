import { useState, useEffect } from "react";

const usePlaylistData = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch playlist", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  return { data, loading };
};

export default usePlaylistData;
