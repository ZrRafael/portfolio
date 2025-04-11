import NextLink from 'next/link';
import { Heading, Box, Image, Link, Badge, useColorModeValue } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

export const Title = ({ children }) => {
  const { t } = useTranslation();
  const titleColor = useColorModeValue('#6B46C1', '#FBD38D');

  return (
    <Box>
      <Link as={NextLink} href="/projetos" color={titleColor}>
        {t("projects")}
      </Link>
      <span>
        {' '}
        <ChevronRightIcon />{' '}
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  );
};

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

export const Meta = ({ children }) => {
  const metaColor = useColorModeValue('#6B46C1', '#FBD38D');
  return (
    <Badge colorScheme={useColorModeValue('purple', 'yellow')} mr={2} color={metaColor}>
      {children}
    </Badge>
  );
}; 