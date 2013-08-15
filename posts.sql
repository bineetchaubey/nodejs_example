-- phpMyAdmin SQL Dump
-- version 3.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 14, 2013 at 02:31 PM
-- Server version: 5.5.25a
-- PHP Version: 5.4.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `cakephp2`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `body` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `created` date NOT NULL,
  `updated` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `body`, `user_id`, `created`, `updated`) VALUES
(1, 'Ignoring versioned files', 'Some files in a repository, which are versioned (_i.e._ they can''t be git-ignored), are often changed, but rarely committed. Usually these are various local configuration files that are edited, but should never be committed upstream.\r\n\r\nGit lets you ignore those files by assuming they are unchanged. This is done by running the git update-index --assume-unchanged path/to/file.txt command. Once marking a file as such, git will completely ignore any changes on that file; they will not show up when running git status or git diff, nor will they ever be committed.\r\n\r\nTo make git track the file again, simply run git update-index --no-assume-unchanged path/to/file.txt.', 2, '0000-00-00', '0000-00-00'),
(2, 'Repository exclude', 'Local per-repository rules can be added to the .git/info/exclude file in your repository. These rules are not committed with the repository so they are not shared with others. This method can be used for locally-generated files that you don''t expect other users to generate, like files created by your editor.', 2, '0000-00-00', '0000-00-00'),
(3, 'This is Test ', 'this is also test ', 4, '0000-00-00', '2013-08-07'),
(4, 'This post about cakephp ', 'recently cake php is second most popular framework in this time .', 3, '2013-08-06', '2013-08-06'),
(5, 'This is first post ', 'this is first post in this project . this is an important project for learn cakephp  many to many association  relation ', 5, '2013-08-06', '2013-08-06'),
(7, 'Node js tutorial', 'Node js tutorial', 4, '2013-08-14', '0000-00-00'),
(8, 'this is again tets data', 'this is again test data', 3, '0000-00-00', '0000-00-00'),
(9, 'THis is node js tutorial ', 'right now i an goinf tos add a define what is node js this is basically a javascript server side script language ', 3, '0000-00-00', '0000-00-00'),
(10, 'this is foourth  post with node js application ', 'this is foourth  post with node js application ', 4, '2013-08-14', '0000-00-00'),
(11, 'this is test  we know', 'Installation and configuration of MongoDB is beyond the scope of this post. You can download MongoDB from their downloads page. For configuration and help getting Mongo started I’d suggest you read this tutorial. Again, this is assuming your using OS X. Make sure you have MongoDB up and running before you continue.\r\n\r\n', 4, '2013-08-14', '0000-00-00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
