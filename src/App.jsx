import React, {useState} from 'react';
import './App.scss';
import useCustomFetch from './Hooks/useCustomFetch';


const App =()=> {
  const [url, setUrl] = useState(null);
  const [data, loading, error] = useCustomFetch(url);

  const getFollowers = (e)=>{
    if(e.key === 'Enter'){
      setUrl("https://api.github.com/users/" + e.target.value);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          GitID:
          <input onKeyPress={getFollowers}></input>

          {loading && url  && <div>Loading ....</div>}
          {!loading && data && data.rData && data.rData.followers && (
            <div>Followers: {data.rData.followers}</div>
          )}
          {error && <div>Error: {error}</div>}
        </h2>
      </header>
    </div>
  );
}

export default App;