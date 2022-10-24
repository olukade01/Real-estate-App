import {
  Flex,
  Box,
  Spacer,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { FiKey } from 'react-icons/fi';
import { BsSearch } from 'react-icons/bs';
import Link from 'next/link';

const Navbar = () => {
  return (
    <Flex>
      <Box>
        <Link href="/">Estate</Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FcMenu />}
            variant="outlined"
            color="red.400"
          />
          <MenuList>
            <Link href="/" passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href="/search" passHref>
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;