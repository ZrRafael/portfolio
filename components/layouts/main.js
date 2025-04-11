import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rafael Augusto - Portfolio" />
        <meta name="author" content="Rafael Augusto" />
        <meta name="author" content="rafaelaugusto" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        <meta property="og:title" content="Rafael Augusto - Portfolio" />
        <meta property="og:description" content="Bem-vindo ao meu portfólio! Aqui você encontra meus projetos e experiências." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rafaelaugusto.dev" />
        <meta property="og:image" content="https://rafaelaugusto.dev/thumbnail.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rafael Augusto - Portfolio" />
        <meta name="twitter:description" content="Veja meus projetos e experiências no meu portfólio." />
        <meta name="twitter:site" content="@rafaelaugusto" />
        <meta name="twitter:creator" content="@rafaelaugusto" />
        <meta name="twitter:image" content="https://rafaelaugusto.dev/thumbnail.png" />

        <title>Rafael Augusto - Portfolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
