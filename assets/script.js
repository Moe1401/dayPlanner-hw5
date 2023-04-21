var timeDisplayEl = $('#currentDay');
var parentContainer = $('.container-lg')
var currentTime = dayjs();
var currentMilitaryTime = currentTime.format('H');


function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY');
  console.log(rightNow)
  timeDisplayEl.text(rightNow);
}

function displayPlanner(){


  for (var i=9; i<23; ++i){
    var time = i;
    var saveItem = localStorage.getItem(time);
    console.log(saveItem)
    if (saveItem == null) {
      saveItem = '';
    } 
    
    
    var div = $(`<div id="hour-${time}" class="row time-block">
      <div class="col-2 col-md-1 hour text-center py-3">${time}</div>
      <textarea class="col-8 col-md-10 description" rows="3">${saveItem} </textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>`);
    

    if (time == currentMilitaryTime ){
      div.addClass('present')
      parentContainer.append(div)
    }else if (time > currentMilitaryTime){
      div.addClass('future')
      parentContainer.append(div)
    }else {
      div.addClass('past')
      parentContainer.append(div)
    }
  }
}
displayTime()
displayPlanner();
   //click event 
$(".btn").on("click", function (event) {
    event.preventDefault();
    
    var hour = $(this).parent().attr('id').split('-')[1]
    var text = $(this).siblings('.description').val()
    console.log(hour)
    console.log(text)
    
  
    localStorage.setItem(hour, text)
    
})


