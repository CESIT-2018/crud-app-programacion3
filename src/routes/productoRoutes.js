const mongoose = require('mongoose');

const Producto = mongoose.model('productos');

module.exports = app => {
    
    app.get("/api/productos", async (req, res) => {
        console.info(">> Get productos");
        const productos = await Producto.find({});
        res.send(productos);
    });

    // app.get("/api/todos/query", async (req, res) => {

    //     try {
    //         var regExpTerm = new RegExp(req.query.term, 'i');
    //         var regExpSearch = [{ name: { $regex: regExpTerm } }, { description: { $regex: regExpTerm } }];
    //         const todos = await Todo.find({ '$or': regExpSearch });

    //         res.status(200).send(todos);
    //     } catch (e) {
    //         res.status(500).send({ message: e });
    //     }

    // });

    // app.get("/api/todos/:id", async (req, res) => {

    //     try {
    //         const id = req.params.id;
    //         const todo = await Todo.findById(id);

    //         if (todo) {
    //             res.send(todo);
    //         } else {
    //             res.status(404).send({ message: `Todo with id '${id}' is not found.` });
    //         }
    //     } catch (e) {
    //         res.status(500).send({ message: `Server error.\n\n${e}` });
    //     }

    // });

    app.post("/api/productos", async (req, res) => {

        const { nombre, descripcion, precio, stock } = req.body;

        const producto = new Producto({
            nombre,
            descripcion,
            stock,
            precio,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        try {
            let nuevoProducto = await producto.save();

            res.status(201).send(nuevoProducto);

        } catch (err) {

            if (err.name === 'MongoError') {
                res.status(409).send(err.message);
            }

            res.status(500).send(err);
        }

    });

    // app.put("/api/todos/:id", async (req, res) => {

    //     const id = req.params.id;

    //     const todoData = req.body || {};
    //     delete todoData.createdAt;
    //     todoData.updatedAt = new Date();

    //     try {
    //         let todo = await Todo.findOneAndUpdate({ _id: id }, todoData, { new: true });

    //         if (!todo) {
    //             res.status(404).send({ message: `Error when update record with id ${id}.\n\n${e}` })
    //         } else {
    //             res.status(200).send(todo);
    //         }
    //     } catch (err) {
    //         if (err.name === 'MongoError') {
    //             res.status(409).send({ message: err.message });
    //         }
    //         res.status(500).send({ message: `Unknown Server Error.\n\n Unknow server error when updating todo for id='${id}'` });
    //     }

    // });

    // app.put("/api/todos/:id/approve/toggle", async (req, res) => {

    //     const id = req.params.id;
        
    //     const todo = await Todo.findOne({ _id: id });
        
    //     if (!todo) {
    //         return res.status(404).send({ message: `Error when update record with id ${id}.\n\n${e}` })
    //     }

    //     if (todo) {
    //         todo.isDone = !todo.isDone;
    //         todo.updatedAt = new Date();
    //         todo.save();
    //         res.status(200).send(todo);
    //     } else {
    //         res.status(404).send({ message: `Todo with id '${id}' is not found.` })
    //     }
            
    // });

    // app.delete("/api/todos/:id", async (req, res) => {

    //     const id = req.params.id;

    //     try {
    //         let todo = await Todo.findOneAndRemove({ _id: id });

    //         if (!todo) {
    //             return res.status(404).send({ message: 'Not Found Error' });
    //         } else {
    //             return res.status(204); // 204 do not use content
    //         }
    //     } catch (err) {
    //         return res.status(500).send({ message: `Todo with id '${id}' is not found.` });
    //     }

    // });

};
