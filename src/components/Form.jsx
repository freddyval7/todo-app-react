import {generarId} from "../helpers"

function Form({chores, setChores, chore, setChore}) {

    const handleSubmit = (e) => {
        e.preventDefault()

        if(chore === ""){
            return null
        }

        const obj = {
            name: chore,
            id: generarId(),
            checked: false,
        }

        setChores([...chores,obj])
        setChore("")
    }

    return (
        <form className='w-5/6 md:w-1/2 mx-auto mt-5'>
            <div className='w-full flex justify-between'>
                <input
                    className='border-2 rounded-md px-5 py-2 w-3/5 md:w-3/4'
                    type="text"
                    placeholder='add details'
                    value={chore}
                    onChange={(e) => setChore(e.target.value)}
                />
                <input
                    className='bg-blue-500 hover:bg-blue-400 transition-colors text-white font-semibold py-2 px-8 rounded-md cursor-pointer'
                    type="submit"
                    value="Add"
                    onClick={handleSubmit}
                />
            </div>
        </form>
    )
}

export default Form