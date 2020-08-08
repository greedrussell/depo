import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'

import Layout from '../../components/layout'

interface IPosts {}

const Home: React.FC<IPosts> = () => {
	return (
		<>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<div className="container">
					<br />
					<br />
					<h1 className="title">Home INdex page</h1>
					<Link href="/posts/ssg-ssr">
						<a href="/posts/ssg-ssr">(Link) SSR</a>
					</Link>

					<br />
					<span onClick={() => Router.replace('/posts/ssg-ssr')}>
						Pre rendering
					</span>
				</div>
			</Layout>
		</>
	)
}

export default Home