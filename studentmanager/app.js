var masv = document.getElementById('maSv');
var fullname = document.getElementById('fullName');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var diemToan = document.getElementById('diemToan');
var diemLy = document.getElementById('diemLy');
var diemHoa = document.getElementById('diemHoa');
var error_id = document.getElementById('error-id');
var error_name = document.getElementById('error-name');
var error_phone = document.getElementById('error-phone');
var error_email = document.getElementById('error-email');
var error_maths = document.getElementById('error-maths');
var error_physical = document.getElementById('error-physical');
var error_chemical = document.getElementById('error-chemical');
var btnAdd = document.getElementById('btnAdd');
var data = document.getElementById('listData');
var students = [];

//use global element
function isValidForm(){
    var flag = true;
    if(masv.value==''){
        error_id.innerHTML='Vui lòng nhập mã sinh viên';
        flag=false;
    }else{
        error_id.innerHTML= '';
    }
    if(fullname.value==''){
        error_name.innerHTML='Vui lòng nhập họ tên sinh viên';
        flag=false;
    }else{
        error_name.innerHTML= '';
    }
    if(email.value==''){
        error_email.innerHTML='Vui lòng nhập email';
        flag=false;
    }else{
        error_email.innerHTML= '';
    }
    if(phone.value==''){
        error_phone.innerHTML='Vui lòng nhập số điện thoại';
        flag=false;
    }else{
        error_phone.innerHTML= '';
       
    }
    if(diemToan.value==''){
        error_maths.innerHTML='Vui lòng nhập điểm toán';
        flag=false;
    }else{
        error_maths.innerHTML= '';
    }
    if(diemLy.value==''){
        error_physical.innerHTML='Vui lòng nhập điểm lý';
        flag=false;
    }else{
        error_physical.innerHTML= '';
    }
    if(diemHoa.value==''){
        error_chemical.innerHTML='Vui lòng nhập điểm hóa';
        flag=false;
    }else{
        error_chemical.innerHTML= '';
    }
    return flag;
}
function displayData(){
    var html ="";
    if(students.length==0){
        data.innerHTML= '<tr><td colspan="7" style="text-align:center">Danh sách sinh viên trống</td></tr>';
    }else{
        students.forEach((element,index)=>{
            html+='<tr><td>'+element.id+'</td><td>'+element.name+'</td><td>'+element.diemtoan+'</td>';
            html+='<td>'+element.diemly+'</td><td>'+element.diemhoa+'</td><td>'+element.diemTb()+'</td>';
            html+='<td><button onclick="deleteStudent('+index+')" class="btn btn-danger mr-1"><i class="fas fa-trash-alt"></i></button><button onclick="getStudent('+index+')" class="btn btn-success"><i class="fas fa-edit"></i></button></td><tr>';
        });
        data.innerHTML = html;
    }
}

function deleteStudent(index){
    var del = confirm('Bạn có chắc chắn muốn xóa sinh viên này ?');
    if(del){
        students.splice(index,1);
        displayData();
    }
}
function getStudent(index){
    clearInvalid();
    masv.setAttribute('readonly',true);
    btnAdd.setAttribute('disabled',true);
    masv.value = students[index].id;
    fullname.value = students[index].name;
    email.value = students[index].email;
    phone.value = students[index].phone;
    diemToan.value = students[index].diemtoan;
    diemLy.value = students[index].diemly;
    diemHoa.value = students[index].diemhoa;
    document.getElementById('updateButton').innerHTML = "<button onclick='updateStudent("+index+")' class='btn btn-success'><i class='fas fa-edit'></i> Cập nhật</button>";
}
function clearInvalid(){
    error_id.innerHTML= '';
    error_name.innerHTML= '';
    error_phone.innerHTML= '';
    error_email.innerHTML= '';
    error_chemical.innerHTML= '';
    error_physical.innerHTML= '';
    error_maths.innerHTML= '';
}
function updateStudent(index){
    students[index].name = fullname.value;
    students[index].phone = phone.value;
    students[index].email = email.value;
    students[index].diemtoan = diemToan.value;
    students[index].diemly = diemLy.value;
    students[index].diemhoa = diemHoa.value;
    document.getElementById('updateButton').innerHTML = '';
    masv.removeAttribute('readonly');
    btnAdd.removeAttribute('disabled');
    displayData();
    resetForm();
}
btnAdd.addEventListener('click',function(e){
    e.preventDefault();
    isValidForm();
    if(isValidForm()){
        var student = {
            id: masv.value,
            name: fullname.value,
            email: email.value,
            phone: phone.value,
            diemtoan: diemToan.value,
            diemly: diemLy.value,
            diemhoa: diemHoa.value,
            diemTb: function(){
                return Math.floor((Number(this.diemtoan)+Number(this.diemly)+Number(this.diemhoa))/3);
            }
        }
        if(findOne(masv.value)>0){
            error_id.innerHTML = 'Mã sinh viên đã tồn tại';
        }else{
            students.push(student);
            displayData();
            resetForm();
        }
        
    }
});
function findOne(masv){
    var count = 0;
    students.forEach((element)=>{
        if(element.id == masv){
            count++;
        }
    });
    return count;
}
function resetForm(){
    masv.value ='';
    fullname.value= '';
    email.value ='';
    phone.value ='';
    diemToan.value = '';
    diemLy.value = '';
    diemHoa.value = '';
}
displayData();