const ProductModal = require("../modals/product");

const getProducts = async (req, res) => {
  const { page } = req.query;

  try {
    const LIMIT = 2;
    const startIndex = (Number(page) - 1) * LIMIT;

    const total = await ProductModal.countDocuments({});

    const productData = await ProductModal.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({
      data: productData,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const postProducts = async (req, res) => {
  console.log("File :: ", req.file);
  const product = req.body;
  try {
    const newProduct = new ProductModal({
      ...product,
      imgUrl: req.file.filename,
    });
    await newProduct.save();

    // write file before this. save product
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getProducts, postProducts };
