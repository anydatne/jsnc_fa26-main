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