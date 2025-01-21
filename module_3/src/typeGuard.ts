{
  //Type Guard/Type Narrowing

  //   Type of operator
  type AlphaNumeric = string | number;
  const add = (num1: AlphaNumeric, num2: AlphaNumeric): AlphaNumeric => {
    if (typeof num1 === "number" && typeof num2 === "number") {
      return num1 + num2;
    } else {
      return num1.toString() + num2.toString();
    }
  };
  console.log(add(2, 4));
  console.log(add("2", "6"));
  console.log(add("2", 5));

  //   In guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name}. My role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}.`);
    }
  };

  const normalUser: NormalUser = { name: "Mr. Normal" };
  const adminUser: AdminUser = { name: "Admin User", role: "admin" };

  getUser(normalUser);
  getUser(adminUser);
}
