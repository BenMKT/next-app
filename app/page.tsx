import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main className="flex flex-col space-y-10 px-7 md:max-w-3xl lg:max-w-4xl mx-auto">
      <h1 className="mt-10 text-4xl font-semibold">Hello World!</h1>
      <p className="text-xl text-gray-500 text-wrap">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        corporis error quis facere excepturi iste, impedit praesentium ipsa!
        Nesciunt fugiat non doloremque inventore deserunt, nostrum neque impedit
        dignissimos quod itaque.<br/><br/>

        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        corporis error quis facere excepturi iste, impedit praesentium ipsa!
        Nesciunt fugiat non doloremque inventore deserunt, nostrum neque impedit
        dignissimos quod itaque.
      </p>
      <ProductCard />
    </main>
  );
}
