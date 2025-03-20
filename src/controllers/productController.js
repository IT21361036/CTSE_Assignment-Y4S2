const Product = require('../models/product');

const productController = {
  // Create new product
  async createProduct(req, res) {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Get all products with enhanced filtering and pagination
  async getProducts(req, res) {
    try {
      const {
        page = 1,
        limit = 10,
        category,
        minPrice,
        maxPrice,
        search,
        sortBy,
        sortOrder = 'asc',
        inStock,
        tags,
        createdAfter,
        createdBefore,
        isActive
      } = req.query;

      // Build advanced filter object
      const filter = {};

      // Category filter
      if (category) {
        filter.category = category;
      }

      // Price range filter
      if (minPrice || maxPrice) {
        filter.price = {};
        if (minPrice) filter.price.$gte = Number(minPrice);
        if (maxPrice) filter.price.$lte = Number(maxPrice);
      }

      // Search in name and description
      if (search) {
        filter.$or = [
          { name: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } }
        ];
      }

      // Stock filter
      if (inStock === 'true') {
        filter.stock = { $gt: 0 };
      } else if (inStock === 'false') {
        filter.stock = 0;
      }

      // Tags filter (multiple tags support)
      if (tags) {
        const tagArray = tags.split(',').map(tag => tag.trim());
        filter.tags = { $in: tagArray };
      }

      // Date range filter
      if (createdAfter || createdBefore) {
        filter.createdAt = {};
        if (createdAfter) {
          filter.createdAt.$gte = new Date(createdAfter);
        }
        if (createdBefore) {
          filter.createdAt.$lte = new Date(createdBefore);
        }
      }

      // Active status filter
      if (isActive !== undefined) {
        filter.isActive = isActive === 'true';
      }

      // Build sort object
      const sort = {};
      if (sortBy) {
        sort[sortBy] = sortOrder === 'desc' ? -1 : 1;
      }

      const products = await Product.find(filter)
        .sort(sort)
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();

      const count = await Product.countDocuments(filter);

      res.json({
        products,
        totalPages: Math.ceil(count / limit),
        currentPage: Number(page),
        totalProducts: count,
        filters: {
          applied: filter,
          sort: sort
        }
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get single product by ID
  async getProductById(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update product
  async updateProduct(req, res) {
    try {
      const updates = { ...req.body, updatedAt: Date.now() };
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        updates,
        { new: true, runValidators: true }
      );
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete product
  async deleteProduct(req, res) {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Bulk operations
  async bulkUpdateProducts(req, res) {
    try {
      const updates = await Product.bulkWrite(
        req.body.updates.map(update => ({
          updateOne: {
            filter: { _id: update.id },
            update: { $set: update.data }
          }
        }))
      );
      res.json(updates);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = productController; 