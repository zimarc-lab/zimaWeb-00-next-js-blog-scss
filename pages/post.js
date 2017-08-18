import { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import fetch from 'isomorphic-fetch'
import Layout from'../components/BaseLayout'

export default class extends Component {
  static async getInitialProps ({ query }) {
    // fetch single post detail
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${query.id}`)
    const post = await response.json()
    return { ...post }
  }

  render () {
    return (
      <Layout>
      <main>
        <Head>
          <title>{this.props.title}</title>
        </Head>

        <h1>{this.props.title}</h1>

        <p>{this.props.body}</p>

        <Link href='../blog'>
          <a>Go back to blog</a>
        </Link>
      </main>
      </Layout>
    )
  }
}