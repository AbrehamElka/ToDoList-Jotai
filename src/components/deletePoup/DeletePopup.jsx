import { useAtom } from "jotai";
import { listTodo } from "../DB";
import { isDelete } from "../DB";
const DeletePopup = ({idNum}) => {
    const [lists, setLists] = useAtom(listTodo);
    const [, setDelete] = useAtom(isDelete);

    const handelConfirm = () => {
        const newList = lists.filter((item) => item.id !== idNum);
        setLists(newList);
        setDelete(false);
    }
    const handelCancel = () => {
        setDelete(false);
    }
    return(
    <div className="bg-white p-6 rounded-lg shadow-xl w-96 text-center">
        <h1 className="text-xl font-semibold text-gray-800 mb-6">Are you sure you want to delete it?</h1>
        <div className="space-x-4">
            <button 
                onClick={handelConfirm}
                className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
                Yes
            </button>
            <button 
                onClick={handelCancel}
                className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
            >
                No
            </button>
        </div>
    </div>)
}

export default DeletePopup;