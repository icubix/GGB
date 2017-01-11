-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 11, 2017 at 03:19 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ggb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbladdress`
--

CREATE TABLE `tbladdress` (
  `AddressID` int(11) NOT NULL,
  `Addressone` varchar(500) NOT NULL,
  `addresstwo` varchar(500) NOT NULL,
  `city` varchar(500) NOT NULL,
  `state` varchar(500) NOT NULL,
  `countryID` int(4) NOT NULL,
  `zipcode` varchar(50) NOT NULL,
  `Phone` varchar(500) NOT NULL,
  `fax` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbladdress`
--

INSERT INTO `tbladdress` (`AddressID`, `Addressone`, `addresstwo`, `city`, `state`, `countryID`, `zipcode`, `Phone`, `fax`) VALUES
(11, 'Flat No: 402, Andey Villa', 'Shanthipuram', 'Vizag', 'Visakhapatnam', 2, '530016', '9849796848', '9125684'),
(12, 'Flat No: 402, Andey Villa', 'Shanthipuram', 'Vizag', 'Visakhapatnam', 2, '530016', '9849796848', '9125684'),
(13, 'Flat No: 402', 'Andey Villa, Shanthipuram', 'vizag', 'Andhra Pradesh', 2, '530016', '9849796848', '92684558'),
(14, 'Flat No: 402', 'Andey Villa, Shanthipuram', 'vizag', 'Andhra Pradesh', 2, '530016', '9849796848', '92684558'),
(15, 'undefined', 'undefined', 'undefined', 'undefined', 0, 'undefined', 'undefined', 'undefined'),
(16, 'undefined', 'undefined', 'undefined', 'undefined', 0, 'undefined', 'undefined', 'undefined'),
(17, 'undefined', 'undefined', 'undefined', 'undefined', 0, 'undefined', 'undefined', 'undefined'),
(18, 'Flat No:402', 'Andey Villa, Shanthipuram', 'Vizag', 'Andhrapradesh', 2, '53016', '9849796848', '96584785');

-- --------------------------------------------------------

--
-- Table structure for table `tblcompany`
--

