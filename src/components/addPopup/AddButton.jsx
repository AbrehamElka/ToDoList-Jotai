import { useAtom } from "jotai";
import { ispopup } from "../DB";
import AddPopup from "./AddPopup";
const AddButton = () => {
    const [popup, setPopup] = useAtom(ispopup); 
    
    const handleAdd = () => {
        if (!popup) {
            setPopup(true); 
        } else {
            setPopup(false)
        }
    };

    return (
        <div>
            <button 
                onClick={handleAdd}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
            >
                + Add Todo
            </button>
            {popup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <AddPopup />
                </div>
            )}
        </div>
    );
};

export default AddButton;
