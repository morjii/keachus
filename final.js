

// déclaration de variables pour hide / show les sections
const planningBtn     = document.getElementById("planningTitlejs");
const courseBtn       = document.getElementById("ingredientTitlejs");
const shopContainer   = document.getElementById("shopContainerjs");
const recipeSection   = document.getElementById("recipeSectionjs");

// déclaration de variables pour barrer la liste de courses
const itemBtns        = document.querySelectorAll(".shopBtn"); // input
const shopItems       = document.querySelectorAll(".shopItem"); //li
const shopList        = document.querySelector(".shopList");


planningBtn.addEventListener("click", () => {
// créer une classList pour les sections à show / hide
shopContainer.classList = "hide";
recipeSection.classList = "show";
})

courseBtn.addEventListener("click", () =>{
// créer une classList pour les sections à show / hide
shopContainer.classList = "show";
recipeSection.classList = "hide";
})

// barrer

const crossItem = el => {
    console.log(el)
}

itemBtns.forEach(btn => {
    btn.addEventListener("change", e => {
        if (btn.checked) {
            console.log(btn.parentElement)
            btn.parentElement.classList.add("linethrough")
        } else {
            btn.parentElement.classList.remove("linethrough")
        }
    })
});

// function linethrough(){
//     shopItems.classList.Add("linethrough");
// }











