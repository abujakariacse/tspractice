{
  // Promise

  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<Todo | void> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    // return data;
    console.log(data);
  };
  getTodo();

  type Something = { something: string };

  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };

      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  const result = async (): Promise<Something | void> => {
    const response: Something = await createPromise();
    console.log(response);
    // return response;
  };
  result();
}
