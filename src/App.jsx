import Child from "./components/Child";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Todo from "./components/Todo";

export default function App() {
  const name = "Ankit";
  const data = [
    { name: "Ankit", age: 26 },
    { name: "Omkar", age: 22 },
    { name: "Ankita", age: 18 },
    { name: "Akankshya", age: 27 },
  ];

  return (
    <>
      {/* <h1>This is a Heading</h1>
      {data.map((user) => {
        // return <Child user={user} key={user.name} />;
        return <Child name={user.name} age={user.age} key={user.name} />;
      })}
      <Counter />
      <Form /> */}
      <Todo />
    </>
  );
}
