-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 24, 2018 at 11:02 AM
-- Server version: 5.1.53
-- PHP Version: 5.3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `niksms`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `admin_id` int(9) NOT NULL AUTO_INCREMENT,
  `status` int(1) NOT NULL DEFAULT '1',
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `createdby` int(9) NOT NULL DEFAULT '0',
  `adminname` varchar(255) NOT NULL,
  `password` varchar(500) NOT NULL,
  `password_token` varchar(500) NOT NULL,
  `token_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `admin_ip` varchar(255) NOT NULL,
  `mydp` varchar(250) NOT NULL,
  PRIMARY KEY (`admin_id`),
  KEY `admin_fk0` (`createdby`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `status`, `full_name`, `email`, `date_time`, `createdby`, `adminname`, `password`, `password_token`, `token_time`, `admin_ip`, `mydp`) VALUES
(1, 1, '', '', '2018-09-04 13:35:26', 0, 'parag', 'e7b0ab597644579afe2bd0c5194a76f707b2bcbf2015c6abbbbc65cfa2dfe73e', '', '0000-00-00 00:00:00', '', ''),
(2, 0, 'paragdineshgupta', '', '2018-09-21 12:24:36', 0, 'gupta', '46011b5aab12a95bc104e3c7abc184e2d9e0bc7994159ef9b337d781db97cce0', '', '0000-00-00 00:00:00', '', 'parag.jpg'),
(3, 1, 'parag', '', '2018-09-22 15:30:13', 2, 'divana', '85b2ab7fc2fa0ab39c66c05eadffbad5cd3d47a6cdc761ad41b7cb84b9a4b251', '', '0000-00-00 00:00:00', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `amc`
--

CREATE TABLE IF NOT EXISTS `amc` (
  `amc_id` int(11) NOT NULL AUTO_INCREMENT,
  `createdby` int(11) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `equipment_id` int(11) NOT NULL COMMENT 'fk',
  `frequency` varchar(100) NOT NULL,
  `price` varchar(10) NOT NULL,
  `startDate` date NOT NULL,
  `nextDate` date NOT NULL,
  PRIMARY KEY (`amc_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `amc`
--

INSERT INTO `amc` (`amc_id`, `createdby`, `status`, `equipment_id`, `frequency`, `price`, `startDate`, `nextDate`) VALUES
(3, 1, 1, 2, '465674', '700', '0000-00-00', '0000-00-00'),
(4, 1, 1, 2, '465674', '700', '0000-00-00', '0000-00-00'),
(5, 1, 1, 2, '465674', '700', '2016-12-12', '0000-00-00'),
(6, 1, 1, 3, '6', '700', '0000-00-00', '0000-00-00'),
(7, 1, 1, 2, '6', '700', '2016-12-20', '2017-06-18'),
(8, 1, 1, 2, '6', '70', '2016-12-20', '2017-06-20');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`category_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `status`) VALUES
(1, 'Tv', 1),
(2, 'AC', 1);

-- --------------------------------------------------------

--
-- Table structure for table `complaint`
--

CREATE TABLE IF NOT EXISTS `complaint` (
  `complaint_id` int(11) NOT NULL AUTO_INCREMENT,
  `description` text NOT NULL,
  `doc` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `state` int(11) NOT NULL DEFAULT '1' COMMENT '1 for new/pending',
  `createdby` int(11) NOT NULL COMMENT 'admin_id',
  `assignto` int(11) NOT NULL COMMENT 'employ_id/supervisor',
  `log` text NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `site_id` int(11) NOT NULL COMMENT 'fk',
  PRIMARY KEY (`complaint_id`),
  KEY `cust_loc_id` (`site_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `complaint`
--

