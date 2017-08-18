
// pages/index.js

import Layout from '../components/BaseLayout.js'

import stylesheet from '../styles/index.scss'
// or, if you work with plain css
// import stylesheet from 'styles/index.css'

export default () => (
    <Layout>
       <p>Hello Next.js</p>
       <div>
         
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <p>ciao</p>
      </div>
    </Layout>
)

