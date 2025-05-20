import PageDetails from "./page-details.model.js";


// Create page details
export const createPageDetails = async (req, res)=>{
  const newPageDetails = new PageDetails(req.body)
  try {
    const savedPageDetails = await newPageDetails.save()
    res.status(201).json(savedPageDetails)
    
  } catch (error) {
    console.error("Error at createPageDetails: ", error);
    res.status(500).json({ message: "Error at createPageDetails" });
    
  }
}

// Get page details
export const getPageDetails = async (req, res) => {
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
export const getOnePageDetails = async (req, res) => {
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
export const updatePageDetails = async (req, res) => {
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
export const deletePageDetails = async (req, res) => {
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
