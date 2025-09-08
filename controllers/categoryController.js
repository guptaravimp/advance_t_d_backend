const Category = require("../models/Category");


exports.addCategory = async (req, res) => {
    try {
        console.log("name is ")
        const { name } = req.body;
        if (!name) {
            return res.status(404).json({
                success: false,
                error: error.message
            })
        }
        
        const newCategory = await Category.create({ name });
        return res.status(200).json({
            success: true,
            newCategory
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


exports.getAllCategory = async (req, res) => {
    try {
        const AllCategory=await Category.find();
        if(!AllCategory){
            return res.status(404).json({
                success:false,
                message:"No Category Found"
            })
        }

        return res.status(200).json({
            success:true,
            data:AllCategory
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        })

    }
}