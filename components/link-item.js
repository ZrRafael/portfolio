import NextLink from 'next/link';
import { Link, useColorModeValue } from '@chakra-ui/react';

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const activeBackground = useColorModeValue('#6B46C1', '#FBD38D');
  const activeColor = useColorModeValue('white', 'black');
  const hoverBackground = useColorModeValue('gray.100', 'whiteAlpha.200');

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? activeBackground : undefined}
      color={active ? activeColor : inactiveColor}
      target={target}
      borderRadius="md"
      transition="all 0.3s ease"
      _hover={{
        bg: active ? activeBackground : hoverBackground,
        borderRadius: "md"
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkItem; 