// Створіть функцію TypeScript з іменем formatOrder, яка приймає об'єкт order як аргумент. Об'єкт замовлення повинен мати такі властивості: orderId (номер), customerName (рядок) та isDelivered (логічне значення). Функція повинна повертати рядок, що підсумовує порядок.

type Order = {
  orderId: number;
  customerName: string;
  isDelivered: boolean;
}

function formatOrder(order: Order) {
  return `Order ${order.orderId}: ${order.customerName} - ${order.isDelivered ? "Delivered" : 'Pending'}`;
}
// // Example usage:
const order1 = {
  orderId: 101,
  customerName: "John Doe",
  isDelivered: false
};
console.log(formatOrder(order1))


// Создайте функцию TypeScript с именем displayUserProfile, которая принимает объект профиля пользователя в качестве аргумента. Объект профиля пользователя должен иметь следующие свойства: имя пользователя (строка), возраст (число) и isActive (логическое значение). Функция должна возвращать строку, обобщающую сведения о профиле пользователя.

type UserProfile  = {
  name: string;
  age: number;
  isActive: boolean;
}

function displayUserProfile (profile: UserProfile  ): string {
    return `${profile.name} is ${profile.age} years old and is currently ${profile.isActive ? 'active': 'inactive'}`
}

// // Example usage:
const profile = {
    name: "alice123",
    age: 28,
    isActive: true
};

console.log(displayUserProfile(profile))


// Напишите функцию TypeScript с именем CalculateTotal, которая принимает массив чисел и возвращает их сумму. Эта функция должна строго принимать только массив чисел.

function calculateTotal (numbers: number[]) : number {
  return numbers.reduce((acc, current)=>acc + current,0)
  }
  
  // Example usage:
const numbersArray = [10, 20, 30, 40];
console.log(calculateTotal(numbersArray));  
// Output: 100


// Создайте функцию TypeScript с именем logDetails, которая принимает один параметр. Функция должна принимать любой тип значения и просто выводить это значение вместе с его типом на консоль. Продемонстрируйте, как функцию можно использовать с различными типами входных данных.

function logDetails (value: any) : void {
  console.log(`Value: ${value}, Type of value ${typeof value}`)
}

logDetails("Hello, TypeScript!"); 
logDetails(42); 
logDetails(true); 


// Напишите функцию TypeScript с именем SafeParseJson, которая пытается проанализировать строку JSON и вернуть результат. Функция должна использовать неизвестный тип для безопасной обработки анализируемых данных, проверяя тип анализируемого объекта перед его возвратом. Если объект не ожидаемого типа, функция должна вернуть значение null.

function safelyParseJson(jsonString: string): unknown{
  try {
    const result: unknown = JSON.parse(jsonString);
      if(typeof result === "object" && result !==null) {
        return result
      }
  } catch (error) {
    console.error("Failed to parse JSON:", error)
  }
  return null
}

// Example usage:
const correctJson = '{"name":"John", "age":30}';
console.log(safelyParseJson(correctJson));  // Output: { name: 'John', age: 30 }

const incorrectJson = "this is not a json";
console.log(safelyParseJson(incorrectJson));  // Output: null


// Создайте перечисление TypeScript для представления различных типов транспортных средств, таких как легковые автомобили, грузовики и мотоциклы. Затем напишите функцию с именем getVehicleType, которая принимает член перечисления в качестве аргумента и возвращает строку, описывающую тип транспортного средства.

enum VehicleType {
  Car = "Audi",
  Truck = "Truck",
  Motorcycle = "Kawa"
}

function getVehicleType (vehicle: VehicleType): string {
  return `The vehicle type is: ${vehicle}.`
}

// Example usage:
console.log(getVehicleType(VehicleType.Car));        // Output: "The vehicle type is: Car."
console.log(getVehicleType(VehicleType.Motorcycle)); // Output: "The vehicle type is: Motorcycle."


// Напишите функцию TypeScript с именем formatInput, которая принимает параметр типа объединения (строка | число). Функция должна возвращать форматированную строку. Если входные данные являются числом, его следует отформатировать как число с фиксированной десятичной точкой; если это строка, она должна возвращаться в верхнем регистре.

function formatInput(input: string | number): string {
  if(typeof input === "number") {
    return input.toFixed(2 )
  } else{
    return input.toUpperCase()
  }
}

// Example usage:
console.log(formatInput("hello")); // Output: "HELLO"
console.log(formatInput(123.456)); // Output: "123.46"


// Определите функцию configureServer, которая принимает параметр Environment, который может быть только одной из следующих литеральных строк: 'development', 'staging', 'production'. Функция должна печатать сообщение в соответствии с окружением.

function configureServer(environment: 'development' | 'staging' | 'production'): void {
  console.log(`Configuring server for the ${environment} environment.`)
}

configureServer('production');  // Output: "Configuring server for the production environment."


// Напишите функцию TypeScript getUserId, которая принимает имя пользователя (строку) и возвращает идентификатор пользователя в виде числа. Явно аннотируйте тип возвращаемого значения функции.

function getUserId(username: string): number {
  return username.length;
}

// Example usage:
console.log(getUserId("alice"));  // Output: 5

// Создайте функцию logMessage, которая принимает строковое сообщение и записывает его на консоль. Убедитесь, что функция явно имеет тип возврата void, что указывает на то, что она ничего не возвращает.

function logMessage(message: string): void {
  console.log(message)
}

// Example usage:
logMessage("Hello, TypeScript!");  // Output: "Hello, TypeScript!"


// Напишите функцию errorHandler, которая принимает строку сообщения и выдает ошибку вместе с этим сообщением. Используйте тип Never, чтобы указать, что эта функция не завершает свое выполнение успешно.

