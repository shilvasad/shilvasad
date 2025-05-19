import mongoose from "mongoose";

const pageDetailsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  keywords: {
    type: [String]
  },
  image: {
    type: String,
  },
});

const PageDetails = mongoose.model("PageDetails", pageDetailsSchema);

export default PageDetails;
