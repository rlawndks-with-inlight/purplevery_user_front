const AdminPage = () => {
  return <div>AdminPage</div>;
};

AdminPage.getInitialProps = async (ctx) => {
    const pathname = ctx.pathname;
  
    return { pathname };
  };

export default AdminPage;
