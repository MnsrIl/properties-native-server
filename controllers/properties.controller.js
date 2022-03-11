const { Property } = require("../models/Property.model");

module.exports.propertiesController = {
  addProperty: async (req, res) => {
    try {
      const { preview, title, description } = req.body;

      if (!title) {
        return res.status(400).json({ error: "The title wasn't provided" });
      }

      const property = await Property.create({
        preview,
        title,
        description,
      });

      return res.status(200).json({ data: property._id });
    } catch (e) {
      return res.status(500).json({ error: "Internal Server Error!" + JSON.stringify(e) });
    }
  },

  getProperties: async (req, res) => {
    try {
      const properties = await Property.find();

      return res.status(200).json({ data: properties });
    } catch (e) {
      return res.status(500).json({ error: "Internal Server Error!" + JSON.stringify(e) });
    }
  },

  getPropertyById: async (req, res) => {
    try {
      const { id } = req.params;

      const property = await Property.findById(id);

      return res.status(200).json({ data: property });
    } catch (e) {
      return res.status(500).json({ error: "Internal Server Error!" + JSON.stringify(e) });
    }
  },
};
