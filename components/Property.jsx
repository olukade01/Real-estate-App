import React from 'react';
import { Flex, Box, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import Link from 'next/link';
import Image from 'next/image';
import DefaultImg from '../assets/images/house1.jpg';

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex flexWrap="wrap" w="420px">
      <Box>
        <Image
          src={coverPhoto ? coverPhoto.url : DefaultImg}
          alt="house"
          width={400}
          height={260}
        />
      </Box>
      <Box>
        <Flex></Flex>
      </Box>
    </Flex>
  </Link>
);

export default Property;
