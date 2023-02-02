const Switch = (props) => {
  return (
    <div>
      <button
        // style={{ backgroundColor: props.state ? "purple" : "white" }}
        className={props.state ? "active" : "inactive"}
        onClick={() => {
          props.setState(true);
        }}
      >
        ON
      </button>
      <button
        // style={{ backgroundColor: props.state ? "white" : "purple" }}
        className={props.state ? "inactive" : "active"}
        onClick={() => {
          props.setState(false);
        }}
      >
        OFF
      </button>
    </div>
  );
};

export default Switch;
