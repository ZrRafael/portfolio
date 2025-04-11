import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box 
      align="center" 
      opacity={0.4} 
      fontSize="sm"
      mt={6}
      py={6}
    >
      &copy; {new Date().getFullYear()} Rafael Augusto. {t("footer_rights")}
    </Box>
  );
};

export default Footer;