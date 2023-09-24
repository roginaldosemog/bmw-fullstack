import CarsList from '@/components/CarsList'

export default function Home() {
  return (
    <main className="pt-4" data-testid="homepage">
      <div className="container">
        <h1 className="pb-2">Available Cars</h1>
        <CarsList />
      </div>
    </main>
  )
}
