'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Fade-up scroll observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const openLightbox = (src, alt) => {
    setLightboxImg({ src, alt });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImg(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* ========== NAVBAR ========== */}
      <nav className="navbar" style={{ borderBottomColor: isScrolled ? '#39FF14' : '#2a2a2a', borderBottomWidth: isScrolled ? '1px' : '' }}>
        <div className="navbar-inner">
          <a href="#hero" className="nav-logo">R<span>.</span></a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button 
            className="nav-mobile-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <ul className={`nav-mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
          <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      {/* ========== HERO ========== */}
      <section className="hero" id="hero">
        <div className="hero-glow"></div>
        <div className="hero-content">
          <p className="hero-label fade-up">Portfolio</p>
          <h1 className="hero-name fade-up">Riyan</h1>
          <a href="#projects" className="hero-cta fade-up">
            Lihat Projects
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1rem', height: '1rem' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section className="section" id="about">
        <div className="section-inner">
          <h2 className="section-title fade-up">About <span>Me</span></h2>
          <div className="section-bar fade-up"></div>
          <div className="about-text fade-up">
            <p>
              Saya adalah seorang <strong>developer sekaligus tester</strong>.
              Saya membangun project Bank Sampah Digital dan QuadraPlay dari nol
              (full-stack), lalu juga melakukan proses testing-nya sendiri
              menggunakan test case terstruktur di Excel.
            </p>
            <p>
              Latar belakang ini membuat saya memahami sistem dari dua sisi:{' '}
              <span className="highlight">cara membangunnya dan cara mendobrak/mengujinya</span>{' '}
              untuk menemukan bug. Saya memiliki ketelitian tinggi dalam
              mendokumentasikan bug dan merancang skenario testing yang
              komprehensif.
            </p>
            <p>
              Saat ini saya sangat tertarik mendalami dunia{' '}
              <strong>Quality Assurance</strong>, khususnya{' '}
              <span className="highlight">game testing</span> — memastikan setiap
              produk yang sampai ke pengguna benar-benar berkualitas dan bebas
              dari bug kritis.
            </p>
          </div>
        </div>
      </section>

      {/* ========== PROJECTS / CASE STUDIES ========== */}
      <section className="section section-alt" id="projects">
        <div className="section-inner">
          <h2 className="section-title fade-up">Case <span>Studies</span></h2>
          <div className="section-bar fade-up"></div>

          {/* ===== PROJECT 1: PixelStation ===== */}
          <article className="project-block fade-up">
            <div className="project-header">
              <span className="project-number">01</span>
              <div className="project-title-group">
                <h3 className="project-title">PixelStation</h3>
                <div className="project-meta">
                  <span className="project-tag">PHP Native</span>
                  <span className="project-role-tag">Developer & Tester</span>
                </div>
              </div>
            </div>
            <p className="project-overview">
              Website reservasi PlayStation yang memudahkan pelanggan memesan
              jadwal bermain secara online. Pengguna dapat melihat ketersediaan
              waktu, memilih jadwal, dan melakukan reservasi secara real-time.
              Admin dapat mengelola data reservasi termasuk verifikasi dan
              konfirmasi pemesanan.
            </p>

            {/* Visual Preview */}
            <div className="project-visual">
              <h4 className="project-visual-label">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Visual Project
              </h4>
              <div className="visual-gallery">
                <div>
                  <img
                    src="/assets/image/pixelstation/dashboard.png"
                    alt="PixelStation Dashboard"
                    onClick={() => openLightbox('/assets/image/pixelstation/dashboard.png', 'PixelStation Dashboard')}
                  />
                  <p className="visual-caption">Dashboard Admin</p>
                </div>
                <div>
                  <img
                    src="/assets/image/pixelstation/list_game.png"
                    alt="PixelStation List Game"
                    onClick={() => openLightbox('/assets/image/pixelstation/list_game.png', 'PixelStation List Game')}
                  />
                  <p className="visual-caption">Daftar Game / Console</p>
                </div>
              </div>
            </div>

            <div className="project-grid">
              <div className="project-card">
                <h4 className="project-card-title">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Testing Scope
                </h4>
                <ul className="scope-list">
                  <li>Proses reservasi (validasi tanggal/jam bentrok)</li>
                  <li>Verifikasi admin terhadap pemesanan</li>
                  <li>Validasi form input (nama, nomor HP, tanggal)</li>
                  <li>Edge case: reservasi di jam yang sama oleh 2 user</li>
                  <li>Responsivitas tampilan di berbagai perangkat</li>
                </ul>
              </div>
              <div className="project-card">
                <h4 className="project-card-title">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Metode Testing
                </h4>
                <div className="method-tags">
                  <span className="method-tag">Functional Testing</span>
                  <span className="method-tag">Boundary Value Analysis</span>
                  <span className="method-tag">Negative Testing</span>
                  <span className="method-tag">Regression Testing</span>
                </div>
              </div>
            </div>

            {/* Testing Evidence */}
            <div className="testing-evidence">
              <h4 className="testing-evidence-label">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Bukti Testing (Test Case Excel)
              </h4>
              <div className="testing-gallery">
                <img
                  src="/assets/image/pixelstation/testing1_pixelstation.png"
                  alt="Test Case PixelStation 1"
                  onClick={() => openLightbox('/assets/image/pixelstation/testing1_pixelstation.png', 'Test Case PixelStation 1')}
                />
                <img
                  src="/assets/image/pixelstation/testing2_pixelstation.png"
                  alt="Test Case PixelStation 2"
                  onClick={() => openLightbox('/assets/image/pixelstation/testing2_pixelstation.png', 'Test Case PixelStation 2')}
                />
                <img
                  src="/assets/image/pixelstation/testing3_pixelstation.png"
                  alt="Test Case PixelStation 3"
                  onClick={() => openLightbox('/assets/image/pixelstation/testing3_pixelstation.png', 'Test Case PixelStation 3')}
                />
              </div>
            </div>

            <a
              href="https://github.com/sparkleflyyy/PixelStation-UAS"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Lihat Repository →
            </a>
          </article>

          {/* ===== PROJECT 2: Sistem Penyewaan PS ===== */}
          <article className="project-block fade-up">
            <div className="project-header">
              <span className="project-number">02</span>
              <div className="project-title-group">
                <h3 className="project-title">Sistem Penyewaan PS</h3>
                <div className="project-meta">
                  <span className="project-tag">Java</span>
                  <span class="project-role-tag">Developer & Tester</span>
                </div>
              </div>
            </div>
            <p className="project-overview">
              Sistem penyewaan PlayStation berbasis Java untuk mengelola transaksi
              sewa unit console. Mencakup manajemen stok, pencatatan durasi sewa,
              dan kalkulasi biaya secara otomatis.
            </p>

            {/* Visual Preview */}
            <div className="project-visual">
              <h4 className="project-visual-label">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Visual Project
              </h4>
              <div className="visual-gallery">
                <div>
                  <img
                    src="/assets/image/sistem penyewaan ps java/1.png"
                    alt="Sistem Penyewaan PS 1"
                    onClick={() => openLightbox('/assets/image/sistem penyewaan ps java/1.png', 'Sistem Penyewaan PS 1')}
                  />
                  <p className="visual-caption">Interface Form Login & Unit PS</p>
                </div>
                <div>
                  <img
                    src="/assets/image/sistem penyewaan ps java/2.png"
                    alt="Sistem Penyewaan PS 2"
                    onClick={() => openLightbox('/assets/image/sistem penyewaan ps java/2.png', 'Sistem Penyewaan PS 2')}
                  />
                  <p className="visual-caption">Detail Form Transaksi Penyewaan</p>
                </div>
              </div>
            </div>

            <div className="project-grid">
              <div className="project-card">
                <h4 className="project-card-title">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Testing Scope
                </h4>
                <ul className="scope-list">
                  <li>Validasi input transaksi penyewaan</li>
                  <li>Perhitungan biaya sewa berdasarkan durasi</li>
                  <li>Manajemen stok unit PS (ketersediaan)</li>
                  <li>Penanganan pengembalian unit</li>
                  <li>Edge case: input negatif, durasi nol</li>
                </ul>
              </div>
              <div className="project-card">
                <h4 className="project-card-title">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Metode Testing
                </h4>
                <div className="method-tags">
                  <span className="method-tag">Functional Testing</span>
                  <span className="method-tag">Unit Testing</span>
                  <span className="method-tag">Boundary Value Analysis</span>
                  <span className="method-tag">Negative Testing</span>
                </div>
              </div>
            </div>

            {/* Testing Evidence */}
            <div className="testing-evidence">
              <h4 className="testing-evidence-label">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Bukti Testing (Test Case Excel)
              </h4>
              <div className="screenshot-placeholder">
                <p>[INSERT SCREENSHOT TEST CASE EXCEL]</p>
                <p className="sub">Tabel: ID, Deskripsi, Steps, Expected Result, Actual Result, Status</p>
              </div>
            </div>
          </article>

          {/* ===== PROJECT 3: Bank Sampah Digital ===== */}
          <article className="project-block fade-up">
            <div className="project-header">
              <span class="project-number">03</span>
              <div className="project-title-group">
                <h3 className="project-title">Bank Sampah Digital</h3>
                <div className="project-meta">
                  <span className="project-tag">Laravel</span>
                  <span className="project-tag">Tailwind CSS</span>
                  <span className="project-tag">Alpine.js</span>
                  <span className="project-tag">MySQL</span>
                  <span className="project-tag">Google SSO</span>
                  <span className="project-tag">reCAPTCHA v2</span>
                  <span className="project-role-tag">Developer & Tester</span>
                </div>
              </div>
            </div>
            <p className="project-overview">
              Platform digitalisasi pengelolaan sampah dengan 3 level akses —
              Super Admin (dashboard analitik, manajemen cabang &amp; pengguna,
              master data jenis sampah), Admin Cabang (verifikasi setoran,
              manajemen produk daur ulang, transaksi penjualan), dan Nasabah
              (riwayat setoran, marketplace daur ulang dengan filter &amp;
              checkout, pelacakan transaksi dengan invoice).
            </p>

            {/* Visual Preview */}
            <div className="project-visual">
              <h4 className="project-visual-label">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Visual Project
              </h4>
              <div className="visual-gallery">
                <div>
                  <img
                    src="/assets/image/Bank-Sampah/dashboardUser.png"
                    alt="Bank Sampah Dashboard Nasabah"
                    onClick={() => openLightbox('/assets/image/Bank-Sampah/dashboardUser.png', 'Bank Sampah Dashboard Nasabah')}
                  />
                  <p className="visual-caption">Dashboard Nasabah</p>
                </div>
                <div>
                  <img
                    src="/assets/image/Bank-Sampah/marketplaceUser.png"
                    alt="Bank Sampah Marketplace"
                    onClick={() => openLightbox('/assets/image/Bank-Sampah/marketplaceUser.png', 'Bank Sampah Marketplace')}
                  />
                  <p className="visual-caption">Marketplace Produk Daur Ulang</p>
                </div>
                <div>
                  <img
                    src="/assets/image/Bank-Sampah/superadmin.png"
                    alt="Bank Sampah Dashboard Superadmin"
                    onClick={() => openLightbox('/assets/image/Bank-Sampah/superadmin.png', 'Bank Sampah Dashboard Superadmin')}
                  />
                  <p className="visual-caption">Dashboard Superadmin</p>
                </div>
                <div>
                  <img
                    src="/assets/image/Bank-Sampah/detailSetoranUser.png"
                    alt="Bank Sampah Detail Setoran"
                    onClick={() => openLightbox('/assets/image/Bank-Sampah/detailSetoranUser.png', 'Bank Sampah Detail Setoran')}
                  />
                  <p className="visual-caption">Detail Transaksi Setoran</p>
                </div>
              </div>
            </div>

            <div className="project-grid">
              <div className="project-card">
                <h4 className="project-card-title">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Testing Scope
                </h4>
                <ul className="scope-list">
                  <li>Role-based access control (Super Admin, Admin Cabang, Nasabah)</li>
                  <li>Validasi OTP email saat reset password</li>
                  <li>Validasi kekuatan password (min 8 karakter, huruf besar, angka, karakter spesial)</li>
                  <li>Flow setoran sampah → update saldo nasabah &amp; stok gudang</li>
                  <li>Flow marketplace: filter, checkout, upload bukti bayar, status pesanan</li>
                  <li>Generate invoice dengan watermark</li>
                </ul>
              </div>
              <div className="project-card">
                <h4 className="project-card-title">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Metode Testing
                </h4>
                <div className="method-tags">
                  <span className="method-tag">Role-based Access Testing</span>
                  <span className="method-tag">Functional Testing</span>
                  <span className="method-tag">Regression Testing</span>
                  <span className="method-tag">Security Testing</span>
                  <span className="method-tag">Integration Testing</span>
                </div>
              </div>
            </div>

            {/* Testing Evidence */}
            <div className="testing-evidence">
              <h4 className="testing-evidence-label">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Bukti Testing (Test Case Excel)
              </h4>
              <div className="testing-gallery">
                <img
                  src="/assets/image/Bank-Sampah/tetsing1_banksampah.png"
                  alt="Test Case Bank Sampah 1"
                  onClick={() => openLightbox('/assets/image/Bank-Sampah/tetsing1_banksampah.png', 'Test Case Bank Sampah 1')}
                />
                <img
                  src="/assets/image/Bank-Sampah/testing2_banksampah.png"
                  alt="Test Case Bank Sampah 2"
                  onClick={() => openLightbox('/assets/image/Bank-Sampah/testing2_banksampah.png', 'Test Case Bank Sampah 2')}
                />
              </div>
            </div>

            <a
              href="https://github.com/sparkleflyyy/Bank-Sampah"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Lihat Repository →
            </a>
          </article>

          {/* ===== PROJECT 4: QuadraPlay ===== */}
          <article className="project-block fade-up">
            <div className="project-header">
              <span className="project-number">04</span>
              <div className="project-title-group">
                <h3 className="project-title">QuadraPlay</h3>
                <div className="project-meta">
                  <span className="project-tag">Flutter (Dart)</span>
                  <span className="project-tag">247Go Cloud</span>
                  <span className="project-tag">Midtrans Payment</span>
                  <span className="project-role-tag">Developer & Tester</span>
                </div>
              </div>
            </div>
            <p className="project-overview">
              Aplikasi mobile rental PlayStation dengan fitur reservasi, manajemen
              pengiriman (delivery), dan integrasi pembayaran. Tersedia sisi
              pelanggan dan panel admin untuk manajemen unit, reservasi, dan
              driver pengiriman.
            </p>

            {/* Visual Preview */}
            <div className="project-visual">
              <h4 className="project-visual-label">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Visual Project
              </h4>
              <div
                className="visual-gallery"
                style={{
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                }}
              >
                <div>
                  <img
                    src="/assets/image/quadraplay/visualproject_quadraplay.png"
                    alt="QuadraPlay Mobile Visual"
                    onClick={() => openLightbox('/assets/image/quadraplay/visualproject_quadraplay.png', 'QuadraPlay Mobile Visual')}
                    style={{ maxWidth: '260px', margin: '0 auto' }}
                  />
                  <p className="visual-caption">UI Aplikasi Mobile Rental</p>
                </div>
              </div>
            </div>

            <div className="project-grid">
              <div className="project-card">
                <h4 className="project-card-title">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Testing Scope
                </h4>
                <ul className="scope-list">
                  <li>Flow registrasi &amp; login</li>
                  <li>
                    Reservasi unit PS3/PS4/PS5 (pilihan tanggal &amp; durasi)
                  </li>
                  <li>Upload dokumen identitas (KTP) — validasi format file</li>
                  <li>Integrasi pembayaran Midtrans (sandbox simulator)</li>
                  <li>Panel admin: manajemen reservasi &amp; driver</li>
                  <li>
                    Edge case: pembayaran gagal/timeout, reservasi bentrok jadwal
                  </li>
                </ul>
              </div>
              <div className="project-card">
                <h4 className="project-card-title">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Metode Testing
                </h4>
                <div className="method-tags">
                  <span className="method-tag">Functional Testing</span>
                  <span className="method-tag">Integration Testing</span>
                  <span className="method-tag">Payment Gateway Testing</span>
                  <span className="method-tag">Regression Testing</span>
                  <span className="method-tag">Edge Case Testing</span>
                </div>
              </div>
            </div>

            {/* Testing Evidence */}
            <div className="testing-evidence">
              <h4 className="testing-evidence-label">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Bukti Testing (Test Case Excel)
              </h4>
              <div className="testing-gallery">
                <img
                  src="/assets/image/quadraplay/testing1.png"
                  alt="Test Case QuadraPlay 1"
                  onClick={() => openLightbox('/assets/image/quadraplay/testing1.png', 'Test Case QuadraPlay 1')}
                />
                <img
                  src="/assets/image/quadraplay/testing2.png"
                  alt="Test Case QuadraPlay 2"
                  onClick={() => openLightbox('/assets/image/quadraplay/testing2.png', 'Test Case QuadraPlay 2')}
                />
                <img
                  src="/assets/image/quadraplay/testing3.png"
                  alt="Test Case QuadraPlay 3"
                  onClick={() => openLightbox('/assets/image/quadraplay/testing3.png', 'Test Case QuadraPlay 3')}
                />
              </div>
            </div>

            <a
              href="https://github.com/sparkleflyyy/QuadraPlay"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Lihat Repository →
            </a>
          </article>
        </div>
      </section>

      {/* ========== SKILLS ========== */}
      <section className="section" id="skills">
        <div className="section-inner">
          <h2 className="section-title fade-up">Skills & <span>Tools</span></h2>
          <div className="section-bar fade-up"></div>
          <div className="skills-grid">
            <div className="fade-up">
              <h3>Testing</h3>
              <div className="skill-item">Manual Testing</div>
              <div className="skill-item">Test Case Design</div>
              <div className="skill-item">Regression Testing</div>
              <div className="skill-item">Role-based Access Testing</div>
              <div className="skill-item">Bug Reporting</div>
            </div>
            <div className="fade-up fade-up-delay-1">
              <h3>Tools</h3>
              <div className="skill-item">Excel / Google Sheets</div>
              <div className="skill-item">Jira (Familiar)</div>
              <div className="skill-item">Postman (API Testing)</div>
              <div className="skill-item">Git & GitHub</div>
              <div className="skill-item">VS Code</div>
            </div>
            <div className="fade-up fade-up-delay-2">
              <h3>Development</h3>
              <div className="skill-item">PHP / Laravel</div>
              <div className="skill-item">Java</div>
              <div className="skill-item">Flutter / Dart</div>
              <div className="skill-item">MySQL</div>
              <div className="skill-item">Tailwind CSS</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section className="section section-alt" id="contact">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <h2 className="section-title fade-up" style={{ textAlign: 'center' }}>
            Get In <span>Touch</span>
          </h2>
          <div className="section-bar section-bar-center fade-up"></div>
          <p className="fade-up" style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
            Tertarik berkolaborasi atau punya pertanyaan? Jangan ragu untuk
            menghubungi saya.
          </p>

          <div className="contact-links fade-up">
            {/* Email */}
            <a href="mailto:riyannurizqy@gmail.com" className="contact-link">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/sparkleflyyy"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem' }}>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Download CV */}
          <a href="/CV_RiyanNurizqy.pdf" download className="cv-btn fade-up">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.25rem', height: '1.25rem' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
            </svg>
            Download CV
          </a>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <p>&copy; 2026 Riyan. All rights reserved.</p>
      </footer>

      {/* ========== LIGHTBOX ========== */}
      {lightboxImg && (
        <div className="lightbox active" onClick={closeLightbox}>
          <img src={lightboxImg.src} alt={lightboxImg.alt} />
        </div>
      )}
    </>
  );
}
