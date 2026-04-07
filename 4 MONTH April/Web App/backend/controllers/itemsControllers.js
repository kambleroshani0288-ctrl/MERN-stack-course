

const Items = require("./../models/itemsmodel")




const addItem = async (req, res) => {

    try {

        const { name, description, sellingPrice, purchasePrice, quantity, unit } = req.body

        const saveItem = new Items({
            name,
            description,
            purchasePrice,
            sellingPrice,
            quantity,
            unit
        })

        await saveItem.save()

        res.status(201).json({
            message: "Item Created",
            data: saveItem
        })

    } catch (error) {
        console.log(error)
        res.status(201).json({ message: "Server Error" })
    }

}

const getAllItems = async (req, res) => {

    try {

        const items = await Items.find()

        res.status(200).json({ message: " Get All Item List ", data: items })


    } catch (error) {
        console.log(error)
    }


}

const deleteItem = async (req, res) => {


    try {
        const { id } = req.params;

        const deleteItem = await Items.findByIdAndDelete(id);

        res.status(200).json({ message: "Item Deleted", deleteItem: deleteItem });

    } catch (error) {
        console.log(error);

    }


}

const editItem = async (req, res) => {

    try {


    } catch (error) {
        console.log(error)
    }


}


module.exports = { addItem, getAllItems, deleteItem, editItem }


