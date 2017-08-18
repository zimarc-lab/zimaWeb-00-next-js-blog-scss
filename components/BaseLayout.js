import Header from './Header'


const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
  

}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    
    
    <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css' />

    {props.children}



    
  </div>
)

export default Layout