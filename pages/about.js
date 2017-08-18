import Layout from '../components/BaseLayout.js'

export default () => (

    

    <Layout>
        
       <p>Hello about me</p>

       <div className='hello'>
    <p>Hello World</p>
    <style jsx>{`
      :global(:root) {
        --bgColor: green;
        --color: white;
      }
    
      .hello {
        font-family: 'Dosis', sans-serif;
        font-size: 150px ;
        background: var(--bgColor);
        color: var(--color);
        padding: 100px;
        text-align: center;
        transition: 100ms ease-in background;
      }
      .hello:hover {
        color: color(var(--color) blackness(+80%));
      }
    `}</style>
  </div>

       
    </Layout>
)