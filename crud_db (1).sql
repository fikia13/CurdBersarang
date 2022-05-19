-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2022 at 08:39 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `choice`
--

CREATE TABLE `choice` (
  `id` int(11) NOT NULL,
  `idquestion` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `choice`
--

INSERT INTO `choice` (`id`, `idquestion`, `name`, `createdAt`, `updatedAt`) VALUES
(3, 2, 'jawabn 2', '2022-05-19 03:48:31', '2022-05-19 03:48:31'),
(6, 6, 'jawabn sa', '2022-05-19 02:14:30', '2022-05-19 06:18:07'),
(10, 2, 'jawabn 3', '2022-05-19 05:36:22', '2022-05-19 05:36:22'),
(14, 2, 'jawabn 3', '2022-05-19 05:39:20', '2022-05-19 05:39:20'),
(16, 5, 'jawabn 3', '2022-05-19 05:39:40', '2022-05-19 05:39:40'),
(17, 5, 'jawabn 3', '2022-05-19 05:39:41', '2022-05-19 05:39:41'),
(30, 30, 'benar as', '2022-05-19 06:07:31', '2022-05-19 06:18:22'),
(31, 31, 'asasasas', '2022-05-19 06:19:22', '2022-05-19 06:19:26'),
(32, 32, 'asasasa', '2022-05-19 06:20:09', '2022-05-19 06:20:15'),
(34, 19, 'Aktivitas Ekpresi dengan goresan pensil dan warna', '2022-05-19 06:23:52', '2022-05-19 06:24:32'),
(37, 20, 'Adalah itu tentang apa gila', '2022-05-19 06:25:47', '2022-05-19 06:35:24'),
(38, 20, 'ya itu deh poko nya itu', '2022-05-19 06:28:26', '2022-05-19 06:35:21'),
(40, 19, 'poko itu dah ', '2022-05-19 06:34:29', '2022-05-19 06:34:29');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `teacher` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `name`, `teacher`, `createdAt`, `updatedAt`) VALUES
(1, 'Basis data ', 'Bapak Zarkasi', '2022-05-17 18:32:44', '2022-05-18 11:22:03'),
(2, 'Pemro SQL Updated', 'Bapak Arif', '2022-05-17 18:34:12', '2022-05-18 04:39:00'),
(25, 'Kelas Backend', 'Dosen B', '2022-05-18 04:23:46', '2022-05-18 14:37:27'),
(34, 'Kelas Adminsitrasi Bisnis', 'Dosen A', '2022-05-18 14:34:36', '2022-05-18 14:34:36'),
(37, 'Kelas Gambar Expert', 'Bapak coki Sitohang', '2022-05-19 06:21:46', '2022-05-19 06:32:37');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `idquis` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `idquis`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Apa yang dimaksud dengan hati?', '2022-05-19 02:55:13', '2022-05-19 02:55:13'),
(5, 1, 'ketipan matahari?', '2022-05-19 01:56:01', '2022-05-19 01:56:01'),
(7, 2, 'ketipan matahar 9', '2022-05-19 02:16:39', '2022-05-19 02:16:39'),
(9, 1, 'apa bisa?', '2022-05-19 04:56:43', '2022-05-19 04:56:43'),
(10, 11, 'Jelasin pengaruh kamu terhadap aku? posaas', '2022-05-19 04:57:14', '2022-05-19 05:12:13'),
(11, 11, 'oiya bisa tha hahahahah', '2022-05-19 04:57:22', '2022-05-19 05:05:58'),
(12, 14, 'bisa termnyata ?', '2022-05-19 05:13:30', '2022-05-19 05:15:07'),
(15, 1, 'oiya', '2022-05-19 05:30:34', '2022-05-19 05:30:34'),
(16, 1, 'oko?', '2022-05-19 05:41:41', '2022-05-19 05:41:41'),
(17, 18, 'Conasasa', '2022-05-19 05:47:48', '2022-05-19 05:47:56'),
(19, 20, 'Apa itu menggambar ?', '2022-05-19 06:23:33', '2022-05-19 06:36:10'),
(20, 20, 'Apa itu software ?', '2022-05-19 06:25:21', '2022-05-19 06:29:46'),
(22, 20, 'apaa hayo', '2022-05-19 06:29:29', '2022-05-19 06:29:37'),
(23, 20, 'iya', '2022-05-19 06:36:34', '2022-05-19 06:36:34');

-- --------------------------------------------------------

--
-- Table structure for table `quis`
--

