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
    <Layout title="Amor">
      <Container>
        <Title>
          {t("amor_subtitle")} <Badge>2025</Badge>
        </Title>
        
        <P>
          {t("amor_desc")}
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t("project_platform")}</Meta>
            <span>{t("amor_platform")}</span>
          </ListItem>
          <ListItem>
            <Meta>{t("project_stack")}</Meta>
            <span>React, Next.js, Chakra UI, Node.js</span>
          </ListItem>
          <ListItem>
            <Meta>{t("project_source")}</Meta>
            <Link href={t("amor_source")} target="_blank" color={linkColor}>
              {t("amor_source")} <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/indeximages/Amor.png" alt="Amor - Preview" />

        <Heading as="h3" fontSize={20} mb={4} mt={8}>
          💝 Características do Projeto
        </Heading>

        <Heading as="h4" fontSize={16} mb={2} mt={4}>
          ❤️ Funcionalidades Principais
        </Heading>
        <List ml={4} my={2}>
          <ListItem>Interface moderna e responsiva</ListItem>
          <ListItem>Tema romântico com design elegante</ListItem>
          <ListItem>Experiência de usuário intuitiva</ListItem>
          <ListItem>Compatibilidade com múltiplos dispositivos</ListItem>
        </List>

        <Heading as="h4" fontSize={16} mb={2} mt={4}>
          🛠️ Tecnologias Utilizadas
        </Heading>
        <List ml={4} my={2}>
          <ListItem>React para interface dinâmica</ListItem>
          <ListItem>Next.js para performance otimizada</ListItem>
          <ListItem>Chakra UI para componentes estilizados</ListItem>
          <ListItem>Node.js para funcionalidades backend</ListItem>
        </List>

        <Heading as="h4" fontSize={16} mb={2} mt={4}>
          ✨ Recursos Adicionais
        </Heading>
        <List ml={4} my={2}>
          <ListItem>Sistema de temas dinâmico</ListItem>
          <ListItem>Internacionalização (i18n)</ListItem>
          <ListItem>Animações suaves</ListItem>
          <ListItem>Design responsivo</ListItem>
        </List>

      </Container>
    </Layout>
  );
};

export default Project;
export { getServerSideProps } from '../../components/chakra';