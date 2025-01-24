import PageNav from "../components/PageNav";

export default function Home() {
  return (
    <>
      <PageNav />
      <div className="test">Home page</div>{" "}
      {/*here even though css not imported, this will be applied with the help of global keyword*/}
    </>
  );
}
