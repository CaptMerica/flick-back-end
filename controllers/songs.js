const { Song, Profile } = require('../models')

async function create(req, res) {
  try {
		req.body.profileId = req.user.profile.id
    const song = await Song.create(req.body)
    res.status(200).json(song)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = {
  create,
}
