{
  // Type alias

  type TUser = {
    name: string;
    roll: number;
    class: string;
    company: "Programming Hero";
  };

  const user1: TUser = {
    name: "Abu Jakaria",
    roll: 457072,
    class: "Eleven",
    company: "Programming Hero",
  };

  const user2: TUser = {
    name: "Jack",
    roll: 32,
    class: "Six",
    company: "Programming Hero",
  };

  type UserName = string;
  const userName: UserName = "abujakariacse";

  type IsAdmin = boolean;
  const isAdmin: IsAdmin = true;

  type AccoutNo = number;
  const accountNo: AccoutNo = 262;

  type AddNum = (num1: number, num2: number)=>number

  const addNum : AddNum= (num1, num2) => num1 + num2;
}
