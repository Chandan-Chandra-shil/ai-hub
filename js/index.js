const loadTools = () => {
 
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showTools(data.data.tools.slice(0, 6)));
};

// modal more details
const moreDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => moreDetailsDisplay(data));
};

const moreDetailsDisplay = (detail) => {
  console.log(detail.data);
  const moreDetailsModal = document.getElementById("more-detail-modal");
  moreDetailsModal.innerHTML = `
    <div class="  d-flex gap-2 ">
         <div class=" w-50 bg-danger-subtle border border-danger rounded p-5 ">
         <h4 class="mb-4">${detail.data.description}</h4>
         <div class="d-flex gap-2 text-center justify-content-center align-content-center fw-semibold ">
            <div class="bg-light  border text-success  fs-4 rounded  ">
            <span>${
              detail.data.pricing[0].price
                ? detail.data.pricing[0].price
                : "free of cost"
            } </span>
            <span>${detail.data.pricing[0].plan} </span>

            </div>
            <div class="bg-light border rounded  text-warning fs-4  ">
              <span>${
                detail.data.pricing[1].price
                  ? detail.data.pricing[1].price
                  : "free of cost"
              }</span>
              <span>${detail.data.pricing[1].plan}</span>
              
            </div>
             <div class="bg-light border rounded text-danger fs-4  ">
             
             <span>${
               detail.data.pricing[2].price
                 ? detail.data.pricing[2].price
                 : "free of cost"
             }</span>
             <span>${detail.data.pricing[2].plan}</span>
             </div>
            </div>
            <div class="d-flex justify-content-between mt-4">
            <div>
                <h4>Features</h4>
                <li>${
                  detail.data.features[1].feature_name
                    ? detail.data.features[1].feature_name
                    : "No data Found"
                }</li>
                <li>${
                  detail.data.features[2].feature_name
                    ? detail.data.features[2].feature_name
                    : "No data Found"
                }</li>
                <li>${
                  detail.data.features[3].feature_name
                    ? detail.data.features[3].feature_name
                    : "No data Found"
                }</li>
                
            </div>        
            <div>
              <h4>Integrations</h4>
               <li>${
                 detail.data.integrations[0]
                   ? detail.data.integrations[0]
                   : "No data Found"
               }</li>
                <li>${
                  detail.data.integrations[1]
                    ? detail.data.integrations[1]
                    : "No data Found"
                }</li>
                <li>${
                  detail.data.integrations[2]
                    ? detail.data.integrations[2]
                    : "No data Found"
                }</li>
            </div>        
        </div>
          </div>
        
      <div class=" w-50  rounded border bg-light  p-4 border border-success" >
        <span class="btn btn-danger px-4 py-2 fw-semibold sticky-top position-absolute top-0 end-0">${
          detail.data.accuracy.score ? detail.data.accuracy.score : "No Found !"
        } Accuracy</span>
         <img class="img-fluid" src="${detail.data.image_link[0]}" alt="">
        
        <h2 class="fs-3 fw-bold mt-5 text-center">${
          detail.data.input_output_examples[0].input
            ? detail.data.input_output_examples[0].input
            : ""
        }</h2>
        <p class="text-center fs-5">${
          detail.data.input_output_examples[1].output
        }</p>
         
        </div>
   </div>
 
  `;
};


moreDetails();

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
            <li>${tool.features[0] ? tool.features[0] : "No Found"}</li>
            <li>${tool.features[1] ? tool.features[1] : "No Found"}</li>
           <li>${tool.features[2] ? tool.features[2] : "No Found!"}</li>
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
          <span onclick="moreDetails('${tool.id}')" 
          data-bs-toggle="modal" data-bs-target="#moreDetails"">
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
};

loadTools();
