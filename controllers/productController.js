import Product from "../models/product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    if (req.params) res.json(products);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Terjadi kesalahan" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    if (product === null) {
      return res.status(400).json({ message: "Gagal membuat produk" });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Terjadi kesalahan" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.update(
      { name, price },
      { where: { id } }
    );

    if (updatedProduct[0] === 0) {
      return res.status(404).json({ message: "Produk tidak ditemukan" });
    }

    res.json({ message: "Produk berhasil diperbarui" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Terjadi kesalahan" });
  }
};

export const removeProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await Product.destroy({
      where: {
        id: id,
      },
    });

    if (deletedItem === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Terjadi kesalahan" });
  }
};
