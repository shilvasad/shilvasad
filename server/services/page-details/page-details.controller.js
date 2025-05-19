import PageDetails from "./page-details.model.js";

// Create page details
const createPageDetails = async (req, res) => {
  try {
    const pageDetails = req.body;
    const newPageDetails = await PageDetails.create(pageDetails);
    res.status(201).json(newPageDetails);
  } catch (error) {
    console.error("Error at createPageDetails: ", error);
    res.status(500).json({ message: "Error at createPageDetails" });
  }
};

// Get page details
const getPageDetails = async (req, res) => {
  try {
    const pageDetails = await PageDetails.find();
    if (!pageDetails) {
      res.status(404).json({ message: "Page details not found" });
    }
    res.status(200).json(pageDetails);
  } catch (error) {
    console.error("Error at getPageDetails: ", error);
    res.status(500).json({ message: "Error at getPageDetails" });
  }
};

// Get page details by id
const getOnePageDetails = async (req, res) => {
  try {
    const pageDetails = await PageDetails.findById(req.params.id);
    if (!pageDetails) {
      res.status(404).json({
        message: "Page details not found",
      });
    }
    res.status(200).json(pageDetails);
  } catch (error) {
    console.error("Error at getOnePageDetails: ", error);
    res.status(500).json({ message: "Error at getOnePageDetails" });
  }
};

// Update page details
const updatePageDetails = async (req, res) => {
  try {
    const { title } = req.body;
    const pageDetails = await PageDetails.findByIdAndUpdate(
      req.params.id,
      { title },
      { new: true }
    );
    if (!pageDetails) {
      res.status(404).json({ message: "Page details not found" });
    }
    res.status(200).json(pageDetails);
  } catch (error) {
    console.error("Error at updatePageDetails: ", error);
    res.status(500).json({ message: "Error at updatePageDetails" });
  }
};

// Delete page details
const deletePageDetails = async (req, res) => {
  try {
    const pageDetails = await PageDetails.findByIdAndDelete(req.params.id);
    if (!pageDetails) {
      res.status(404).json({ message: "Page details not found" });
    }
    res.status(200).json({ message: "Page details deleted successfully." });
  } catch (error) {
    console.error("Error at deletePageDetails: ", error);
    res.status(500).json({ message: "Error at deletePageDetails" });
  }
};

export {
  getOnePageDetails,
  createPageDetails,
  getPageDetails,
  updatePageDetails,
  deletePageDetails,
};
