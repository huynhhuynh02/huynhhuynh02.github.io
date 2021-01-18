
$(document).ready(function () {
    // $('#list-example .nav-link').click(function(){
    //     $('#list-example .nav-link').each(function(){
    //         $(this).removeClass('active');
    //     });
    //     $(this).addClass('active');
    // });
    $('form').submit(function(e){
        e.preventDefault();
        $('#submit-btn').html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...');
        $.validator.addMethod("regex", function(value, element) {
            // allow any non-whitespace characters as the host part
            return this.optional( element ) || /((09|03|07|08|05)+([0-9]{8})\b)/g.test( value );
          }, 'Số điện thoại không đúng định dạng');
        $('form').validate({
            onfocusout: false,
            rules:{
                name: {
                    required: true,
                    minlength: 10
                },
                phone: {
                    required: true,
                    regex: true
                },
                address:{
                    required: true
                },
                class: {
                    required: true
                },
                scoreAvg: {
                    required: true
                },
                school: {
                    required: true
                },
                order: {
                    required: true
                }
    
            },
            messages :{
                name: {
                    required: 'Vui lòng nhập họ và tên',
                    minlength: 'Họ tên tối thiểu 12 ký tự'
                },
                phone: {
                    required: 'Vui lòng nhập số điện thoại',
                },
                address: {
                    required: 'Vui lòng nhập địa chỉ',
                },
                school: {
                    required: 'Vui lòng nhập trường',
                },
                class: {
                    required: 'Vui lòng nhập lớp',
                },
                scoreAvg: {
                    required: 'Vui lòng nhập điểm trung bình',
                },
                order: {
                    required: 'Vui lòng nhập xếp loại',
                },
            },
        });
        
        if($('form').valid()){
            var data = {};
            var form = $(this).serializeArray();
            console.log(form);
            form.map(function(obj){
                data[obj.name] = obj.value;
            });
            var key = firebase.database().ref().child('contact').push(data, function(error){
                if(error){
                    console.log(error);
                    return;
                }
                $('#submit-btn').html('ĐĂNG KÝ NGAY');
                window.location = 'thankyou.html';
            }).key;
            console.log('create new contact: ' + key);
        }else{
            $('#submit-btn').html('ĐĂNG KÝ NGAY');
        }
    });
});