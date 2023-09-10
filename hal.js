const haloweenData = [
  {
    title: "shop by category",
    lists: [
      "Halloween outdoor decor",
      "Halloween indoor decor",
      "Halloween candy",
      "Halloween costumes",
      "Halloween fashion",
      "Halloween accessories",
      "Halloween makeup",
    ],
    id: "shop-by-category",
  },
  {
    title: "the haunt is on",
    lists: [
      "Kids' halloween costumes from $5",
      "Halloween candy under $10",
      "Halloween accessories from $0.98",
    ],
    id: "the-haunt",
  },
  {
    title: "Come as you aren't",
    lists: ["Halloween accessories", "Halloween fashion", "Halloween pets"],
    id: "comes-as",
  },
  {
    title: "Party time",
    lists: ["The ultimate Halloween bash", "Halloween snacks & sips"],
    id: "partytime",
  },
  {
    title: "Get festive",
    lists: [
      "Trick-o-treat supplies",
      "Halloween toys, movies & more",
      "Halloween PJs",
      "Halloween arts & crafts",
    ],
    id: "getfestive",
  },
  {
    title: "Cozy harvest decor",
    lists: ["Fall decor"],
    id: "cozy",
  },
];

let categoreisDiv = document.getElementById("categoriesHolder");

haloweenData.forEach((cat) => {
  console.log("ss");
  let categoryCreated = document.createElement("div");
  categoryCreated.innerHTML = `
    <div
                class="list-cat d-flex justify-content-between align-items-center mb-2"
                data-bs-toggle="collapse"
                href="#${cat.id}"
                role="button"
                aria-expanded="false"
                aria-controls="${cat.id}"
              >
                <a class="nav-link" style="font-weight: bold"
                  >${cat.title}</a
                >
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div class="collapse multi-collapse" id="${cat.id}">
                <div class="d-flex flex-column gap-1">
                  ${cat.lists.map((l) => {
                    return `<a href="#" class="nav-link mb-1">
                      ${l}
                    </a>`
                  }).join('')}
                  
                </div>
              </div>
              <hr>
    `;

  categoreisDiv.appendChild(categoryCreated);
});

const lists = document.getElementsByClassName("list-cat");
for (let i = 0; i < lists.length; i++) {
  lists[i].onclick = () => {
    if (lists[i].getAttribute("aria-expanded") === "true") {
      lists[i].children[1].classList.remove("fa-chevron-down");
      lists[i].children[1].classList.add("fa-chevron-up");
    } else {
      lists[i].children[1].classList.remove("fa-chevron-up");
      lists[i].children[1].classList.add("fa-chevron-down");
    }
  };
}
