export function TodoContent() {
  const mockTodo = Array.from({ length: 100 }, (el, idx) => idx + 1);
  // console.log(mockTodo);
  return (
    <main className="content">
      <div>Head</div>
      <div>Add todo</div>
      <ul>
        {mockTodo.map((el) => (
          <li>{`item-${el}`}</li>
        ))}
      </ul>
    </main>
  );
}
