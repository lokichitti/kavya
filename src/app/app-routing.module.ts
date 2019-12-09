import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

//keytool -exportcert -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore
const redirectToLogin = redirectUnauthorizedTo(['login']);
const routes: Routes = [
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  //{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  //{ path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' ,
  ...canActivate(redirectToLogin)  },
  //{ path: 'sign-in', loadChildren: './sign-in/sign-in.module#SignInPageModule' },
  { path: 'phone-login', loadChildren: './phone-login/phone-login.module#PhoneLoginPageModule' },
  { path: 'phone-register', loadChildren: './phone-register/phone-register.module#PhoneRegisterPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'reset-password', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule',
  ...canActivate(redirectToLogin) },
  { path: 'sign-in', loadChildren: './pages/sign-in/sign-in.module#SignInPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'first', loadChildren: './pages/first/first.module#FirstPageModule' },
  { path: 'google-login', loadChildren: './pages/google-login/google-login.module#GoogleLoginPageModule' },
  { path: 'email', loadChildren: './pages/loginMethod/email/email.module#EmailPageModule' },
  { path: 'google', loadChildren: './pages/loginMethod/google/google.module#GooglePageModule' },
  { path: 'facebook', loadChildren: './pages/loginMethod/facebook/facebook.module#FacebookPageModule' },
  { path: 'phone', loadChildren: './pages/loginMethod/phone/phone.module#PhonePageModule' },
  { path: 'r-phone', loadChildren: './pages/registerMethod/r-phone/r-phone.module#RPhonePageModule' },
  { path: 'r-email', loadChildren: './pages/registerMethod/r-email/r-email.module#REmailPageModule' },
  { path: 'r-google', loadChildren: './pages/registerMethod/r-google/r-google.module#RGooglePageModule' },
  { path: 'r-facebook', loadChildren: './pages/registerMethod/r-facebook/r-facebook.module#RFacebookPageModule' },
  { path: 'shop', loadChildren: './pages/shop/shop.module#ShopPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
