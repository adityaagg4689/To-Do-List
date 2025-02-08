import { myArray } from ".";
export const list = function () {
    const a = document.querySelector("#list");
    a.innerHTML = "";
    let storedArray = JSON.parse(localStorage.getItem("myArray")) || [];
    storedArray.forEach((obj, index) => {
        const wrapper = document.createElement("div");
        const del = document.createElement("button");
        const ink = document.createElement("input");
        const sel = document.createElement("select");
        sel.textContent = "Priority";
        const opt = document.createElement("option");
        opt.textContent = "High";
        const pt = document.createElement("option");
        pt.textContent = "Mid";
        const t = document.createElement("option");
        t.textContent = "Low";
        sel.appendChild(opt);
        sel.className="sel";
        opt.className="opt";
        pt.className="op";
        t.className="t";
        sel.appendChild(pt); sel.appendChild(t);
        ink.type = "date";
        del.textContent = "Delete";
        wrapper.style.border = "1px solid black";
        wrapper.style.padding = "10px";
        wrapper.style.margin = "10px";
        wrapper.style.width = "80%";
        wrapper.style.display = "flex";
        wrapper.className = "wrapper";
        wrapper.style.flexDirection = "column";
        const div = document.createElement("div");
        div.className = "div";
        div.style.color = "red";
        div.textContent = obj.name;
        const input = document.createElement("input");
        input.className = "input";
        input.style.height = "40px";
        ink.value=obj.da||"";
        sel.value=obj.prio||"";
        input.style.width = "100%";
        input.style.fontSize = "18px";
        input.value = obj.note;
        ink.className = "ink";
        del.className = "del";
        const submitBtn = document.createElement("button");
        submitBtn.className = "submit";
        submitBtn.textContent = "Update";
        submitBtn.style.marginTop = "10px";

        submitBtn.addEventListener("click", () => {
            storedArray[index].note = input.value;
            storedArray[index].da=ink.value;
            storedArray[index].prio=sel.value ;
          localStorage.setItem("myArray", JSON.stringify(storedArray));
        //   list();
        });
wrapper.appendChild(sel);
        wrapper.appendChild(div);
        wrapper.appendChild(input);
        wrapper.appendChild(submitBtn);
        wrapper.appendChild(del);
        wrapper.appendChild(ink)
            ;
        a.appendChild(wrapper);
        del.addEventListener("click", () => {
            myArray.splice(index, 1);
            localStorage.setItem("myArray", JSON.stringify(myArray));
            a.removeChild(wrapper);
            list();

        });
    });
};

document.addEventListener("DOMContentLoaded", list);