
import Home from "../components/Home";
import Main from "../components/Main";

export default function Index({
  home,
  navbar,
  head,
}) {
  const { hello, iam, position, resume } = home;
  return (
    <Main
      navbar={navbar}
      head={head}
    >
      <Home
        hello={hello}
        iam={iam}
        position={position}
        resume={resume}
      />
    </Main>
  );
}

export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`);
  return {
    props: {
      home: response.homeData,
      navbar: response.navbarData,
      head: response.headData,
      
    },
  };
}