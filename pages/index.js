import { useTranslation } from 'react-i18next';
import {
  Container,
  Heading,
  Box,
  Text,
  useColorModeValue,
  Button,
  Stack
} from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Image from 'next/image';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Layout title="Home">
      <Container maxW="container.xl" p={0}>
        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          minH="80vh"
          gap={{ base: 8, md: 0 }}
          px={4}
        >
          <Box 
            textAlign={{ base: 'center', md: 'left' }} 
            flex={1} 
            w={{ base: "100%", md: "500px" }}
            maxW={{ md: '500px' }}
            ml={{ md: 4 }}
            display="flex"
            flexDirection="column"
          >
            <Box mb={6}>
              <Heading
                as="h1"
                size="3xl"
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                fontWeight="bold"
                lineHeight="1.2"
                fontSize={{ base: "48px", md: "56px" }}
              >
                {t("welcome_title")}
              </Heading>
            </Box>
            <Box mb={8} display="flex" flexDirection="column" gap={4}>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={useColorModeValue('gray.600', 'whiteAlpha.800')}
                lineHeight="1.5"
                maxW={{ base: "100%", md: "500px" }}
                letterSpacing="0.2px"
              >
                {t("welcome_message_1")}
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={useColorModeValue('gray.600', 'whiteAlpha.800')}
                lineHeight="1.5"
                maxW={{ base: "100%", md: "500px" }}
                letterSpacing="0.2px"
              >
                {t("welcome_message_2")}
              </Text>
            </Box>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
              justify={{ base: 'center', md: 'flex-start' }}
              width="100%"
            >
              <Button
                as={NextLink}
                href="/about"
                rightIcon={<ChevronRightIcon />}
                bg={useColorModeValue('#6B46C1', '#FBD38D')}
                color={useColorModeValue('white', 'black')}
                _hover={{
                  bg: useColorModeValue('#553C9A', '#F6AD55')
                }}
                fontSize={{ base: "md", md: "lg" }}
                padding="12px 32px"
                height="auto"
                minHeight="45px"
              >
                {t("about")}
              </Button>
              <Button
                as={NextLink}
                href="/projetos"
                rightIcon={<ChevronRightIcon />}
                bg={useColorModeValue('#6B46C1', '#FBD38D')}
                color={useColorModeValue('white', 'black')}
                _hover={{
                  bg: useColorModeValue('#553C9A', '#F6AD55')
                }}
                fontSize={{ base: "md", md: "lg" }}
                padding="12px 32px"
                height="auto"
                minHeight="45px"
              >
                {t("projects")}
              </Button>
            </Stack>
          </Box>
          <Box 
            flex={1} 
            display="flex" 
            justifyContent="flex-end"
            pl={{ md: 8 }}
            w={{ base: "100%", md: "350px" }}
            maxW={{ md: '350px' }}
            mt={{ base: 0, md: "-10px" }}
            p={2}
            borderRadius="20px"
          >
            <Image
              src="/thumbghibi.png"
              alt="Welcome Image"
              width={350}
              height={350}
              style={{ 
                borderRadius: '20px',
                width: '100%',
                height: '100%',
                maxWidth: '350px',
                maxHeight: '350px',
                objectFit: 'cover'
              }}
              priority
            />
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
