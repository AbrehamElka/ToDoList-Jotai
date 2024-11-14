import { useAtom } from "jotai";
import { isEmptyTitle } from "../DB";
const EmptyTitleWarning = () => {
    const [, setIsEmpty] = useAtom(isEmptyTitle);
    const handelOk = () => {
        setIsEmpty(false);
    }
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
                <p className="text-red-600 text-center font-semibold mb-4">
                    Can not add a ToDo item with empty title!
                </p>
                <div className="flex justify-center">
                    <button 
                        onClick={handelOk}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    >
                        Ok
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EmptyTitleWarning;