import Trash from "../assets/trash-outline.svg"
import Swal from "sweetalert2"

function Completed({chore, setChore, chores, setChores, checked}) {

  const choresCompleted = chores.filter(chore => chore.checked === true)

  const handleDelete = id => {
    const choresDeleted = chores.filter(chore => chore.id !== id)
    Swal.fire({
      title: 'Do you want to delete the chore?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Deleted!', '', 'success')
        setChores(choresDeleted)
      } 
    })
  } 

  const handleDeleteAll = () => {
    Swal.fire({
      title: 'Do you want to delete all completed chores?',
      showDenyButton: true,
      confirmButtonText: 'Delete All',
      denyButtonText: `Don't delete`,
    }).then((result) => {
      const choresAllDeleted = chores.filter(chore => chore.checked === false)
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Deleted!', '', 'success')
        setChores(choresAllDeleted)
      } 
    })
  }

  return (
    <ul className="w-5/6 md:w-1/2 mx-auto mt-5 flex flex-col items-end">
      {chores && chores.length ? (
        <>
          {choresCompleted.map((chore, index) => (
            <div key={chore.id} className='flex justify-between items-center w-full mb-2'>
              <div className="flex gap-1">
                <input
                  checked={true}
                  readOnly
                  type="checkbox"
                  value={chore.name}
                />
                <label className="font-medium line-through" htmlFor={chore.name}>{chore.name}</label>
              </div>
              <button
                onClick={() => handleDelete(chore.id)}
              >
                <ion-icon className="text-xs cursor-pointer" src={Trash}></ion-icon>
              </button>
            </div>
          ))}
        </>
      ) : chores && choresCompleted.length ? (
        <h1>There isn't any chore completed</h1>
      ) : null}
      <button
       className="bg-red-500 hover:bg-red-400 transition-colors text-white flex items-center px-8 py-3 rounded-md mt-5 gap-2 w-3/6 md:w-2/6 justify-self-end"
       onClick={handleDeleteAll}
      >
        <ion-icon className="text-xs cursor-pointer" src={Trash}></ion-icon>
        <span>Delete All</span>
      </button>
    </ul>
  )
}

export default Completed