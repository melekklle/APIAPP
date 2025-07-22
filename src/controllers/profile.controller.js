const Profile = require('../models/Profile');

const saveProfile = async (req, res) => {
  try {
    const { name, telephone, email } = req.body;

    if (!name || !telephone || !email) {
      return res.status(400).json({ success: false, message: 'Tüm alanlar zorunlu.' });
    }

    const profile = new Profile({ name, telephone, email });
    await profile.save();

    res.json({ success: true, message: 'Profil kaydedildi.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Sunucu hatası', error: error.message });
  }
};

const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Sunucu hatası', error: error.message });
  }
};

module.exports = { saveProfile, getProfiles };
