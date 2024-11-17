import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

interface Props {
    children?: React.ReactNode
}

/**
 * Main Page Providers
 */
export const HouseLayout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <div className="mt-20 p-10 min-h-[80vh]">{children}</div>
            <Footer />
        </>
    )
}
