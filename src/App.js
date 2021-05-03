import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  //Arreglo de objetos tipo expenses
  const expenses=[
    {id:"e1" ,title:"Car Insurance", amount:294.67,date: new Date(2000,9,13)},
    {id:"e2",title:"Gym", amount:500.00,date: new Date(2000,10,18)},
    {id:"e3",title:"Steam", amount:1600,date: new Date(2000,11,4)},
    {id:"e4",title:"Netflix", amount:100,date: new Date(2000,11,8)}
  ];
  //Se paso como argumento
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses}/>

    </div>
  );
}

export default App;
