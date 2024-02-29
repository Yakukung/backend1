import { Component } from '@angular/core';
import { users } from '../../api/user';
import axios from 'axios';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss'
})


export class TestsComponent {

  show:users[] = [];


  async getAllTrips() {
    const HOST: string = "http://localhost:3000";
    const url = HOST + "/trip";
    const response = await axios.post(url);
    const trips: users[] = response.data;
    return trips;
  }
  async getTripsById(id: HTMLInputElement) {
    const uid = id.value;
    const HOST: string = "http://localhost:3000";
    const url = HOST + `/trip/`+uid;
    const response = await axios.post(url);
    const trips:users[] = response.data;
    this.show = trips;
    return trips;
  }
  async user(name: HTMLInputElement) {
    const uid = name.value;
    const HOST: string = "http://localhost:3000";
    const url = HOST + `/trip/`+uid;
    const response = await axios.post(url);
    const trips: users[] = response.data;
    return trips;
  }



  // async getSignIn(email: HTMLInputElement, password: HTMLInputElement) {
  //   const user_email = email.value;
  //   const user_password = password.value;
  //   const HOST: string = "http://localhost:3000";
  //   const url = HOST + `/trip/signin`+user_email+user_password ;
  //   const data = {
  //     email: user_email,
  //     password: user_password
  // };
  //     const response = await axios.post(url, data);
  //     const user_singin_success: users[] = response.data;
  //     this.show = user_singin_success;
  //     console.log(this.show);
  //     return user_singin_success;
      
  //   }
  async getSignIn(email: string, password: string) {
    const HOST: string = "http://localhost:3000";
    const url = `${HOST}/trip/signin`;
    
    const data = {
        email: email,
        password: password
    };

    try {
        const response = await axios.post(url, data);
        const user_signin_success: users[] = response.data;
        this.show = user_signin_success;
        console.log(this.show);
        return user_signin_success;
    } catch (error) {
        console.error("Error during sign-in:", error);
        throw error; // Handle error appropriately
    }
}

}
