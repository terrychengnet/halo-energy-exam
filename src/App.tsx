import CodeTest1 from "./CodeTest1";
import CodeTest2 from "./CodeTest2";
import CodeTest3 from "./CodeTest3";
import { useState } from "react";

function App() {
  const [showTest, setShowTest] = useState<number>(1);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: 20}}>
      <div style={{display: 'flex', columnGap: 10}}>
        <div><button onClick={() => setShowTest(1)}>CodeTest1</button></div>
        <div><button onClick={() => setShowTest(2)}>CodeTest2</button></div>
        <div><button onClick={() => setShowTest(3)}>CodeTest3</button></div>
      </div>
      <div><hr/></div>
      <div>
        <div className="App">
          { showTest === 1 && <CodeTest1 /> }
          { showTest === 2 && <CodeTest2 /> }
          { showTest === 3 && <CodeTest3 /> }
        </div>
      </div>
    </div>
  );
}

export default App;
