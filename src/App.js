import {Episode, Genre, Genreanime, Nav, Recent, Search, Stream, Seasons} from './components'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <section className="bg-black h-full overflow-hidden">
      <Nav/>
      <Routes>
        <Route element={<Recent/>} path='/'/>
        <Route path="/:episodeId" element={<Episode/>}/>
        <Route path="/:episodeid/:id" element={<Stream/>}/>
        <Route path="/animesearch" element={<Search/>}/>
        <Route path="/genres" element={<Genre/>}/>
        <Route path="/genres/:genre" element={<Genreanime/>}/>
        <Route path='/seasons' element={<Seasons/>}/>
      </Routes>
    </section>
  );
}

export default App;
