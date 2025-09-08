const Todo = require("../models/todoSchma");

exports.addTodo = async (req, res) => {
    try {
        const { title, description, category, status, startDate, endDate } = req.body;

        if (!title || !description || !category || !startDate || !endDate) {
            return res.status(404).json({
                success: false,
                message: "All Data is required"
            })
        }
        const newTodo = await Todo.create({ title, description, category, status, startDate, endDate });
        console.log("all fat   <wdwedwerew></wdwedwerew>", newTodo)
        return res.status(200).json({
            success: true,
            message: "Todo is added successfully",
            newTodo,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}


exports.getAllTodo = async (req, res) => {
    try {
        const allTodo = await Todo.find();
        console.log("Your All todo is ", allTodo);
        return res.status(200).json({
            success: true,
            data: allTodo,
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


exports.updateTodo = async (req, res) => {
    try {


        const { id, ...updates } = req.body;
        console.log("Data is ", id, updates)
        if (!id || !updates) {
            return res.status(404).json({
                success: false,
                message: "All Data field are required"
            })
        }

        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            updates,
            { new: true }
        )
        if (!updatedTodo) {
            return res.status(400).json({
                success: false,
                message: "Todo Not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Todo Updates successfully",
            data: updatedTodo
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        })
    }
}

exports.getTodoById = async (req, res) => {
    try {
        const { id } = req.body;
        console.log("is s", id)
        if (!id) {
            return res.status(404).json({
                success: false,
                message: "id is required"
            })
        }
        const TodoData = await Todo.findById(id);
        if (!TodoData) {
            return res.status(400).json({
                success: false,
                message: "Todo not found"
            })
        }
        return res.status(200).json({
            success: false,
            data: TodoData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) {
            return res.status(404).json({
                success: false,
                message: "id is required"
            })
        }

        const deletedTodo = await Todo.findByIdAndDelete(id);
        console.log("request for delete", id)

        if (!deletedTodo) {
            return res.status(400).json({
                success: false,
                error: error.message
            })
        }
        return res.status(200).json({
            success: true,
            message: "deleted successfulyy",
            data: deletedTodo
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Deleting Todo Error"
        })
    }
}