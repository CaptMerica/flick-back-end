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

async function index(req, res) {
  try {
    const songs = await Song.findAll()
    res.status(200).json(songs)
  } catch (error) {
    res.status(500).json({err: error})
  }
}

async function update (req, res) {
  try {
    const song = await Song.update(
      req.body,
      {where: { id: req.params.id }, returning: true }
    )
    res.status(200).json(song)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
}
