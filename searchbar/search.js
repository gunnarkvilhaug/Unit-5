
$("#search").on("keyup", function() {
  const $input = $("#search").val().toLowerCase();
  const $photoSet = $("a[href*='photos']");

  for(let i=0; i< $photoSet.length; i+=1) {
    const $caption = $($photoSet[i]).attr("data-sub-html").toLowerCase();
    const $alt = $($photoSet[i]).find('img').attr("alt").toLowerCase();
    const $photoBlocks = $(".photobox")
    if ($caption.indexOf($input) > -1) {
      $photoBlocks[i].style.display = "";
    }  
    else if ($alt.indexOf($input) > -1) {
      $photoBlocks[i].style.display = "";
    } 
    else {
      $photoBlocks[i].style.display = "none";
    }
    console.log($input);
  }
});
