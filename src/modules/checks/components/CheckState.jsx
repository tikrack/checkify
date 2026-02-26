const CheckState = ({ status }) => {
  const renderStatus = () => {
    switch (status) {
      case "rejected":
        return ["bg-red-400", "رد شده"];
      case "pending":
        return ["bg-yellow-400", "در انتظار"];
      case "accepted":
        return ["bg-green-400", "قبول شده"];
    }
  };

  return (
    <>
      <div
        className={`rounded-full size-4 animate-pulse ${renderStatus()[0]}`}
        title={renderStatus()[1]}
      ></div>
    </>
  );
};

export default CheckState;
