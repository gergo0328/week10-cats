setInterval(save, 3000);

function save() {
    const textarea = document.querySelector("#doc-text");
    const docText = textarea.value;

    const saveText = document.querySelector('#save-in-progress-text');
    saveText.classList.remove('hidden');
    fetch('http://127.0.0.1:9000/', {
        method: 'POST',
        body: docText
    }).then(function(){
        saveText.classList.add('hidden');
    });

}
