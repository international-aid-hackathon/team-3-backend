import { Warehouse } from "../models/warehouse.js";

const getAllWarehouses = async (req, res) => {
  try {
    Warehouse.find().then((warehouse) => {
      res.json({ status: 200, warehouse: warehouse });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createWarehouse = async (req, res) => {
  try {
    const newWarehouse = await Warehouse.create(req.body);
    return res.json({ status: 201, newWarehouse: newWarehouse });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSingleWarehouse = async (req, res) => {
  try {
    const { id } = req.params;
    const WarehouseDoc = await Warehouse.findById(id);
    return res.json(WarehouseDoc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateWarehouse = async (req, res) => {
  try {
    const { id } = req.params;
    const WarehouseDoc = await Warehouse.findById(id);
    const updateWarehouse = await WarehouseDoc.updateOne(req.body);
    const savedWarehouse = await WarehouseDoc.save();
    return res.json({status: 200, savedWarehouse});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteWarehouse = async (req, res) => {
    try {
      const { id } = req.params;
      const WarehouseDoc = await Warehouse.deleteOne({id});
      return res.json({status: 200,WarehouseDoc});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


export { getAllWarehouses, getSingleWarehouse, createWarehouse, updateWarehouse, deleteWarehouse };
