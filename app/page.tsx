import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      {/* use Link tag instead of <a> tag due client-side navigation and pre-fetching */}
      <Link href="/users">Users</Link>
      < ProductCard />
    </main>
  )
}
