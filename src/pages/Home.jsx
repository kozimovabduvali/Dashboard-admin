import Grid from "../components/Home/Grid";
import Grid2 from "../components/Home/Grid2";
import Table from "../components/Home/Table";
import Table2 from "../components/Home/Table2";

function Home() {
  return (
    <div className="w-full">
      <div className="max-w-base mx-auto px-4 lg:px-5 pt-6 md:pt-9 xl:pt-12">
        <Grid />
        <div className="pt-8 lg:pt-10">
          <Table />
        </div>
        <div className="pt-8 lg:pt-[3.125rem]">
          <Grid2 />
        </div>
        <div className="pt-8 lg:pt-[3.125rem]">
          <Table2 />
        </div>
      </div>
    </div>
  );
}

export default Home;
