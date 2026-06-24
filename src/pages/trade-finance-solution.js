export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/',
      permanent: true, // 301 redirect
    },
  };
}

const tradeFinanceSolution = () => null;
export default tradeFinanceSolution;
