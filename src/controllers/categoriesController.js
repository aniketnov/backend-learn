
import Category from "./../models/categories.model.js"



export const setCategory = (req, res, next) => {
    if (!req.body.category) {
        req.body.category = req.params.id;
    }
    next();
};

export const getAllCategories = async (req, res) => {
    try {
        const Categories = await Category.find().populate({
            path: 'subcategories',
            select: '-__v'
        });

        res.status(200).json({
            status: 'success',
            total: Categories.length,
            data: {
                Categories,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
};
export const createCategory = async (req, res) => {


    // if (req.file) {
    //     req.body.image = req.file.filename;
    // }

    try {
        const category = await Category.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                category,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
};
export const getCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                category,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
};
export const deleteCategory = async (req, res) => {
    try {
        const product = await Category.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
};
export const updateCategory = async (req, res) => {


    // if (req.file) {
    //     req.body.image = req.file.filename;
    // }
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                category,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
};



