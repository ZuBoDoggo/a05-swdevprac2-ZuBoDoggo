import Banner from '@/components/Banner';
import Card from '@/components/Card';

export default function Home() {
  return (
    <main>
      <Banner />
      
      <div style={{ margin:"20px",
        display:"flex",
        flexDirection:"row",
        alignContent:"space-around",
        justifyContent:"space-around",
        flexWrap:"wrap"
        }}>
        <Card venueName={"The Bloom Pavillians"} imgSrc={"/img/bloom.png"} />
        <Card venueName={"Spark Space"} imgSrc={"/img/sparkspace.png"} />
        <Card venueName={"The Grand Table"} imgSrc={"/img/grandtable.png"} />
      </div>
    </main>
  );
}