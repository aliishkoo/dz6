const input = document.querySelector("input");
const lists = document.querySelector(".lists");
const resetbtn = document.querySelector("button");


const list = [];

const createReverseList = () => {
    const text = input.value;

    if (text) {
        list.push(text);

        input.value = "";
        lists.innerHTML = "";
    }

    list.forEach(item => {
        // console.log(item.split("").reverse().join(""), "item");
        const p = document.createElement("li");
        p.innerHTML = item.split("").reverse().join("");
        lists.append(p);
    });
    console.log(list);
};

input.onkeydown = (e) => {
    if (e.key === "Enter") {
        createReverseList();
    }
};

resetbtn.onclick = () => {
    list.length = 0;
    lists.remove();
    console.log(list);
};
