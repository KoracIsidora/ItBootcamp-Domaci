import { TaskList } from "../components/taskList";
import { InputForm } from "../components/inputForm";
import { Task } from "../components/task";
import { getToDo, getAllToDo } from "../utilities/todo-service";
import { TextButton } from "../components/addTextButton";
import { addToDo } from "../utilities/todo-service";
import { deleteToDo} from "../utilities/todo-service";

class Main {
    constructor() {
        let inputForm = new InputForm();
        let taskList = new TaskList();
        let textButton = new TextButton();

        this.node = document.createElement('main');
        this.node.appendChild(inputForm.getNode());
        this.node.appendChild(textButton.getNode());
        this.node.appendChild(taskList.getNode());
        this.userName = '';
        inputForm.setBtnAddOnClick(() => {
            let text = inputForm.txtTitle.value;
            text = text.trim();

            if (text == '') return;

            let task = new Task(text);
            task.setBtnDeleteClickEvent(() => {
                task.deleteItem();
            });
            taskList.addTask(task);

            addToDo(this.userName, text).then(data=>console.log(data));
            
            deleteToDo(this.userName, text).then(data=>console.log(data));
        });

        textButton.addUsername( ()=> {
            let text = textButton.textInput.value;
            text = text.trim();
            this.userName = text;

            if (text == '') return;

            taskList.emptyList();

            getToDo(text).then(data => {
                let items = data.items;
                items.forEach(item => {
                    let task = new Task(item.title);
                    task.setBtnDeleteClickEvent(() => {
                        deleteToDo(this.userName, text)

                        task.deleteItem();
                    })
                    taskList.addTask(task);
                });

            })
        })
    }

    getNode() {
        return this.node;
    }

}

export {
    Main
}