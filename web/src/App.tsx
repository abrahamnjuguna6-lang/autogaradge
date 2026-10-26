import { WHATSAPP_NUMBER } from './config'
import { siteContent } from './data/content'
import { LandingPage } from './pages/LandingPage'

export default function App() {
  return <LandingPage content={siteContent} whatsappNumber={WHATSAPP_NUMBER} />
}
