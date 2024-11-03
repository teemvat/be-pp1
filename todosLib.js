// {
//     "task": "Buy groceries",
//     "completed": false,
//     "dueDate": "2024-08-30"
// }

let todosArray = [];
let nextId = 1;

function addOne(task, dueDate){

    if (!task || !dueDate){
        return false;
    }

    const newTodo = {
        id: nextId++,
        task,
        completed: false,
        dueDate
    };

    todosArray.push(newTodo);
    return newTodo
}

function getAll() {
    return todosArray;
}

function findById(id){
    const numericId = Number(id);
    const todo = todosArray.find(item => item.id === numericId);
    return todo || false;
}

function updateOneById(id, updatedData){
    const todo = findById(id);
    if(todo){
        if (updatedData.task) todo.task = updatedData.task;
        if (updatedData.completed) todo.completed = updatedData.completed;
        if (updatedData.dueDate) todo.dueDate = updatedData.dueDate;
        return todo;
    }
    return false;
}

function deleteOneById(id){
    const todo = findById(id);
    if (todo){
        const initialLength = todosArray.length;
        todosArray = todosArray.filter(todo => todo.id !== Number(id));
        return todosArray.length < initialLength;
    }
    return false;
}

if (require.main === module) {

    let result = addOne("Clean", "02/11/2024")
    console.log(result);
    result = addOne("work", "01/11/2024");
    console.log(result);

    console.log("getAll called:", getAll());
    console.log("findById called:", findById(1));
    console.log("updateOneById called:", updateOneById(1, { dueDate: "08/11/2024" }));
    console.log("findById called after item updated:", findById(1));
    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));

}



const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;