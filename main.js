class GlobalManager {
	constructor() {
		this.tocSel = document.getElementById("TOCSel");
		this.entryField = document.getElementById("EntryField");
		this.searchButton = document.getElementById("SearchButton");
	}
}	// end of GlobalManager class
const G = new GlobalManager();

G.tocSel.appendChild(document.createElement("option"));
for (let i = 0; i < indexData.length; i++) {
	let name = indexData[i][0];
	let val = indexData[i][1]
	let elem = document.createElement("option");
	elem.text = name;
	elem.value = val;
	G.tocSel.appendChild(elem);
}
G.entryField.focus();
document.addEventListener("keydown", (evt) => {
	if (evt.key == "Enter") {
		search();
	} else if (evt.key == "Escape") {
		clearField();
	}
}, false);

function windowOpen(page) {
	window.open(baseURL + page, "検索結果");
	G.entryField.focus();
}

function search() {
	G.tocSel.selectedIndex = 0;
	let target = G.entryField.value;
	if (target.length == 0)  return;
	target = target.substring(0, 1);
	for (let p = 1; p < mojiDB.length; p++) {
		if (mojiDB[p].includes(target)) {
			windowOpen(p+5);
			return;
		}
	}
	alert("見つかりませんでした。");
}

function tocChange(val) {
	G.entryField.value = "";
	windowOpen(val);
}

function clearField() {
	G.tocSel.selectedIndex = 0;
	G.entryField.value = "";
	G.entryField.focus();
}
