import { atom } from 'jotai';

// for editing
export const tempId = atom(1);
export const currentTitle = atom("");
export const currentDescription = atom("");
export const currentCatagory = atom("");

// for the popups
export const ispopup = atom(false);
export const isEdit = atom(false);
export const isDelete = atom(false);


export const listTodo = atom([
    {
        id: 1,
        title: "Do three LeetCode",
        description: "Need to reach 60 for A2SV",
        catagory: "work"
    },
    {
        id: 2,
        title: "Clean House",
        description: "it's dirty",
        catagory: "other"
    },
    {
        id: 3,
        title: "Study",
        description: "prepare for exams",
        catagory: "school"
    }
]);

export const titleTodo = atom("");
export const descriptionTodo = atom("");
export const catagoryTodo = atom("");


export const filterChoosen = atom("All");
export const filteredList = atom([]);
