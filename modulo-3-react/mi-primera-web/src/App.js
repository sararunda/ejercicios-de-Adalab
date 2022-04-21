// ARRAY NORMAL CON MAP
// function App() {
//   const tasks = [
//     'Comprar harina, jamón y pan rallado',
//     'Hacer croquetas ricas',
//     'Ir a la puerta de un gimnasio',
//     'Comerme las croquetas mirando a la gente que entra en el gimnasio',
//   ];
//   const renderTasks = () => {
//     return tasks.map((task) => {
//       return <li>{task}</li>;
//     });
//   };
//   return (
//     <div>
//       <h1>Mi lista de tareas</h1>
//       <ol>{renderTasks()}</ol>
//     </div>
//   );
// }

// ARRAY CON OBJETOS
function App() {
  const tasks = [
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ];
  const renderTasks = () => {
    return tasks.map((task, index) => {
      return (
        <li key={index} className="completed">
          {task.task}
        </li>
      );
    });
  };
  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ol>{renderTasks()}</ol>
    </div>
  );
}

export default App;
