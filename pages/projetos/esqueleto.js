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
    <Layout title="Esqueleto vs Valquírias">
      <Container>
        <Title>
          {t("esqueleto_subtitle")} <Badge>2024</Badge>
        </Title>
        
        <P>
          {t("esqueleto_desc")}
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t("project_platform")}</Meta>
            <span>{t("esqueleto_platform")}</span>
          </ListItem>
          <ListItem>
            <Meta>{t("project_source")}</Meta>
            <Link href={t("esqueleto_source")} target="_blank" color={linkColor}>
              {t("esqueleto_source")} <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/indeximages/Jogos.1.png" alt="Esqueleto vs Valquírias - Logo" />

        <Heading as="h3" fontSize={20} mb={4} mt={8}>
          {t("esqueleto_features_title")}
        </Heading>

        <Heading as="h4" fontSize={16} mb={2} mt={4}>
          {t("esqueleto_gameplay_title")}
        </Heading>
        <List ml={4} my={2}>
          <ListItem>{t("esqueleto_movement")}</ListItem>
          <ListItem>{t("esqueleto_jump")}</ListItem>
          <ListItem>{t("esqueleto_attack")}</ListItem>
          <ListItem>{t("esqueleto_health")}</ListItem>
          <ListItem>{t("esqueleto_difficulty")}</ListItem>
        </List>

        <WorkImage src="/images/indeximages/Jogos.2.png" alt="Esqueleto vs Valquírias - Gameplay" />

        <Heading as="h4" fontSize={16} mb={2} mt={4}>
          {t("esqueleto_progression_title")}
        </Heading>
        <List ml={4} my={2}>
          <ListItem>{t("esqueleto_phases")}</ListItem>
          <ListItem>{t("esqueleto_enemies")}</ListItem>
          <ListItem>{t("esqueleto_boss")}</ListItem>
          <ListItem>{t("esqueleto_healing")}</ListItem>
        </List>

        <WorkImage src="/images/indeximages/Jogos.3.png" alt="Esqueleto vs Valquírias - Progression" />

        <Heading as="h4" fontSize={16} mb={2} mt={4}>
          {t("esqueleto_visual_title")}
        </Heading>
        <List ml={4} my={2}>
          <ListItem>{t("esqueleto_animations")}</ListItem>
          <ListItem>{t("esqueleto_particles")}</ListItem>
          <ListItem>{t("esqueleto_interface")}</ListItem>
          <ListItem>{t("esqueleto_cutscenes")}</ListItem>
        </List>

        <Heading as="h4" fontSize={16} mb={2} mt={4}>
          {t("esqueleto_audio_title")}
        </Heading>
        <List ml={4} my={2}>
          <ListItem>{t("esqueleto_sound_effects")}</ListItem>
          <ListItem>{t("esqueleto_music")}</ListItem>
        </List>

        <WorkImage src="/images/indeximages/Jogos.4.png" alt="Esqueleto vs Valquírias - Visual Elements" />

        <Heading as="h3" fontSize={20} mb={4} mt={8}>
          {t("esqueleto_tech_title")}
        </Heading>

        <Heading as="h4" fontSize={16} mb={2} mt={4}>
          Linguagem & Ferramentas
        </Heading>
        <List ml={4} my={2}>
          <ListItem>{t("esqueleto_language")}</ListItem>
          <ListItem>{t("esqueleto_pygame")}</ListItem>
          <ListItem>{t("esqueleto_opencv")}</ListItem>
        </List>

        <Heading as="h4" fontSize={16} mb={2} mt={4}>
          {t("esqueleto_libraries")}
        </Heading>
        <List ml={4} my={2}>
          <ListItem>{t("esqueleto_lib_pygame")}</ListItem>
          <ListItem>{t("esqueleto_lib_opencv")}</ListItem>
          <ListItem>{t("esqueleto_lib_sys")}</ListItem>
          <ListItem>{t("esqueleto_lib_os")}</ListItem>
        </List>

        <Heading as="h4" fontSize={16} mb={2} mt={4}>
          {t("esqueleto_assets")}
        </Heading>
        <List ml={4} my={2}>
          <ListItem>{t("esqueleto_sprites")}</ListItem>
          <ListItem>{t("esqueleto_music_assets")}</ListItem>
          <ListItem>{t("esqueleto_backgrounds")}</ListItem>
          <ListItem>{t("esqueleto_interface_assets")}</ListItem>
        </List>

        <Heading as="h4" fontSize={16} mb={2} mt={4}>
          {t("esqueleto_menu_system")}
        </Heading>
        <List ml={4} my={2}>
          <ListItem>{t("esqueleto_main_menu")}</ListItem>
          <ListItem>{t("esqueleto_pause_menu")}</ListItem>
          <ListItem>{t("esqueleto_game_over")}</ListItem>
          <ListItem>{t("esqueleto_victory")}</ListItem>
        </List>

        <Heading as="h4" fontSize={16} mb={2} mt={4}>
          {t("esqueleto_save_system")}
        </Heading>
        <List ml={4} my={2}>
          <ListItem>{t("esqueleto_auto_save")}</ListItem>
          <ListItem>{t("esqueleto_phase_restart")}</ListItem>
        </List>

        <WorkImage src="/images/indeximages/Jogos.5.png" alt="Esqueleto vs Valquírias - Technical Details" />
      </Container>
    </Layout>
  );
};

export default Project;
export { getServerSideProps } from '../../components/chakra'; 