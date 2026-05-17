//place controller functions here...
import * as equipmentService from '../services/default.service.js'

export const getAll = async (req, res) => {
    try {
        const records = await equipmentService.getAll();
        res.json({ message: 'OK', data: records });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error', data: null });
    }
};