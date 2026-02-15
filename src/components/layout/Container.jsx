const Container = ({ children, className }) => {
  return (
    <>
      <div className={`px-12 ${className}`}>{children}</div>
    </>
  );
};

export default Container;
