import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import { I18nProvider } from '../components/i18n-provider'
import '../utils/i18n'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <I18nProvider>
        <Layout router={router}>
          <AnimatePresence
            mode="wait"
            initial={true}
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </I18nProvider>
    </Chakra>
  )
}

// Adiciona getInitialProps para gerenciar cookies do tema
Website.getInitialProps = ({ ctx }) => {
  return {
    pageProps: {
      cookies: ctx?.req?.headers?.cookie ?? ''
    }
  }
}

export default Website