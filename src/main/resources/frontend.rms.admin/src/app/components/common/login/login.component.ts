import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';
import {SecurityObjectModel} from '../../../models/security-object.model';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private toastrService: ToastrService,
              private router: Router) {
    this.form = formBuilder.group({
      username: [],
      password: []
    });
  }

  ngOnInit() {
  }

  async login() {
   this.authenticationService.login(this.form.getRawValue())
     .then(data => {
        if ((data.body as SecurityObjectModel).authorities?.includes('USER')) {
          return Promise.reject(
            {
                  error: {
                    message: 'Клиенти не могат да достъпват администраторската система'
                  }});
        }
        this.authenticationService.setSecurityObject(data.body as SecurityObjectModel);
        this.toastrService.success('Успешен вход!');
        this.router.navigateByUrl('/restaurants');
   })
     .catch(err => {
       if (err.error?.message) {
         this.toastrService.error(err.error?.message);
       } else {
         this.toastrService.error(err);
       }
     });
  }
}
