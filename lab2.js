//aray []
const student1 = "Tran Danh Dat";
const student2 = "Tran Duc Dai";
const student3 = "Chu Hoai Nam";

const students = ["Tran Danh Dat", "Tran Duc Dai", "Chu Hoai Nam"];

const ids = [1, 4 ,54 ,66];
const actives = [true,  false, 42 ,"dattd22"];
//danh sach index: 0, 1, 2, 3
console.log("ban dau", students);
students[0] = "dattd";
//student = ["dattd"] -> error
//console.log("sau khi thay doi")

//bai tap thuc hanh 
//bai 1
const names = ["An", "Bình", "Nam", "Hòa", "Lan"];

//in ra mang array
console.log("Array:", names);

//in ra array dau tien
console.log("Dau tien:", names[0]);

//in ra array cuoi cung
console.log("Cuoi cung: ", names[names.length - 1]);

//in ra so luong phan tu
console.log("So luong phan tu: ", names.length);

//them mot phan tu vao mang
names.push("Dat");
console.log("Mang sau khi them moi: ", names);

//xoa phan tu cuoi cung cua mang
names.pop();
console.log("Mang sau khi xoa: ", names);

//bai 2
const namess = ["An", "Bình", "Nam", "Hòa", "Lan"];
for (let i = 0; i < namess.length; i++) {
  console.log(namess[i]);
}

//object
const studentt = {
  id: 1,
  name: "Nguyễn Văn Ann",
  age: 20,
  email: "an@gmail.com",
  major: "CNTT",
};
console.log(studentt.id);
studentt.id = "ph6868";
studentt.address = "Ha Nam";


//bai 3

const student = {
  id: 1,
  name: "Nguyễn Văn An",
  age: 20,
  email: "an@gmail.com",
  major: "CNTT",
};
//in object 
console.log("thong tin object:", student);

//in ten sinh vien
console.log("ten sinh vien:", student.name);

//in tuoi
console.log("tuoi sinh vien:", student.age);

//in email
console.log("email sinh vien: ", student.email);

//thay doi tuoi
student.age = 23;
console.log("tuoi sau khi thay doi:", student.age);

//them thuoc tinh phone 
student.phone = "0917207459";
console.log("object sau khi them phone:", student.phone);

//bai 4
const studentsss = [
  {
    id: 1,
    name: "Nguyễn Văn Annn",
    age: 20,
  },
  {
    id: 2,
    name: "Trần Văn Bình",
    age: 21,
  },
  {
    id: 3,
    name: "Lê Văn Nam",
    age: 20,
  },
];

//in ra danh sach
console.log("Danh sach sinh vien: ",studentsss);