INSERT INTO `complaint` (`complaint_id`, `description`, `doc`, `state`, `createdby`, `assignto`, `log`, `status`, `site_id`) VALUES
(1, 'test2', '0000-00-00 00:00:00', 2, 1, 2, 'testing', 1, 2),
(2, 'test test', '2018-10-16 07:55:24', 1, 1, 0, '', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE IF NOT EXISTS `customer` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(100) NOT NULL,
  `spoc` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `mobile` varchar(13) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`customer_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `customer_name`, `spoc`, `email`, `mobile`, `address`, `status`) VALUES
(1, 'test2', 'alpha', '2001@gmi.in', '1234567890', 'hello', 1),
(2, 'TATA', NULL, 'taaata@gammil.com', NULL, NULL, 0),
(3, 'BIRLA', NULL, 'ta@gammil.com', NULL, NULL, 1),
(4, 'IBM', 'rada', 'taaata@gammil.com', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `employe`
--

CREATE TABLE IF NOT EXISTS `employe` (
  `employe_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `alias` varchar(100) DEFAULT NULL COMMENT 'other name for removing conflict',
  `email` varchar(100) NOT NULL,
  `mobile` varchar(13) NOT NULL,
  `position` int(1) NOT NULL,
  `createdby` int(11) NOT NULL COMMENT 'fk adminid',
  `employename` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`employe_id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `employename` (`employename`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `employe`
--

INSERT INTO `employe` (`employe_id`, `name`, `alias`, `email`, `mobile`, `position`, `createdby`, `employename`, `password`, `status`) VALUES
(7, 'raj mathur', NULL, 'gpasd@gamil.com', '1234567890', 1, 1, NULL, NULL, 1),
(5, 'raj', NULL, 'gupta@gamil.com', '6584777911', 1, 1, NULL, NULL, 0),
(6, 'raj mathur', 'ram', 'ras@gamil.com', '1234567890', 1, 1, NULL, NULL, 0),
(8, 'raj mathur', 'ram', 'haas@gamil.com', '1234567890', 1, 1, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `equipment`
--

CREATE TABLE IF NOT EXISTS `equipment` (
  `equipment_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `myequipment_id` int(11) NOT NULL COMMENT 'fk',
  `site_id` int(11) NOT NULL COMMENT 'fk',
  PRIMARY KEY (`equipment_id`),
  KEY `myequipment_id` (`myequipment_id`),
  KEY `cust_loc_id` (`site_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `equipment`
--

INSERT INTO `equipment` (`equipment_id`, `name`, `status`, `myequipment_id`, `site_id`) VALUES
(1, 'firstequipment', 1, 1, 2),
(2, 'secondequipment', 1, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE IF NOT EXISTS `invoice` (
  `invoice_id` int(11) NOT NULL AUTO_INCREMENT,
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`invoice_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`invoice_id`, `dummy`, `status`) VALUES
(1, 'invo1', 1),
(2, 'invo2', 1);

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE IF NOT EXISTS `location` (
  `location_id` int(11) NOT NULL AUTO_INCREMENT,
  `zone_id` int(11) NOT NULL COMMENT 'fk',
  `location_name` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `createdby` int(11) NOT NULL,
  PRIMARY KEY (`location_id`),
  KEY `zone_id` (`zone_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`location_id`, `zone_id`, `location_name`, `status`, `createdby`) VALUES
(1, 2, 'SHESHADRI COLONY', 1, 1),
(2, 3, 'MG ROAD', 0, 1),
(3, 2, 'RAJA KA MAHAL', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `loc_sup`
--

CREATE TABLE IF NOT EXISTS `loc_sup` (
  `loc_sup_id` int(11) NOT NULL AUTO_INCREMENT,
  `location_id` int(11) NOT NULL,
  `supervisor_id` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `createdby` int(11) NOT NULL,
  PRIMARY KEY (`loc_sup_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `loc_sup`
--

INSERT INTO `loc_sup` (`loc_sup_id`, `location_id`, `supervisor_id`, `status`, `createdby`) VALUES
(1, 1, 7, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `myequipment`
--

CREATE TABLE IF NOT EXISTS `myequipment` (
  `myequipment_id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(100) NOT NULL,
  `capacity` varchar(100) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  `year` varchar(4) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`myequipment_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `myequipment`
--

INSERT INTO `myequipment` (`myequipment_id`, `category`, `capacity`, `brand`, `model`, `year`, `status`) VALUES
(1, 'test2', '200 L', 'test1', 'test1', '2001', 0),
(2, 'abd', '4', 'baba', 'raja', '2013', 1);

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE IF NOT EXISTS `profile` (
  `profile_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL,
  PRIMARY KEY (`profile_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `profile`
--


-- --------------------------------------------------------

--
-- Table structure for table `proposal`
--

CREATE TABLE IF NOT EXISTS `proposal` (
  `proposal_id` int(11) NOT NULL AUTO_INCREMENT,
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`proposal_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `proposal`
--


-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE IF NOT EXISTS `schedule` (
  `schedule_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL COMMENT 'fk,not required',
  `equipment_id` int(11) NOT NULL COMMENT 'fk',
  `zone_id` int(11) NOT NULL COMMENT 'fk,not required',
  `assignDate` date NOT NULL DEFAULT '0000-00-00',
  `state` int(11) NOT NULL DEFAULT '0' COMMENT '0 for incomplete',
  `dummy` varchar(100) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`schedule_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`schedule_id`, `customer_id`, `equipment_id`, `zone_id`, `assignDate`, `state`, `dummy`, `status`) VALUES
(1, 0, 0, 0, '0000-00-00', 1, 'scheduletest2', 0),
(2, 0, 0, 0, '0000-00-00', 1, 'testr', 1),
(3, 0, 0, 0, '2018-09-01', 1, 'testr', 1),
(4, 1, 1, 1, '2018-10-05', 1, 'testr', 1);

-- --------------------------------------------------------

--
-- Table structure for table `site`
--

CREATE TABLE IF NOT EXISTS `site` (
  `site_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL COMMENT 'fk',
  `location_id` int(11) NOT NULL COMMENT 'fk',
  `address` varchar(255) NOT NULL,
  `createdby` int(11) DEFAULT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`site_id`),
  KEY `customer_id` (`customer_id`),
  KEY `location_id` (`location_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `site`
--

INSERT INTO `site` (`site_id`, `customer_id`, `location_id`, `address`, `createdby`, `status`) VALUES
(1, 1, 1, '42,chitransh agnihotri', 1, 0),
(2, 3, 3, '13,TAJMAHAL AJMERROAD', 1, 1),
(3, 3, 3, '10,ALPHA TOWER', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `zone`
--

CREATE TABLE IF NOT EXISTS `zone` (
  `zone_id` int(11) NOT NULL AUTO_INCREMENT,
  `zone_name` varchar(100) NOT NULL,
  `pin` int(6) NOT NULL,
  `createdby` int(11) NOT NULL COMMENT 'fk',
  `status` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`zone_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `zone`
--

INSERT INTO `zone` (`zone_id`, `zone_name`, `pin`, `createdby`, `status`) VALUES
(1, 'test1', 466787, 0, 0),
(2, 'NIMAR WEST', 123457, 1, 1),
(3, 'NIMAR NORTH', 123457, 1, 1),
(4, 'iit pawai', 123457, 1, 1),
(5, 'pawai', 123457, 1, 1),
(6, 'parag', 465674, 1, 0),
(7, 'MALVA', 234562, 1, 1),
(8, 'NIMAR', 123457, 1, 1),
(9, 'BUNDELKHAND', 123456, 1, 1),
(10, 'BUNDELKHAND EAST', 123456, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `zone_supervisor`
--

CREATE TABLE IF NOT EXISTS `zone_supervisor` (
  `zone_supervisor_id` int(11) NOT NULL AUTO_INCREMENT,
  `zone_id` int(11) NOT NULL,
  `supervisor_id` int(11) NOT NULL,
  PRIMARY KEY (`zone_supervisor_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `zone_supervisor`
--

