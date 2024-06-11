function buttonClick(){

    const name = document.getElementById('name').value;
    alert( name.trim()===''? "required field":"submitted" + name);
}
