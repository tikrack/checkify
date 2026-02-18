const Container = ({ children, className }) => {
  return (
    <>
      <div className={`w-full max-w-[1400px] mx-auto ${className}`}>{children}</div>
    </>
  );
};

export default Container;
