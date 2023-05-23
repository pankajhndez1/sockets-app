import './App.css';

function App() {
  return (
    <div className="App">
      <>
      <section class="chat__section">
        <div class="brand">
            {/* <img height="40" src="/wassup.png" alt=""> */}
            <h1>Wassup</h1>
        </div>
        <div class="message__area"></div>
        <div>
            <textarea id="textarea" cols="30" rows="1" placeholder="Write a message..."></textarea>
        </div>
    </section>
      </>
    </div>
  );
}

export default App;
