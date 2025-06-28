import { useState, useEffect } from 'react';
import Background from "../../public/assets/background.png";
import Happy1 from "../../public/assets/Happy1.png";
import Happy2 from "../../public/assets/Happy2.png";
import Bored1 from "../../public/assets/Bored1.png";
import Bored2 from "../../public/assets/Bored2.png";
import Angry1 from "../../public/assets/Angry1.png";
import Angry2 from "../../public/assets/Angry2.png";
import GameOver from "../../public/assets/GameOver.png";

interface GamePageProps {
    name: string;
    isSubmitted?: boolean;
}

const GamePage: React.FC<GamePageProps> = ({name, isSubmitted}) => {
    const moodImage = {
        Happy1: Happy1,
        Happy2: Happy2,
        Bored1: Bored1,
        Bored2: Bored2,
        Angry1: Angry1,
        Angry2: Angry2,
        GameOver: GameOver,
    }
    const [energy, setEnergy] = useState(44);
    const [mood, setMood] = useState<'Happy1' | 'Happy2' | 'Bored1' | 'Bored2' | 'Angry1' | 'Angry2' | 'GameOver'>('Happy1');

    useEffect(() => {
        if(!isSubmitted) return;
        const interval = setInterval(() => {
            setEnergy((prev) => Math.max(prev - 10, 0));
        }, 2000);

        return () => clearInterval(interval);
    }, [isSubmitted])

    useEffect(() => {
        if (energy <= 0) {
            setMood('GameOver');
        } else if (energy <= 6) {
            setMood('Angry2');
        } else if (energy <= 10) {
            setMood('Angry1');
        } else if (energy <= 16) {
            setMood('Bored2');
        } else if (energy <= 24) {
            setMood('Bored1');
        } else if (energy <= 36) {
            setMood('Happy2');
        } else {
            setMood('Happy1');
        }
    }, [energy]);

    return (
        <>
            <div className="flex items-center justify-center min-h-screen w-screen">
                <div className="items-center justify-start w-[400px] h-[500px] bg-white flex flex-col px-10 py-10 rounded-tl-[40px] rounded-br-[40px] shadow-md">
                    <div>
                        <img src={Background} className="w-[300px] h-auto relative" />
                        <div className="absolute bg-transparent top-[28%] left-[20%] md:top-[13%] md:left-[40%] ">
                            <h3 className="bg-transparent text-white">{name}'s Mood</h3>
                            <div className="bg-gray-300 rounded-lg w-44 h-5 hover:scale-105 transition">
                                <div className="rounded-lg h-5 stroke-black bg-greenbutton transition-all duration-200" style={{ width: `${(energy / 44) * 100}%`}}></div>
                            </div>
                        </div>
                        <img src={moodImage[mood]} className="absolute w-40 items-center justify-center top-[32%] left-[33%] md:top-[20%] md:left-[44%] bg-transparent" />
                        <div className="absolute bg-transparent bottom-60 left-[70%] md:bottom-12 md:left-[56%] -translate-x-1/2 flex flex-col items-center">
                            <button onClick={() => setEnergy ((prev) => Math.min(prev + 2, 44))} className="w-14 h-14 rounded-full bg-yellowbutton text-black font-bold shadow-md hover:scale-105 transition">
                                FEED
                            </button>
                            <div className="flex gap-10 mt-2 bg-transparent">
                                <button onClick={() => setEnergy ((prev) => Math.min(prev + 1, 44))} className="w-14 h-14 rounded-full bg-greenbutton text-black font-bold shadow-md hover:scale-105 transition">
                                PLAY
                                </button>
                                <button onClick={() => setEnergy ((prev) => Math.max(prev - 44, 0))} className="w-14 h-14 rounded-full bg-redbutton text-black font-bold shadow-md hover:scale-105 transition">
                                END
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default GamePage;