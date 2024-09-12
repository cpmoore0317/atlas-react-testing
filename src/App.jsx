import Footer from "./components/Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <div className="w-full max-w-6xl">
        <MusicPlayer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
