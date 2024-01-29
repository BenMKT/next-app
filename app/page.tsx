import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main className='flex flex-col space-y-10'>      
      <h1 className='mt-10 text-4xl'>Hello World!</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis error quis facere excepturi iste, impedit praesentium ipsa! Nesciunt fugiat non doloremque inventore deserunt, nostrum neque impedit dignissimos quod itaque.</p>
      < ProductCard />
    </main>
  )
}
