const mongoose = require("mongoose");
const Trip = require("../models/travlr"); // Register model
const Model = mongoose.model("trips");

// GET: /trips/:tripCode - listis a single trip
const tripsList = async (req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

        // Uncomment line to show results of querey
        // on the console
        // console.log(q);

    if (!q)
    { // Database returned no data
            return res
                    .status(404)
                    .json(err);
        }  else { // Return resulting trip list
                return res
                    .status(200)
                    .json(q);
            }  
};

const tripsFindByCode = async (req, res) => {
  const q = await Model
    .find({'code' : req.params.tripCode }) // Return single record
    .exec();

    // Uncomment line to show results of querey
    // on the console
    // console.log(q);

  if (!q)
  { // Database returned no data
        return res
                .status(404)
                .json(err);
    }  else { // Return resulting trip list
            return res
                .status(200)
                .json(q);
        }  
};

module.exports = {
  tripsList,
  tripsFindByCode
};
