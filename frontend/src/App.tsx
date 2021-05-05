import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    // Fragment da function para colocar mais components
    <>
      {/* Primeiro vem a navBar e depois o Body */}
      <NavBar />

      <div className="container">

        <h1 className="text-primary">Olá mundo!</h1>

        <DataTable />

      </div>
      {/* Footer da aplicação */}

      <Footer />

    </>
  );
}

export default App;