CREATE TABLE `tblcompany` (
  `companyid` int(11) NOT NULL,
  `companyname` varchar(500) NOT NULL,
  `userid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblcompany`
--

INSERT INTO `tblcompany` (`companyid`, `companyname`, `userid`) VALUES
(10, 'icubix', 36),
(11, 'icubix', 37),
(12, 'Active Dimensions', 38),
(13, 'Active Dimensions', 39),
(14, 'undefined', 40),
(15, 'undefined', 41),
(16, 'undefined', 42),
(17, 'Active Dimensions', 43);

-- --------------------------------------------------------

--
-- Table structure for table `tblcompanyaddress`
--

CREATE TABLE `tblcompanyaddress` (
  `ID` int(11) NOT NULL,
  `CompanyID` int(11) NOT NULL,
  `AddressID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblcompanyaddress`
--

INSERT INTO `tblcompanyaddress` (`ID`, `CompanyID`, `AddressID`) VALUES
(10, 10, 11),
(11, 11, 12),
(12, 12, 13),
(13, 13, 14),
(14, 14, 15),
(15, 15, 16),
(16, 16, 17),
(17, 17, 18);

-- --------------------------------------------------------

--
-- Table structure for table `tblcountries`
--

CREATE TABLE `tblcountries` (
  `CountryID` int(11) NOT NULL,
  `CountryName` varchar(500) NOT NULL,
  `isActive` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblcountries`
--

INSERT INTO `tblcountries` (`CountryID`, `CountryName`, `isActive`) VALUES
(1, 'Australia', b'1'),
(2, 'India', b'1'),
(3, 'United States', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `tbldevice`
--

CREATE TABLE `tbldevice` (
  `ID` int(11) NOT NULL,
  `UDID` varchar(500) NOT NULL,
  `ActivationDate` datetime DEFAULT NULL,
  `DeActivationDate` datetime DEFAULT NULL,
  `WRSNo` varchar(500) NOT NULL,
  `isActive` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbldevice`
--

INSERT INTO `tbldevice` (`ID`, `UDID`, `ActivationDate`, `DeActivationDate`, `WRSNo`, `isActive`) VALUES
(1, 'GH9775JHGH8332', '2017-01-06 14:31:13', NULL, 'TT/09/WRS/RRB/2017', b'1'),
(2, 'YH9775JHGH8332', '2017-01-06 14:31:25', NULL, 'TT/09/WRS/RRB/2017', b'1'),
(3, 'YH98723WSJHGH8332', '2017-01-06 14:31:35', NULL, 'TT/09/WRS/RRB/2017', b'1'),
(4, 'YH98723WRESTE8332', '2017-01-06 14:31:44', NULL, 'TT/09/WRS/RRB/2017', b'1'),
(5, 'YH98723WRESTWE32', '2017-01-06 14:31:53', NULL, 'TT/09/WRS/RRB/2017', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `tblmachinedetails`
--

CREATE TABLE `tblmachinedetails` (
  `ID` int(11) NOT NULL,
  `MachineNumber` varchar(500) NOT NULL,
  `EngineNumber` varchar(500) NOT NULL,
  `RFID` varchar(500) NOT NULL,
  `Year` int(4) NOT NULL,
  `Make` varchar(500) NOT NULL,
  `Model` varchar(500) NOT NULL,
  `TypeOfMachine` varchar(500) NOT NULL,
  `Type` varchar(500) NOT NULL,
  `DeviceID` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblmachinedetails`
--

INSERT INTO `tblmachinedetails` (`ID`, `MachineNumber`, `EngineNumber`, `RFID`, `Year`, `Make`, `Model`, `TypeOfMachine`, `Type`, `DeviceID`) VALUES
(1, '', '', '', 2014, 'WTS', 'JUPITER', 'W2', 'W2S', 'GH9775JHGH8332'),
(2, '', '', '', 2015, 'WTS', 'XAILO', 'W22', 'W3S', 'YH9775JHGH8332'),
(3, '', '', '', 2015, 'WTS', 'JUPITER', 'W22', 'XSE', 'YH98723WSJHGH8332'),
(4, '', '', '', 2016, 'WTS', 'KENIUYS', 'W22', 'W2E', 'YH98723WRESTE8332'),
(5, '', '', '', 2016, 'WTS', '2016', 'W22', 'W3S', 'YH98723WRESTWE32');

-- --------------------------------------------------------

--
-- Table structure for table `tblmastersecurityquestions`
--

CREATE TABLE `tblmastersecurityquestions` (
  `QuestionID` int(11) NOT NULL,
  `Question` varchar(500) NOT NULL,
  `isActive` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblmastersecurityquestions`
--

INSERT INTO `tblmastersecurityquestions` (`QuestionID`, `Question`, `isActive`) VALUES
(1, 'What was your childhood nickname', b'1'),
(2, 'What is the name of your favorite childhood friend', b'1'),
(3, 'What is your favorite team', b'1'),
(4, 'What is your favorite movie', b'1'),
(5, 'In what town was your first job', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `tblmobileactivationcodes`
--

CREATE TABLE `tblmobileactivationcodes` (
  `ID` int(11) NOT NULL,
  `MobileNumber` varchar(500) DEFAULT NULL,
  `DeviceID` varchar(500) NOT NULL,
  `ActivationCode` varchar(500) NOT NULL,
  `Datesent` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblresourcetable`
--

CREATE TABLE `tblresourcetable` (
  `ID` int(11) NOT NULL,
  `WRSNo` varchar(500) NOT NULL,
  `UserID` int(11) NOT NULL,
  `AllocationArea` varchar(500) NOT NULL,
  `ExpiryDate` datetime NOT NULL,
  `RegulationValueOne` varchar(500) NOT NULL,
  `RegulationValueTwo` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblroles`
--

CREATE TABLE `tblroles` (
  `RoleID` int(11) NOT NULL,
  `RoleName` varchar(500) NOT NULL,
  `isActive` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblroles`
--

INSERT INTO `tblroles` (`RoleID`, `RoleName`, `isActive`) VALUES
(4, 'Admin', b'1'),
(5, 'User', b'1'),
(6, 'Guest', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `tblsso`
--

CREATE TABLE `tblsso` (
  `ID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `LoggedIn` bit(1) NOT NULL,
  `LoggedInDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `LoggedOutDate` datetime NOT NULL,
  `NoOfLoggedAttempts` int(11) NOT NULL,
  `NoOfFailedLoggedAttempts` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbluserroles`
--

CREATE TABLE `tbluserroles` (
  `UserID` int(11) NOT NULL,
  `RoleID` int(11) NOT NULL,
  `ID` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbluserroles`
--

INSERT INTO `tbluserroles` (`UserID`, `RoleID`, `ID`) VALUES
(36, 1, 19),
(37, 1, 20),
(38, 1, 21),
(39, 1, 22),
(40, 1, 23),
(41, 1, 24),
(42, 1, 25),
(43, 1, 26);

-- --------------------------------------------------------

--
-- Table structure for table `tblusers`
--

CREATE TABLE `tblusers` (
  `UserID` int(11) NOT NULL,
  `UserName` varchar(500) NOT NULL,
  `FirstName` varchar(500) NOT NULL,
  `LastName` varchar(500) NOT NULL,
  `PassWord` varchar(500) NOT NULL,
  `Title` varchar(500) NOT NULL,
  `WRSNo` varchar(500) NOT NULL,
  `EmailAddress` varchar(500) NOT NULL,
  `MobileNumber` varchar(500) NOT NULL,
  `CreateDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `isActive` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblusers`
--

INSERT INTO `tblusers` (`UserID`, `UserName`, `FirstName`, `LastName`, `PassWord`, `Title`, `WRSNo`, `EmailAddress`, `MobileNumber`, `CreateDate`, `isActive`) VALUES
(36, 'Kalidasu', 'Kalidasu', 'Surada', 'test@123', 'Mr.Kalidasu Surada', '', 'Kalidasu.Surada@gmail.com', 'undefined', '2017-01-09 20:45:35', b'1'),
(37, 'Kalidasu', 'Kalidasu', 'Surada', 'test@123', 'Mr.Kalidasu Surada', '', 'Kalidasu.Surada@gmail.com', 'undefined', '2017-01-09 20:45:37', b'1'),
(38, 'vamci', 'Vamci', 'Surada', 'test@123', 'Mr. Vamsi Surada', '', 'vamci.surada@gmail.com', 'undefined', '2017-01-09 20:47:29', b'1'),
(39, 'vamci', 'Vamci', 'Surada', 'test@123', 'Mr. Vamsi Surada', '', 'vamci.surada@gmail.com', 'undefined', '2017-01-09 20:47:32', b'1'),
(40, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', '', 'undefined', 'undefined', '2017-01-09 20:48:04', b'1'),
(41, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', '', 'undefined', 'undefined', '2017-01-09 20:48:27', b'1'),
(42, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', '', 'undefined', 'undefined', '2017-01-09 21:09:57', b'1'),
(43, 'gyan', 'Gyan', 'Surada', 'test@123', 'Mr. Gyan', '', 'gyan@gmail.com', 'undefined', '2017-01-10 08:54:06', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `tblusersecurityquestions`
--

CREATE TABLE `tblusersecurityquestions` (
  `ID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `QuestionID` int(11) NOT NULL,
  `Answer` varchar(500) NOT NULL,
  `isActive` bit(1) NOT NULL,
  `CreatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblusersecurityquestions`
--

INSERT INTO `tblusersecurityquestions` (`ID`, `UserID`, `QuestionID`, `Answer`, `isActive`, `CreatedDate`) VALUES
(1, 35, 5, 'test', b'1', '2017-01-09 20:42:04'),
(2, 36, 1, 'vamci', b'1', '2017-01-09 20:45:35'),
(3, 37, 1, 'vamci', b'1', '2017-01-09 20:45:38'),
(4, 38, 5, 'test', b'1', '2017-01-09 20:47:30'),
(5, 39, 5, 'test', b'1', '2017-01-09 20:47:33'),
(6, 40, 0, 'undefined', b'1', '2017-01-09 20:48:04'),
(7, 41, 0, 'undefined', b'1', '2017-01-09 20:48:27'),
(8, 42, 0, 'undefined', b'1', '2017-01-09 21:09:57'),
(9, 43, 1, 'gyan', b'1', '2017-01-10 08:54:06');

-- --------------------------------------------------------

--
-- Table structure for table `tblvalidate`
--

CREATE TABLE `tblvalidate` (
  `ID` int(11) NOT NULL,
  `DeviceID` varchar(500) NOT NULL,
  `MachineNumber` varchar(500) NOT NULL,
  `ActualReadingOne` varchar(500) NOT NULL,
  `ActualReadingTwo` varchar(500) NOT NULL,
  `DateValidated` datetime NOT NULL,
  `NextReviewDate` datetime NOT NULL,
  `Passed` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbladdress`
--
ALTER TABLE `tbladdress`
  ADD PRIMARY KEY (`AddressID`);

--
-- Indexes for table `tblcompany`
--
ALTER TABLE `tblcompany`
  ADD PRIMARY KEY (`companyid`);

--
-- Indexes for table `tblcompanyaddress`
--
ALTER TABLE `tblcompanyaddress`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblcountries`
--
ALTER TABLE `tblcountries`
  ADD PRIMARY KEY (`CountryID`);

--
-- Indexes for table `tbldevice`
--
ALTER TABLE `tbldevice`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblmachinedetails`
--
ALTER TABLE `tblmachinedetails`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblmastersecurityquestions`
--
ALTER TABLE `tblmastersecurityquestions`
  ADD PRIMARY KEY (`QuestionID`);

--
-- Indexes for table `tblmobileactivationcodes`
--
ALTER TABLE `tblmobileactivationcodes`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblresourcetable`
--
ALTER TABLE `tblresourcetable`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblroles`
--
ALTER TABLE `tblroles`
  ADD PRIMARY KEY (`RoleID`);

--
-- Indexes for table `tblsso`
--
ALTER TABLE `tblsso`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbluserroles`
--
ALTER TABLE `tbluserroles`
  ADD KEY `ID` (`ID`);

--
-- Indexes for table `tblusers`
--
ALTER TABLE `tblusers`
  ADD PRIMARY KEY (`UserID`);

--
-- Indexes for table `tblusersecurityquestions`
--
ALTER TABLE `tblusersecurityquestions`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblvalidate`
--
ALTER TABLE `tblvalidate`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbladdress`
--
ALTER TABLE `tbladdress`
  MODIFY `AddressID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `tblcompany`
--
ALTER TABLE `tblcompany`
  MODIFY `companyid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `tblcompanyaddress`
--
ALTER TABLE `tblcompanyaddress`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `tblcountries`
--
ALTER TABLE `tblcountries`
  MODIFY `CountryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tbldevice`
--
ALTER TABLE `tbldevice`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `tblmachinedetails`
--
ALTER TABLE `tblmachinedetails`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `tblmastersecurityquestions`
--
ALTER TABLE `tblmastersecurityquestions`
  MODIFY `QuestionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `tblmobileactivationcodes`
--
ALTER TABLE `tblmobileactivationcodes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tblresourcetable`
--
ALTER TABLE `tblresourcetable`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tblroles`
--
ALTER TABLE `tblroles`
  MODIFY `RoleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `tblsso`
--
ALTER TABLE `tblsso`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbluserroles`
--
ALTER TABLE `tbluserroles`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `tblusers`
--
ALTER TABLE `tblusers`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
--
-- AUTO_INCREMENT for table `tblusersecurityquestions`
--
ALTER TABLE `tblusersecurityquestions`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `tblvalidate`
--
ALTER TABLE `tblvalidate`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
