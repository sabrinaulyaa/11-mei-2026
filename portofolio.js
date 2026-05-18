import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express();

/* FIX __dirname */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* AGAR CSS BISA DIAKSES */
app.use(express.static(path.join(__dirname, 'public')));

/* ROUTE HOME */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

/* ROUTE ABOUT */
app.get('/about', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Tentang Saya',
        data: {
            nama: 'Sabrina Ulya Sisviandra',
            ttl: 'Pekanbaru, 21 Juli 2005',
            kampus: 'Politeknik Negeri Padang',
            prodi: 'D4 Teknik Elektronika Industri'
        }
    });
});

/* SERVER */
app.listen(5000, () => {
    console.log('Server jalan di http://localhost:5000');
});
