import NavBar from '../../components/navbar'
import Footer from '../../components/footer'

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
