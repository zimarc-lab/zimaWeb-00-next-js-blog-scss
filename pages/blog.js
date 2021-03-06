import { Component } from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-fetch'
import Link from 'next/link'
import Post from '../components/Post'
import Layout from '../components/BaseLayout.js'
//import stylesheet from '../styles/index.scss'

export default class extends Component {
  static async getInitialProps () {
    // fetch list of posts
    const response = await fetch('http://jsonplaceholder.typicode.com/posts?_page=1')
    const postList = await response.json()
    return { postList }
  }

  render () {
    return (
      <Layout>
        <main>
          <Head>
            <title>Home page</title>
          </Head>
          <div className='blog'>
           

          <h1>List of posts</h1>

          <section>
            {this.props.postList.map(post => <Post {...post} key={post.id} />)}
          </section>
          <style jsx>{`
              .blog {
                font-family: 'Dosis', sans-serif;
                font-size: 15px ;
                
              }
            `}</style>
          </div>
        </main>
        </Layout>
    )
  }
}