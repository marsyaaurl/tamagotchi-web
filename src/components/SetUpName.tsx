interface SetUpNameProps {
    name: string;
    setName: (value: string) => void;
    handleSubmit: () => void;
}

const SetUpName: React.FC<SetUpNameProps> = ({name, setName, handleSubmit}) => {
    return (
        <>
            <div className='flex flex-col items-center bg-transparent justify-center h-screen'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-y-2 px-5 py-3 rounded-xl items-center justify-center bg-yellowbutton'>
                    <label htmlFor='name' className='bg-transparent font-semibold text-lg'>Enter Your Pet Name</label>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='rounded-lg w-full px-3 py-1 border-1 text-md bg-orangeplaceholder'
                        placeholder='Asep Cukurukuk'
                    />
                    <button type='submit' className='bg-orangebutton text-white w-fit px-3 py-1 rounded-lg hover:bg-gray-500'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default SetUpName;