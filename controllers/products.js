import { Product } from "../models/product.js";

const getAllProducts = async (req, res) => {
  try {
    Product.find().then((product) => {
      res.json({ status: 200, product: product });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.json({ status: 201, newProduct: newProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productDoc = await Product.findById(id);
    return res.json(productDoc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productDoc = await Product.findById(id);
    const updateProduct = await productDoc.updateOne(req.body);
    const savedProduct = await productDoc.save();
    return res.json({status: 200, savedProduct});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const productDoc = await Product.deleteOne({id});
      return res.json({status: 200,productDoc});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export { getAllProducts, getSingleProduct, createProduct, updateProduct, deleteProduct };
