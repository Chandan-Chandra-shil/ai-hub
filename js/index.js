
const loadTools = () => {
  //async
  /*  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  showTools(data.data.tools); */
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then((res) => res.json())
    .then((data) =>  
    showTools(data.data.tools.slice(0, 6)));
};

const showTools = (tools) => {
  const toolsContainer = document.getElementById("tools-container");
  toolsContainer.innerHTML = "";
  
  
  tools.forEach((tool) => {
    console.log();
    const div = document.createElement("col");
    div.classList.add("col");
    div.innerHTML = `
    <div class="border p-4 rounded-2 ">
        <img src="${tool.image}" class="card-img-top " >
       <h5 class="card-title mb-1 mt-2 font-semibold">Features <br></h5>
      <div class="card-body p-0 m-0">
        <ol>
            <li>${tool.features[0]}</li>
            <li>${tool.features[1]}</li>
           <li>${tool.features[2] ? tool.features[2] : "No Found! "}</li>
        </ol>
      </div>
         <hr>
      <div class="d-flex justify-content-between">
      <div>
         <h5 class="card-title mb-1">${tool.name} <br></h5>
        <h6 class="card-title mb-2">
           <ion-icon name="calendar-clear-outline"></ion-icon> ${
             tool.published_in
           } <br>
        </h6>
      </div>
      <div  class="border  rounded-4 p-3 bg-danger-subtle">
          <span  data-bs-toggle="modal" data-bs-target="#moreDetails">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>
       </div>
       </div>
   </div>
    
  
    `;
    toolsContainer.appendChild(div);
  });



};

// onload function hare 
// const waitingSpinner = isLoading => {
//   const waitingYou = document.getElementById('waiting-you');
//   if (isLoading) {
//     waitingYou.classList.remove('d-none');
//   }
//   else {
//     waitingYou.classList.add('d-none');
//   }
  
// }

// all data show function hare 
const showAllData = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
  .then((res) => res.json())
  .then((data) => showTools(data.data.tools));
  
  
  
}

loadTools();