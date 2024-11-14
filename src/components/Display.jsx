import { useAtom } from "jotai";
import { listTodo } from "./DB";
import EditPopup from "./editPopup/EditPopup";
import { isEdit } from "./DB";
import { tempId } from "./DB";
import { isDelete } from "./DB";
import DeletePopup from "./deletePoup/DeletePopup";
import { filterChoosen } from "./DB";
import { filteredList } from "./DB";

import { useEffect } from "react";
const Display = () => {
    
    const [Lists] = useAtom(listTodo);
    const [editAbel, setIsEdit] = useAtom(isEdit);
    const [deleteAbel, setIsDelete] = useAtom(isDelete);
    const [currentId, setCurrentId] = useAtom(tempId);
    const [catagoryChoosen] = useAtom(filterChoosen);
    const [filteredListAtom, setFilteredList] = useAtom(filteredList)

    
    const handelFilter = () => {
        
        
        let updatedList = Lists.filter((item) => item.catagory === catagoryChoosen);
        if (catagoryChoosen === "All") {
            setFilteredList(Lists);
        } else {
            setFilteredList(updatedList);

        }
        
    }

    useEffect(() => {
        handelFilter();
        
    }, [catagoryChoosen, Lists]);


    const handelEdit = (id) => {
        if(!editAbel) {
            setIsEdit(true);
            setCurrentId(id);
        } else {
            setIsEdit(false);
        }
        
    }

    const handelDelete = (id) => {
        if (!deleteAbel) {
            setIsDelete(true);
            setCurrentId(id);
        } else {
            setIsDelete(false);
        }
    }
    return (
        <div className="space-y-4">
            {filteredListAtom.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-lg shadow-md border border-green-200">
                    <h2 className="text-2xl font-semibold text-green-800 mb-2">{item.title}</h2>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-sm text-green-600 mb-4">Category: {item.catagory}</p>
                    <div className="space-x-2">
                        <button 
                            onClick={() => handelEdit(item.id)}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                        >
                            Edit
                        </button>
                        <button 
                            onClick={() => handelDelete(item.id)}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
            
            {editAbel && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-xl">
                        <EditPopup idNum={currentId}/>
                    </div>
                </div>
            )}
            {deleteAbel && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-xl">
                        <DeletePopup idNum={currentId}/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Display;