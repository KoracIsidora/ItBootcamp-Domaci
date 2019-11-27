class TextButton{
    constructor(){
        this.textInput = document.createElement('input');
        this.textInput.type = 'text';
        this.textInput.id = 'txt-title';
        this.textInput.placeholder = 'Username';

        this.buttonText = document.createElement('button');
        this.buttonText.type = 'submit';
        this.buttonText.id = 'btn-add';
        this.buttonText.innerHTML = 'Add Task';

        this.forma=document.createElement('div');
        this.forma.appendChild(this.textInput);
        this.forma.appendChild(this.buttonText);
    }

    getNode(){
        return this.forma;
    }

    addUsername(onClick){
        this.buttonText.addEventListener('click', onClick);
    }
}

export{
    TextButton
}