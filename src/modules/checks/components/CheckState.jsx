const CheckState = ({status}) => {
  const renderStatus = () => {
    switch (status) {
      case "rejected":
        return ""
      case "pending":
        return "bg-yellow-400"
      case "accepted":
        return ""
    }
  }

  return (
    <>
      <div className={`rounded-full size-4 animate-pulse ${renderStatus()}`}></div>
    </>
  );
}

export default CheckState;