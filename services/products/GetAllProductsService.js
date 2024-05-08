const GetAllProductsService = async (req, res, next, Model) => {
    try {
        const limit = req.query.limit || 8

        const productsCount = await Model.countDocuments()

        // Retrieve query parameters for search, pagination, and filtering
        const { page = 1, search, filter } = req.query
        const skip = (page - 1) * limit

        // Construct query based on search and filter parameters
        let query = {}

        if (search) {
            // Add search logic based on your requirements
            query.$or = [
                { name: { $regex: search, $options: 'i' } }, // Case-insensitive search by name
                { description: { $regex: search, $options: 'i' } }, // Case-insensitive search by description
            ]
        }

        // Add filter logic later

        const products = await Model.find(query).skip(skip).limit(limit)

        res.status(200).json({
            message: 'Success',
            products,
            currentPage: parseInt(page),
            totalPages: Math.ceil(productsCount / limit),
            totalProducts: productsCount,
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = GetAllProductsService
