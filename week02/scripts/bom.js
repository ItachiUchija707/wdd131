const addChapter = document.querySelector("button");
const userInput = document.querySelector("#favchap");
const userVersesList = document.querySelector("ul");

addChapter.addEventListener("click", function() {
    if (userInput.value.trim() !== "") {
        const li = document.createElement("li");
        const deleteVerse = document.createElement("button")
        deleteVerse.setAttribute("id", "close-button");
        deleteVerse.setAttribute("aria-label", "Close");
        deleteVerse.addEventListener("click", function() {
            userVersesList.removeChild(li);
            userInput.focus();
        } );
        li.textContent = userInput.value;
        deleteVerse.textContent = "❌";
        userVersesList.append(li);
        li.append(deleteVerse);
        userInput.value = "";
        userInput.focus();
    }

    else {
        userInput.focus();
    }
});


