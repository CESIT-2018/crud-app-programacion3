const mongoose = require('mongoose');

const Todo = mongoose.model('todos');

module.exports = app => {
    
    app.get("/api/todos", async (req, res) => {
        const todos = await Todo.find({});
        res.send(todos);
    });

    app.get("/api/todos/query", async (req, res) => {

        try {
            var regExpTerm = new RegExp(req.query.term, 'i');
            var regExpSearch = [{ name: { $regex: regExpTerm } }, { description: { $regex: regExpTerm } }];
            const todos = await Todo.find({ '$or': regExpSearch });

            res.status(200).send(todos);
        } catch (e) {
            res.status(500).send({ message: e });
        }

    });

    app.get("/api/todos/:id", async (req, res) => {

        try {
            const id = req.params.id;
            const todo = await Todo.findById(id);

            if (todo) {
                res.send(todo);
            } else {
                res.status(404).send({ message: `Todo with id '${id}' is not found.` });
            }
        } catch (e) {
            res.status(500).send({ message: `Server error.\n\n${e}` });
        }

    });

    app.post("/api/todos", async (req, res) => {

        const { name, description, isDone } = req.body;

        const todo = new Todo({
            name,
            description,
            isDone,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        try {
            let newTodo = await todo.save();

            res.status(201).send(newTodo);

        } catch (err) {

            if (err.name === 'MongoError') {
                res.status(409).send(err.message);
            }

            res.status(500).send(err);
        }

    });

    app.put("/api/todos/:id", async (req, res) => {

        const id = req.params.id;

        const todoData = req.body || {};
        delete todoData.createdAt;
        todoData.updatedAt = new Date();

        try {
            let todo = await Todo.findOneAndUpdate({ _id: id }, todoData, { new: true });

            if (!todo) {
                res.status(404).send({ message: `Error when update record with id ${id}.\n\n${e}` })
            } else {
                res.status(200).send(todo);
            }
        } catch (err) {
            if (err.name === 'MongoError') {
                res.status(409).send({ message: err.message });
            }
            res.status(500).send({ message: `Unknown Server Error.\n\n Unknow server error when updating todo for id='${id}'` });
        }

    });

    app.put("/api/todos/:id/approve/toggle", async (req, res) => {

        const id = req.params.id;
        
        const todo = await Todo.findOne({ _id: id });
        
        if (!todo) {
            return res.status(404).send({ message: `Error when update record with id ${id}.\n\n${e}` })
        }

        if (todo) {
            todo.isDone = !todo.isDone;
            todo.updatedAt = new Date();
            todo.save();
            res.status(200).send(todo);
        } else {
            res.status(404).send({ message: `Todo with id '${id}' is not found.` })
        }
            
    });

    app.delete("/api/todos/:id", async (req, res) => {

        const id = req.params.id;

        try {
            let todo = await Todo.findOneAndRemove({ _id: id });

            if (!todo) {
                return res.status(404).send({ message: 'Not Found Error' });
            } else {
                return res.status(204); // 204 do not use content
            }
        } catch (err) {
            return res.status(500).send({ message: `Todo with id '${id}' is not found.` });
        }

    });

};
