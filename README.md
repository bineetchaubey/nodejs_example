nodejs_example
==============

This is a besic node js example code  with mysql database connectivity 

 
  install node js  on your system 
 
   create a database using below query 
        
        
        -- phpMyAdmin SQL Dump
        -- version 3.5.2
        -- http://www.phpmyadmin.net
        --
        -- Host: localhost
        -- Generation Time: Nov 15, 2013 at 11:59 AM
        -- Server version: 5.5.25a
        -- PHP Version: 5.4.4
        
        SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
        SET time_zone = "+00:00";
        
        --
        -- Database: `cakephp2`
        --
        
        -- --------------------------------------------------------
        
        --
        -- Table structure for table `acos`
        --
        
        CREATE TABLE IF NOT EXISTS `acos` (
          `id` int(10) NOT NULL AUTO_INCREMENT,
          `parent_id` int(10) DEFAULT NULL,
          `model` varchar(255) DEFAULT NULL,
          `foreign_key` int(10) DEFAULT NULL,
          `alias` varchar(255) DEFAULT NULL,
          `lft` int(10) DEFAULT NULL,
          `rght` int(10) DEFAULT NULL,
          PRIMARY KEY (`id`)
        ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;
        
        --
        -- Dumping data for table `acos`
        --
        
        INSERT INTO `acos` (`id`, `parent_id`, `model`, `foreign_key`, `alias`, `lft`, `rght`) VALUES
        (1, NULL, 'User', NULL, 'User', 1, 2),
        (2, NULL, 'Post', NULL, 'Post', 3, 4);
        
        -- --------------------------------------------------------
        
        --
        -- Table structure for table `aros`
        --
        
        CREATE TABLE IF NOT EXISTS `aros` (
          `id` int(10) NOT NULL AUTO_INCREMENT,
          `parent_id` int(10) DEFAULT NULL,
          `model` varchar(255) DEFAULT NULL,
          `foreign_key` int(10) DEFAULT NULL,
          `alias` varchar(255) DEFAULT NULL,
          `lft` int(10) DEFAULT NULL,
          `rght` int(10) DEFAULT NULL,
          PRIMARY KEY (`id`)
        ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;
        
        --
        -- Dumping data for table `aros`
        --
        
        INSERT INTO `aros` (`id`, `parent_id`, `model`, `foreign_key`, `alias`, `lft`, `rght`) VALUES
        (1, NULL, 'User', NULL, 'Super', 1, 4),
        (2, NULL, 'User', NULL, 'Admin', 5, 8),
        (3, NULL, 'User', NULL, 'User', 9, 16),
        (4, NULL, 'User', NULL, 'Suspended', 17, 18),
        (5, 1, 'User', 2, 'User::2', 2, 3),
        (6, 3, 'User', 3, 'User::3', 10, 11),
        (7, 2, 'User', 4, 'User::4', 6, 7),
        (8, 3, 'User', 5, 'User::5', 12, 13),
        (9, 3, 'User', 6, 'User::6', 14, 15);
        
        -- --------------------------------------------------------
        
        --
        -- Table structure for table `aros_acos`
        --
        
        CREATE TABLE IF NOT EXISTS `aros_acos` (
          `id` int(10) NOT NULL AUTO_INCREMENT,
          `aro_id` int(10) NOT NULL,
          `aco_id` int(10) NOT NULL,
          `_create` varchar(2) NOT NULL DEFAULT '0',
          `_read` varchar(2) NOT NULL DEFAULT '0',
          `_update` varchar(2) NOT NULL DEFAULT '0',
          `_delete` varchar(2) NOT NULL DEFAULT '0',
          PRIMARY KEY (`id`),
          UNIQUE KEY `ARO_ACO_KEY` (`aro_id`,`aco_id`)
        ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;
        
        --
        -- Dumping data for table `aros_acos`
        --
        
        INSERT INTO `aros_acos` (`id`, `aro_id`, `aco_id`, `_create`, `_read`, `_update`, `_delete`) VALUES
        (1, 1, 2, '1', '1', '1', '1'),
        (2, 1, 1, '1', '1', '1', '1'),
        (3, 2, 2, '1', '1', '1', '1'),
        (4, 3, 2, '1', '0', '0', '0');
        
        -- --------------------------------------------------------
        
        --
        -- Table structure for table `cake_sessions`
        --
        
        CREATE TABLE IF NOT EXISTS `cake_sessions` (
          `id` varchar(255) NOT NULL DEFAULT '',
          `data` text,
          `expires` int(11) DEFAULT NULL,
          PRIMARY KEY (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
        
        --
        -- Dumping data for table `cake_sessions`
        --
        
        INSERT INTO `cake_sessions` (`id`, `data`, `expires`) VALUES
        ('056brctab2pf53tbbbneujfd12', 'Config|a:3:{s:9:"userAgent";s:32:"3102951cb317f326f7ffbe5e1f328cd1";s:4:"time";i:1369905218;s:9:"countdown";i:10;}Message|a:1:{s:4:"auth";a:3:{s:7:"message";s:47:"You are not authorized to access that location.";s:7:"element";s:7:"default";s:6:"params";a:0:{}}}Auth|a:1:{s:4:"User";a:4:{s:2:"id";s:1:"4";s:4:"name";s:0:"";s:8:"username";s:11:"bineetAdmin";s:6:"active";s:1:"1";}}', 1369890819),
        ('0mc3un9mca9ujuu09unqcenrd4', 'Config|a:3:{s:9:"userAgent";s:32:"09a6b8a4d13841a3c4c0f96228f12843";s:4:"time";i:1370856783;s:9:"countdown";i:10;}Message|a:1:{s:4:"auth";a:3:{s:7:"message";s:47:"You are not authorized to access that location.";s:7:"element";s:7:"default";s:6:"params";a:0:{}}}Auth|a:1:{s:8:"redirect";s:9:"/cakephp/";}', 1370842383),
        ('6h5hdd3tes6lgolmnul3lng4i7', 'Config|a:3:{s:9:"userAgent";s:32:"3102951cb317f326f7ffbe5e1f328cd1";s:4:"time";i:1378553846;s:9:"countdown";i:10;}Message|a:1:{s:4:"auth";a:3:{s:7:"message";s:47:"You are not authorized to access that location.";s:7:"element";s:7:"default";s:6:"params";a:0:{}}}Auth|a:1:{s:8:"redirect";s:21:"/cakephp/posts/edit/6";}', 1378539447),
        ('al1mbdo4cl7456jjrsuft18om4', 'Config|a:3:{s:9:"userAgent";s:32:"3102951cb317f326f7ffbe5e1f328cd1";s:4:"time";i:1375874304;s:9:"countdown";i:10;}Message|a:1:{s:4:"auth";a:3:{s:7:"message";s:47:"You are not authorized to access that location.";s:7:"element";s:7:"default";s:6:"params";a:0:{}}}Auth|a:1:{s:4:"User";a:4:{s:2:"id";s:1:"2";s:4:"name";s:0:"";s:8:"username";s:14:"Bineet chaubey";s:6:"active";s:1:"1";}}', 1375859904),
        ('boa95oc94f0a0g0p72d4cedth1', 'Config|a:3:{s:9:"userAgent";s:32:"3102951cb317f326f7ffbe5e1f328cd1";s:4:"time";i:1375809462;s:9:"countdown";i:10;}Message|a:1:{s:4:"auth";a:3:{s:7:"message";s:47:"You are not authorized to access that location.";s:7:"element";s:7:"default";s:6:"params";a:0:{}}}Auth|a:1:{s:8:"redirect";s:21:"/cakephp/posts/edit/6";}', 1375795064),
        ('jo3gejs4ms96cg3pbg6ag8ni22', 'Config|a:3:{s:9:"userAgent";s:32:"3102951cb317f326f7ffbe5e1f328cd1";s:4:"time";i:1375808763;s:9:"countdown";i:10;}Message|a:1:{s:4:"auth";a:3:{s:7:"message";s:47:"You are not authorized to access that location.";s:7:"element";s:7:"default";s:6:"params";a:0:{}}}Auth|a:1:{s:4:"User";a:4:{s:2:"id";s:1:"2";s:4:"name";s:0:"";s:8:"username";s:14:"Bineet chaubey";s:6:"active";s:1:"1";}}', 1375794365),
        ('le4m7o0rgnb6pe5dgv8nilkv75', 'Config|a:3:{s:9:"userAgent";s:32:"1e4881cafce888c4ed08e194963eec73";s:4:"time";i:1369839243;s:9:"countdown";i:10;}Message|a:1:{s:4:"auth";a:3:{s:7:"message";s:47:"You are not authorized to access that location.";s:7:"element";s:7:"default";s:6:"params";a:0:{}}}Auth|a:1:{s:4:"User";a:4:{s:2:"id";s:1:"4";s:4:"name";s:0:"";s:8:"username";s:11:"bineetAdmin";s:6:"active";s:1:"1";}}', 1369824844),
        ('nk89gdr2klck8n5njuv0bl47i2', 'Config|a:3:{s:9:"userAgent";s:32:"3102951cb317f326f7ffbe5e1f328cd1";s:4:"time";i:1369847259;s:9:"countdown";i:10;}Message|a:1:{s:4:"auth";a:3:{s:7:"message";s:47:"You are not authorized to access that location.";s:7:"element";s:7:"default";s:6:"params";a:0:{}}}Auth|a:1:{s:4:"User";a:4:{s:2:"id";s:1:"4";s:4:"name";s:0:"";s:8:"username";s:11:"bineetAdmin";s:6:"active";s:1:"1";}}', 1369832863),
        ('p1kso3ddsif6q67gneruci3dd3', 'Config|a:3:{s:9:"userAgent";s:32:"3102951cb317f326f7ffbe5e1f328cd1";s:4:"time";i:1375895489;s:9:"countdown";i:10;}Message|a:1:{s:4:"auth";a:3:{s:7:"message";s:47:"You are not authorized to access that location.";s:7:"element";s:7:"default";s:6:"params";a:0:{}}}Auth|a:1:{s:4:"User";a:2:{s:4:"User";a:6:{s:2:"id";s:1:"6";s:4:"name";s:14:"Bineet chaubey";s:8:"username";s:10:"bineet_abc";s:8:"password";s:40:"f22e0c905d4a2b00902e86520e51b7b41242d392";s:7:"address";s:11:"Ghazipur Up";s:6:"active";s:1:"1";}s:4:"Post";a:0:{}}}', 1375881090),
        ('scu009mp6sg0887c92r2ksnpm1', 'Config|a:3:{s:9:"userAgent";s:32:"3102951cb317f326f7ffbe5e1f328cd1";s:4:"time";i:1371026470;s:9:"countdown";i:10;}Message|a:1:{s:4:"auth";a:3:{s:7:"message";s:47:"You are not authorized to access that location.";s:7:"element";s:7:"default";s:6:"params";a:0:{}}}Auth|a:1:{s:8:"redirect";s:9:"/cakephp/";}', 1371012070);
        
        -- --------------------------------------------------------
        
        --
        -- Table structure for table `categories`
        --
        
        CREATE TABLE IF NOT EXISTS `categories` (
          `id` int(11) NOT NULL AUTO_INCREMENT,
          `name` varchar(100) NOT NULL,
          `status` enum('0','1') NOT NULL,
          `created` date NOT NULL,
          PRIMARY KEY (`id`)
        ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;
        
        --
        -- Dumping data for table `categories`
        --
        
        INSERT INTO `categories` (`id`, `name`, `status`, `created`) VALUES
        (1, 'game', '1', '2013-08-05'),
        (2, 'wordpress', '1', '2013-08-04'),
        (3, 'drupal', '1', '2013-08-05'),
        (4, 'cakephp', '1', '2013-08-05');
        
        -- --------------------------------------------------------
        
        --
        -- Table structure for table `category_posts`
        --
        
        CREATE TABLE IF NOT EXISTS `category_posts` (
          `id` int(11) NOT NULL,
          `category_id` int(11) NOT NULL,
          `post_id` int(11) NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
        
        --
        -- Dumping data for table `category_posts`
        --
        
        INSERT INTO `category_posts` (`id`, `category_id`, `post_id`) VALUES
        (0, 2, 6),
        (0, 3, 6),
        (0, 2, 3),
        (0, 3, 3);
        
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
        ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;
        
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
        
        -- --------------------------------------------------------
        
        --
        -- Table structure for table `users`
        --
        
        CREATE TABLE IF NOT EXISTS `users` (
          `id` int(11) NOT NULL AUTO_INCREMENT,
          `name` varchar(255) NOT NULL,
          `username` varchar(255) NOT NULL,
          `password` text NOT NULL,
          `address` varchar(100) NOT NULL,
          `active` enum('1','2') NOT NULL DEFAULT '1',
          PRIMARY KEY (`id`)
        ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;
        
        --
        -- Dumping data for table `users`
        --
        
        INSERT INTO `users` (`id`, `name`, `username`, `password`, `address`, `active`) VALUES
        (2, 'Bineet kumar chaubey', 'Bineet chaubey', '525516ce17e9726041e989b404ce743fc7041d88', 'varanasi', '1'),
        (3, 'paul ', 'paul ', '1eb45f8860e43d7b7bd43b7c7f7eb4b0326bca00', 'Australia', '1'),
        (4, 'jaun player', 'jaun', '1eb45f8860e43d7b7bd43b7c7f7eb4b0326bca00', 'England', '1'),
        (5, 'Anand', 'anand', 'a7d63136c7301e5f361b01ca356a45d9a5ea5f0b', 'Chhatisgarh', '1'),
        (6, 'Bineet chaubey', 'bineet_abc', 'f22e0c905d4a2b00902e86520e51b7b41242d392', 'Ghazipur Up', '1');



  Use 
   $ git clone https://github.com/bineetchaubey/nodejs_example.git
   
   
create a database  with import example.sql file 


go to your peoject directry  and

excute   command  to start node server 

now go to model folder  and change mysql setting in all file 
 
  $ node server.js


open your browser http://127.0.0.1:8899

