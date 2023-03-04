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
      <ol class="card-text text-body-secondary">
      ${tool.features[0] ? `<li>${tool.features[0]}</li>` : ''}
      ${tool.features[1] ? `<li>${tool.features[1]}</li>` : ''}
      ${tool.features[2] ? `<li>${tool.features[2]}</li>` : ''}
      </ol>
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
  `;
  // leftSide modal feature 
let tool = Object.entries(tools.features); 
document.getElementById("left-features").innerHTML ="";
tool.forEach(function (item) {
  // console.log(item[1].feature_name);
  document.getElementById("left-features").innerHTML += `<li>${item[1].feature_name}</li>`
});

// rightSide modal Feature
document.getElementById("right-features").innerHTML="";
let value= tools.integrations;
value.forEach(function (item) {
  console.log(item);
  document.getElementById("right-features").innerHTML += `<li>${item? item : "No data"}</li>`
});


console.log(tools);
  const rightSide= document.getElementById("modal-body-right");
  rightSide.innerHTML=`
           <img class="img-fluid" src="${tools.image_link[0]}" alt="">
           <p class="fs-3 m-4 position-absolute top-0 end-0 badge border border-light  bg-danger p-2">${(tools.accuracy.score)*100}% accuracy</p>
           <h3 class="text-center my-3 fw-bold">${tools.input_output_examples[0].input}</h3>
           <p class="text-center">${tools.input_output_examples[0].output}</p>
  `;
  // console.log(tools.features);
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
