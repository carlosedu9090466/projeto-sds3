import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    // Fragment da function para colocar mais components
    <>
      {/* Primeiro vem a navBar e depois o Body */}
      <NavBar />

      <div className="container">

        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        {/* Vai organizar os componentes em linha no layout  */}
        <div className="row px-3">

          {/* Usando o col-sm-6. metade do container */}
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
            {/* Gráfico de barra */}
            <BarChart />
          </div>
          {/* Outra metade da Row */}


          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas as Vendas</h5>
            {/* Gráfico de rosquinha */}
            <DonutChart />
          </div>
        </div>
        {/* py-2 espaçamento vertical (y) */}
        <div className="py-3">
          <h2 className="text-primary">Todas vendas</h2>
        </div>
        <DataTable />

      </div>
      {/* Footer da aplicação */}

      <Footer />

    </>
  );
}

export default App;
