import { useState } from 'react';
import GamePage from './GamePage';
import SetUpName from '../components/SetUpName';

const SetUp = () => {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!name.trim()) {
      alert('Please enter a name before playing!');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="relative w-full h-screen">
      <div className="z-0">
        <GamePage name={name} isSubmitted={isSubmitted} />
      </div>

      {!isSubmitted && (
        <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center bg-transparent">
          <SetUpName
            name={name}
            setName={setName}
            handleSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default SetUp;
