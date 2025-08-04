export function createApp() {
  return `
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bengkel Motor Jaya</title>
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="font-sans bg-gray-50">
      
      <!-- DISCLAIMER POPUP - MANDATORY FIRST -->
      <div id="disclaimerModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div class="bg-white rounded-lg p-8 max-w-md mx-4 shadow-2xl">
          <div class="text-center">
            <div class="mb-4">
              <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">⚠️ Pemberitahuan Penting</h3>
              <p class="text-gray-600 text-sm mb-4">
                Website ini dibuat oleh <strong>NYAI-Autokeren</strong> dan dihosting di domain <strong>keren.co.id</strong>.
              </p>
              <p class="text-gray-600 text-sm mb-4">
                Demi mencegah penyalahgunaan dan penipuan, kami tidak bertanggung jawab atas informasi bisnis yang ditampilkan.  Harap berhati-hati dan lakukan verifikasi sendiri sebelum melakukan transaksi.
              </p>
              <p class="text-blue-600 text-sm mb-6">
                Ingin menghilangkan peringatan ini dan mendapatkan fitur premium lainnya? <br>
                <strong>Hubungi NYAI untuk upgrade paket premium!</strong>
              </p>
            </div>
            <div class="flex flex-col gap-3">
              <button onclick="closeDisclaimer()" 
                      class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                ✅ Lanjutkan
              </button>
              <a href="https://wa.me/6281234567890?text=Halo%20NYAI,%20saya%20tertarik%20untuk%20upgrade%20paket%20premium%20website%20Bengkel%20Motor%20Jaya" 
                 target="_blank"
                 class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                💬 Hubungi NYAI Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- MAIN WEBSITE CONTENT -->
      <div id="mainContent" style="filter: blur(3px);">
        
        <!-- HEADER -->
        <header class="bg-white shadow-lg">
          <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div>
              <h1 class="text-2xl font-bold text-gray-900">Bengkel Motor Jaya</h1>
              <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Website by NYAI-Autokeren</span>
            </div>
            <a href="https://wa.me/6281234567890" target="_blank" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
              Hubungi Kami via WhatsApp
            </a>
          </div>
        </header>

        <!-- HERO SECTION -->
        <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div class="max-w-7xl mx-auto px-4 text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">Bengkel Motor Jaya - Solusi Perawatan Sepeda Motor Anda</h1>
            <p class="text-xl mb-8">Spesialis servis, perbaikan, dan perawatan sepeda motor semua merk.  Teknisi berpengalaman, peralatan modern, dan suku cadang original.</p>
            <a href="#contact" class="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold">
              Hubungi Kami
            </a>
          </div>
        </section>

        <!-- SERVICES SECTION -->
        <section class="py-16 bg-white">
          <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">Layanan Kami</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gray-100 p-6 rounded-lg">
                <h3>Servis Berkala</h3>
                <p>Perawatan rutin untuk menjaga performa motor Anda.</p>
              </div>
              <div class="bg-gray-100 p-6 rounded-lg">
                <h3>Perbaikan Mesin</h3>
                <p>Diagnosa dan perbaikan masalah pada mesin motor Anda.</p>
              </div>
              <div class="bg-gray-100 p-6 rounded-lg">
                <h3>Penggantian Sparepart</h3>
                <p>Sparepart original dan berkualitas untuk kendaraan Anda.</p>
              </div>
            </div>
          </div>
        </section>


        <!-- ABOUT SECTION -->
        <section class="py-16 bg-gray-100">
          <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">Tentang Bengkel Motor Jaya</h2>
            <p class="text-lg text-gray-700 text-center">Bengkel Motor Jaya adalah bengkel sepeda motor profesional yang berkomitmen memberikan pelayanan terbaik dan solusi tercepat untuk perawatan dan perbaikan kendaraan Anda. Kami didukung oleh teknisi berpengalaman dan menggunakan peralatan modern serta suku cadang berkualitas.</p>
          </div>
        </section>

        <!-- CONTACT SECTION -->
        <section id="contact" class="py-16 bg-gray-900 text-white">
          <div class="max-w-7xl mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-8">Hubungi Kami</h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div>
                <h3 class="text-xl font-bold mb-2">📍 Alamat</h3>
                <p>Jl. Raya Jatiasih No. 123, Bekasi, Jawa Barat</p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">📞 Telepon</h3>
                <p>+62 812-3456-7890</p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">⏰ Jam Buka</h3>
                <p>Senin - Minggu, 08:00 - 20:00 WIB</p>
              </div>
            </div>
          </div>
        </section>

        <!-- FOOTER -->
        <footer class="bg-gray-800 text-white py-8">
          <div class="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2024 Bengkel Motor Jaya. Website by NYAI-Autokeren.</p>
            <p class="text-sm text-gray-400 mt-2">Powered by keren.co.id</p>
          </div>
        </footer>
        
      </div>

      <script>
        function closeDisclaimer() {
          document.getElementById('disclaimerModal').style.display = 'none';
          document.getElementById('mainContent').style.filter = 'none';
        }
        
        // Show disclaimer on page load
        document.addEventListener('DOMContentLoaded', function() {
          document.getElementById('disclaimerModal').style.display = 'flex';
        });
      </script>
    </body>
    </html>
  `;
}
