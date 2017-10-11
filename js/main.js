var db = [
    {name:'James Butters',email:'James@gmail.com',age:15},
    {name:'Mark Robinson',email:'Mark@gmail.com',age:23},
    {name:'Lara Barbosa',email:'Lara@gmail.com',age:23}
];

(function Avatars(db) {
    this.init = function () {
        this.generateList();
        this.enterUser();
    };

    this.generateList = function () {
        var parent = document.querySelector('#parent_avatars');
        var template = '';

        for (var i = 0; i < db.length; i++) {
            template += '<div class="col-sm-4">';
            template += '<div class="card">';
            template += '<div class="card-delete" data-card="' + i + '">x</div>';
            template += '<div class="card-block">';
            template += '<h3 class="card-title">' + db[i].name + '</h3>';
            template += '<p class="card-text"><strong>Email:</strong> ' + db[i].email + '</p>';
            template += '<p class="card-text"><strong>Age:</strong> ' + db[i].age + '</p>';
            template += '</div>';
            template += '</div>';
            template += '</div>';
        }
        parent.innerHTML = '';
        parent.insertAdjacentHTML('afterbegin', template);
        deleteCard();
        // ("beforebegin", "afterbegin", "beforeend", "afterend")
    };

        this.enterUser = function () {
            
            function grabUser(form) {
               var name = document.querySelector('#user_name').value;
               var email = document.querySelector('#user_email').value;
               var age = document.querySelector('#user_age').value;

               var elements=[name,email,age];

               if (validateUser(elements)){

                   document.querySelector('#myForm'.reset());
                   db.push({name:name,email:email, age:age});
                   generateList();

               }else {
                   document.querySelector("#error").style.display='block'

                   setTimeout(function () {
                       document.querySelector("#error").style.display='none'

                   },2000)


               }

               this.validateUser= function (inputs) {

                   for(var i=0; i<inputs.length; i++ ){
                       if (inputs[i]==""){
                           return false
                       }
                   }

                   return true;

               };

               this.deleteCard = function () {

                   var button = document.querySelector('.card-delete');
                   function deleteit(element) {

                       var obj = element.getAttribute('data-card');
                       db.splice(obj,1);
                       generateList();
                   }

                   for (var i=0 ; i<button.length; i++){
                       
                       button[i].addEventListener('click',function (e) {
                           
                           deleteit(this)
                           
                       })

                   }

               }




            }
            
        } 
        document.querySelector('#myForm').addEventListener("submit",function (e) {
            e.preventDefault(); // here we stop the default behavior of submit buttom.
            grabUser; //Here we create the new function or action will happen after we click submit



        })

    this.init();
})(db);

