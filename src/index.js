import "./styles.css";
import { list } from "./list.js";

let myArray = JSON.parse(localStorage.getItem("myArray")) || []; 
const btn = document.querySelector("#mulla");
btn.addEventListener("click", () => {
    const value = document.getElementById("input").value.trim();
    if (!value) return; 

    const obj = {
        name: value,
        note: "", 
        prio:"",
        da:"",
    };

    myArray.push(obj); 
    localStorage.setItem("myArray", JSON.stringify(myArray));
    document.getElementById("input").value = ""; 

    list(); 
});

export { myArray };