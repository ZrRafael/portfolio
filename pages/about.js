import { useTranslation } from 'react-i18next';
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Text,
  useColorModeValue,
  useToast
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5';
import Image from 'next/image';
import { FaVuejs, FaAngular, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiNuxtdotjs, SiExpress, SiSpringboot, SiDocker, SiTerraform, SiFirebase, SiMysql, SiIonic } from "react-icons/si";

const About = () => {
  const { t } = useTranslation();
  const toast = useToast();

  const handleDownloadClick = (e) => {
    e.preventDefault();
    toast({
      title: t("download_cv"),
      description: "Em desenvolvimento / Under development",
      status: "info",
      duration: 3000,
      isClosable: true,
      position: "top"
    });
  };

  return (
    <Layout title="About">
      <Container display={{ md: 'column' }} marginTop={{ md: 5 }}>
        <Box display={{ md: 'flex' }} alignItems="center" marginTop={{ md: 10 }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Rafael Augusto
            </Heading>
            <p>{t("job_title")}</p>
            <Button
              as="button"
              onClick={handleDownloadClick}
              leftIcon={<DownloadIcon />}
              bg={useColorModeValue('#6B46C1', '#FBD38D')}
              color={useColorModeValue('white', 'black')}
              _hover={{
                bg: useColorModeValue('#553C9A', '#F6AD55')
              }}
              mt={3}
            >
              {t("download_cv")}
            </Button>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor={useColorModeValue('#6B46C1', '#FBD38D')}
              borderWidth={3}
              borderStyle="solid"
              w="150px"
              h="150px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src="/thumbnail.png"
                alt="Profile image"
                width={150}
                height={150}
              />
            </Box>
          </Box>
        </Box>

        {/* Container de Tecnologias - Temporariamente comentado
        <Box
          borderRadius="lg"
          mt={4}
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={4}
        >
          <FaVuejs size={30} color="#42b883" />
          <FaAngular size={30} color="#dd0031" />
          <FaReact size={30} color="#61dafb" />
          <SiNextdotjs size={30} color="black" />
          <SiNuxtdotjs size={30} color="#00dc82" />
          <FaNodeJs size={30} color="#68a063" />
          <SiExpress size={30} color="gray" />
          <SiIonic size={30} color="#3880ff" />
          <FaJava size={30} color="#007396" />
          <SiSpringboot size={30} color="#6db33f" />
          <SiDocker size={30} color="#2496ed" />
          <SiTerraform size={30} color="#623ce4" />
          <SiFirebase size={30} color="#ffca28" />
          <SiMysql size={30} color="#00758f" />
        </Box>
        */}

        <Section delay={0.1}>
          <Box marginTop={8}>
            <Heading as="h3" variant="section-title">
              {t("summary")}
            </Heading>
            <Paragraph>
              {t("bio_description")}
            </Paragraph>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Box marginTop={12}>
            <Heading as="h3" variant="section-title">
              {t("bio")}
            </Heading>
            <BioSection>
              <BioYear>2022</BioYear>
              {t("timeline_2022")}
            </BioSection>
            <BioSection>
              <BioYear>2023</BioYear>
              {t("timeline_2023")}
            </BioSection>
            <BioSection>
              <BioYear>2024</BioYear>
              {t("timeline_2024")}
            </BioSection>
            <BioSection>
              <BioYear>2025</BioYear>
              {t("timeline_2025")}
            </BioSection>
            <BioSection>
              <BioYear>2025</BioYear>
              {t("timeline_current")}
            </BioSection>
          </Box>
        </Section>

        <Section delay={0.4}>
          <Box marginTop={12}>
            <Heading as="h3" variant="section-title">
              {t("work_experience")}
            </Heading>
            <List spacing={6} mt={6}>
              <ListItem>
                <Box>
                  <Box display="flex" alignItems="center">
                    <Image src="/images/indeximages/wemind-logo.png" alt="WeMind" width={50} height={50} />
                    <Box ml={3}>
                      <Heading as="h4" size="md">{t("job_wemind_title")}</Heading>
                      <Text fontSize="sm" color="gray.500">{t("job_wemind_company")}</Text>
                    </Box>
                  </Box>
                  <Text fontSize="sm" mt={2}>{t("job_wemind_period")}</Text>
                  <Text fontSize="sm" mb={2}>{t("job_wemind_location")}</Text>
                  <Text fontSize="sm" mb={4}>{t("job_wemind_description")}</Text>
                  <Text fontSize="sm" fontWeight="bold" mb={1}>Skills:</Text>
                  <Text fontSize="sm">{t("job_wemind_skills")}</Text>
                </Box>
              </ListItem>
            </List>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Box marginTop={12}>
            <Heading as="h3" variant="section-title">
              {t("education")}
            </Heading>
            <List spacing={6} mt={6}>
              <ListItem>
                <Box>
                  <Box display="flex" alignItems="center">
                    <Image src="/images/indeximages/unifan-logo.png" alt="UNIFAN" width={50} height={50} />
                    <Box ml={3}>
                      <Heading as="h4" size="md">{t("education_unifan_title")}</Heading>
                      <Text fontSize="sm" color="gray.500">{t("education_unifan_institution")}</Text>
                    </Box>
                  </Box>
                  <Text fontSize="sm" mt={2}>{t("education_unifan_period")}</Text>
                  <Text fontSize="sm" mb={2}>{t("education_unifan_location")}</Text>
                  <Text fontSize="sm" mb={4}>{t("education_unifan_description")}</Text>
                  <Text fontSize="sm" fontWeight="bold" mb={1}>Skills:</Text>
                  <Text fontSize="sm">{t("education_unifan_skills")}</Text>
                </Box>
              </ListItem>
            </List>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Box marginTop={12}>
            <Heading as="h3" variant="section-title">
              ♥
            </Heading>
            <Paragraph>
              {t("hobbies")}
            </Paragraph>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Box marginTop={12}>
            <Heading as="h3" variant="section-title">
              {t("my_networks")}
            </Heading>
            <List>
              <ListItem>
                <Link href="https://github.com/ZrRafael" target="_blank">
                  <Button 
                    variant="ghost" 
                    leftIcon={<IoLogoGithub />}
                    color={useColorModeValue('#6B46C1', '#FBD38D')}
                    _hover={{
                      bg: useColorModeValue('rgba(107, 70, 193, 0.1)', 'rgba(251, 211, 141, 0.1)')
                    }}
                  >
                    @ZrRafael
                  </Button>
                </Link>
              </ListItem>

              <ListItem>
                <Link href="https://www.linkedin.com/in/rafael-augusto-196b8228a/" target="_blank">
                  <Button 
                    variant="ghost" 
                    leftIcon={<IoLogoLinkedin />}
                    color={useColorModeValue('#6B46C1', '#FBD38D')}
                    _hover={{
                      bg: useColorModeValue('rgba(107, 70, 193, 0.1)', 'rgba(251, 211, 141, 0.1)')
                    }}
                  >
                    Rafael Augusto
                  </Button>
                </Link>
              </ListItem>

              <ListItem>
                <Link href="mailto:rafarafanmmn@gmail.com">
                  <Button 
                    variant="ghost" 
                    leftIcon={<IoMail />}
                    color={useColorModeValue('#6B46C1', '#FBD38D')}
                    _hover={{
                      bg: useColorModeValue('rgba(107, 70, 193, 0.1)', 'rgba(251, 211, 141, 0.1)')
                    }}
                  >
                    rafarafanmmn@gmail.com
                  </Button>
                </Link>
              </ListItem>
            </List>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default About;
export { getServerSideProps } from '../components/chakra'; 