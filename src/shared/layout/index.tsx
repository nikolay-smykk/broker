import { Layout } from 'antd';
import { Shared } from '../';

const { Header, Footer, Content } = Layout;

export const LayoutPage = (props: any) => {
  return (
    <Layout>
      <Header>
        <Shared.Header />
      </Header>
      <Content>{props.children}</Content>
      <Footer>
        <Shared.Footer />
      </Footer>
    </Layout>
  );
};
