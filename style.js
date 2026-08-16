// Database Prompt Sederhana
const promptDatabase = {
    "Copywriting Jualan": "Bertindaklah sebagai Copywriter profesional. Buat iklan produk ramah lingkungan untuk Instagram menggunakan metode Hook, Story, Offer. Target pasarnya adalah milenial. Pastikan bahasanya santai, persuasif, dan menyertakan emoji menarik.",
    "Ide Konten Blog": "Bertindaklah sebagai SEO Expert. Berikan saya 5 judul artikel blog yang paling banyak dicari orang seputar integrasi AI dalam produktivitas kerja harian lengkap dengan saran keyword utamanya.",
    "Strategi Marketing UKM": "Bertindaklah sebagai Konsultan Bisnis. Berikan strategi pemasaran digital tanpa biaya (organik) untuk toko online lokal yang baru buka agar bisa mendapatkan 100 pelanggan pertama dalam waktu 30 hari."
};

// Ambil Elemen HTML
const kategoriSelect = document.getElementById('kategori');
const generateBtn = document.getElementById('generate-btn');
const promptResult = document.getElementById('prompt-result');
const copyBtn = document.getElementById('copy-btn');

// Fungsi Menghasilkan Prompt saat Tombol Diklik
generateBtn.addEventListener('click', function() {
    const pilihanKategori = kategoriSelect.value;
    const hasilPrompt = promptDatabase[pilihanKategori];
    
    if (hasilPrompt) {
        promptResult.value = hasilPrompt;
    } else {
        promptResult.value = "Kategori tidak ditemukan.";
    }
});

// Fungsi Salin ke Clipboard
copyBtn.addEventListener('click', function() {
    if (promptResult.value === "" || promptResult.value.startsWith("Hasil prompt")) {
        alert("Silakan rancang prompt terlebih dahulu!");
        return;
    }
    
    promptResult.select();
    promptResult.setSelectionRange(0, 99999); // Untuk perangkat mobile
    
    navigator.clipboard.writeText(promptResult.value)
        .then(() => {
            alert("Prompt berhasil disalin! Tinggal paste ke ChatGPT.");
        })
        .catch(err => {
            console.error("Gagal menyalin teks: ", err);
        });
});
