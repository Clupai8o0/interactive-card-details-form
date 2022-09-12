import ContentSide from "./containers/content"
import HeroSide from "./containers/hero"

function App() {
  return (
    <main className="flex flex-col w-full lg:flex-row">
      <HeroSide/>
      <ContentSide />
    </main>
  )
}

export default App
