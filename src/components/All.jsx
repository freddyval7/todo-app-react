import Form from "./Form"

function All({ chore, setChore, chores, setChores, checked, setChecked }) {

    const handleCheck = (position, chore) => {
        const updateCheckedState = checked.map((value, index) => index === position ? !value : value)
    
        chore.checked = updateCheckedState[position]
        setChecked(updateCheckedState)
    }

    return (
        <div>
            <Form
                chore={chore}
                setChore={setChore}
                chores={chores}
                setChores={setChores}
            />

            <ul className="w-5/6 md:w-1/2 mx-auto mt-5">
                {chores && chores.length ? (
                    <>
                        {chores.map((chore, index) => (
                            <form key={chore.id} name='form' className='flex items-center gap-1 mb-2'>
                                <input
                                    defaultChecked = {false}
                                    checked={chore.checked}
                                    onChange={() => handleCheck(index, chore)}
                                    type="checkbox"
                                    value={chore.name}
                                />
                                <label className={`font-medium ${chore.checked === true ? "line-through" : ""}`}htmlFor={chore.name}>{chore.name}</label>
                            </form>
                        ))}
                    </>
                ) : (
                    <h1>There isn't any chore, add the first one</h1>
                )}
            </ul>
        </div>
    )
}

export default All