CREATE TABLE `quis` (
  `id` int(11) NOT NULL,
  `idtopic` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quis`
--

INSERT INTO `quis` (`id`, `idtopic`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Quis 1asas', '2022-05-18 10:57:42', '2022-05-19 06:27:41'),
(4, 2, 'Quis 3', '2022-05-19 00:52:59', '2022-05-19 00:52:59'),
(6, 46, 'Quis 3', '2022-05-19 03:15:18', '2022-05-19 03:15:18'),
(9, 48, 'as', '2022-05-19 03:35:06', '2022-05-19 03:35:06'),
(11, 1, 'Quis 11', '2022-05-19 03:37:54', '2022-05-19 04:11:41'),
(13, 49, 'asas', '2022-05-19 03:47:02', '2022-05-19 03:47:02'),
(14, 50, 'Quis 1 tentang permusayaratan', '2022-05-19 03:47:50', '2022-05-19 03:47:50'),
(18, 51, 'Cobaasas', '2022-05-19 05:47:41', '2022-05-19 05:48:05'),
(19, 53, 'Quis 1', '2022-05-19 06:22:49', '2022-05-19 06:22:49'),
(20, 56, 'Quis ', '2022-05-19 06:23:07', '2022-05-19 06:23:21'),
(22, 57, 'Quis 1', '2022-05-19 06:31:53', '2022-05-19 06:31:53'),
(23, 57, 'Quis2', '2022-05-19 06:32:01', '2022-05-19 06:32:01');

-- --------------------------------------------------------

--
-- Table structure for table `topics`
--

CREATE TABLE `topics` (
  `id` int(11) NOT NULL,
  `idcourse` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `topics`
--

INSERT INTO `topics` (`id`, `idcourse`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Quis 1as', '2022-05-18 08:03:26', '2022-05-19 06:27:36'),
(9, 2, 'Perkalian', '2022-05-18 08:33:09', '2022-05-18 14:47:39'),
(12, 33, 'quis abckkk dekc', '2022-05-18 11:11:33', '2022-05-18 11:11:33'),
(13, 33, 'quis materi 1', '2022-05-18 11:11:50', '2022-05-18 11:11:50'),
(15, 2, 'quis mater', '2022-05-18 12:53:12', '2022-05-18 14:33:44'),
(18, 2, 'topik 77', '2022-05-18 13:09:55', '2022-05-18 14:33:52'),
(20, 2, 'quis x', '2022-05-18 13:12:49', '2022-05-18 14:33:58'),
(32, 22, 'qwqw', '2022-05-18 13:30:47', '2022-05-18 13:30:47'),
(37, 2, 'Quis 2', '2022-05-18 13:35:41', '2022-05-18 13:35:41'),
(38, 2, 'quis 3', '2022-05-18 13:41:40', '2022-05-18 13:41:40'),
(39, 2, 'Topik coba', '2022-05-18 14:20:29', '2022-05-18 14:20:29'),
(41, 34, 'Masalah Bisnis Perbangkang', '2022-05-18 14:34:54', '2022-05-18 14:35:06'),
(43, 25, 'Belajasr', '2022-05-18 14:36:59', '2022-05-18 14:57:52'),
(46, 1, 'Pengenalan backend', '2022-05-19 02:45:02', '2022-05-19 02:45:11'),
(47, 1, 'Asosiation', '2022-05-19 03:27:47', '2022-05-19 03:27:47'),
(48, 25, 'Quis1', '2022-05-19 03:33:54', '2022-05-19 03:33:54'),
(50, 34, 'Quis3', '2022-05-19 03:47:33', '2022-05-19 03:47:33'),
(51, 36, 'Coba', '2022-05-19 05:47:34', '2022-05-19 05:47:34'),
(52, 1, 'Bisa topik', '2022-05-19 05:59:42', '2022-05-19 05:59:42'),
(53, 37, 'Topik 1', '2022-05-19 06:21:56', '2022-05-19 06:21:56'),
(55, 37, 'Topik 2', '2022-05-19 06:22:07', '2022-05-19 06:22:34'),
(56, 37, 'Quis 1', '2022-05-19 06:22:57', '2022-05-19 06:22:57'),
(57, 37, 'Topik 3', '2022-05-19 06:31:19', '2022-05-19 06:31:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `choice`
--
ALTER TABLE `choice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quis`
--
ALTER TABLE `quis`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `topics`
--
ALTER TABLE `topics`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `choice`
--
ALTER TABLE `choice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `quis`
--
ALTER TABLE `quis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `topics`
--
ALTER TABLE `topics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
