import logo from './logo.svg';
import './App.css';
import BioData from './components/BioData';

function App() {
  return (
    <div className="App">
      <BioData 
        name = "Tarannom Esty"
        email = "tarannomesty@gmail.com"
        phone = "01822222222"
        skills = {
          ["HTML", "CSS", "JAVASCRIPT"]
        }
        interests = {
          ["React", "Node", "Blockchain"]
        }
        referenceBy = "Sr Setu"
      />
                  <BioData 
        name = "Asief Mahir"
        email = "asiefmahir@gmail.com"
        phone = "01811111111"
        skills = {
          ["React", "Node", "JS", "Php", "WP"]
        }
        interests = {
          ["NFT", "Blockchain"]
        }
        referenceBy = "Sumit Shaha"
      />
            <BioData 
        name = "Sr Setu"
        email = "srsetu@gmail.com"
        phone = "01811111111"
        skills = {
          ["React", "Node", "JS", "Php", "WP"]
        }
        interests = {
          ["React", "Node", "JS", "NFT", "Blockchain"]
        }
        referenceBy = "Sumit Shaha"
      />
      
    </div>
  );
}

export default App;
