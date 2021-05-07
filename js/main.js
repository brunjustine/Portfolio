/**
   * Skills animation
   */
 $('#nav-item-skills').on("click",function(){
    let skilsContent = $('.skills-content');
    if (skilsContent) {
          let progress = $('.skills .progress-bar');
          $.each( progress, function(i,el) {
            el.style.width = '0%'
            setTimeout(function() {
              el.style.width = el.getAttribute('aria-valuenow') + '%'
            }, 500);
          });
      }
    });/*

/*
$('#carouselScroll').bind('mousewheel', function(e){
  if(e.originalEvent.wheelDelta /120 > 0) {
    $(this).carousel('prev');
  }
  else{
    $(this).carousel('next');
  }
});*/

/*
function createIndicator() {
  let indicators =  $('#carouselExampleIndicators').find(".carousel-indicators");
  let indice = indicators.children.length+1;
  let newIndicator = document.createElement("li");
      newIndicator.setAttribute("data-bs-target","#carouselExampleIndicators");
      newIndicator.setAttribute("data-bs-slide-to",indice);

  //TODO ADD AT THE RACINE
}

function createRow() {
  return $('<div class="row"></div>');
}

function createItem() {
  return $('<div class="carousel-item"></div>');;
}

function createCarouselItem(containerCarousel) {
  let newRow = createRow();
  let newItem = createItem();
  newItem.append(newRow);
  containerCarousel.append(newItem);
  return newRow;
}

function addProjectsToHtml(data) {
  let parent = $('#carouselExampleIndicators');
  let containerCarousel = parent.find(".carousel-inner");
  let newRow;
  
  $.each( data.projects, function(i,project) {
    if (i%3==0) {
      createIndicator();
      newRow = createCarouselItem(containerCarousel);  
    } else {
      newRow = containerCarousel.find('.carousel-item:last-child').find('.row:last-child');
    }
    let newProject = formatProjectToHtml(project);
    newRow.append(newProject);       
  });
}

function formatProjectToHtml(project) {
  return `
  <div class="col-md-4 vertical-center">
  <img src="asset/fluorescent2.png" class="lamp" alt="lamp"></img>
  <div class="card bg-white text-center">
    <div class="image">
      <img src="asset/icc.png" class="card-img d-block w-100" alt="logo de ${project.title}">
    </div>
    <div class="card-img-overlay">
      <button class="cercle-shape" type="button" data-bs-toggle="modal" data-bs-target="#project_${project.title}">View Project</button>
      <div class="modal fade" id="project_${project.title}" tabindex="-1" aria-labelledby="modal_${project.title}" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modal_${project.title}">${project.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ${project.description}
              ${project.technos}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Go to the GitHub Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
}
});
*/

  



