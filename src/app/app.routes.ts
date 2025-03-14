import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatLobbyComponent } from './components/chat-lobby/chat-lobby.component';
import { TopRankedRoomsComponent } from './components/top-ranked-rooms/top-ranked-rooms.component';
import { AddFriendsComponent } from './components/add-friends/add-friends.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'chat-lobby', component: ChatLobbyComponent },
  { path: 'chat/:roomId', component: ChatComponent },
  { path: 'profile/:userId', component: ProfileComponent },
  { path: 'top-rooms', component: TopRankedRoomsComponent },
  { path: 'add-friends', component: AddFriendsComponent },
];
