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
  tools.forEach((tool) => {
    console.log(tool);
    const show = document.createElement("div");
    show.classList.add("col");
    show.innerHTML = `
    
    <div class="card h-100 p-3">
        <img src="${tool.image}" class="card-img-top" alt="...">
        <div class="card-body">
           <h5 class="card-title">Features <br>
           1.${tool.features[0]} <br>2.${tool.features[1]}<br>3.${tool.features[2]} </h5>
           <p class="card-text"></p>
         </div> <hr>
         <div class="card-body">
           <h5 class=" fs-1 card-title">${tool.name}</h5>
           <p class="card-text"></p>
         </div>
  </div>
    
    `;
    showUIDetails.appendChild(show);
  });
};
loadAI();
