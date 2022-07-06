import Navigation from '@/components/Layouts/Navigation'
import { SearchProvider } from '@/contexts/searchContext'

const AppLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <SearchProvider>
                <Navigation />

                {/* Page Content */}
                <main>{children}</main>
            </SearchProvider>
        </div>
    )
}

export default AppLayout
