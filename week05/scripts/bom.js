const addChapter = document.querySelector("button");
const userInput = document.querySelector("#favchap");
const userVersesList = document.querySelector("ul");
const chaptersArray = getChapterList() || [];


addChapter.addEventListener("click", function() {
    if (userInput.value.trim() != "") {
        displayList(userInput.value);
        chaptersArray.push(userInput.value);
        setChapterList();
        userInput.value = "";
        userInput.focus();
    }
});

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    if (item !== "") {
        let li = document.createElement("li");
        let deleteVerse = document.createElement("button")
        deleteVerse.setAttribute("id", "close-button");
        deleteVerse.setAttribute("aria-label", "Close");
        deleteVerse.addEventListener("click", function() {
            userVersesList.removeChild(li);
            deleteChapter(li.textContent);
            item.focus();
        } );
        li.textContent = item;
        deleteVerse.textContent = "❌";
        userVersesList.append(li);
        li.append(deleteVerse);
        item = "";
        userInput.focus();
    }

    else {
        item.focus();
    }
}

function setChapterList() {
    localStorage.setItem('myFavoriteBOMChapters',JSON.stringify(chaptersArray));
}

function getChapterList() {
    // localStorage.getItem(JSON.parse('myFavoriteBOMChapters'));
    return JSON.parse(localStorage.getItem('myFavoriteBOMChapters'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList()
}