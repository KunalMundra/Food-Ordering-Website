import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, PageProps }) {
    return (<Layout>
        <Component {...PageProps} />  
    </Layout>)
}
//pageprops is destructured here
/* next.js passes two things Component and pageprops
   These pageprops are passed to the Component internally by next.js 
   
   Basically this is the end point where pages can be updated before rendering */
export default MyApp