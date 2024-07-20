import { useState } from 'react'
import PuppyDataAndList from "./PuppyDataAndList"

function App() {

  const [LogInStatus, setLogInStatus] = useState(false)

  return (
            <>
              <header>
                <nav>
                  {
                    !LogInStatus ? <button onClick={() => {setLogInStatus(true)}}>Log In</button> :
                    <>
                      <button onClick={() => {setLogInStatus(false)}}>Log Out</button>
                      <button>My Account</button>
                    </>
                  }
                </nav>
              </header>
              <main>
                <PuppyDataAndList LogInStatus={LogInStatus}/>
              </main>
            </>
          )
}

export default App