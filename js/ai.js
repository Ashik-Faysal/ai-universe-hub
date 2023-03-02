const loadAI = () => {
  const URL = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => displayAI(data.data.tools))
    .catch((err) => console.log(err));
};
const displayAI = (tools) => {
  console.log(tools);
  const showUIDetails = document.getElementById("show-ui-details");
  // display 10 Phone
  const showAll = document.getElementById("show-all");
  let visibleTools = tools.slice(0, 6);
  if (tools.length > 6) {
    showAll.classList.remove("d-none");
  }

  const showTools = (toolsToDisplay) => {
    showUIDetails.innerHTML = "";
    toolsToDisplay.forEach((tool) => {
      console.log(tool);
      const show = document.createElement("div");
      show.classList.add("col");
      show.innerHTML = `
    
<div class="card h-100 p-3">
    <img src="${tool.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class=" fs-2">Features</h5>
      <p class="card-text text-body-secondary">1.${tool.features[0]} <br>2.${tool.features[1]}<br>3.${tool.features[2]} </p>
    </div> <hr>
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h5 class="fs-2 card-title">${tool.name}</h5>
        <p class="card-text text-body-secondary"><i class="fa-solid fa-calendar-days mx-2 fw-bold"></i>${tool.published_in}</p>
      </div>
      <button class="btn fs-3"  data-bs-toggle="modal" data-bs-target="#AIDetailsModal">
        <i class="fa-solid fa-arrow-right border p-2 bg-danger bg-opacity-10 rounded-circle"></i>
      </button>
    </div>
  </div>
    
    `;
      showUIDetails.appendChild(show);
    });
    if (toolsToDisplay.length === tools.length) {
      showAll.classList.add("d-none");
    } else {
      showAll.classList.remove("d-none");
    }
  };
  showAll.addEventListener("click", () => {
    visibleTools = tools;
    showTools(visibleTools);
  });

  showTools(visibleTools);
};
loadAI();
