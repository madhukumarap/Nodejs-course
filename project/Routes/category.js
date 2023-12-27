const express = require('express');
const Joi = require('joi');
const route = express.Router();
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 30 }
});

const Category = mongoose.model('Category', categorySchema);

route.get('/api/category', async (req, res) => {
    const categories = await Category.find();
    res.send(categories);
});

route.post('/api/category/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const newCategory = new Category({
        name: req.body.name
    });

    await newCategory.save();
    res.send(newCategory);
});

route.put('/api/category/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const category = await Category.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
    if (!category) return res.status(404).send('The category not found');

    res.send(category);
});

route.delete('/api/category/:id', async (req, res) => {
    const category = await Category.findByIdAndRemove(req.params.id);
    if (!category) return res.status(404).send('The category not found');

    res.send(category);
});

route.get('/api/category/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).send('The category not found');

    res.send(category);
});

function validate(category) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(category, schema);
}

module.exports = route;
