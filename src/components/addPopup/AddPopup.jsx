import { useAtom } from "jotai";
import { ispopup, titleTodo, descriptionTodo, catagoryTodo, listTodo } from "../DB";
import EmptyTitleWarning from "./EmptyTitleWarning";
import { isEmptyTitle } from "../DB";

const AddPopup = () => {
    const [, setPopup] = useAtom(ispopup);
    const [lists, setLists] = useAtom(listTodo);

    const [isEmpty, setEmpty] = useAtom(isEmptyTitle);
    const [titleAtom, setTitle] = useAtom(titleTodo);
    const [descriptionAtom, setDescription] = useAtom(descriptionTodo);
    const [catagoryAtom, setCatagory] = useAtom(catagoryTodo);
    setCatagory("work")
    const handelTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const handelDescriptionChange = (event) => {
        setDescription(event.target.value);
    }
    const handelCatagoryChange = (event) => {
        setCatagory(event.target.value);
    }
    const handelSubmit = () => {
        if (titleAtom.trim() === "") {
            console.log("Can Not Submit Empty Title");
            setEmpty(true);
            return;
        }
        const newTodo = {
            id: lists.length + 1,
            title: titleAtom,
            description: descriptionAtom,
            catagory: catagoryAtom
        }
        setLists([...lists, newTodo]);
        setPopup(false);
        setTitle("");
        setCatagory("");
        setDescription("");
    }
    return(<div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h1 className="text-2xl font-bold text-green-800 mb-4">Add New Todo</h1>
        <form className="space-y-4">
            <div>
                <span className="block text-sm font-medium text-gray-700 mb-1">Title</span>
                <input 
                    type="text" 
                    onChange={handelTitleChange} 
                    value={titleAtom}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>
            <div>
                <span className="block text-sm font-medium text-gray-700 mb-1">Description</span>
                <input 
                    type="text" 
                    onChange={handelDescriptionChange} 
                    value={descriptionAtom}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select 
                    value={catagoryAtom} 
                    onChange={handelCatagoryChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <option value="work">Work</option>
                    <option value="school">School</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </form>
        <div className="mt-6 space-x-2">
            <button 
                onClick={handelSubmit}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
                Submit
            </button>
            <button 
                onClick={() => setPopup(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
            >
                Close
            </button>
        </div>
        {isEmpty && <EmptyTitleWarning />}
    </div>)
}

export default AddPopup;