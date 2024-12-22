<?php
$host = 'localhost'; // Nama server atau alamat IP
$user = 'root'; // Nama pengguna database
$password = ''; // Kata sandi pengguna database, jika tidak ada, tetap kosong
$database = 'db_stekom'; // Nama database yang akan diakses

// Membuat koneksi ke database
$db = mysqli_connect($host, $user, $password, $database);

// Memeriksa apakah koneksi berhasil
if (!$db) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

echo "Koneksi berhasil";
?>
