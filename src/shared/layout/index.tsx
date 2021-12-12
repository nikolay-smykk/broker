import { Shared } from '../';

export const LayoutPage = (props: any) => {
  return (
    <>
      <div className="bg-white">
        <Shared.Header />
        {props.children}
        <Shared.Footer />
      </div>
    </>
  );
};
