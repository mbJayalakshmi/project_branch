const DataModel = require('../models/dataModel');

const getData = async (req, res) => {
    
    
  try {
    const data = await DataModel.find(req.query);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getData,
};
