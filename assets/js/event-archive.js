document.addEventListener("DOMContentLoaded", function () {
  // Fetch data from the JSON file
  fetch("/assets/json/event-archive.json")
    .then((response) => response.json())
    .then((data) => {
      // Access the data and put it in the DOM
      const container = document.getElementById("event-archive");

      for (let val of data) {
        container.innerHTML += `
            <div class="col">
              <div class="card text-bg-info shadow">
               
                <div class="card-body">
                  <div class="accordion" id="accordionContainer">
                    <div class="accordion-item">
                      <div class="accordion-header">
                        <button
                          class="accordion-button collapsed pb-0"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#${val.targetId}"
                          aria-expanded="false"
                          aria-controls="${val.targetId}"
                        >
                          <div class="px-2">
                            <h5>${val.category}</h5>
                            <p>${val.name}</p>
                          </div>
                        </button>
                      </div>
                      <div
                        id="${val.targetId}"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionContainer"
                      >
                        <div class="accordion-body">
                          <p class="card-text"><span class="fw-bold">Event Name:</span> ${val.name}</p>
                          <p class="card-text"><span class="fw-bold">Date:</span> ${val.date}</p>
                          <p class="card-text"><span class="fw-bold">Location:</span> ${val.location}</p>
                          <p class="card-text"><span class="fw-bold">Description:</span> ${val.description}</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>   
          `;
      }
    })
    .catch((error) => console.error("Error fetching JSON:", error));
});
