const loadAI = () => {
  const URL = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => displayAI(data.data.tools))
    .catch((err) => console.log(err));
};
const displayAI = (tools) => {
  // console.log(tools);
  const showUIDetails = document.getElementById("show-ui-details");
  // display 10 Phone
  const showAll = document.getElementById("show-all");
  let visibleTools = tools.slice(0, 6);
  if (tools.length > 6) {
    showAll.classList.remove("d-none");
  }
  // document.getElementById("spinner").classList.remove("d-none");
  const showTools = (toolsToDisplay) => {
    showUIDetails.innerHTML = "";
    toolsToDisplay.forEach((tool) => {
      // console.log(tool);
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
      <button onclick="showModalDetails('${tool.id}')" class="btn fs-3"  data-bs-toggle="modal" data-bs-target="#AIDetailsModal">
        <i class="fa-solid fa-arrow-right border p-2 bg-danger bg-opacity-10 rounded-circle"></i>
      </button>
    </div>
  </div>
    
    `;
      showUIDetails.appendChild(show);
    });
    // stop spinner 
document.getElementById("spinner").classList.add("d-none");
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

const showModalDetails = (id) => {
  const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => openModalDetails(data.data))
    .catch((err) => console.log(err));
};
const openModalDetails = (tools) => {
  const leftSide = document.getElementById("modal-body-left");
  leftSide.innerHTML = `
  
  <h3>${tools.description ? tools.description : "No Description"}</h3>
  <div class="d-md-flex justify-content-between gap-2">
      <div class="fs-3 fw-semibold bg-body-secondary text-success p-1">${
        tools.pricing[0].price
      } Basic</div>
      <div class="fs-3 fw-semibold bg-body-secondary text-warning p-1">${
        tools.pricing[1].price
      } Pro</div>
      <div class="fs-3 fw-semibold bg-body-secondary text-danger p-2">${
        tools.pricing[2].price
      }</div>
    </div>
    <div class="d-md-flex justify-content-between gap-2 mt-4">
      
      <div class="mx-2">
      <h3>Features</h3>
          <ul>
              <li>${tools.features[1] ? tools.features[1].feature_name : ""}</li>
              <li>${tools.features[2] ? tools.features[2].feature_name : ""}</li>
              <li>${tools.features[3] ? tools.features[3].feature_name : ""}</li>
              <li>${tools.features[4] ? tools.features[4].feature_name : ""}</li>
          </ul>
      </div>
        <div class="mx-2">
        <h3>Integrations</h3>
          <ul>
            <li>${tools.integrations[0] ? tools.integrations[0] : ""}</li>
            <li>${tools.integrations[1] ? tools.integrations[1] : ""}</li>
            <li>${tools.integrations[2] ? tools.integrations[2] : ""}</li>
            <li>${tools.integrations[3] ? tools.integrations[3] : ""}</li>
            <li>${tools.integrations[4] ? tools.integrations[4] : ""}</li>
          </ul>
        </div>
    </div>
  `;

  const rightSide= document.getElementById("modal-body-right");
  rightSide.innerHTML=`
           <img class="img-fluid" src="${tools.image_link[0]}" alt="">
           <p class="fs-3 m-4 position-absolute top-0 end-0 badge border border-light  bg-danger p-2">${(tools.accuracy.score)*100}% accuracy</p>
           <h3 class="text-center my-3 fw-bold">${tools.input_output_examples[0].input}</h3>
           <p class="text-center">${tools.input_output_examples[0].output}</p>
  `;
  console.log(tools);
};

const sortByDate = () => {
  const URL = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const sortedTools = data.data.tools.sort((a, b) => new Date(a.published_in) - new Date(b.published_in));
      displayAI(sortedTools);
    })
    .catch((err) => console.log(err));
};
