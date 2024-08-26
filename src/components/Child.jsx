export default function Child({ name, age }) {
  //   console.log("Props : ", props);
  const showUserDetails = () => {
    console.log("BUtton clicked");
  };
  return (
    <>
      {age > 18 ? (
        <>
          <p>
            This is a child element {name} : {age}
          </p>
          <button onClick={showUserDetails}>Click me</button>
        </>
      ) : (
        ""
      )}
    </>
    // <p>
    //   {/* This is a child element {props.user.name} : {props.user.age} */}
    //   {/* This is a child element {props.name} : {props.age} */}

    //   This is a child element {name} : {age}
    // </p>
  );
}
