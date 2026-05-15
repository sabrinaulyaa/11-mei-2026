import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>PORTOFOLIO</h1>
        <h2>Sabrina Ulya Sisviandra</h2>

        <p>
            Saya Sabrina Ulya Sisviandra, mahasiswi aktif 
            D4 Teknik Elektronika Industri Jurusan Teknik Elektro 
            Politeknik Negeri Padang angkatan 2023.
        </p>

        <p>
            Selain mengikuti kegiatan perkuliahan, saya juga pernah aktif 
            dalam organisasi Himpunan Mahasiswa Jurusan Elektro dan pernah menjabat 
            sebagai Staf Ahli Departemen Ristek.
        </p>

        <p>
            Saya memiliki minat pada bidang robotika, sistem kendali, 
            dan otomasi industri.
        </p>

        <hr>

        <h3>Data Diri</h3>
        <ul>
            <li>Nama : Sabrina Ulya Sisviandra</li>
            <li>Tempat, Tanggal Lahir : Pekanbaru, 21 Juli 2005</li>
            <li>Pendidikan : Politeknik Negeri Padang</li>
            <li>Program Studi : D4 Teknik Elektronika Industri</li>
        </ul>


        <h3>Keahlian</h3>
        <ul>
            <li>Arduino</li>
            <li>Dasar PLC</li>
            <li>Robotika Dasar</li>
            <li>Sistem Kendali</li>
        </ul>

        <p><b>Motto:</b> "Terus belajar dan berkembang menjadi lebih baik."</p>
    `);
});

app.get('/about', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Tentang Saya',
        data: {
            nama: 'Sabrina Ulya Sisviandra',
            ttl: 'Pekanbaru, 21 Juli 2005',
            kampus: 'Politeknik Negeri Padang',
            prodi: 'D4 Teknik Elektronika Industri',
            organisasi: 'Himpunan Mahasiswa Jurusan Elektro',
            jabatan: 'Staf Ahli Departemen Ristek'
        }
    });
});

app.listen(5000, () => {
    console.info('Aplikasi jalan di http://localhost:5000')
});