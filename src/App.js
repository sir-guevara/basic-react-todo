import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import ItemProvider from "./provider/ItemProvider";

function App() {
  return (
    <div className="App">
      <main>
        <ItemProvider>
          <Header />
          <List />
        </ItemProvider>
      </main>
    </div>
  );
}

export default App;