// function errorHandler(message: string): never {
// throw new Error(message)
// }

// Example usage:
// errorHandler("Critical error occurred!");  // Throws an Error with the provided message


// Создайте интерфейс TypeScript с именем Product, который представляет подробную информацию о продукте. Интерфейс должен иметь следующие свойства: id (число), name (строка) и Price (число). Кроме того, включите необязательное описание свойства (строку). Напишите функцию displayProduct, которая принимает объект Product и печатает информацию о продукте. Продемонстрируйте эту функцию на объекте продукта, который не включает необязательное описание.

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string
}

function displayProduct(product: Product): void {
  console.log(`Product ID: ${product.id}`);
  console.log(`Name: ${product.name}`);
  console.log(`Price: ${product.price}`);
  if(product.description){
    console.log(`Description: ${product.description}`)
  } else{
    console.log("No description navailable.");
  }
}

const apple = { id: 1, name: "Apple", price: 0.75 };
displayProduct(apple);


// Определите интерфейс TypeScript под названием Calculator, который включает метод add, который принимает два параметра (оба числа) и возвращает число. Реализуйте класс SimpleCalculator, реализующий этот интерфейс.

interface Calculator {
  add(x: number, z: number): number
}

class SimpleCalculator implements Calculator {
  add(x: number, z: number): number {
    return x + z;
  }
}

// Example usage:
const myCalculator = new SimpleCalculator();
console.log(myCalculator.add(5, 3));  // Output: 8

////////////////////////////////////////////////////////////////////////////////////////////////

// урок 2 <generik>


// Task 1 Index properties

interface Dictionary {
  [key: string]: number;
}

let fruits: Dictionary = {
  apples: 10,
  bananas: 5,
  oranges: 8,
};

let electronics: Dictionary = {
  phones: 25,
  laptops: 10,
  tablets: 7,
};

let books: Dictionary = {
  fiction: 15,
  history: 20,
  fantasy: 9,
};

console.log(fruits, electronics, books)

// Task #2 Simple generic

function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

// Example usage:
const numberArray = [10, 20, 30];
const stringArray = ["hello", "world", "typescript"];
const objectArray = [{ name: "Alice" }, { name: "Bob" }];

console.log(getFirstElement(numberArray)); // Output: 10
console.log(getFirstElement(stringArray)); // Output: "hello"
console.log(getFirstElement(objectArray)); // Output: { name: "Alice"


function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Example usage:
const person = {
    name: "John",
    age: 30,
    occupation: "Engineer"
};

const name = getProperty(person, "name"); // Output: "John"
const age = getProperty(person, "age"); // Output: 30
// const errorExample = getProperty(person, "salary"); // This line would cause a compile-time error

console.log(name); // "John"
console.log(age);  // 30


// Task 3 Partial in generic

interface InfoProfile {
  username: string;
  email: string;
  age: number;
}

// Example usage:
const originalProfile: InfoProfile = {
  username: "johndoe",
  email: "john.doe@example.com",
  age: 28,
};

function updateProfile(profile: InfoProfile, updates: Partial<InfoProfile>) {
  return { ...profile, ...updates };
}

const updatedProfile = updateProfile(originalProfile, { email: "new.john.doe@example.com", age: 33 });
console.log(updatedProfile);


// Task 4 Readonly
// Readonly не дает перезаписівать данніе
interface User1 {
  id: number;
  name: string;
}



const user: Readonly<User1> = {
  id: 101,
  name: "John",
};

  // user.id = 102; // Error: Cannot assign to 'id' because it is a read-only property.
  // user.name = "Alice"; // Error: Cannot assign to 'name' because it is a read-only property.

function displayUser(user: Readonly<User1>): void {
  console.log(`User ID: ${user.id}, Name: ${user.name}`);
}
console.log(displayUser(user))

// Task 5 Pick<T, K>

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  hireDate: Date;
}

const fullEmployeeInfo: Employee = {
  id: 101,
  name: "John Doe",
  email: "john.doe@example.com",
  department: "Engineering",
  hireDate: new Date("2020-01-10"),
};

function displayEmployeeInfo(fullEmployeeInfo: Employee): Pick<Employee, "name" | "email" > {
  return {
    name: fullEmployeeInfo.name,
    email: fullEmployeeInfo.email,
  };
}
console.log(displayEmployeeInfo(fullEmployeeInfo));


interface ApiResponse {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
}

const post: ApiResponse = {
  id: 101,
  title: "John Doe",
  content: "Engineering",
  createdAt: new Date("2020-01-10"),
};

function displayPost(post: ApiResponse): Pick<ApiResponse, "title" | "content"> {
  return {
    title: post.title,
    content: post.content,
  };
}
console.log(displayPost(post))


// Task 6 Omit<T,K>

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    password: string; // Sensitive information
}

const fullUserInfo: User = {
    id: 1,
    name: "JohniK",
    email: "john.doe@example.com",
    age: 30,
    password: "s3cr3t" // This should not be included in contact info
};

function createContactInfo(user: Omit<User, 'password'>): Omit<User, 'password'> {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        age: user.age
    };
}
console.log(createContactInfo(fullUserInfo))


// Task 7 Record<K, T>

function recordTemperatures(temps: number[]): Record<string, number> {
    let temperatureRecord: Record<string, number> = {};

    temps.forEach((temp, index) => {
        temperatureRecord[`day${index + 1}`] = temp;
    });

    return temperatureRecord;
}

// Example usage:
const weeklyTemps = [22, 24, 23, 25, 24, 26, 27];
const tempRecord = recordTemperatures(weeklyTemps);
console.log(tempRecord);
// Output: { day1: 22, day2: 24, day3: 23, day4: 25, day5: 24, day6: 26, day7: 27 }