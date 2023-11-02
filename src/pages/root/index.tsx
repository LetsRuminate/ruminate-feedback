import Layout from '../layout'
import { Outlet } from 'react-router-dom'
const Root = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default Root
