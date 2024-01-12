const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');

const models = require("../../models/index");
const User = models.user;

const firebaseConfig = require('../../middleware/firebaseConfig');
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = {
    userRegister: async (req, res) => {
        try {
            const { email, password } = req.body;
            
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // await User.create({
            //     firebase_uid: user.uid,
            //     email: user.email,
            // });
            console.log(user);

            return res.status(200).json({
                success: true,
                message: 'Pengguna berhasil didaftarkan',
                user: user
            });
        } catch (error) {
            console.error('Error during user registration:', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal mendaftarkan pengguna',
                error: error.message,
            });
        }
    },

    userLogin: async (req, res) => {
        try {
            const { email, password } = req.body;
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Lakukan tindakan lain jika diperlukan

            res.status(200).json({ success: true, message: 'Pengguna berhasil masuk', user: user });
        } catch (error) {
            console.error('Error during user login:', error);
            res.status(500).json({ success: false, message: 'Gagal masuk', error: error.message });
        }
    }
};
