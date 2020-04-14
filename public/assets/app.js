document.addEventListener('DOMContentLoaded', function (event) {

    //Query all content, put into cards, and display. 
    function getContent() {
        $.ajax({
            url: "/api/notes",
            method: "GET"
        }).then(function (res) {
            console.log("inside front end")
            console.log(res)
            //create card and post card to area
            res.forEach(el => {
                var card = ` 
            <div class="row m-4 formDisplay">
            <div class="card w-100 cardDisplay" style="width: 18rem;">
            <div class="card-body " >
                <h5 class="card-title">${el.noteName}</h5>
                <p class="card-text">${el.Content}</p>
                <div class="row justify-content-end " id="${el.id}" >
                    <a href="#" class="card-link mr-5 " i><i class="large material-icons deleteBtn">delete_forever</i></a>
                    <a href="#" class="card-link mr-5 " ><i class="large material-icons updateBtn" id="updatee">create</i></a>
                </div>
            </div>
        </div>
        </div>`
                $('#Cards').append(card)
            });
        })
    }
    getContent()



    //function to submit New note
    var submit = document.getElementById('submit')

    submit.addEventListener("click", function (e) {

        e.preventDefault()

        var newNote = document.getElementsByClassName('newNote')
        var noteTitle = newNote[0].value
        var noteContent = newNote[1].value
        saveNote(noteTitle, noteContent)
    })


    // A function for saving a note to the db
    var saveNote = function (title, content) {
        console.log(title, content)
        var id = Math.floor(1000 + Math.random() * 9000);
        //    console.log(id)

        var newnote = {
            id: id,
            noteName: title,
            Content: content,
        }
        return $.ajax({
            url: "/api/notes",
            data: newnote,
            method: "POST"
        }).then(function () {
            var textArea = document.getElementsByClassName('newNote')
            textArea[0].value = " "
            textArea[1].value = " "
            getContent()
            location.reload();
        })

    };




    document.addEventListener("click", function (e) {
        //   console.log(e.target.id)
        e.preventDefault()
        if (e.target.className == "large material-icons deleteBtn") {
            deleteNote(e.target.parentElement.parentElement.id)

        }
 


    })

    var deleteNote = function (id) {
        return $.ajax({
            url: "api/notes/" + id,
            method: "DELETE"
        }).then(function () {
            getContent()
            location.reload();
        })
    };

})



