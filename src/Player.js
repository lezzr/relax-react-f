import playerBtnPlay from "./assets/icons/player-play.svg";
import playerBtnPause from "./assets/icons/player-pause.svg";
import playerBtnRwnd from "./assets/icons/player-rewind.svg";
import playerBtnFwd from "./assets/icons/player-forward.svg";
import playerBtnMute from "./assets/icons/player-mute.svg";
import React, { useState, useRef, useEffect, useMemo } from 'react';
import track1 from "./assets/sounds/Aqua_Caelestis.mp3"
import track2 from "./assets/sounds/Ennio_Morricone.mp3"
import track3 from "./assets/sounds/River_Flows_In_You.mp3"
import track4 from "./assets/sounds/Summer_Wind.mp3"

export default function Player() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5); // Initial volume
    const [currentTrack, setCurrentTrack] = useState(0);

    // Wrap the initialization of trackList in useMemo to prevent unnecessary re-renders
    const trackList = useMemo(() => [
        { title: 'Track 1', src: track1 },
        { title: 'Track 2', src: track2 },
        { title: 'Track 3', src: track3 },
        { title: 'Track 4', src: track4 },
    ], []);


    const playTrack = (trackIndex) => {
        setCurrentTrack(trackIndex);
        audioRef.current.src = trackList[trackIndex].src; // Set the audio source

        // Listen for the 'canplaythrough' event before calling play()
        audioRef.current.addEventListener('canplaythrough', () => {
            audioRef.current.play(); // Start playing the selected track
            setIsPlaying(true); // Update the play state
        });

        // Load the audio (this will trigger the 'canplaythrough' event)
        audioRef.current.load();
    };


    const playPauseToggle = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const playNextTrack = () => {
        let nextTrack = currentTrack + 1;
        if (nextTrack >= trackList.length) {
            nextTrack = 0; // Wrap to the first track if at the end
        }
        setCurrentTrack(nextTrack);
        audioRef.current.src = trackList[nextTrack].src; // Set the audio source

        // Listen for the 'canplaythrough' event before calling play()
        audioRef.current.addEventListener('canplaythrough', () => {
            audioRef.current.play(); // Start playing the next track
            setIsPlaying(true); // Update the play state
        });

        // Load the audio (this will trigger the 'canplaythrough' event)
        audioRef.current.load();
    };

    const playPrevTrack = () => {
        let prevTrack = currentTrack - 1;
        if (prevTrack < 0) {
            prevTrack = trackList.length - 1; // Wrap to the last track if at the beginning
        }
        setCurrentTrack(prevTrack);
        audioRef.current.src = trackList[prevTrack].src; // Set the audio source

        // Listen for the 'canplaythrough' event before calling play()
        audioRef.current.addEventListener('canplaythrough', () => {
            audioRef.current.play(); // Start playing the previous track
            setIsPlaying(true); // Update the play state
        });

        // Load the audio (this will trigger the 'canplaythrough' event)
        audioRef.current.load();
    };

    const handleVolumeChange = (newVolume) => {
        setVolume(newVolume); // Update the volume state
        audioRef.current.volume = newVolume; // Update the audio volume
    };


    // Add a useEffect hook to handle audio source changes
    useEffect(() => {
        if (audioRef.current) {
            // Set the audio source
            audioRef.current.src = trackList[currentTrack].src;

            // Load the audio
            audioRef.current.load();
        }
    }, [currentTrack, trackList]);

    return (
        <div>
            <div className="index_player">
                <div className="player">
                    <audio ref={audioRef} volume={volume} />
                    <div className="all-controls">
                        <div className="volume-controls">
                            <button className="play player-icon" onClick={playPauseToggle}>
                                <img
                                    src={isPlaying ? playerBtnPause : playerBtnPlay}
                                    alt={isPlaying ? 'pause' : 'play'}
                                    width="50px"
                                    height="50px"
                                />
                            </button>
                            <input
                                type="range"
                                className="range"
                                value={volume}
                                onChange={(e) => handleVolumeChange(e.target.value)}
                                min="0"
                                max="1"
                                step="0.01"
                            />
                            <button className="mute player-icon">
                                <img src={playerBtnMute} alt="mute" />
                            </button>
                        </div>
                        <div className="player-controls">
                            <button className="play-prev player-icon" onClick={playPrevTrack}>
                                <img src={playerBtnRwnd} alt="prev" width="60px" height="60px" />
                            </button>
                            <button className="play-next player-icon" onClick={playNextTrack}>
                                <img src={playerBtnFwd} alt="next" width="60px" height="60px" />
                            </button>
                        </div>
                    </div>
                    <ul className="play-list">
                        {trackList.map((track, index) => (
                            <li key={index} className={currentTrack === index ? 'active' : '' } onClick={() => playTrack(index)}>
                                {track.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
