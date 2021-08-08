import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import { ThemeProvider } from '../components/themeContext'
import { QuickMenu } from './quickMenu';

export default function Layout({ preview, children }) {
  return (
    <>
      <ThemeProvider>
        <Meta />
        <div className="min-h-screen">
          {/* <Alert preview={preview} /> */}
          <main>{children}</main>
        </div>
        <QuickMenu />
        <Footer />
      </ThemeProvider>
    </>
  )
}
