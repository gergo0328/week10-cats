/*const googleSearchButton = document.querySelector("#btn-google-search");

googleSearchButton.addEventListener("click", function(event){
    event.preventDefault();

    const form = document.querySelector("#form-google-search");
    const searchTerm = form.querySelector("input[name="q"]").value;

    if(searchTerm ===''){
        alert('Írj már be valamit!!')
    }else{
        form.submit();
    }
});*/

const googleSearchButton = document.querySelector("#btn-google-search");

googleSearchButton.addEventListener("click", ButtonClick);

function ButtonClick (event) {
    event.preventDefault();

    const form = document.querySelector("#form-google-search");

    const searchTerm = form.querySelector("input[name='q']").value;

    if (searchTerm === "") {
        alert("Write something.")
    } else {
        form.submit()
    }
};