export function getServerSideProps() {
  return {
    redirect: {
      destination: '/home',
    },
  };
}

export default function Home() {

  return null;
  
}
