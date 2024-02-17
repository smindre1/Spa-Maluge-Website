import { useState } from 'react'

function Home() {
  const [language, setLanguage] = useState('english');
  
    return (
    <div>
        <p>HomePage</p>
    </div>
  );
}

export default Home;