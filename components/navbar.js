import { forwardRef } from 'react';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Button
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';
import { useTranslation } from 'react-i18next';
import { MdLanguage } from 'react-icons/md';
import { IoLogoGithub } from 'react-icons/io5';
import LinkItem from './link-item';

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
));

const Navbar = props => {
  const { path } = props;
  const { t, i18n } = useTranslation(); // Hook para tradução
  const activeBackground = useColorModeValue('#6B46C1', '#FBD38D');
  const activeColor = useColorModeValue('white', 'black');

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            {/* Removendo o Logo aqui */}
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/" path={path}>
            {t("home")}
          </LinkItem>
          <LinkItem href="/about" path={path}>
            {t("about")}
          </LinkItem>
          <LinkItem href="/projetos" path={path}>
            {t("projects")}
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/ZrRafael"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            {t("code")}
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          {/* Botão de troca de idioma com bandeiras */}
          <Button
            ml={2}
            leftIcon={i18n.language === 'pt' ? '🇧🇷' : '🇺🇸'}
            rightIcon={<MdLanguage />}
            variant="outline"
            aria-label="Trocar idioma"
            onClick={toggleLanguage}
          >
            {(i18n.language || 'en').toUpperCase()} {/* Exibe "PT" ou "EN" */}
          </Button>

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem 
                  as={MenuLink} 
                  href="/"
                  bg={path === '/' ? activeBackground : undefined}
                  color={path === '/' ? activeColor : undefined}
                >
                  {t("home")}
                </MenuItem>
                <MenuItem 
                  as={MenuLink} 
                  href="/about"
                  bg={path === '/about' ? activeBackground : undefined}
                  color={path === '/about' ? activeColor : undefined}
                >
                  {t("about")}
                </MenuItem>
                <MenuItem 
                  as={MenuLink} 
                  href="/projetos"
                  bg={path === '/projetos' ? activeBackground : undefined}
                  color={path === '/projetos' ? activeColor : undefined}
                >
                  {t("projects")}
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;