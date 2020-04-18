class TodoItem {
  private readonly _creationTimestamp: number;
  private readonly _identifier: string;

  constructor(private _description: string, identifier?: string) {
    this._creationTimestamp = new Date().getTime();
    if (identifier) {
      this._identifier = identifier;
    } else {
      this._identifier = Math.random().toString().substr(2, 9);
    }
  }

  get createTimestamp(): number {
    return this._creationTimestamp;
  }

  get identifier(): string {
    return this._identifier;
  }

  get description(): string {
    return this._description;
  }
}

class TodoList {
  private _todoList: ReadonlyArray<TodoItem> = [];
  constructor(todoList?: TodoItem[]) {
    if (Array.isArray(todoList) && todoList.length) {
      this._todoList = this._todoList.concat(todoList);
    }
  }

  get todoList(): ReadonlyArray<TodoItem> {
    return this._todoList;
  }

  addTodo(todoItem: TodoItem) {
    if (todoItem) {
      this._todoList = this._todoList.concat(todoItem);
    }
  }

  removeTodo(itemId: string) {
    if (itemId) {
      this._todoList = this._todoList.filter(
        (item) => item.identifier !== itemId
      );
    }
  }
}

interface TodoListView {
  render(todoList: ReadonlyArray<TodoItem>): void;
  getInput(): TodoItem;
  getFilter(): string;
  clearInput(): void;
  filter(): void;
}

class HTMLTodoListView implements TodoListView {
  private readonly todoInput: HTMLInputElement;
  private readonly todoListDiv: HTMLDivElement;
  private readonly todoListFilter: HTMLInputElement;

  constructor() {
    this.todoInput = document.getElementById("todoInput") as HTMLInputElement;
    this.todoListDiv = document.getElementById(
      "todoListContainer"
    ) as HTMLDivElement;
    this.todoListFilter = document.getElementById(
      "todoFilter"
    ) as HTMLInputElement;

    if (!this.todoInput) {
      throw new Error(
        "Could not find the todoInput HTML input element. Is the HTML correct?"
      );
    }

    if (!this.todoListDiv) {
      throw new Error("Could not find the todoListContainer");
    }

    if (!this.todoListFilter) {
      throw new Error("Could not find the todoFilter");
    }
  }

  render(todoList: readonly TodoItem[]): void {
    this.todoListDiv.innerHTML = "";
    this.todoListDiv.textContent = "";

    const ul = document.createElement("ul");
    ul.setAttribute("id", "todoList");
    this.todoListDiv.appendChild(ul);

    todoList.forEach((item) => {
      const li = document.createElement("li");
      li.setAttribute("class", "todo-list-item");
      li.innerHTML = `<a href='#' onclick='todoIt.removeTodo("${item.identifier}")'>${item.description}</a>`;
      ul.appendChild(li);
    });
  }

  getInput(): TodoItem {
    const todoInputValue: string = this.todoInput.value.trim();
    const retVal: TodoItem = new TodoItem(todoInputValue);
    return retVal;
  }

  getFilter(): string {
    return this.todoListFilter.value.toUpperCase();
  }

  clearInput(): void {
    this.todoInput.value = "";
  }

  filter(): void {
    const todoListHtml: HTMLUListElement = document.getElementById(
      "todoList"
    ) as HTMLUListElement;

    if (todoListHtml == null) {
      return;
    }

    const todoListFilterText = this.getFilter();
    todoListHtml.childNodes.forEach((item) => {
      let itemText: string | null = item.textContent;
      if (itemText !== null) {
        itemText = itemText.toUpperCase();

        if (itemText.startsWith(todoListFilterText)) {
          (item as HTMLLIElement).style.display = "list-item";
        } else {
          (item as HTMLLIElement).style.display = "none";
        }
      }
    });
  }
}

interface TodoListController {
  addTodo(): void;
  filterTodoList(): void;
  removeTodo(identifier: string): void;
}

class TodoIt implements TodoListController {
  private readonly _todoList: TodoList = new TodoList();
  constructor(private _todoListView: TodoListView) {
    if (!_todoListView) {
      throw new Error(
        "The todo list view implementation is required to properly initialize TodoIt"
      );
    }
  }

  addTodo(): void {
    const newTodo = this._todoListView.getInput();
    if (newTodo && newTodo.description) {
      this._todoList.addTodo(newTodo);
      this._todoListView.clearInput();
      this._todoListView.render(this._todoList.todoList);
      this.filterTodoList();
    }
  }

  filterTodoList(): void {
    this._todoListView.filter();
  }

  removeTodo(identifier: string): void {
    if (identifier) {
      this._todoList.removeTodo(identifier);
      this._todoListView.render(this._todoList.todoList);
      this.filterTodoList();
    }
  }
}


class EventUtils {
    static isEnter(event:KeyboardEvent):boolean{
        let isEnterResult = false;
        if(event !== undefined && event.defaultPrevented){
            return false;
        }

        if(event == undefined){
            isEnterResult = false;
        }else if(event.key !== undefined){
            isEnterResult = event.key==='Enter';
        }else if(event.keyCode !== undefined){
            isEnterResult = event.keyCode === 13;
        }
        return isEnterResult;
    }
}


const view = new HTMLTodoListView();
const todoIt = new TodoIt(view);