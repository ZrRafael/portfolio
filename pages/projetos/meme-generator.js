import { Container, Badge, Link, List, ListItem, useColorModeValue, Heading } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import { useTranslation } from 'react-i18next';

const Project = () => {
  const { t } = useTranslation();
  const linkColor = useColorModeValue('#6B46C1', '#FBD38D');

  return (
    <Layout title="Meme Generator">
      <Container>
        <Title>
          {t("meme_generator_title")} <Badge></Badge>
        </Title>
        
        <P>
          {t("meme_desc")}
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t("project_website")}</Meta>
            <Link href="https://meme-generator-zeta-nine.vercel.app/" target="_blank" color={linkColor}>
              https://meme-generator-zeta-nine.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t("project_platform")}</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>{t("project_stack")}</Meta>
            <span>HTML5, CSS3, JavaScript (ES6+), Firebase, Node.js, Express.js, Interact.js</span>
          </ListItem>
          <ListItem>
            <Meta>{t("project_source")}</Meta>
            <Link href="https://github.com/ZrRafael/MemeGenerator" target="_blank" color={linkColor}>
              https://github.com/ZrRafael/MemeGenerator <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/indeximages/gerador escuro.png" alt="Gerador de Memes - Tema Escuro" />

        <Heading as="h3" fontSize={20} mb={4} mt={8}>
          {t("features_title")}
        </Heading>
        <List ml={4} my={4}>
          <ListItem>{t("feature_add_text")}</ListItem>
          <ListItem>{t("feature_customize")}</ListItem>
          <ListItem>{t("feature_drag")}</ListItem>
          <ListItem>{t("feature_theme")}</ListItem>
          <ListItem>{t("feature_language")}</ListItem>
          <ListItem>{t("feature_download")}</ListItem>
          <ListItem>{t("feature_save")}</ListItem>
          <ListItem>{t("feature_manage")}</ListItem>
          <ListItem>{t("feature_search")}</ListItem>
          <ListItem>{t("feature_interface")}</ListItem>
          <ListItem>{t("feature_help")}</ListItem>
          <ListItem>{t("feature_styles")}</ListItem>
        </List>

        <WorkImage src="/images/indeximages/projetos escuro.png" alt="Projetos - Tema Escuro" />

        <Heading as="h3" fontSize={20} mb={4} mt={8}>
          {t("tech_title")}
        </Heading>
        
        <Heading as="h4" fontSize={16} mb={2} mt={4}>
          {t("tech_frontend")}
        </Heading>
        <List ml={4} my={2}>
          <ListItem>{t("tech_html")}</ListItem>
          <ListItem>{t("tech_css")}</ListItem>
          <ListItem>{t("tech_js")}</ListItem>
          <ListItem>{t("tech_interact")}</ListItem>
          <ListItem>{t("tech_modules")}</ListItem>
          <ListItem>{t("tech_state")}</ListItem>
        </List>

        <WorkImage src="/images/indeximages/gerador claro.png" alt="Gerador de Memes - Tema Claro" />

        <Heading as="h4" fontSize={16} mb={2} mt={4}>
          {t("tech_backend")}
        </Heading>
        <List ml={4} my={2}>
          <ListItem>{t("tech_firebase")}</ListItem>
          <ListItem>{t("tech_firestore")}</ListItem>
          <ListItem>{t("tech_express")}</ListItem>
          <ListItem>{t("tech_node")}</ListItem>
        </List>

        <Heading as="h4" fontSize={16} mb={2} mt={4}>
          {t("tech_additional")}
        </Heading>
        <List ml={4} my={2}>
          <ListItem>{t("tech_themes")}</ListItem>
          <ListItem>{t("tech_i18n")}</ListItem>
          <ListItem>{t("tech_modals")}</ListItem>
          <ListItem>{t("tech_tooltips")}</ListItem>
          <ListItem>{t("tech_responsive")}</ListItem>
          <ListItem>{t("tech_animations")}</ListItem>
        </List>

        <WorkImage src="/images/indeximages/projetos claro.png" alt="Projetos - Tema Claro" />

      </Container>
    </Layout>
  );
};

export default Project;
export { getServerSideProps } from '../../components/chakra'; 