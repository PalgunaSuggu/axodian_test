export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/',
      permanent: true, // 301 redirect
    },
  };
}

const exportFinanceLoanIndia = () => null;
export default exportFinanceLoanIndia;
