#  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" height="40" alt="nestjs logo"  /> Repository Belajar NestJS

Selamat datang di **Repository Belajar NestJS**! Repository ini dibuat untuk mempelajari dan bereksperimen dengan NestJS, sebuah framework Node.js yang progresif untuk membangun aplikasi server-side yang efisien, scalable, dan enterprise-grade.

---

## Daftar Isi

1. [Tentang NestJS](#tentang-nestjs)
2. [Struktur Proyek](#struktur-proyek)
3. [Memulai](#memulai)
4. [Script yang Tersedia](#script-yang-tersedia)
5. [Tujuan Pembelajaran](#tujuan-pembelajaran)
6. [Referensi](#referensi)

---

## Tentang NestJS

NestJS adalah framework Node.js yang menggunakan TypeScript dan mengikuti pola arsitektur modular yang terinspirasi dari Angular. Framework ini menyediakan fondasi yang kuat untuk membangun aplikasi server-side yang kompleks dan scalable dengan fitur seperti dependency injection, modularisasi, dan middleware.

## Struktur Proyek

Proyek ini mengikuti struktur dasar aplikasi NestJS:

```plaintext
src/
├── app.module.ts          # Modul utama aplikasi
├── main.ts                # Titik masuk aplikasi
├── controllers/           # Controller (route dan endpoint)
├── services/              # Service (logika bisnis)
├── modules/               # Modul tambahan
└── common/                # Utilities, DTO, dll.
