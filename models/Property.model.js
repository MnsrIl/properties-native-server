const { Schema, model } = require("mongoose");

const propertySchema = new Schema({
    preview: {
      type: String,
      default:
        "https://thumbs.dreamstime.com/b/%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B9-%D1%81%D0%B5%D1%80%D1%8B%D0%B9-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B4%D0%BE%D0%BC%D0%B0-%D0%B8%D0%BB%D0%B8-%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B8%D1%85-94106041.jpg",
    },
    title: {
      required: true,
      type: String,
    },
    description: String,
}, { timestamps: true });

module.exports.Property = model("Property", propertySchema);
