import { useTranslation } from 'react-i18next';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import thumbMemeGenerator from '../public/images/indeximages/Gerador de meme.png';
import thumbEsqueleto from '../public/images/indeximages/Esqueleto_logo.png';

const Projetos = () => {
  const { t } = useTranslation();

  return (
    <Layout title="Projects">
      <Container display={{ md: 'column' }} marginTop={{ md: 10 }}>
        <Heading as="h3" fontSize={20} mb={4}>
          {t("projects_personal")}
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="meme-generator"
              title={t("meme_generator_title")}
              thumbnail={thumbMemeGenerator}
            >
              {t("meme_generator_desc")}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="esqueleto"
              title={t("esqueleto_title")}
              thumbnail={thumbEsqueleto}
            >
              {t("esqueleto_desc")}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projetos;
export { getServerSideProps } from '../components/chakra';