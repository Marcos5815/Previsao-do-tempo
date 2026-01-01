import { CardContainer } from './components/CardContainer'
import { CityCard } from './components/CityCard'
import { SearchBar } from './components/SearchBar'
import { Container } from './layout/Container'

function App() {

  return (
    <Container>
      <SearchBar type="text" placeholder="Digite a cidade" />
      <CityCard />
      <CardContainer />
    </Container>
  )
}

export default App
