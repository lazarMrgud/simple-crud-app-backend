const Product =require("../modals/produc.modals.js")


const getProducts=  async (req, res)=>{
    try{
        const product = await Product.find({})
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const getProduct= async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id); // Corrected method name
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createProduct=async(req,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
const deleteProduct=async (req, res) => {
    try {
        const { id } = req.params;
       

        // By default, findOneAndUpdate returns the original document before the update
        const updatedProduct = await Product.findByIdAndDelete( id );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updataProduct=async (req, res) => {
    try {
        const { id } = req.params;
        const update = req.body; // Assuming the update fields are sent in the request body

        // By default, findOneAndUpdate returns the original document before the update
        const updatedProduct = await Product.findOneAndUpdate({ _id: id }, update, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports={
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updataProduct
}

