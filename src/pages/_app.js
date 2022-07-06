import 'tailwindcss/tailwind.css'
import UserProvider from '@/contexts/userContext'

const App = ({ Component, pageProps }) => (
    <UserProvider>
        <Component {...pageProps} />
    </UserProvider>
)

export default App
