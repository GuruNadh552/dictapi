import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './App1.css';

function ShowWord(props)
{
    const [word,setWord] = useState('');
    const [meaning,setMeaning] = useState('');
    const [pronoun,setPronoun] = useState('');
    const [example,setExample] = useState('');
    const [phonetics,setPhonetics] = useState('');
    const [phoneturl,setPhoneturl] = useState('');
    const [synonms,setSynonms] = useState([]);
    const submitWord =  () => {
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en_US/'+props.word;
         axios.get(url).then(response => {
          const data = response.data[0];
          setWord(data.word);
          setMeaning(data.meanings[0].definitions[0].definition);
          setPronoun(data.meanings[0].partOfSpeech);
          setExample(data.meanings[0].definitions[0].example);
          setPhonetics(data.phonetics[0].text);
          setPhoneturl(data.phonetics[0].audio);
          setSynonms(data.meanings[0].definitions[0].synonyms);
        })
      }
      useEffect(()=>{
        submitWord();
      })
      const playAudio = () => {
        let audio = new Audio(phoneturl);
        audio.play();
      }
    return (
        <>
        {(props.word === '') ? 'Enter Valid Word':(
            <div className="main-card">
                <h3>Word :</h3>
                <p>{word}</p>
                <h3>Phonetics :</h3> 
                <p>{phonetics} <button className="inpword1" onClick={playAudio}>Play</button></p>
                <h3>Meaning : </h3> <p>{meaning}</p>
                <h3>Parts Of Speech :</h3> <p>{pronoun}</p>
                <h3>Examples : </h3><p>{example}</p>
                <h3>Synonyms : </h3>
                <ul>
                  {
                    synonms.map((n,index)=>{
                      return (<li key={index}>{n}</li>)
                    })
                  }
                </ul>
            </div>
        )}
        </>
    )
}

export default ShowWord;