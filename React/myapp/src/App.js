import './App.css';
import External from './ApplyCss/External';
import Inline from './ApplyCss/Inline';
import Internal from './ApplyCss/Internal';
import UsingModule from './ApplyCss/UsingModule';
import Message from './Message';
import Outerfunction from './Outerfunction';

function App() {
  return (
    <div>
      <Message />
      <Outerfunction />
      <Outerfunction />
      <Inline />
      <Internal />
      <External />
      <UsingModule />
      {/* <Message></Message> */}
      {/* <h1>Hello World</h1> */}
    </div>
  );
}

export default App;
