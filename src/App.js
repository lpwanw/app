import "./App.css";
import TodoItem from "./component/TodoItem";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: "Mua Bim Bim", isCompleted: true },
      { title: "Mua BCD", isCompleted: true },
      { title: "Mua Cai gif ddaays", isCompleted: false },
    ];
  }
  render() {
    // if (this.todoItems.length === 0) {
    //   return (
    //     <div className="App">
    //       <p>Nothing</p>
    //     </div>
    //   );
    // }
    return (
      <div className="App">
        {this.todoItems.length > 0 &&
          this.todoItems.map((item, index) => (
            <TodoItem item={item} key={index} />
          ))}
        {this.todoItems.length === 0 && <p>Nothing</p>}
      </div>
    );
  }
}

export default App;
