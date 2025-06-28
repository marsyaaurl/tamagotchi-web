interface SetUpNameProps {
  name: string;
  setName: (value: string) => void;
  handleSubmit: () => void;
}

const SetUpName: React.FC<SetUpNameProps> = ({ name, setName, handleSubmit }) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-transparent'>
      <form onSubmit={onSubmit} className='bg-yellowbutton p-4 rounded-lg flex flex-col gap-3'>
        <label htmlFor='name' className="bg-transparent text-center">Enter Your Pet Name</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='rounded px-3 py-1 bg-orangeplaceholder'
          placeholder='Asep Cukurukuk'
        />
        <button type='submit' className='bg-orangebutton text-white px-3 py-1 rounded'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SetUpName;
