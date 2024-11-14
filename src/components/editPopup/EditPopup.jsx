import { useAtom } from "jotai";
import { listTodo, currentTitle, currentDescription, currentCatagory } from "../DB";
import { useEffect } from "react";
import { isEdit } from "../DB";

const EditPopup = ({ idNum }) => {

    const [lists, setLists] = useAtom(listTodo);
    const [currTitle, setCurrTitle] = useAtom(currentTitle);
    const [currDescription, setCurrDescription] = useAtom(currentDescription);
    const [currCatagory, setCurrCatagory] = useAtom(currentCatagory);
    const [, setEdit] = useAtom(isEdit);

    // Retrieve the item based on idNum
    const itemToEdit = lists.find(item => item.id === idNum);

    useEffect(() => {
        if (itemToEdit) {
            // Set atom states only if itemToEdit is found
            setCurrTitle(itemToEdit.title);
            setCurrDescription(itemToEdit.description);
            setCurrCatagory(itemToEdit.catagory);
        }
    }, [itemToEdit]);

    const handleTitleChange = (event) => {
        setCurrTitle(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setCurrDescription(event.target.value);
    };
    const handleCatagoryChange = (event) => {
        setCurrCatagory(event.target.value);
    };

    const handleSubmit = () => {
        const updatedList = lists.map(
            (item) => item.id === idNum ? 
            {...item, title: currTitle, description: currDescription, catagory: currCatagory} :
            item
        );
        setLists(updatedList);
        setEdit(false);
    }

    if (!itemToEdit) return <p>Loading...</p>; // Fallback if item is not found yet

    return (
        <div className="bg-white p-6 rounded-lg shadow-xl w-96">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Edit Todo</h2>
            <div className="space-y-4">
                <input 
                    type="text" 
                    value={currTitle} 
                    onChange={handleTitleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input 
                    type="text" 
                    value={currDescription} 
                    onChange={handleDescriptionChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <select 
                    value={currCatagory} 
                    onChange={handleCatagoryChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <option value="work">Work</option>
                    <option value="school">School</option>
                    <option value="other">Other</option>
                </select>
                <div className="space-x-2 pt-4">
                    <button 
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                    >
                        Submit
                    </button>
                    <button 
                        onClick={() => setEdit(false)}
                        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditPopup;
