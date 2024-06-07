const Loading = ({ height }) => {
  return (
    <div
      className={`flex items-center justify-center ${height ? height : "h-full"}`}
    >
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
};

export default Loading;
