import { useAtom } from "jotai";
import { filterChoosen } from "../DB";

const FilterButton = () => {
    const [, setCatagoryChoosen] = useAtom(filterChoosen);
    const handelFilter = (event) => {
        setCatagoryChoosen(event.target.value);
    }
    return(
    <div className="space-x-2">
        <button onClick={handelFilter} value="All" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">All</button>
        <button onClick={handelFilter} value="work" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Work</button>
        <button onClick={handelFilter} value="school" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">School</button>
        <button onClick={handelFilter} value="other" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Other</button>
    </div>);
}

export default FilterButton;