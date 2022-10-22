import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <Flex>
      <Image src={imgUrl} alt="banner" width={500} height={300} />
      <Box>
        <Text>{title}</Text>
        <Text>{text}</Text>
        <Text>{desc}</Text>
        <Button>
          <Link href={link}>{btnText}</Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default Banner;
