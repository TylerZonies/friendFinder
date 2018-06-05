$(document).ready(function(){
    $('select').formSelect();
    $('.modal').modal();
  });

$("#submit").on("click", (event) => {
    event.preventDefault();
    var answers = []
    for(var i = 0; i < 10; i++){
        var answer = $("." + i).val()
        answers.push(parseInt(answer));
        console.log(answer);
    }
    var name = $("#name").val().trim();
    var url = $("#imageURL").val().trim();
    var obj = {
        name: name,
        photo: url,
        scores: answers
    }
    $.post("/api/friends", obj).then((data)=>{
        // get the response from the server
        var modal = $("#modal1")
        var modalContent = $(".modal-content");
        var name = $("<h4>").text("You matched with " + data.name);
        var image = $("<img>").attr("src", data.photo);
        modalContent.append(name, image);
        var instance = M.Modal.getInstance(modal);
        instance.open();
        
        // use it to initiate the modal
        console.log(data)
    });
})