const {Damned} = require("../models/Damned");

const NO_DAMNED_FIRST_PAGE = 8;

async function getTopDamned() {
    let damneds = await Damned.find()
            .limit(NO_DAMNED_FIRST_PAGE)
            .exec();
    damneds.forEach((damned, index) => {
        damneds[index] = {
            name: damned.name,
            description: damned.description,
            imageUrl: damned.imageUrl,
            noLies: damned.lies.length,
            damnedUrl: `/criticado/${damned.id}`
        }
    })
    return damneds;
}

exports.getTopDamned = getTopDamned;