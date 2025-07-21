const Profile = require('../models/Profile');

const saveProfile = async (req, res) => {
  try {
    console.log('Gelen veri:', req.body);  // İstek verisi burada görünecek
    const { name, telephone, tc, email } = req.body;

    if (!name || !telephone || !tc || !email) {
      return res.status(400).json({
        success: false,
        message: 'Tüm alanlar (name, telephone, tc, email) zorunludur.',
      });
    }

    const profile = new Profile({ name, telephone, tc, email });
    await profile.save();

    console.log('Kayıt başarılı:', profile);

    res.json({ success: true, message: 'Profil başarıyla kaydedildi.' });
  } catch (error) {
    console.error('Profil kaydetme hatası:', error);
    res.status(500).json({ success: false, message: 'Sunucu hatası', error: error.message });
  }
};

module.exports = { saveProfile };
