const express = require("express");
const Employee= require("../models/EmployeModel")

const EmployeeController = () => {
    const addEmployee = async (req, res) => {
        try {
            let userInput = req.body;
            let saveEmployee = await Employee.create(userInput);
            res.status(200).json({
                message: "Employee added successfully",
                data: saveEmployee
            })
        }
        catch(err) {
            res.status(400).json({
                message: "Error on Employee Controller"
            })
        }
    }
    const viewOneEmployee = async (req, res) => {
        try {
            let id = req.params.id;
            console.log("id", id)
            let viewEmployee = await Employee.findOne({_id: id});
            res.status(200).json({
                message: "Employee listed successfully",
                data: viewEmployee
            })
        } 
        catch(err) {
            res.status(400).json({
                message: "Error on Employee Controller"
            })
        }
    }
    const listAllEmployees = async (req, res) => {
        try {
            let listEmployees = await Employee.find({});
            res.status(200).json({
                message: "Employee listed successfully",
                data: listEmployees
            })
        }
        catch(err) {
            res.status(400).json({
                message: "Error on Employee Controller"
            })
        }
    }
    const updateEmployee = async (req, res) => {
        try {
            const userInput = req.body;
            const editedData = await Employee.updateOne({_id: userInput.id}, {$set: userInput}, {new: true});
            res.status(200).json({
                message: "Employee Updated successfully",
                data: editedData
            })
        }
        catch(err) {
            res.status(400).json({
                message: "Error on Employee Controller"
            })
        }
    }
    const deleteEmployee = async (req, res) => {
        try {
            let id = req.params.id;
            let removeEmployee = await Employee.findOneAndDelete({_id: id});
            res.status(200).json({
                message: "Employee Deleted successfully",
                data: removeEmployee
            })
        }
        catch(err) {
            res.status(400).json({
                message: "Error on Employee Controller"
            })
        }
    }
    //This api is for search bar at the top - search using part number vehicle brand
    const searchEmployee = async (req, res) => {
        try {
        const searchDetails = await Employee.find({
            $or: [{EmployeeName: {$in: req.body.keyword}}, {brandName : {$in: req.body.keyword}}, 
                {sparePartType: {$in: req.body.keyword}}]
        });
        res.status(200).json({
            message: "The Employees are",
            data: searchDetails
        })
    }
        catch(err) {
            res.status(400).json({
                message: "Error on Search Controller"
            })
        }
    }
    return {
        addEmployee,
        viewOneEmployee,
        listAllEmployees,
        updateEmployee,
        deleteEmployee,
        searchEmployee
    };
  };
  
  module.exports = EmployeeController();