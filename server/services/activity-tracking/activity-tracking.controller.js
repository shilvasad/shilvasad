import ActivityTracking from "./activity-tracking.model.js";

// Get all activity tracking records
export const getAllActivityTracking = async (req, res) => {
    try {
        const activities = await ActivityTracking.find();
        res.status(200).json(activities);
    } catch (error) {
        console.error("Error at getAllActivityTracking: ", error);
        res.status(500).json({ message: "Error at getAllActivityTracking" });
    }
};

// Get one activity tracking record by ID
export const getActivityTrackingById = async (req, res) => {
    try {
        const activity = await ActivityTracking.findById(req.params.id);
        if (!activity) {
            res.status(404).json({ message: "Activity not found" });
        } else {
            res.status(200).json(activity);
        }
    } catch (error) {
        console.error("Error at getActivityTrackingById: ", error);
        res.status(500).json({ message: "Error at getActivityTrackingById" });
    }
};

// Create a new activity tracking record
export const createActivityTracking = async (req, res) => {
    const newActivity = new ActivityTracking(req.body);
    try {
        const savedActivity = await newActivity.save();
        res.status(201).json(savedActivity);
    } catch (error) {
        console.error("Error at createActivityTracking: ", error);
        res.status(500).json({ message: "Error at createActivityTracking" });
    }
};

// Update an activity tracking record by ID
export const updateActivityTracking = async (req, res) => {
    try {
        const updatedActivity = await ActivityTracking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedActivity) return res.status(404).json({ message: "Activity not found" });
        res.status(200).json(updatedActivity);
    } catch (error) {
        console.error("Error at updateActivityTracking: ", error);
        res.status(500).json({ message: "Error at updateActivityTracking" });
    }
};

// Delete an activity tracking record by ID
export const deleteActivityTracking = async (req, res) => {
    try {
        const deletedActivity = await ActivityTracking.findByIdAndDelete(req.params.id);
        if (!deletedActivity) return res.status(404).json({ message: "Activity not found" });
        res.status(204).send();
    } catch (error) {
        console.error("Error at deleteActivityTracking: ", error);
        res.status(500).json({ message: "Error at deleteActivityTracking" });
    }
};
