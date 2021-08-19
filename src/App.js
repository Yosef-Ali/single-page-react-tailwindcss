import ContactUs from './components/Contact';
import Download from './components/download/Download';
import Feature from './components/feature/Feature';
import FQA from './components/FQA';
import { Hero } from './components/hero/Hero';
import Navbar from './components/navbar';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Feature />
			<Download />
			<FQA />
			<ContactUs />
			<Footer />
		</>
	);
}

export default App;
