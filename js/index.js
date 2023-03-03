const loadTools = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  showTools(data.data.tools);
};

const showTools = (tools) => {
  const toolsContainer = document.getElementById("tools-container");
  // tools = tools.slice(0, 6);

  tools.forEach((tool) => {
    console.log(tool.published_in);
    const div = document.createElement("col");

    div.classList.add("col");
    div.innerHTML = `
    <div class="border p-3 rounded-2 h">
    <img src="${tool.image}" class="card-img-top " alt="...">
       <h5 class="card-title mb-1">Features: <br></h5>
  <div class="card-body">
    <li> ${tool.features[0]}</li>
    <li> ${tool.features[1]}</li>
    <li> ${tool.features[2]}</li>
    </div>
    <hr>
    <div>
       <div class="">
        <h5 class="card-title mb-1">${tool.name} <br></h5>
        <h6 class="card-title mb-1">${tool.published_in} <br></h6>
  
    </div>
     
</div>
   
      

    `;
    toolsContainer.appendChild(div);
  });
};

loadTools();
